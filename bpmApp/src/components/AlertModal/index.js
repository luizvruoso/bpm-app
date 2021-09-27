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

export default function index(props) {
  const [modalVisible, setModalVisible] = useState(props.status);
  useEffect(
    ret => {
      setModalVisible(props.status);
    },
    [props.status], //controlador
  );
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
              <View style={[styles.row, styles.centerXY, styles.mt20]}>
                <Text style={[{fontSize: variables.titulo1 + 18}]}>00:30</Text>
              </View>
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
