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
import Contact from '../components/Contact';

export default function EmergencyContacts(props) {
  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},

        //styles.m10,
      ]}>
      <Contact />
    </View>
  );
}
