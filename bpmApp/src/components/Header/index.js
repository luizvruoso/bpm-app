import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {variables} from '../../assets/variables';

export default function Header(props) {
  const name = props.name == null ? 'Jorge' : props.name;

  return (
    <View style={[styles.row, styles.mx20, styles.my10, styles.spaceBetween]}>
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

      <View style={[styles.row, styles.centerXY]}>
        <Image
          style={{
            borderRadius: 50,
            height: 100,
            width: 100,
          }}
          source={require('../../assets/img/profile/profile.png')}
        />
      </View>
    </View>
  );
}
