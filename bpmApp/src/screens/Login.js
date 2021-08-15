import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {variables} from '../assets/variables';
import styles from '../assets/globals';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Login(props) {
  return (
    <SafeAreaView>
      <LinearGradient colors={['#F0C882', '#F29282', '#fc196c']}>
        <View style={[styles.p10, styles.fullHeight, styles.centerY]}>
          <View style={[styles.centerXY]}>
            <Image
              style={{height: 200, width: 200}}
              source={require('../assets/img/icon/bpmLogo3.png')}
            />
          </View>
          <View style={[styles.row, styles.mt10, {width: '60%'}, styles.mb10]}>
            <Text
              style={[
                {
                  fontSize: 45,
                  fontWeight: 'normal',
                  color: '#fff',
                },
              ]}>
              Vamos começar!
            </Text>
          </View>
          <View style={[styles.row, styles.mt20, styles.mb10]}>
            <TextInput
              placeholder="(21) 55555-1234"
              placeholderTextColor={'#FCFCFC'}
              style={[
                {
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
              <Ionicons
                name={'arrow-forward-circle-outline'}
                size={variables.icon}
                color={'#aaa'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
