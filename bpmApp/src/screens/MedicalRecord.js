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
      <TextInput style={[styles.input]} placeholder="Nome" />
      <TextInput style={[styles.input]} placeholder="Celular" />
      <TextInput style={[styles.input]} placeholder="dd/mm/aaaa" />
      <TextInput style={[styles.input]} placeholder="Peso" />
      <TextInput style={[styles.input]} placeholder="Altura" />
    </View>
  );
}
