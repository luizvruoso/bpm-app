/*
 * DOCUMENTATION: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 **/

/*
 * DOCUMENTATION: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 **/

import {
  Image,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContent,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {variables} from './assets/variables';
import MainTemplate from './components/MainTemplate';
import styles from './assets/globals';

import Home from './containers/Home';
import HeartBeat from './containers/HeartBeat';
import Steps from './containers/Steps';
import AlertScreen from './containers/Alert';
import MedicalRecord from './containers/MedicalRecord';
import EmergencyContacts from './containers/EmergencyContacts';
import Login from './containers/Login';

const navigationRef = React.createRef();

const RootStack = createStackNavigator();

const Drawer = createDrawerNavigator();

export function navigate(name, params) {
  //USADO PARA ABRIR UMA PAGINA MESMO QUE SEJA FORA DE UM COMPONENTE
  navigationRef.current && navigationRef.current.navigate(name, params);
}

export function navigatePop() {
  //let a = navigationRef.current?.getCurrentScreenStack();
  //CommonActions
  navigationRef.current?.dispatch(StackActions.pop());
}

const headerBackgroundDefault = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={variables.gradient}
      style={[styles.fullWidth, styles.centerY, {height: 60}]}
    />
  );
};

const basicStylesOption = () => {
  return {
    headerTitleStyle: {color: variables.white},
    headerBackground: headerBackgroundDefault,
    headerTintColor: variables.white,
  };
};

export default class Routes extends Component {
  constructor(props) {
    super(props);

    //const isHermes = () => !!global.HermesInternal;
  }

  metricsRoute() {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          //options={{headerShown: false}}
          name="HeartBeat"
          component={HeartBeat}
          options={{title: 'Batimentos'}}
        />
        <RootStack.Screen
          //options={{headerShown: false}}
          name="Steps"
          component={Steps}
          options={{title: 'Passos'}}
        />
        <RootStack.Screen
          //options={{headerShown: false}}
          name="Alert"
          component={AlertScreen}
          options={{title: 'Alerta'}}
        />
      </RootStack.Navigator>
    );
  }

  customDrawerContent(props, onLogout) {
    return (
      <View
        style={[
          styles.flex1,
          {backgroundColor: variables.primary, flex: 1, height: '100%'},
        ]}>
        <View style={[styles.row, styles.centerXY, styles.mr20, styles.mt10]}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Image
              style={{
                borderRadius: 40,
                height: 80,
                width: 80,
              }}
              source={require('./assets/img/profile/profile.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.row,
            styles.centerXY,
            styles.mr20,
            styles.mt10,
            styles.mb40,
          ]}>
          <Text
            style={[
              {
                fontSize: variables.fontNormal,
                fontWeight: '100',
                color: variables.darkGray2,
              },
            ]}>
            Jorge Cerrote Manjano
          </Text>
        </View>

        <DrawerContentScrollView {...props} style={{flex: 2}}>
          <DrawerItem
            label={() => (
              <Text
                style={[
                  styles.colorPrimary,
                  {marginLeft: -20, fontSize: variables.fontNormal},
                ]}>
                Ficha Médica
              </Text>
            )}
            icon={() => (
              <Ionicons name="medical" size={20} color={variables.darkGray3} />
            )}
            onPress={() => {
              navigate('MedicalRecord');
            }}
          />
          <DrawerItem
            label={() => (
              <Text
                style={[
                  styles.colorPrimary,
                  {marginLeft: -20, fontSize: variables.fontNormal},
                ]}>
                Pulseira
              </Text>
            )}
            icon={() => (
              <Ionicons name="watch" size={20} color={variables.darkGray3} />
            )}
            onPress={() => {
              //onLogout();
            }}
          />
          <DrawerItem
            label={() => (
              <Text
                style={[
                  styles.colorPrimary,
                  {marginLeft: -20, fontSize: variables.fontNormal},
                ]}>
                Contatos de Emergência
              </Text>
            )}
            icon={() => (
              <Ionicons
                name="alert-circle"
                size={20}
                color={variables.darkGray3}
              />
            )}
            onPress={() => {
              navigate('EmergencyContacts');
            }}
          />
          <DrawerItem
            label={() => (
              <Text
                style={[
                  styles.colorPrimary,
                  {marginLeft: -20, fontSize: variables.fontNormal},
                ]}>
                Ajustes
              </Text>
            )}
            icon={() => (
              <Icon name="settings" size={20} color={variables.darkGray3} />
            )}
            onPress={() => {
              //onLogout();
            }}
          />

          {/*<DrawerItemList {...props} />*/}
        </DrawerContentScrollView>

        <TouchableOpacity
          style={[
            styles.row,
            styles.mb40,
            styles.ml20,
            styles.textVerticalCenter,
            {width: '100%'},
          ]}>
          <Icon name="logout" size={25} color={variables.darkGray3} />
          <Text
            style={[
              {marginLeft: 20},
              styles.textVerticalCenter,
              styles.colorPrimary,
              {fontSize: variables.fontNormal},
            ]}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  header() {
    return <Text style={{color: '#000', fontSize: 30}}> Pronto </Text>;
  }

  routeLogged() {
    // let {onLogout} = this.props;
    return (
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          drawerContent={props => this.customDrawerContent(props)}>
          <Drawer.Screen
            options={
              {
                //headerShown: true,
              }
            }
            name="Home"
            component={Home}
          />
          <Drawer.Screen
            name="HeartBeat"
            options={{
              headerShown: false,
              title: 'Batimentos',
            }}>
            {props => (
              <MainTemplate {...props}>
                <HeartBeat />
              </MainTemplate>
            )}
          </Drawer.Screen>

          <Drawer.Screen
            name="Steps"
            options={{
              headerShown: false,
              title: 'Passos',
            }}>
            {props => (
              <MainTemplate {...props}>
                <Steps />
              </MainTemplate>
            )}
          </Drawer.Screen>

          <Drawer.Screen
            options={{
              //headerShown: true,
              title: 'Alerta',
            }}
            name="Alert"
            component={AlertScreen}
          />

          <Drawer.Screen
            name="MedicalRecord"
            options={{
              headerShown: false,
              //title: 'Batimentos',
            }}>
            {props => (
              <MainTemplate {...props}>
                <MedicalRecord />
              </MainTemplate>
            )}
          </Drawer.Screen>
          <Drawer.Screen
            name="EmergencyContacts"
            options={{
              headerShown: false,
              //title: 'Batimentos',
            }}>
            {props => (
              <MainTemplate {...props}>
                <EmergencyContacts />
              </MainTemplate>
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  routeNotLogged() {
    return (
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            headerMode: 'screen',
            headerTintColor: 'white',
            //headerStyle: {backgroundColor: 'tomato'},
          }}>
          <RootStack.Screen name="Login" component={Login} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
  render() {
    return this.routeNotLogged();
  }
}
