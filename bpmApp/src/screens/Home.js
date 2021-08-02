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
        <DashMenu type={'alert'} />
        <DashMenu type={'steps'} />
        <DashMenu type={'heartBeat'} />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({});
