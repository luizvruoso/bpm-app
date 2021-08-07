import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/Ionicons';
import {variables} from '../../assets/variables';
import {navigate} from '../../Routes';

export default function HeartMeasure(props) {
  const items = props.items;

  return (
    <View>
      <HeartBeatFocus />
      <HeartBeat />
    </View>
  );
}

function HeartBeatFocus(props) {
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
          borderBottomColor: variables.redVelvet,
          backgroundColor: 'black',
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
        <Text style={[{color: variables.white}]}>agora</Text>
      </View>

      <View style={[styles.row, styles.my10, styles.centerXY]}>
        <Icon
          name="heart"
          color={variables.redVelvet}
          size={50}
          style={[styles.textVerticalCenter, styles.centerXY]}
        />
        <View style={[styles.colorWhite, styles.row, styles.ml10]}>
          <Text
            style={[
              {fontSize: 40, color: variables.white},
              styles.bold,
              //styles.textLeft,
              styles.textVerticalCenter,
            ]}>
            89
            <Text style={[{fontSize: 20, color: variables.white}]}>
              &nbsp; bpm
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

function HeartBeat(props) {
  return (
    <View
      style={[
        {height: 155},
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
        <Text style={[{color: variables.darkGray4}]}>Hoje</Text>
      </View>
      <View style={[styles.row, styles.my5, {flex: 1}]}>
        <Icon
          name="heart"
          color={variables.redVelvet}
          size={50}
          style={[styles.textVerticalCenter, {flex: 1}]}
        />
        <View style={[styles.colorWhite, styles.row, styles.ml10, {flex: 2}]}>
          <Text
            style={[
              {fontSize: 40, color: variables.darkGray4},
              styles.bold,
              styles.textLeft,
              styles.textVerticalCenter,
            ]}>
            89
            <Text
              style={[
                {fontSize: 20, color: variables.darkGray3},
                styles.textLeft,
              ]}>
              &nbsp; bpm
            </Text>
          </Text>
        </View>

        <View
          style={[
            styles.colorWhite,
            styles.row,
            styles.ml10,
            styles.centerXY,
            {
              justifyContent: 'flex-end',

              flex: 3,
            },
            //styles.fullWidth,
          ]}>
          <Text style={[{color: variables.darkGray4, textAlign: 'right'}]}>
            14:00
          </Text>
        </View>
      </View>

      <View style={[styles.row, {alignSelf: 'flex-start'}]}>
        <View style={[styles.row]}>
          <Text
            style={[
              {fontSize: variables.fontSmall},
              styles.textVerticalCenter,
            ]}>
            min &nbsp;
          </Text>
          <Text style={[{fontSize: variables.fontLarger}, styles.bold]}>
            85
          </Text>
        </View>

        <View style={[styles.row, styles.ml20]}>
          <Text
            style={[
              {fontSize: variables.fontSmall},
              styles.textVerticalCenter,
            ]}>
            máx &nbsp;
          </Text>
          <Text style={[{fontSize: variables.fontLarger}, styles.bold]}>
            150
          </Text>
        </View>
      </View>
    </View>
  );
}
