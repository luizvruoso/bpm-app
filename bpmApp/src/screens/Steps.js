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
    const {stepsInstant, steps, getActualStepsData, getSteps} = props;
    if (steps.length > 0) {
      setStepsData(steps);
    }

    if (stepsInstant != null) {
      setInstantStepsData(stepsInstant);
    }
    //getActualStepsData();
    //getSteps();
  }, []);

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
