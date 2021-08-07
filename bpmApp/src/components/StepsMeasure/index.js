import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/Ionicons';
import {variables} from '../../assets/variables';
import {navigate} from '../../Routes';

export default function index(props) {
  const items = props.items;

  return (
    <View>
      <StepsMeasureFocus />
      <StepsMeasure />
    </View>
  );
}

function StepsMeasureFocus(props) {
  return (
    <View
      style={[
        {height: 150},
        styles.borderContainers,
        styles.mt10,
        styles.centerXY,
        styles.p20,
        {
          borderRadius: 20,
          borderBottomWidth: 12,
          borderBottomColor: variables.success,
          //backgroundColor: 'black',
          //borderWidth: 1,
          //borderColor: '#fff',
          //justifyContent: 'flex-start',
        },
        //styles.row,

        //styles.spaceAround,
      ]}>
      <View
        style={[
          styles.row,
          {
            //alignSelf: 'flex-start',
          },
        ]}>
        <Text style={[{color: variables.darkGray3}]}>hoje</Text>
      </View>

      <View style={[styles.row, styles.my10, styles.centerXY]}>
        <Image
          style={{height: 80, width: 80}}
          source={require('../../assets/img/icon/littleSalsaWalk.png')}
        />
        <View style={[styles.colorWhite, styles.row, styles.ml10]}>
          <Text
            style={[
              {fontSize: 40, color: variables.darkGray3},
              styles.bold,
              //styles.textLeft,
              styles.textVerticalCenter,
            ]}>
            1.500
            <Text style={[{fontSize: 20, color: variables.darkGray3}]}>
              &nbsp; passos
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

function StepsMeasure(props) {
  return (
    <View
      style={[
        {height: 120},
        styles.borderContainers,
        styles.mt10,
        styles.centerXY,
        styles.p20,
        {
          borderRadius: 20,
          //borderBottomWidth: 12,
          //borderBottomColor: variables.redVelvet,
          //backgroundColor: '#fff',
          //borderWidth: 1,
          //borderColor: '#fff',
          //justifyContent: 'flex-start',
        },
        //styles.row,

        //styles.spaceAround,
      ]}>
      <View
        style={[
          styles.row,
          {
            alignSelf: 'flex-start',
          },
        ]}>
        <Text style={[{color: variables.darkGray4}]}>Ontem</Text>
      </View>
      <View
        style={[styles.row, styles.my5, {flex: 1, alignSelf: 'flex-start'}]}>
        <Image
          style={{height: 50, width: 50}}
          source={require('../../assets/img/icon/littleSalsaWalk.png')}
        />
        <View style={[styles.colorWhite, styles.row, styles.ml10]}>
          <Text
            style={[
              {fontSize: 40, color: variables.darkGray4},
              styles.bold,
              styles.textLeft,
              styles.textVerticalCenter,
            ]}>
            1.550
            <Text
              style={[
                {fontSize: 20, color: variables.darkGray3},
                styles.textLeft,
              ]}>
              &nbsp; passos
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
