import React, {Component, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
  Button,
  Platform,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import {convertDate} from '../assets/utils';
import DashMenu from '../components/DashMenu';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {variables} from '../assets/variables';
import styles from '../assets/globals';
import Header from '../components/Header';
import HeartMeasure from '../components/HeartMeasure';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MedicalRecord(props) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        styles.mt10,
        styles.mb10,
      ]}>
      <ScrollView style={[styles.flex1, {marginBottom: 80}]}>
        <View style={[styles.row, styles.centerXY, styles.mr20]}>
          <TouchableOpacity
            onPress={() => {
              //navigation.openDrawer();
            }}>
            <Image
              style={{
                borderRadius: 50,
                height: 100,
                width: 100,
                borderWidth: 0.2,
                borderColor: '#ccc',
              }}
              source={require('../assets/img/profile/profile.png')}
            />
          </TouchableOpacity>
          <View
            style={[
              {
                borderRadius: 40,
                height: 30,
                width: 30,
                backgroundColor: '#FFF',
                position: 'absolute',
                bottom: -5,
                right: 125,
                borderWidth: 0.5,
                borderColor: '#ccc',
              },
              styles.centerXY,
            ]}>
            <Icon
              name={'edit'}
              color={variables.darkGray1}
              size={variables.iconSm}
            />
          </View>
        </View>
        <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
          Nome:
        </Text>
        <TextInput style={[styles.input]} placeholder="Antonio Roberto" />
        <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
          Celular:
        </Text>
        <TextInput style={[styles.input]} placeholder="Celular" />
        <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
          Data de Nascimento:
        </Text>
        <View
          style={[
            {
              marginBottom: 20,

              flex: 1,
              borderColor: '#ccc',
              borderWidth: 1,
              padding: 10,
              height: 50,
              backgroundColor: '#fcfcfc',
            },
            styles.centerY,
          ]}>
          <TouchableOpacity
            style={[
              {fontSize: variables.fontLarge},
              styles.spaceBetween,
              styles.row,
            ]}
            onPress={() => setOpen(true)}>
            <Text style={[styles.mt5]}>
              {date == null ? 'Selecione uma data' : convertDate(date)}
            </Text>
            <Icon
              name="keyboard-arrow-down"
              size={variables.icon}
              // style={{marginTop: -5}}
            />
          </TouchableOpacity>

          <DatePicker
            locale={'pt-br'}
            mode={'date'}
            modal={true}
            open={open}
            date={new Date()}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>

        <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
          Peso:
        </Text>
        <TextInput style={[styles.input]} placeholder="Peso" />
        <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
          Altura:
        </Text>
        <TextInput style={[styles.input]} placeholder="Altura" />
        <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
          Sexo:
        </Text>
        <View
          style={[
            {
              marginBottom: 20,

              flex: 1,
              borderColor: '#ccc',
              borderWidth: 1,
              padding: 10,
              height: 50,
              backgroundColor: '#fcfcfc',
            },
            styles.centerXY,
          ]}>
          <RNPickerSelect
            placeholder={{
              label: 'Selecione uma opção',
              value: null,
            }}
            Icon={() => {
              return (
                <Icon
                  name="keyboard-arrow-down"
                  size={variables.icon}
                  style={{marginTop: -5}}
                />
              );
            }}
            onValueChange={value => console.log(value)}
            items={[
              {label: 'Masculino', value: 'male'},
              {label: 'Feminino', value: 'female'},
            ]}
          />
        </View>
        <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
          Cadeirante:
        </Text>
        <View
          style={[
            {
              marginBottom: 20,
              flex: 1,
              borderColor: '#ccc',
              borderWidth: 1,
              padding: 10,
              height: 50,
              backgroundColor: '#fcfcfc',
            },
            styles.centerXY,
          ]}>
          <RNPickerSelect
            placeholder={{
              label: 'Selecione uma opção',
              value: null,
            }}
            Icon={() => {
              return (
                <Icon
                  name="keyboard-arrow-down"
                  size={variables.icon}
                  style={{marginTop: -5}}
                />
              );
            }}
            onValueChange={value => console.log(value)}
            items={[
              {label: 'Sim', value: 'true'},
              {label: 'Não', value: 'no'},
            ]}
          />
        </View>

        <View style={{marginBottom: 30}}></View>
      </ScrollView>
    </View>
  );
}
