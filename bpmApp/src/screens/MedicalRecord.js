import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import DashMenu from '../components/DashMenu';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {variables} from '../assets/variables';
import styles from '../assets/globals';
import Header from '../components/Header';
import HeartMeasure from '../components/HeartMeasure';
export default function MedicalRecord(props) {
  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        styles.m10,
      ]}>
      <ScrollView style={[styles.flex1, {marginBottom: 80}]}>
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
        <TextInput style={[styles.input]} placeholder="dd/mm/aaaa" />

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

        <TextInput style={[styles.input]} placeholder="Sexo" />

        <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
          Cadeirante:
        </Text>
        <TextInput style={[styles.input]} placeholder="Cadeirante" />

        <View style={{marginBottom: 30}}></View>
      </ScrollView>
    </View>
  );
}
