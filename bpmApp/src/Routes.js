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
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

function HeartBeatRoute(props) {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        options={{headerShown: false}}
        name="HeartBeat"
        //component={HeartBeat}
        //options={{title: 'Batimentos'}}
      >
        {props => (
          <MainTemplate {...props}>
            <HeartBeat />
          </MainTemplate>
        )}
      </RootStack.Screen>
    </RootStack.Navigator>
  );
}

function AlertRoute(props) {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        options={{headerShown: false}}
        name="Alert"
        component={AlertScreen}
        //options={{title: 'Alerta'}}
      />
    </RootStack.Navigator>
  );
}

function StepsRoute(props) {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        options={{headerShown: false}}
        name="Steps"
        //component={Steps}
        //options={{title: 'Passos'}}
      >
        {props => (
          <MainTemplate {...props}>
            <Steps />
          </MainTemplate>
        )}
      </RootStack.Screen>
    </RootStack.Navigator>
  );
}

function Root(props) {
  return (
    <Drawer.Navigator drawerContent={props => customDrawerContent(props)}>
      <Drawer.Screen
        options={
          {
            //headerShown: true,
          }
        }
        name="Home"
        component={Home}
      />
    </Drawer.Navigator>
  );
}
function EmergencyContactsRoute(props) {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
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
      </RootStack.Screen>
    </RootStack.Navigator>
  );
}
function MedicalRecordRoute(props) {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
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
      </RootStack.Screen>
    </RootStack.Navigator>
  );
}

const customDrawerContent = (props, onLogout) => {
  return (
    <View
      style={[
        styles.flex1,
        {
          backgroundColor: variables.primary,
          flex: 1,
          height: '100%',
          //marginTop: 20,
        },
      ]}>
      <View style={[styles.row, styles.centerXY, styles.mr20, styles.mt10]}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
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
            <Ionicons
              name="settings-outline"
              size={20}
              color={variables.darkGray3}
            />
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
};

export default class Routes extends Component {
  constructor(props) {
    super(props);

    //const isHermes = () => !!global.HermesInternal;
  }

  header() {
    return <Text style={{color: '#000', fontSize: 30}}> Pronto </Text>;
  }

  routeLogged() {
    // let {onLogout} = this.props;
    return (
      <SafeAreaView style={[{flex: 1}, {backgroundColor: '#FFF'}]}>
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
          <RootStack.Navigator>
            <RootStack.Screen options={{headerShown: false}} name="Root">
              {props => <Root {...props} extra={this.props} />}
            </RootStack.Screen>
            <RootStack.Screen options={{headerShown: false}} name="Steps">
              {props => <StepsRoute {...props} extra={this.props} />}
            </RootStack.Screen>
            <RootStack.Screen options={{headerShown: false}} name="Alert">
              {props => <AlertRoute {...props} extra={this.props} />}
            </RootStack.Screen>
            <RootStack.Screen options={{headerShown: false}} name="HeartBeat">
              {props => <HeartBeatRoute {...props} extra={this.props} />}
            </RootStack.Screen>
            <RootStack.Screen
              options={{headerShown: false}}
              name="MedicalRecord">
              {props => <MedicalRecordRoute {...props} extra={this.props} />}
            </RootStack.Screen>
            <RootStack.Screen
              options={{headerShown: false}}
              name="EmergencyContacts">
              {props => (
                <EmergencyContactsRoute {...props} extra={this.props} />
              )}
            </RootStack.Screen>
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
  routeNotLogged() {
    return (
      <SafeAreaView style={[{flex: 1}, {backgroundColor: '#FFF'}]}>
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

          <RootStack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,

              //headerStyle: {backgroundColor: 'tomato'},
            }}>
            <RootStack.Screen name="Login" component={Login} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
  render() {
    let {user} = this.props;

    if (user.isAuthenticated) return this.routeLogged();
    return this.routeNotLogged();
  }
}
