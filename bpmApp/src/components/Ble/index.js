/**
 * Sample BLE React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
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

import {Colors} from 'react-native/Libraries/NewAppScreen';

import BleManager from 'react-native-ble-manager';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const Perifericos = props => {
  const [steps, _setsteps] = useState(0);
  const [batimentos, _setbatimentos] = useState(0);

  const stepsRef = React.useRef(steps);
  //const batimentosRef = React.useRef(batimentos);

  const setsteps = data => {
    stepsRef.current = data;
    _setsteps(data);
  };
  const setbatimentos = data => {
    //batimentosRef.current = data;
    _setbatimentos(data);
  };

  const peripherals = new Map();
  const [list, setList] = useState([]);

  const handleStopScan = () => {
    console.log('Scan is stopped');
    setIsScanning(false);
  };

  const handleDisconnectedPeripheral = data => {
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      setList(Array.from(peripherals.values()));
    }
    console.log('Disconnected from ' + data.peripheral);
  };

  const handleUpdateValueForCharacteristic = data => {
    const {setActualSteps, setActualHeartBeat} = props;
    /*console.log(
      'Received data from ' +
        data.peripheral +
        ' characteristic ' +
        data.characteristic,
      data.value,
    );*/
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
  };

  const RetrieveConnected = () => {
    BleManager.getConnectedPeripherals([]).then(results => {
      if (results.length == 0) {
        console.log('No connected peripherals');
      }
      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i];

        peripherals.set(peripheral.id, peripheral);
        setList(Array.from(peripherals.values()));
      }
    });
    return null;
  };

  const handleDiscoverPeripheral = peripheral => {
    console.log('Got ble peripheral', peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    peripherals.set(peripheral.id, peripheral);
    setList(Array.from(peripherals.values()));
  };
  /// passos uuid = fee0 e char = 7 -> 00000007-0000-3512-2118-0009af100700
  const testPeripheral = peripheral => {
    if (peripheral) {
      if (peripheral.connected) {
        BleManager.disconnect(peripheral.id);
      } else {
        BleManager.connect(peripheral.id)
          .then(() => {
            let p = peripherals.get(peripheral.id);
            if (p) {
              // p.connected = true;
              peripherals.set(peripheral.id, p);
              setList(Array.from(peripherals.values()));
            }
            console.log('Connected to ' + peripheral.id);

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

            // Test using bleno's pizza example
            // https://github.com/sandeepmistry/bleno/tree/master/examples/pizza
            /*
              BleManager.retrieveServices(peripheral.id).then((peripheralInfo) => {
                console.log(peripheralInfo);
                var service = '13333333-3333-3333-3333-333333333337';
                var bakeCharacteristic = '13333333-3333-3333-3333-333333330003';
                var crustCharacteristic = '13333333-3333-3333-3333-333333330001';
  
                setTimeout(() => {
                  BleManager.startNotification(peripheral.id, service, bakeCharacteristic).then(() => {
                    console.log('Started notification on ' + peripheral.id);
                    setTimeout(() => {
                      BleManager.write(peripheral.id, service, crustCharacteristic, [0]).then(() => {
                        console.log('Writed NORMAL crust');
                        BleManager.write(peripheral.id, service, bakeCharacteristic, [1,95]).then(() => {
                          console.log('Writed 351 temperature, the pizza should be BAKED');
                          
                          //var PizzaBakeResult = {
                          //  HALF_BAKED: 0,
                          //  BAKED:      1,
                          //  CRISPY:     2,
                          //  BURNT:      3,
                          //  ON_FIRE:    4
                          //};
                        });
                      });
  
                    }, 500);
                  }).catch((error) => {
                    console.log('Notification error', error);
                  });
                }, 200);
              });*/

            /* Test read current RSSI value */

            // Test using bleno's pizza example
            // https://github.com/sandeepmistry/bleno/tree/master/examples/pizza
            /*
              BleManager.retrieveServices(peripheral.id).then((peripheralInfo) => {
                console.log(peripheralInfo);
                var service = '13333333-3333-3333-3333-333333333337';
                var bakeCharacteristic = '13333333-3333-3333-3333-333333330003';
                var crustCharacteristic = '13333333-3333-3333-3333-333333330001';
  
                setTimeout(() => {
                  BleManager.startNotification(peripheral.id, service, bakeCharacteristic).then(() => {
                    console.log('Started notification on ' + peripheral.id);
                    setTimeout(() => {
                      BleManager.write(peripheral.id, service, crustCharacteristic, [0]).then(() => {
                        console.log('Writed NORMAL crust');
                        BleManager.write(peripheral.id, service, bakeCharacteristic, [1,95]).then(() => {
                          console.log('Writed 351 temperature, the pizza should be BAKED');
                          
                          //var PizzaBakeResult = {
                          //  HALF_BAKED: 0,
                          //  BAKED:      1,
                          //  CRISPY:     2,
                          //  BURNT:      3,
                          //  ON_FIRE:    4
                          //};
                        });
                      });
  
                    }, 500);
                  }).catch((error) => {
                    console.log('Notification error', error);
                  });
                }, 200);
              });*/
          })
          .catch(error => {
            console.log('Connection error', error);
          });
      }
    }
  };

  useEffect(() => {
    BleManager.start({showAlert: false});

    bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      handleDiscoverPeripheral,
    ); // verificar a existencia de novo dispositivo

    bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan);

    bleManagerEmitter.addListener(
      'BleManagerDisconnectPeripheral',
      handleDisconnectedPeripheral,
    );
    bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      handleUpdateValueForCharacteristic,
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

      RetrieveConnected();
    }

    return () => {
      console.log('unmount');

      bleManagerEmitter.remove(
        'BleManagerDiscoverPeripheral',
        handleDiscoverPeripheral,
      );

      bleManagerEmitter.remove('BleManagerStopScan', handleStopScan);

      bleManagerEmitter.remove(
        'BleManagerDisconnectPeripheral',
        handleDisconnectedPeripheral,
      );
      bleManagerEmitter.remove(
        'BleManagerDidUpdateValueForCharacteristic',
        handleUpdateValueForCharacteristic,
      );
    };
  }, []);

  useEffect(() => {
    console.log(list);
    if (list.length > 0) {
      testPeripheral(list[0]);
    }
  }, [list]);

  const renderItem = item => {
    const color = item.connected ? 'green' : '#fff';
    return (
      <TouchableHighlight onPress={() => testPeripheral(item)}>
        <View style={[styles.row, {backgroundColor: color}]}>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              color: '#333333',
              padding: 10,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              color: '#333333',
              padding: 2,
            }}>
            RSSI: {item.rssi}
          </Text>
          <Text
            style={{
              fontSize: 8,
              textAlign: 'center',
              color: '#333333',
              padding: 2,
              paddingBottom: 20,
            }}>
            {item.id}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  return <View></View>;
  return (
    <>
      <RetrieveConnected />
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            {list.length == 0 && (
              <View style={{flex: 1, margin: 20}}>
                <Text style={{textAlign: 'center'}}>No peripherals</Text>
              </View>
            )}
          </View>
        </ScrollView>
        <FlatList
          data={list}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Perifericos;
