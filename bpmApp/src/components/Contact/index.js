import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../assets/globals';
import Icon from 'react-native-vector-icons/Ionicons';
import {variables} from '../../assets/variables';
import {navigate} from '../../Routes';

export default function Contact(props) {
  const items = props.items;

  return (
    <View>
      <TouchableOpacity style={[styles.row, styles.mt10]}>
        <Icon name="add-circle" size={variables.iconLg} color={'#053245'} />
        <Text
          style={[
            {
              fontSize: variables.fontLarge,
              textAlignVertical: 'center',
              marginLeft: 8,
            },
          ]}>
          Contato
        </Text>
      </TouchableOpacity>
      <ContactCard name="Michael Jorge" />
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
      <View style={[styles.row, styles.my10]}>
        <Image
          style={{
            borderRadius: 40,
            height: 80,
            width: 80,
          }}
          source={require('../../assets/img/profile/profile.png')}
        />
        <View style={[styles.colorWhite, styles.row, styles.ml10]}>
          <Text
            style={[
              {
                fontSize: variables.fontLarge,
                color: variables.black,
                fontWeight: '300',
              },
              //styles.textLeft,
              styles.textVerticalCenter,
            ]}>
            {props.name}
          </Text>
        </View>
      </View>
    </View>
  );
}
