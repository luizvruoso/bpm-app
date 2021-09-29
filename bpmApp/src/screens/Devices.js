import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Image,
  NativeModules,
  NativeEventEmitter,
  Text,
  TouchableOpacity,
} from 'react-native';

import {variables} from '../assets/variables';
import styles from '../assets/globals';
import Perifericos from '../components/Ble';
import BleManager from 'react-native-ble-manager';
import Heartbeat from '../components/HeartBeat';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default function Devices(props) {
  //const {setActualSteps, setHeartBeat} = props;
  const [isConnected, setIsConnected] = useState(true);
  const [name, setName] = useState('');

  useEffect(() => {
    const RetrieveConnected = () => {
      BleManager.getConnectedPeripherals([]).then(results => {
        if (results.length == 0) {
          console.log('No connected peripherals');
        }
        for (var i = 0; i < results.length; i++) {
          var peripheral = results[i];

          //peripherals.set(peripheral.id, peripheral);
          setIsConnected(peripheral.advertising.isConnectable);
          setName(peripheral.advertising.localName);
          console.log(peripheral.advertising);
          //setList(Array.from(peripherals.values()));
        }
      });
      return null;
    };

    RetrieveConnected();
  }, []);

  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},

        styles.centerX,
      ]}>
      <Image
        style={{width: 300, height: 300}}
        source={require('../assets/img/miband.png')}
      />

      <View style={[styles.row, styles.centerXY, styles.h1]}>
        <Text style={[styles.h4]}>{name}</Text>
      </View>
      <View style={[styles.row, styles.centerXY]}>
        <Text style={[]}>
          {isConnected == true ? 'Conectado' : 'Não conectado'}
        </Text>
      </View>
      <View style={[styles.row, styles.centerXY, styles.mx30, styles.mt30]}>
        <TouchableOpacity
          style={[
            styles.row,

            //styles.bgWhite,
            styles.btnBorderRadius,
            styles.centerXY,
            {
              width: '100%',
              height: 60,
              marginBottom: 20,
              borderColor: '#FFF',
              backgroundColor: '#88b648',
            },
          ]}
          onPress={() => {
            console.log(Heartbeat.startService());
            //Heartbeat.startService()
          }}>
          <Text style={[{color: '#FFF'}]}>Iniciar Monitoramento Contínuo</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.centerXY, styles.mx30]}>
        <TouchableOpacity
          style={[
            styles.row,
            //styles.bgWhite,
            styles.btnBorderRadius,
            styles.centerXY,
            {
              width: '100%',
              height: 60,
              marginBottom: 20,
              borderColor: '#FFF',
              backgroundColor: '#88b648',
            },
          ]}
          onPress={() => {
            console.log(Heartbeat.stopService());
            //Heartbeat.startService()
          }}>
          <Text style={[{color: '#FFF'}]}>Finalizar Monitoramento</Text>
        </TouchableOpacity>
      </View>

      {/* <Perifericos {...props} />*/}
    </View>
  );
}
