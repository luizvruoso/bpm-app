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

  const {sendToken, validateToken, setPhoneAuth} = props;

  return (
    <SafeAreaView style={[styles.flex1, styles.bgWhite]}>
      <ImageBackground
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          width: '100%',
          height: '100%',
        }}
        source={require('../assets/img/login-background4.png')}>
        <View style={[styles.flex2, styles.centerXY]}>
          <Image
            style={{height: 70, width: 100}}
            source={require('../assets/img/logo3.png')}
          />
          <Text style={{color: '#FFF', fontSize: 15, marginTop: 5}}>
            Saúde. Segurança. Tranquilidade.
          </Text>
        </View>

        <View
          style={[
            styles.flex1,
            // styles.py10,
            {
              backgroundColor: '#FFF',
              justifyContent: 'center',
              paddingBottom: 10,
            },
          ]}>
          <AvoidKeyboard>
            <View style={[styles.p10]}>
              <View style={[styles.row, styles.mt20, styles.mb10]}>
                <TextInput
                  placeholder="(21) 55555-1234"
                  placeholderTextColor={'#88b648'}
                  value={formatCel(phone)}
                  onChangeText={setPhone}
                  style={[
                    {
                      backgroundColor: '#FFF',
                      width: '100%',
                      borderWidth: 1,
                      borderColor: '#ccc',
                      fontSize: 16,
                      height: 50,
                      color: '#88b648',
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
                    if (phone.length == 16) {
                      sendToken(phone);
                      setPhoneAuth({phone});
                      //navigate('TypeAuthCode', {phone: phone});
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
                      backgroundColor: '#88b648',
                    },
                  ]}>
                  <Text
                    style={[styles.textCenter, {fontSize: 18, color: '#fff'}]}>
                    Enviar Código
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </AvoidKeyboard>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
