import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {variables} from '../assets/variables';
import styles from '../assets/globals';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvoidKeyboard from '../components/AvoidKeyboard';
import {navigate} from '../Routes';
import {formatCel} from '../assets/utils';
export default function Login(props) {
  const [phone, setPhone] = useState('');
  const [showCodView, setCodView] = useState(false);

  const {sendToken, validateToken} = props;

  return (
    <SafeAreaView style={[styles.flex1, styles.bgWhite]}>
      <View style={[styles.flex1, styles.centerXY]}>
        <Image
          style={{height: 95, width: 120}}
          source={require('../assets/img/logo.png')}
        />
      </View>

      <View
        style={[styles.flex1, styles.centerX, {backgroundColor: '#ff6a61'}]}>
        <View style={[styles.p10]}>
          <View style={[styles.row, styles.mt20, styles.mb10]}>
            <TextInput
              placeholder="(21) 55555-1234"
              placeholderTextColor={'#FFF'}
              value={formatCel(phone)}
              onChangeText={setPhone}
              style={[
                {
                  width: '100%',
                  borderWidth: 1,
                  borderColor: '#FFF',
                  fontSize: 16,
                  height: 50,
                  color: '#FFF',
                  width: '100%',
                  borderRadius: 5,
                },
                styles.p10,
              ]}
            />
          </View>

          <View style={[styles.row, styles.mt20]}>
            <TouchableOpacity
              onPress={() => {
                console.log(phone.length);
                if (phone.length == 16) {
                  sendToken(phone);

                  navigate('TypeAuthCode', {phone: phone});
                }
              }}
              style={[
                styles.row,
                //styles.bgWhite,
                styles.btnBorderRadius,
                styles.centerXY,
                {
                  width: '100%',
                  height: 60,
                  borderColor: '#FFF',
                  backgroundColor: '#FFF',
                },
              ]}>
              <Text
                style={[styles.textCenter, {fontSize: 18, color: '#ff6a61'}]}>
                Enviar Código
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
