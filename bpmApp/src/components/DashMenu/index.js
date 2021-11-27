import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {variables} from '../../assets/variables';
import {navigate} from '../../Routes';
import AlertModal from '../../components/AlertModal';
import {convertDate, fromDateTimeGetTime} from '../../assets/utils';

export default function DashMenu(props) {
  const items = props.items;
  const instantHeartBeatData = props.instantHeartBeatData;
  const instantStepsData = props.instantStepsData;
  const makeMenu = () => {
    return items.map((item, index) => {
      if (item == 'steps') {
        //return <View></View>;
        return <Steps key={index} instantStepsData={instantStepsData} />;
      }

      if (item == 'heartBeat') {
        //console.log('Aloooo', instantHeartBeatData);
        return (
          <HeartBeat key={index} instantHeartBeatData={instantHeartBeatData} />
        );
      }

      if (item == 'alert') {
        return <Alert uuid={props.uuid} key={index} />;
      }
    });
  };

  return makeMenu();
}

function Steps(props) {
  let steps = props.instantStepsData;

  return (
    <TouchableOpacity
      onPress={() => {
        navigate(
          'Steps' /*{
    trace: {
      parent: infoToSend.parent,
      extraInfo: jsonIcone,
    },
    data: TICKET,
  }*/,
        );
      }}>
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
        <Image
          style={{height: 80, width: 80}}
          source={require('../../assets/img/icon/littleSalsaWalk.png')}
        />
        <View style={[]}>
          <Text style={[{fontSize: 40}, styles.bold, styles.textLeft]}>
            {isNaN(parseInt(steps.value)) ? '0' : parseInt(steps.value)}
          </Text>
          <Text style={[{fontSize: variables.fontNormal}, styles.textRight]}>
            passos
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function HeartBeat(props) {
  const instantHeartBeatData = props.instantHeartBeatData;

  return (
    <TouchableOpacity
      onPress={() => {
        navigate(
          'HeartBeat' /*{
      trace: {
        parent: infoToSend.parent,
        extraInfo: jsonIcone,
      },
      data: TICKET,
    }*/,
        );
      }}>
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
        <Image
          style={{height: 80, width: 80}}
          source={require('../../assets/img/icon/heartBeat.png')}
        />
        <View style={[styles.colorWhite]}>
          <Text
            style={[
              {fontSize: 40, color: variables.white},
              styles.bold,
              styles.textLeft,
            ]}>
            {isNaN(parseInt(instantHeartBeatData.value))
              ? '0'
              : parseInt(instantHeartBeatData.value)}
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
    </TouchableOpacity>
  );
}

function Alert(props) {
  const [modal, setModal] = useState(false);

  return (
    <TouchableOpacity
    onPress={() => {
      navigate(
        'Alert' 
      );
      }}>

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
        <Image
          style={{height: 80, width: 80}}
          source={require('../../assets/img/icon/alertSign.png')}
        />
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

      <AlertModal
        uuid={props.uuid}
        status={modal}
        setModal={status => setModal(status)}
      />
    </TouchableOpacity>
  );
}
