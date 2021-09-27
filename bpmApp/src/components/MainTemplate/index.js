import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
    <View
      style={[styles.p10, styles.pt20, {backgroundColor: variables.primary}]}>
      {/*<Header />*/}
      <View style={[styles.row, styles.mb10]}>
        <TouchableOpacity
          style={[styles.row]}
          onPress={() => {
            props.navigation.pop();
          }}>
          <Icon
            name="arrow-back-ios"
            size={variables.iconLg}
            color={variables.darkGray1}
          />
          <Text
            style={[{fontSize: variables.titulo2, color: variables.darkGray1}]}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>

      <CustomContent navigation={props.navigation} />
    </View>
  );
}
