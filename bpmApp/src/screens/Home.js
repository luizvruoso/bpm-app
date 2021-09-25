import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import DashMenu from '../components/DashMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import {variables} from '../assets/variables';
import Header from '../components/Header';
import {convertDate} from '../assets/utils';
export function Home(props) {
  const [actualHeartBeatData, setActualHeartBeatData] = useState({
    status: 'loading',
  });
  const [stepsData, setStepsData] = useState({
    status: 'loading',
  });

  useEffect(() => {
    let {getActualHeartBeatData, getActualStepsData} = props;
    console.log(props.user);
    getActualHeartBeatData();
    getActualStepsData();
  }, []);

  useEffect(() => {
    if (
      props.heartBeatInstant.hasOwnProperty('status') &&
      (props.heartBeatInstant.status == 'loading' ||
        props.heartBeatInstant.status == 'error')
    ) {
      setActualHeartBeatData({
        status: 'loading',
      });
    } else if (props.heartBeatInstant != null) {
      let final = [];

      props.heartBeatInstant.map((item, index) => {
        let indexCtrl = final.findIndex((element, index) => {
          return element.date == convertDate(item.time, false);
        });
        if (indexCtrl == -1) {
          let max = item.value;
          let min = item.value;
          props.heartBeatInstant.map((element, index2) => {
            if (
              convertDate(element.time, false) == convertDate(item.time, false)
            ) {
              if (max < element.value) {
                max = element.value;
              }

              if (min > element.value) {
                min = element.value;
              }
            }
          });

          final.push({
            date: convertDate(item.time, false),
            time: item.time,
            avegare: (max + min) / 2,
            min,
            max,
          });
        }
      });
      setActualHeartBeatData(final);
    }
  }, [props.heartBeatInstant]);

  useEffect(() => {
    //console.log(props.stepsInstant)
    if (
      props.stepsInstant.hasOwnProperty('status') &&
      (props.stepsInstant.status == 'loading' ||
        props.stepsInstant.status == 'error')
    ) {
      setStepsData({
        status: 'loading',
      });
    } else if (props.stepsInstant != null && props.stepsInstant.length > 0) {
      let final = [];
      let sum = 0;
      props.stepsInstant.map((item, index) => {
        sum += parseFloat(item.value);
      });

      setStepsData([
        {
          time: props.stepsInstant[0].time,
          value: sum,
        },
      ]);
    }
  }, [props.stepsInstant]);

  useEffect(() => {
    //console.log('alo', stepsData, actualHeartBeatData);
    const {sendUserStatusData} = props;
    if (
      !stepsData.hasOwnProperty('status') &&
      !actualHeartBeatData.hasOwnProperty('stauts')
    ) {
      sendUserStatusData({
        heartBeat: actualHeartBeatData[0].avegare,
        steps: stepsData[0].value,
      });
    }
  }, [stepsData, actualHeartBeatData]);

  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        styles.flex1,
        styles.fullSize,
        styles.m10,
      ]}>
      <Header navigation={props.navigation} />
      {!actualHeartBeatData.hasOwnProperty('status') &&
        !stepsData.hasOwnProperty('status') && (
          <DashMenu
            items={['alert', 'heartBeat', 'steps']}
            instantHeartBeatData={actualHeartBeatData}
            instantStepsData={stepsData}
          />
        )}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({});
