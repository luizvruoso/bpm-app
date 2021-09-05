import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  TextInput,
} from 'react-native';
import DashMenu from '../components/DashMenu';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {variables} from '../assets/variables';
import styles from '../assets/globals';
import Contact from '../components/Contact';
import Icon from 'react-native-vector-icons/Ionicons';

export default function EmergencyContacts(props) {
  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        //styles.m10,
      ]}>
      <ModalContact />

      <Contact />
    </View>
  );
}

export function ModalContact(props) {
  const [modalVisible, setModalVisible] = useState(false);

  /*const CustomContent = () => {
    return props.children;
  };*/
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        style={[styles.row, styles.mt10]}>
        <Icon name="add-circle" size={variables.iconLg} color={'#053245'} />
        <Text
          style={[
            {
              marginTop: 4,
              fontSize: variables.fontLarge,
              textAlignVertical: 'center',
              marginLeft: 8,
            },
          ]}>
          Contato
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
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
              styles.mx20,
              {width: '95%', height: '80%', backgroundColor: 'white'},
              {
                borderWidth: 1,
                borderColor: '#CCC',
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
                  Adicionar Contato
                </Text>
              </View>
              <View style={[styles.row, styles.centerXY]}>
                <Text
                  style={[{fontSize: variables.fontNormal}, styles.textCenter]}>
                  Digite o token de quem deseja monitorar
                </Text>
              </View>
            </View>
            <View style={[styles.p20]}>
              <TextInput
                style={[
                  styles.input,
                  {
                    height: 70,
                    fontSize: variables.fontLarge,
                    textAlign: 'center',
                    padding: 0,
                  },
                ]}
                placeholder="#55231"
              />
            </View>

            <View style={[styles.p20]}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={[
                  styles.fullWidth,
                  styles.centerXY,
                  styles.p20,
                  {backgroundColor: '#054F77', borderRadius: 10},
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
                    Adicionar
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={[
                  styles.fullWidth,
                  styles.centerXY,
                  styles.p20,
                  styles.mt10,
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
                    Fechar
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
