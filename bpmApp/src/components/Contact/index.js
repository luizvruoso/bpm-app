import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/Ionicons';
import {variables} from '../../assets/variables';
import {navigate} from '../../Routes';
import {formatCel} from '../../assets/utils';

export default function Contact(props) {
  const items = props.items;

  return (
    <View>
      <ContactCard name={props.name} phone={props.phone} />
    </View>
  );
}

function ContactCard(props) {
  return (
    <View
      style={[
        {height: 150},
        styles.borderContainers,
        styles.mt10,

        styles.p20,
        {
          borderRadius: 20,
          borderBottomWidth: 8,
          borderBottomColor: variables.gray3,
          backgroundColor: '#fff',
          //borderWidth: 1,
          //borderColor: '#fff',
          //justifyContent: 'flex-start',
        },
        //styles.row,

        //styles.spaceAround,
      ]}>
      <View
        style={[styles.row, styles.my10, styles.centerXY, styles.spaceBetween]}>
        <Image
          style={{
            borderRadius: 40,
            height: 80,
            width: 80,
          }}
          source={require('../../assets/img/profile/profile.png')}
        />
        <View
          style={[styles.colorWhite, styles.ml10, {alignItems: 'flex-end'}]}>
          <View style={[styles.row]}>
            <Text
              style={[
                {
                  textAlign: 'right',
                  fontSize: variables.fontLarge,
                  color: variables.black,
                  fontWeight: 'bold',
                },
                //styles.textLeft,
                styles.textVerticalCenter,
              ]}>
              {props.name}
            </Text>
          </View>
          {props.phone != null && (
            <View style={[styles.row]}>
              <Text
                style={[
                  {
                    textAlign: 'right',
                    fontSize: variables.fontSmall + 4,
                    color: variables.black,
                    fontWeight: '300',
                  },
                  //styles.textLeft,
                  styles.textVerticalCenter,
                ]}>
                {formatCel(props.phone.slice(3, props.phone.length))}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
