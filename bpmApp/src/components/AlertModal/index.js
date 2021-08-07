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
            styles.mx20,
            styles.my30,
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
          ]}>
          <View
            style={[
              //styles.spaceAround,
              {width: '100%', height: '100%', backgroundColor: 'white'},
            ]}>
            <View style={[styles.mt30, styles.mb30, styles.p20]}>
              <View style={[styles.row]}>
                <Text>O alerta será disparado em: </Text>
              </View>
            </View>

            <TouchableOpacity
              style={[
                //styles.fullWidth,
                styles.centerXY,
                {width: '95%'},
                styles.mx20,
                styles.bgPrimary,
                styles.p10,
                styles.mb20,
                styles.btnBorderRadius,
              ]}
              onPress={() => {
                props.setModal(!props.status);

                setModalVisible(!modalVisible);
              }}>
              <View style={[styles.row]}>
                <Icon name="arrow-drop-down" color={variables.white} />

                <Text
                  style={[
                    styles.ml5,
                    styles.h5Primary,
                    styles.colorWhite,
                    styles.textCenter,
                    {textTransform: 'uppercase'},
                  ]}>
                  Fechar
                </Text>
              </View>
            </TouchableOpacity>
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
