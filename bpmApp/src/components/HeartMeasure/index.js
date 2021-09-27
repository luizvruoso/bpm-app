import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/Ionicons';
import {variables} from '../../assets/variables';
import {navigate} from '../../Routes';
import {useCallback} from 'react';
import {convertDate, fromDateTimeGetTime} from '../../assets/utils';
export default function HeartMeasure(props) {
  const items = props.items;

  const heartBeatData = props.data;
  const instantData = props.instantData;
  const Component = useCallback(({item}) => {
    var max = item.content[0].value;
    var min = item.content[0].value;
    var average = 0;
    item.content.map(item2 => {
      if (max <= item2.value) max = item2.value;
      else if (min >= item2.value) min = item2.value;

      average += item2.value;
    });

    average = average / item.content.length;

    //console.log('dadsadsa', item.content[item.content.length - 1]);
    const data = {
      max,
      min,
      average,
      date: item.content[item.content.length - 1].time,
    };

    return <HeartBeat data={data} />;
  }, []);

  return (
    <View style={[styles.flex1]}>
      <HeartBeatFocus {...instantData} />
      <View style={[styles.flex1, {paddingBottom: 90}]}>
        <FlatList
          data={heartBeatData}
          keyExtractor={(item, index) => index}
          renderItem={Component}
        />
      </View>
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
        <Text style={[{color: variables.white}]}>
          {convertDate(props.date)}
        </Text>
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
            {parseInt(props.value)}
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
  //console.log(props);
  return (
    <View
      style={[
        {height: 160},
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
            {parseInt(props.data.average)}
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
            {fromDateTimeGetTime(props.data.date)}
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
            {parseInt(props?.data.min)}
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
            {parseInt(props?.data.max)}
          </Text>
        </View>
      </View>
    </View>
  );
}
