import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/Ionicons';
import {variables} from '../../assets/variables';
import {navigate} from '../../Routes';
import Header from '../Header';

export default function index(props) {
  //const items = props.items;
  //console.log(props.navigation);
  const CustomContent = () => {
    return props.children;
  };
  //const Children = props.children;
  return (
    <View>
      <Header />
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Text>cu</Text>
      </TouchableOpacity>
      <CustomContent />
    </View>
  );
}
