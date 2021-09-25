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

  useEffect(() => {
    props.getMonitoreds();
  }, []);

  useEffect(() => {
    const {monitored} = props;

    setListMonitor(monitored);
  }, [props.monitored]);

  const renderItem = useCallback(({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate('DetailsMonitor', {item});
        }}>
        <Contact name={item.completeName} phone={item.phone} />
      </TouchableOpacity>
    );
  }, []);

  const keyExtractor = useCallback((item, key) => {
    return item.name;
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
        keyExtractor={keyExtractor}
        style={[styles.mb20]}
        data={listMonitor}
        renderItem={renderItem}
      />
    </View>
  );
}
