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
import HeartMeasure from '../components/HeartMeasure';
import {convertDate} from '../assets/utils';
export default function HeartBeat(props) {
  const [heartBeatData, setHeartBeatData] = useState({
    status: 'loading',
  });
  const [actualHeartBeatData, setActualHeartBeatData] = useState({
    status: 'loading',
  });
  useEffect(() => {
    const {
      heartBeat,
      heartBeatInstant,
      getHeartBeatData,
      getActualHeartBeatData,
    } = props;
    //console.log('dadsa', heartBeat[0]);
    if (heartBeat.length > 0) {
      setHeartBeatData(heartBeat);
    }

    if (heartBeatInstant != null) {
      setActualHeartBeatData(heartBeatInstant);
    }

    //getHeartBeatData();
    //getActualHeartBeatData();
  }, []);
  /*
  useEffect(() => {
    if (
      props.heartBeat.hasOwnProperty('status') &&
      (props.heartBeat.status == 'loading' || props.heartBeat.status == 'error')
    ) {
      setHeartBeatData({
        status: 'loading',
      });
    } else if (props.heartBeat != null) {
      let final = [];

      props.heartBeat.map((item, index) => {
        let indexCtrl = final.findIndex((element, index) => {
          return element.date == convertDate(item.time, false);
        });
        if (indexCtrl == -1) {
          let max = item.value;
          let min = item.value;
          props.heartBeat.map((element, index2) => {
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
      setHeartBeatData(final);
    }
  }, [props.heartBeat]);

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
*/
  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        styles.flex1,
        styles.fullSize,
        styles.m10,
      ]}>
      <HeartMeasure data={heartBeatData} instantData={actualHeartBeatData} />
    </View>
  );
}

const styles = StyleSheet.create({});
