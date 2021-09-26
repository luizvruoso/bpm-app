import React, {Component} from 'react';
import {View} from 'react-native';

import {variables} from '../assets/variables';
import styles from '../assets/globals';
import Perifericos from '../components/Ble';

export default function Devices(props) {
  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        styles.m10,
      ]}>
      <Perifericos />
    </View>
  );
}
