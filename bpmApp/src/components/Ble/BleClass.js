/**
 * Sample BLE React Native App
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeModules,
  NativeEventEmitter,
  Button,
  Platform,
  PermissionsAndroid,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import BleManager, { checkState } from 'react-native-ble-manager';
import { set } from 'immer/dist/internal';

class Ble {
  peripherals = new Map();
  list = [];
  _connected = [];
  flag =0;
  
  constructor() {
    this.BleManagerModule = NativeModules.BleManager;
    this.bleManagerEmitter = new NativeEventEmitter(this.BleManagerModule);
  }


  setProps(props) {
    this.props = props;
  }

  getPeripheral() {
    return this.list;
  }

  reconecta(data) {
    this.flag = 1;
    console.log("aqui:"+data);
    BleManager.scan([], 60, true).then(() => {
      // Success code
      console.log("Scan started");
    });
  }

  handleConnectPeripheral(data) {
    console.log("Conectou sozinho");
    var peripheral = this.peripherals.get(data.peripheral);
    //this.testPeripheral(peripheral);


  }


  handleDisconnectedPeripheral(data) {
    var peripheral = this.peripherals.get(data.peripheral);

    if (peripheral) {
      peripheral.connected = false;
      this.peripherals.set(peripheral.id, peripheral);
      // //setList(Array.from(peripherals.values()));
      this.list = Array.from(this.peripherals.values());
    }
    console.log('Disconnected from ' + data.peripheral);
    BleManager.removePeripheral(data.peripheral);
    //this.id_connected = data.peripheral;
    BleManager.checkState();
    
  }

  handleUpdateValueForCharacteristic(data) {
    const { setActualSteps, setActualHeartBeat } = this.props;

    //console.log('carac', data.characteristic);
    if (data.characteristic == '00002a37-0000-1000-8000-00805f9b34fb') {
      //setbatimentos(data.value[1]);
      setActualHeartBeat(data.value[1]);
      console.log('batimentos ' + data.value[1]);
    }
    if (data.characteristic == '00000007-0000-3512-2118-0009af100700') {
      //console.log(data.value);
      const value = data.value[2] * 256 + data.value[1];
      setActualSteps(value);
      //setsteps();
      console.log('passos ' + value);
    }
  }

  async RetrieveConnected() {
    return BleManager.getConnectedPeripherals([]).then(results => {
      if (results.length == 0) {
        console.log('No connected peripherals');
      }
      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i];

        this.peripherals.set(peripheral.id, peripheral);
        //setList(Array.from(this.peripherals.values()));
        this.list = Array.from(this.peripherals.values());

        return this.list;
      }
    });
    return null;
  }

  handleDiscoverPeripheral = peripheral => {
    console.log('Got ble peripheral',this._connected,  peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    this.peripherals.set(peripheral.id, peripheral);
    //setList(Array.from(this.peripherals.values()));
    this.list = Array.from(this.peripherals.values());
    if(peripheral.id == this._connected.id){
      this.flag = 0;
      BleManager.stopScan().then(() => {
        // Success code
        console.log("Scan stopped");
      });
      this.testPeripheral(this._connected);
    }
  };
  
  handleStopScan = () => {
    console.log('Scan is stopped');
    setIsScanning(false);
    BleManager.isPeripheralConnected(
      this._connected.id,
      []
    ).then((isConnected) => {
      if (isConnected) {
        console.log("Peripheral is connected!");
      } else {
        console.log("Peripheral is NOT connected!");
        this.reconecta(this._connected);
      }
    });
  }

  
  /// passos uuid = fee0 e char = 7 -> 00000007-0000-3512-2118-0009af100700
  testPeripheral(peripheral) {
    console.log('chegou', peripheral);
    this._connected = peripheral;
    if (peripheral) {
      if (peripheral.connected) {
        BleManager.disconnect(peripheral.id);
      } else {
        BleManager.connect(peripheral.id)
          .then(() => {
            let p = this.peripherals.get(peripheral.id);
            if (p) {
              // p.connected = true;
              this.peripherals.set(peripheral.id, p);
              //setList(Array.from(peripherals.values()));
              this.list = Array.from(this.peripherals.values());
            }
            console.log('Connected to ' + peripheral.id);

            BleManager.requestConnectionPriority(peripheral.id, 1)
              .then((status) => {
                // Success code
                console.log("Requested connection priority");
              })
              .catch((error) => {
                // Failure code
                console.log("erou");
              });
            /* Test read current RSSI value */
            BleManager.retrieveServices(peripheral.id).then(peripheralData => {
              //console.log('Retrieved peripheral services', peripheralData);

              BleManager.startNotification(peripheral.id, '180d', '2a37')
                .then(readData => {
                  // Success code
                  console.log('Read: ' + readData);

                  BleManager.startNotification(
                    peripheral.id,
                    'fee0',
                    '00000007-0000-3512-2118-0009af100700',
                  )
                    .then(() => {
                      // Success code
                      console.log('Notification started');
                    })
                    .catch(error => {
                      // Failure code
                      console.log(error);
                    });
                })
                .catch(error => {
                  // Failure code
                  console.log(error);
                });
            });
          })
          .catch(error => {
            console.log('Connection error', error);
          });
      }
    }
  }

  init() {
    BleManager.start({ forceLegacy: true });
    console.log(this.props);
    //
    this.bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', data =>
      this.handleDiscoverPeripheral(data),
    ); // verificar a existencia de novo dispositivo
    this.bleManagerEmitter.addListener('BleManagerConnectPeripheral', data =>
      this.handleConnectPeripheral(data),
    );
    this.bleManagerEmitter.addListener('BleManagerStopScan',  data =>
    this.handleStopScan );
    this.bleManagerEmitter.addListener("BleManagerDidUpdateState", (args) => {

      console.log(args);
      if (args.state == "off") {
        console.log("Desligado saporra");
      }
      if (args.state == "on" && this.flag == 0) {
        console.log("incia");
        this.reconecta(this._connected);
      }
    });

    this.bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', data =>
      this.handleDisconnectedPeripheral(data),
    );
    this.bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      data => this.handleUpdateValueForCharacteristic(data),
    ); // Coletor

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then(result => {
        if (result) {
          console.log('Permission is OK');
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          ).then(result => {
            if (result) {
              console.log('User accept');
            } else {
              console.log('User refuse');
            }
          });
        }
      });

      this.RetrieveConnected();
    }
  }

  clean() {
    console.log('unmount');

    this.bleManagerEmitter.remove(
      'BleManagerDisconnectPeripheral',
      this.handleDisconnectedPeripheral,
    );
    this.bleManagerEmitter.remove(
      'BleManagerDidUpdateValueForCharacteristic',
      this.handleUpdateValueForCharacteristic,
    );
    this.bleManagerEmitter.remove(
      'BleManagerDidUpdateState'
    );
    this.bleManagerEmitter.remove('BleManagerConnectPeripheral', data =>
      this.handleConnectPeripheral(data),
    );
    this.bleManagerEmitter.remove('BleManagerStopScan',  data =>
    this.handleStopScan );
  }
}

const BleClass = new Ble();

export default BleClass;
