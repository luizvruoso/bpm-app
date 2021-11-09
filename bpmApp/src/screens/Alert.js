import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../assets/globals';
import DashMenu from '../components/DashMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import {variables} from '../assets/variables';
import Header from '../components/Header';
import {convertDate} from '../assets/utils';
import Heartbeat from '../components/HeartBeat';
import SocketClient from '../Networking/client';
import CountDown from 'react-native-countdown-component';

export default function index(props) {

  const [trigger, setTrigger] = useState(false);
  const [running, setRunning] = useState(true);
  const [labeTime, setLabelTime] = useState('00:30');
  
  useEffect(
    ret => {
      setTrigger(false);
      setLabelTime('00:30');
    },
    [], //controlador
  );


  useEffect(
    ret => {
      console.log("TO SENDO CHAMADO1")
      if (trigger) {
        const {uuid} = props.user
        console.log("TO SENDO CHAMADO2")
        const socket = new SocketClient();
        console.log("UUID: ", uuid);
        socket.initSocket();
        socket.joinSession(uuid);
        socket.sendNotification(uuid);
      }
    },
    [trigger], //controlador
  );

  /*const CustomContent = () => {
    return props.children;
  };*/
  console.log("Trigger: ", trigger)
  return (
    <View style={[styles.flex1]}>
        <View
          style={[
            styles.centerXY,
            styles.flex1,
            styles.my30,
          ]}>
          <View>
            <View style={[styles.mt30, styles.mb30, styles.p20]}>
              <View style={[styles.row, styles.centerXY]}>
                <Text style={[styles.h1, {color: '#d3ad3b'}]}>
                  Disparando Alerta
                </Text>
              </View>
              <View style={[styles.row, styles.centerXY]}>
                <Text style={[{fontSize: variables.fontNormal}]}>
                  O alerta será disparado em:
                </Text>
              </View>
            </View>
            <View style={[styles.p20]}>
              {!trigger ? (
                <View>
                  <CountDown
                    id={'1'}
                    until={5}
                    timeToShow={['S']}
                    digitStyle={{backgroundColor: '#fff'}}
                    digitTxtStyle={{color: '#d3ad3b'}}
                    running={running}
                    timeLabels={{s: 'Segundos'}}
                    onFinish={() => {setTrigger(true); setRunning(false)}}
                    size={50}
                  />
                </View>
              ) : (
                <View style={[styles.row, styles.centerXY, styles.mt20]}>
                  <Text style={[{fontSize: 18, textAlign: 'center'}]}>
                    Alerta disparado. Seus contatos de emergência foram
                    notificados.
                  </Text>
                </View>
              )}
            </View>

            <View style={[styles.mt30, styles.mb30, styles.p20]}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.goBack(null);
                }}
                style={[
                  styles.fullWidth,
                  styles.centerXY,
                  styles.p20,
                  {backgroundColor: '#FD4755', borderRadius: 20},
                ]}>
                <View style={[styles.row]}>
                  <Text
                    style={[
                      styles.ml5,
                      styles.h5,
                      styles.colorWhite,
                      styles.textCenter,
                      {textTransform: 'uppercase'},
                    ]}>
                    Cancelar Alerta
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  );
}
