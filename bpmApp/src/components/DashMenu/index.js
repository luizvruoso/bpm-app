import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {variables} from '../../assets/variables';

export default function DashMenu(props) {
  const type = props.type;

  if (type == 'steps') {
    return <Steps />;
  }

  if (type == 'heartBeat') {
    return <HeartBeat />;
  }

  if (type == 'alert') {
    return <Alert />;
  }
}

function Steps(props) {
  return (
    <View
      style={[
        {height: 150},
        styles.borderContainers,
        styles.m10,
        styles.centerXY,
        styles.p20,
        {
          borderRadius: 20,
          borderEndWidth: 12,
          borderEndColor: variables.success,
          backgroundColor: 'white',
        },
        styles.row,
        styles.spaceBetween,
      ]}>
      <Icon name="running" size={72} color="#308940" />
      <View style={[]}>
        <Text style={[{fontSize: 40}, styles.bold, styles.textLeft]}>1500</Text>
        <Text style={[{fontSize: variables.fontNormal}, styles.textRight]}>
          passos
        </Text>
      </View>
    </View>
  );
}

function HeartBeat(props) {
  return (
    <View
      style={[
        {height: 150},
        styles.borderContainers,
        styles.m10,
        styles.centerXY,
        styles.p20,
        {
          borderRadius: 20,
          borderEndWidth: 12,
          borderEndColor: variables.danger,
          backgroundColor: 'black',
        },
        styles.row,
        styles.spaceBetween,
      ]}>
      <Icon name="heartbeat" size={72} color={variables.danger} />
      <View style={[styles.colorWhite]}>
        <Text
          style={[
            {fontSize: 40, color: variables.white},
            styles.bold,
            styles.textLeft,
          ]}>
          89
        </Text>
        <Text
          style={[
            {fontSize: variables.fontNormal, color: variables.white},
            styles.textRight,
          ]}>
          bpm
        </Text>
      </View>
    </View>
  );
}

function Alert(props) {
  return (
    <View
      style={[
        //{height: 150},
        styles.borderContainers,
        styles.m10,
        styles.centerXY,
        styles.p20,
        {
          borderRadius: 20,
          borderBottomWidth: 10,
          borderBottomColor: variables.warning,
          backgroundColor: 'white',
        },
        styles.column,
        //styles.spaceBetween,
      ]}>
      <Icon name="bell" size={60} color={variables.warning} />

      <Text
        style={[
          {color: '#898989', fontSize: variables.fontLarge},
          //styles.bold,
          styles.mt10,
          styles.textLeft,
        ]}>
        Acionar Alertar
      </Text>
    </View>
  );
}
