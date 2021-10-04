import React, {useCallback} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/Ionicons';
import {variables} from '../../assets/variables';
import {navigate} from '../../Routes';
import {convertDate, fromDateTimeGetTime} from '../../assets/utils';

export default function index(props) {
  const items = props.items;
  const stepsData = props.stepsData;
  const instantStepsData = props.instantStepsData;
  const Component = useCallback(({item}) => {
    //console.log('dadsadsa', item.content[item.content.length - 1]);
    const data = {
      sum: item.content[item.content.length - 1].value,
      date: item.content[item.content.length - 1].time,
    };

    return <StepsMeasure data={data} />;
  }, []);
  return (
    <View style={[styles.flex1]}>
      <StepsMeasureFocus instantStepsData={instantStepsData} />
      <View style={[styles.flex1, {paddingBottom: 10}]}>
        <FlatList
          data={stepsData}
          keyExtractor={(item, index) => index}
          renderItem={Component}
        />
      </View>
    </View>
  );
}

function StepsMeasureFocus(props) {
  const instantStepsData = props.instantStepsData;
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
        <Text style={[{color: variables.darkGray3}]}>
          {fromDateTimeGetTime(instantStepsData?.date)}
        </Text>
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
            {isNaN(parseInt(instantStepsData?.value))
              ? '0'
              : parseInt(instantStepsData?.value)}
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
        {height: 140},
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
        <Text style={[{color: variables.darkGray4}]}>
          {convertDate(props.data.date)}
        </Text>
      </View>
      <View
        style={[
          styles.row,
          styles.my5,
          {flex: 1, alignSelf: 'flex-start'},
          styles.centerXY,
        ]}>
        <Image
          style={{height: 60, width: 60}}
          source={require('../../assets/img/icon/littleSalsaWalk.png')}
        />
        <View
          style={[styles.colorWhite, styles.row, styles.ml10, styles.centerXY]}>
          <Text
            style={[
              {fontSize: 40, color: variables.darkGray4},
              styles.bold,
              styles.textLeft,
              styles.textVerticalCenter,
            ]}>
            {parseInt(props.data.sum)}
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
