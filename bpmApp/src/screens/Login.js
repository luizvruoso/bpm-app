import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {variables} from '../assets/variables';
import styles from '../assets/globals';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvoidKeyboard from '../components/AvoidKeyboard';

export default function Login(props) {
  const [tel, setTel] = useState(null);
  let {sendToken} = props;
  return (
    <SafeAreaView>
      <LinearGradient colors={['#F0C882', '#F29282', '#fc196c']}>
        <View style={[styles.p10, styles.fullHeight, styles.centerY]}>
          <View style={[styles.row, styles.mt20, styles.mb10]}>
            <TextInput
              placeholder="(21) 55555-1234"
              placeholderTextColor={'#FCFCFC'}
              value={tel}
              onChangeText={setTel}
              style={[
                {
                  height: 60,
                  color: '#FFF',
                  borderWidth: 1,
                  borderColor: '#FFF',
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
                sendToken(tel);
              }}
              style={[
                styles.row,
                styles.p10,
                styles.bgWhite,
                {width: '40%'},
                styles.btnBorderRadius,
                styles.spaceBetween,
              ]}>
              <Text
                style={[
                  styles.textVerticalCenter,
                  {fontSize: 20, color: '#aaa'},
                ]}>
                Avançar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
