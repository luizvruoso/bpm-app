import React, {Component} from 'react';
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

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          {backgroundColor: variables.primary, height: '100%'},
          styles.flex1,
          styles.fullSize,
          styles.m10,
        ]}>
        <Header />
        <DashMenu items={['alert', 'steps', 'heartBeat']} />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({});
