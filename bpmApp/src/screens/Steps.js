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
import StepsMeasure from '../components/StepsMeasure';
import {convertDate} from '../assets/utils';
export default function Steps(props) {
  const [stepsData, setStepsData] = useState({
    status: 'loading',
  });
  const [instantStepsData, setInstantStepsData] = useState({
    status: 'loading',
  });

  useEffect(() => {
    let {getActualStepsData, getSteps} = props;
    getActualStepsData();
    getSteps();
  }, []);

  useEffect(() => {
    if (
      props.steps.hasOwnProperty('status') &&
      (props.steps.status == 'loading' || props.steps.status == 'error')
    ) {
      setStepsData({
        status: 'loading',
      });
    } else if (props.steps != null) {
      let final = [];

      props.steps.map((item, index) => {
        let indexCtrl = final.findIndex((element, index) => {
          return (
            convertDate(element.date, false) == convertDate(item.time, false)
          );
        });
        if (indexCtrl == -1) {
          let sum = 0;
          props.steps.map((element, index2) => {
            if (
              convertDate(element.time, false) == convertDate(item.time, false)
            ) {
              sum += parseFloat(element.value);
            }
          });

          final.push({
            date: convertDate(item.time, false),
            time: item.time,
            value: sum,
          });
        }
      });
      setStepsData(final);
    }
  }, [props.steps]);
  useEffect(() => {
    if (
      props.stepsInstant.hasOwnProperty('status') &&
      (props.stepsInstant.status == 'loading' ||
        props.stepsInstant.status == 'error')
    ) {
      setInstantStepsData({
        status: 'loading',
      });
    } else if (props.stepsInstant != null) {
      let final = [];
      let sum = 0;
      props.stepsInstant.map((item, index) => {
        sum += parseFloat(item.value);
      });

      setInstantStepsData([
        {
          time: props.stepsInstant[0].time,
          value: sum,
        },
      ]);
    }
  }, [props.stepsInstant]);
  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        styles.flex1,
        styles.fullSize,
        styles.m10,
      ]}>
      <StepsMeasure stepsData={stepsData} instantStepsData={instantStepsData} />
    </View>
  );
}

const styles = StyleSheet.create({});
