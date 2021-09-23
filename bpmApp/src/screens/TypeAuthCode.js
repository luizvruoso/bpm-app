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
import {formatCel} from '../assets/utils';
import {navigate} from '../Routes';

export default function TypeAuthCode(props) {
  const [auth, setAuth] = useState('');
  return (
    <SafeAreaView style={[styles.flex1, {backgroundColor: variables.primary}]}>
      <View style={[styles.flex1, styles.centerXY]}>
        <View style={[styles.centerXY, styles.mt50, styles.flex1]}>
          <Text
            style={[{fontSize: variables.titulo1, color: variables.secondary}]}>
            +55 {formatCel(props.route.params.phone)}
          </Text>
          <Text
            style={[
              {fontSize: variables.fontNormal, color: '#989898'},
              styles.textCenter,
            ]}>
            Nós enviamos um SMS com o código de autorização para você
          </Text>
        </View>

        <View style={[styles.flex2, styles.p10]}>
          <View style={[styles.row, styles.mt20, styles.mb10]}>
            <TextInput
              autoCapitalize="characters"
              placeholder="MKJ123"
              placeholderTextColor={'#898989'}
              value={auth.toUpperCase()}
              onChangeText={setAuth}
              maxLength={6}
              style={[
                {
                  width: '100%',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  fontSize: 16,
                  height: 50,
                  color: '#898989',
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
                props.validateToken(props.route.params.phone, auth);
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
                  backgroundColor: variables.secondary,
                },
              ]}>
              <Text style={[styles.textCenter, {fontSize: 18, color: '#FFF'}]}>
                AUTENTICAR
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.sendToken(props.user.userInfo.phone);
            }}>
            <Text
              style={[
                {
                  fontSize: variables.fontNormal,
                  color: '#456f0a',
                  marginTop: 20,
                },
                styles.textCenter,
              ]}>
              Reenviar Código
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
