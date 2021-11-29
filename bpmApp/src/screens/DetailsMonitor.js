import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  TextInput,
  Image,
} from 'react-native';
import DashMenu from '../components/DashMenu';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { variables } from '../assets/variables';
import styles from '../assets/globals';
import Contact from '../components/Contact';
import Icon from 'react-native-vector-icons/Ionicons';
import { URL_API } from '../env/index';
import MapView, { Marker } from 'react-native-maps';
import moment from 'moment/min/moment-with-locales';

export default function DetailsMonitor(props) {
  const { item } = props.route.params;

  const [selectedMonitor, setSelectedMonitor] = useState(item);

  useEffect(() => {
    const { item, getMonitoreds } = props.route.params;
    const { monitored } = props;

    const index = monitored.findIndex(item => {
      return item.uuid == item.uuid;
    });
    setSelectedMonitor(monitored[index]);
  }, [props.monitored]);

  const calculateLastUpdate = date => {
    const actualDate = new Date();
    const serverDate = new Date(date);

    const serverHour = serverDate.getUTCHours();
    const serverMinute = serverDate.getUTCMinutes();

    const actualHour = actualDate.getUTCHours();
    const actualMinute = actualDate.getUTCMinutes();

    const timeDif =
      actualHour + actualMinute / 60 - (serverHour + serverMinute / 60);

    return timeDif >= 1
      ? parseInt(timeDif) + ' horas'
      : parseInt(timeDif * 60) + ' minutos';
  };

  return (
    <View
      style={[
        { backgroundColor: variables.primary, height: '100%' },
        styles.flex1,
        //styles.m10,
      ]}>
      <View style={[styles.flex2]}>
        <View
          style={[styles.row, styles.mx10, styles.mt10, styles.spaceBetween]}>
          <View>
            <Text style={[styles.h3, { color: '#000' }]}>
              {selectedMonitor.completeName}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              const { getMonitoreds } = props;

              getMonitoreds();
            }}>
            <MaterialIcons name={'refresh'} size={30} color={'#B32134'} />
          </TouchableOpacity>
        </View>
        <View style={[styles.mx10, styles.mb20]}>
          <Text style={[{ fontSize: 13, color: '#222222' }]}>
            Última atualização foi há{' '}
            {calculateLastUpdate(selectedMonitor.date)}
          </Text>
        </View>
        <View
          style={[
            styles.row,
            styles.m10,
            styles.centerXY,
            { backgroundColor: '#008000', borderRadius: 10, padding: 10 },
          ]}>
          <Text style={{ fontSize: variables.fontNormal, color: '#fff' }}>
            {selectedMonitor.status}
          </Text>
        </View>
        <View style={[styles.row, styles.spaceBetween, styles.mx10]}>
          <View style={[styles.row, styles.centerXY]}>
            <MaterialIcons name={'heart'} size={50} color={'#B32134'} />
            <Text
              style={{
                fontSize: variables.fontLarge + 5,
                fontWeight: 'bold',
                marginLeft: 10,
                color: '#222222',
              }}>
              {selectedMonitor.heartBeat}
              <Text
                style={{
                  fontSize: variables.fontNormal,
                  fontWeight: 'normal',
                  color: '#222222',
                }}>
                {'\n'}bpm
              </Text>
            </Text>
          </View>
          <View style={[styles.row, styles.centerXY]}>
            <FontAwesome name={'walking'} size={50} color={'#008000'} />
            <Text
              style={[
                {
                  fontSize: variables.fontLarge + 5,
                  marginLeft: 10,
                  fontWeight: 'bold',
                  color: '#222222',
                },
              ]}>
              {selectedMonitor.cardiacSteps}
              <Text
                style={{
                  fontSize: variables.fontNormal,
                  fontWeight: 'normal',
                  color: '#222222',
                }}>
                {'\n'}passos
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.flex4,
          //styles.px10,
          {
            borderRadius: 20,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: '#FCFCFC',
          },
        ]}>
        <MapView
          style={{
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            borderRadius: 20,
          }}
          loadingEnabled={true}
          region={{
            latitude: item.latitude == null ? 0 : item.latitude,
            longitude: item.longitude == null ? 0 : item.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            title={'aaa'}
            description={'asdasd'}
            coordinate={{
              latitude: item.latitude == null ? 0 : item.latitude,
              longitude: item.longitude == null ? 0 : item.longitude,
            }}
          />
        </MapView>
      </View>
    </View>
  );
}
