import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import DashMenu from '../components/DashMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import {variables} from '../assets/variables';
import Header from '../components/Header';
import StepsMeasure from '../components/StepsMeasure';

export default function Steps(props) {
  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        styles.flex1,
        styles.fullSize,
        styles.m10,
      ]}>
      <StepsMeasure />
    </View>
  );
}

const styles = StyleSheet.create({});
