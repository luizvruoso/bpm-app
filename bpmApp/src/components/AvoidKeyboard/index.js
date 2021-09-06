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
  KeyboardAvoidingView,
  Button,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function index(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={40}
      //behavior="position"
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>{props.children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
