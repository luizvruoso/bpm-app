import React, {Component, useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  TextInput,
  RefreshControl,
  FlatList,
} from 'react-native';
import DashMenu from '../components/DashMenu';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {variables} from '../assets/variables';
import styles from '../assets/globals';
import Contact from '../components/Contact';
import Icon from 'react-native-vector-icons/Ionicons';
import {Swipeable} from 'react-native-gesture-handler';

export default function EmergencyContacts(props) {
  const [listContacts, setListContacts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    props.getEmergencyContacts();
  }, []);

  useEffect(() => {
    const {emergencyContact} = props;

    setListContacts(emergencyContact);
  }, [props.emergencyContact]);

  const keyExtractor = useCallback((item, key) => {
    return item.completeName + key;
  }, []);

  const deleteMonitor = async id => {
    const {deleteEmergencyContact} = props;
    deleteEmergencyContact(id);
  };

  const RightAction = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          //props.removeFromCart(item.id);
          //navigate('Adicionar Produto', {operation: 'edit', item});
          deleteMonitor(item.uuid);
        }}>
        <View
          style={[
            {
              backgroundColor: variables.redVelvet,
              height: '95%',
              width: 100,
              borderRadius: 20,
              marginTop: 8,
            },
            styles.centerXY,
          ]}>
          <Text style={{color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>
            Excluir
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = useCallback(({item}) => {
    //console.log('aaaa', item);
    return (
      <Swipeable renderRightActions={() => RightAction(item)}>
        <TouchableOpacity
          onPress={() => {
            //navigate('DetailsMonitor', {item});
          }}>
          <Contact name={item.completeName} phone={item.phone} />
        </TouchableOpacity>
      </Swipeable>
    );
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    const {getEmergencyContacts} = props;

    //('T3523279', '2021-07-22');
    getEmergencyContacts();

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        styles.mx10,
        //styles.m10,
      ]}>
      <ModalContact addUserEmergencyContact={props.addUserEmergencyContact} />

      <FlatList
        /*ref={ref => {
          this.flatListRef = ref;
        }}*/
        //windowSize={1}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
        style={[styles.mb20]}
        data={listContacts}
        renderItem={renderItem}
      />
    </View>
  );
}

export function ModalContact(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [token, setToken] = useState('');
  const addUserEmergencyContact = props.addUserEmergencyContact;
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
            //styles.my30,
          ]}>
          <View
            style={[
              styles.mx20,
              {width: '95%', height: '95%', backgroundColor: 'white'},
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
                placeholderTextColor={variables.gray3}
                onChangeText={setToken}
                value={token}
                maxLength={6}
                autoCapitalize="characters"
                style={[
                  styles.input,
                  {
                    height: 70,
                    fontSize: variables.fontLarge,
                    textAlign: 'center',
                    padding: 0,
                    borderWidth: 1,
                    borderColor: '#CCC',
                    color: '#000',
                  },
                ]}
                placeholder="@MK209"
              />
            </View>

            <View style={[styles.p20]}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setToken('');
                  addUserEmergencyContact(token);
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
