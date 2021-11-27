import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {variables} from '../../assets/variables';

export default function Header(props) {
  const navigation = props.navigation;

  const getFirstName = name => {
    const index = name.search(' ');

    return name.slice(0, index);
  };
  const getGreetings = () => {
    const date = new Date();

    const hour = date.getUTCHours();

    if (hour >= 6 && hour <= 12) return 'Bom dia,';
    else if (hour >= 13 && hour <= 18) return 'Boa tarde,';
    return 'Boa noite,';
  };
  const name = props.name == null ? 'Jorge' : getFirstName(props.name);

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
            source={
              props.photoPath != null
                ? {
                    uri: props.photoPath,
                  }
                : require('../../assets/img/profile-user.png')
            }
            //source={require('../../assets/img/profile/profile.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.row, styles.centerXY]}>
        <Text style={[{fontSize: variables.fontLarger, color: '#053245'}]}>
          {getGreetings()}&nbsp;
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
