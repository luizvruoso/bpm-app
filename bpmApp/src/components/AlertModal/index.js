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
import styles from '../../assets/globals';
import {variables} from '../../assets/variables';
import {Icon} from 'react-native-elements'; //https://fonts.google.com/icons?selected=Material+Icons
import {ScrollView} from 'react-native-gesture-handler';
import SocketClient from '../../Networking/client';

export default function index(props) {
  const [modalVisible, setModalVisible] = useState(props.status);

  const [trigger, setTrigger] = useState(false);
  const [labeTime, setLabelTime] = useState('00:30');
  useEffect(
    ret => {
      setModalVisible(props.status);
      if (props.status) {
        setLabelTime('00:30');
      } else {
        setTrigger(false);
      }
    },
    [props.status], //controlador
  );

  useEffect(
    ret => {
      if (trigger) {
        const socket = new SocketClient();
        socket.initSocket();
        socket.joinSession(props.uuid);
        socket.sendNotification(props.uuid);
        setTrigger(false);
      }
    },
    [trigger], //controlador
  );

  useEffect(() => {
    var isMounted = true;
    var aux = new Date();
    var endDate = new Date().setSeconds(aux.getSeconds() + 30);
    endDate = new Date(endDate);
    const intervalId = setInterval(() => {
      var actualDate = new Date();
      //console.log(actualDate.getSeconds());

      if (isMounted) {
        var aux = endDate.getSeconds() - actualDate.getSeconds();
        if (aux <= 0) {
          setLabelTime('00:00');
          setTrigger(true);
          clearInterval(intervalId);
        } else setLabelTime('00:' + (aux <= 9 ? '0' + aux : aux).toString());
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [props.status]);

  /*const CustomContent = () => {
    return props.children;
  };*/
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!props.status);
        }}>
        <View
          style={[
            //styles.flex1,
            styles.centerXY,
            //styles.mt20,
            styles.flex1,
            //styles.fullWidth,
            //styles.spaceBetween,
            styles.overflowHidden,
            //styles.mx20,
            styles.my30,
          ]}>
          <View
            style={[
              {width: '95%', height: '80%', backgroundColor: 'white'},
              {
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.46,
                shadowRadius: 11.14,
                elevation: 17,
              },
              styles.spaceAround,
            ]}>
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
              {labeTime != '00:00' ? (
                <View style={[styles.row, styles.centerXY, styles.mt20]}>
                  <Text style={[{fontSize: variables.titulo1 + 18}]}>
                    {labeTime}
                  </Text>
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
                  props.setModal(!props.status);
                }}
                style={[
                  styles.fullWidth,
                  styles.centerXY,
                  styles.p20,
                  {backgroundColor: '#FD4755', borderRadius: 10},
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
      </Modal>
    </View>
  );
}

const styles2 = StyleSheet.create({
  containerMap: {
    width: '100%',
    height: '85%',
  },
  map: {
    height: '100%',
    width: '100%',
    flex: 1,
    overflow: 'hidden',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: '100%',
    overflow: 'hidden',
  },
  modalView: {
    borderRadius: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    height: '100%',
    width: '100%',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
