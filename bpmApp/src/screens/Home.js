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
  const {user} = props;
  const [actualHeartBeatData, setActualHeartBeatData] = useState({
    status: 'loading',
  });
  const [stepsData, setStepsData] = useState({
    status: 'loading',
  });

  useEffect(() => {
    const {getActualHeartBeatData, getActualStepsData, refreshUserInfo} = props;

    refreshUserInfo();

    //console.log(props.user);
    //getActualHeartBeatData();
    //getActualStepsData();
  }, []);

  useEffect(() => {
    const {heartBeatInstant} = props;
    //console.log('aaa', heartBeatInstant);

    if (heartBeatInstant != null) {
      setActualHeartBeatData(heartBeatInstant);
    }
  }, [props.heartBeatInstant]);

  useEffect(() => {
    const {stepsInstant} = props;

    if (stepsInstant != null) {
      setStepsData(stepsInstant);
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
        heartBeat: actualHeartBeatData.value,
        steps: stepsData.value,
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
      <Header navigation={props.navigation} name={user.userInfo.name} />
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
