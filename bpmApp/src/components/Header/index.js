import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {variables} from '../../assets/variables';

export default function Header(props) {
  const name = props.name == null ? 'Jorge' : props.name;
  const navigation = props.navigation;

  return (
    <View style={[styles.row, styles.mx20, styles.my10]}>
      <View style={[styles.row, styles.centerXY, styles.mr20]}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            style={{
              borderRadius: 40,
              height: 80,
              width: 80,
            }}
            source={require('../../assets/img/profile/profile.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.row, styles.centerXY]}>
        <Text style={[{fontSize: variables.fontLarger, color: '#053245'}]}>
          Bom dia,&nbsp;
        </Text>
        <Text
          style={[
            {
              fontSize: variables.fontLarger,
              color: '#053245',
              fontWeight: 'bold',
            },
          ]}>
          {name}!
        </Text>
      </View>
    </View>
  );
}
