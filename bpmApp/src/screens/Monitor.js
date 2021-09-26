import React, {Component, useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  FlatList,
  RefreshControl,
  TextInput,
} from 'react-native';
import DashMenu from '../components/DashMenu';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {variables} from '../assets/variables';
import styles from '../assets/globals';
import Contact from '../components/Contact';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchAPI} from '../services/api';
import {URL_API} from '../env/index';
import {navigate} from '../Routes';

export default function Monitor(props) {
  const [listMonitor, setListMonitor] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    props.getMonitoreds();
  }, []);

  useEffect(() => {
    const {monitored} = props;

    setListMonitor(monitored);
  }, [props.monitored]);

  const renderItem = useCallback(({item}) => {
    const {getMonitoreds} = props;

    return (
      <TouchableOpacity
        onPress={() => {
          navigate('DetailsMonitor', {
            item,
          });
        }}>
        <Contact name={item.completeName} phone={item.phone} />
      </TouchableOpacity>
    );
  }, []);

  const keyExtractor = useCallback((item, key) => {
    return item.completeName + key;
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    const {getMonitoreds} = props;

    //('T3523279', '2021-07-22');
    getMonitoreds();

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        styles.mx10,
        //styles.m10,
      ]}>
      <FlatList
        /*ref={ref => {
          this.flatListRef = ref;
        }}*/
        //windowSize={1}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
        keyExtractor={keyExtractor}
        style={[styles.mb20]}
        data={listMonitor}
        renderItem={renderItem}
      />
    </View>
  );
}
