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
import AppMessageNotification from './components/AppMessageNotification';

import Home from './containers/Home';
import HeartBeat from './containers/HeartBeat';
import Steps from './containers/Steps';
import AlertScreen from './containers/Alert';
import MedicalRecord from './containers/MedicalRecord';
import EmergencyContacts from './containers/EmergencyContacts';
import Login from './containers/Login';
import TypeAuthCode from './containers/TypeAuthCode';
import FirstRegister from './containers/FirstRegister';
import Monitor from './containers/Monitor';
import DetailsMonitor from './containers/DetailsMonitor';

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
  const onLogout = props.extra.onLogout;
  const user = props.extra.user;
  return (
    <Drawer.Navigator
      drawerContent={props => customDrawerContent(props, onLogout, user)}>
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
            <EmergencyContacts {...props} />
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
            <MedicalRecord {...props} />
          </MainTemplate>
        )}
      </RootStack.Screen>
    </RootStack.Navigator>
  );
}

const customDrawerContent = (props, onLogout, user) => {
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
          //styles.mb40,
        ]}>
        <Text
          style={[
            {
              fontSize: variables.fontNormal,
              color: variables.darkGray2,
            },
          ]}>
          {user.userInfo.name}
        </Text>
      </View>
      <View
        style={[
          styles.row,
          styles.centerXY,
          styles.mr20,
          styles.mt10,
          styles.mb40,
        ]}>
        <Text style={[styles.bold, {fontSize: variables.fontSmall + 2}]}>
          {user.uuid}
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
        {user.roles.findIndex(item => item == 'ROLE_RESPONSIBLE') != -1 && (
          <DrawerItem
            label={() => (
              <Text
                style={[
                  styles.colorPrimary,
                  {marginLeft: -20, fontSize: variables.fontNormal},
                ]}>
                Monitorar
              </Text>
            )}
            icon={() => (
              <Ionicons
                name="color-filter-outline"
                size={20}
                color={variables.darkGray3}
              />
            )}
            onPress={() => {
              navigate('Monitor');
            }}
          />
        )}
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
        ]}
        onPress={() => {
          onLogout();
        }}>
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

    this.triggerInterval();
    //const isHermes = () => !!global.HermesInternal;
  }

  triggerInterval() {
    const {refreshUserInfo, user} = this.props;
    setInterval(() => {
      if (user.isAuthenticated == true) refreshUserInfo();
    }, 30000);
  }

  header() {
    return <Text style={{color: '#000', fontSize: 30}}> Pronto </Text>;
  }

  routeFirstAccess() {
    const {user, setErrorToFalse, setSuccessToFalse} = this.props;

    return (
      <SafeAreaView style={[{flex: 1}, {backgroundColor: variables.primary}]}>
        <AppMessageNotification
          user={user}
          setErrorToFalse={setErrorToFalse}
          setSuccessToFalse={setSuccessToFalse}
        />
        <NavigationContainer ref={navigationRef}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={variables.primary}
          />

          <RootStack.Navigator>
            <RootStack.Screen
              options={{headerShown: false}}
              name="FirstRegister"
              component={FirstRegister}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }

  routePhoneAuth() {
    const {user, setErrorToFalse, setSuccessToFalse} = this.props;

    return (
      <SafeAreaView style={[{flex: 1}, {backgroundColor: variables.primary}]}>
        <AppMessageNotification
          user={user}
          setErrorToFalse={setErrorToFalse}
          setSuccessToFalse={setSuccessToFalse}
        />
        <NavigationContainer ref={navigationRef}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={variables.primary}
          />

          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <RootStack.Screen name="TypeAuthCode" component={TypeAuthCode} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }

  routeLogged() {
    // let {onLogout} = this.props;
    const {user, setErrorToFalse, setSuccessToFalse} = this.props;

    return (
      <SafeAreaView style={[{flex: 1}, {backgroundColor: variables.primary}]}>
        <AppMessageNotification
          user={user}
          setErrorToFalse={setErrorToFalse}
          setSuccessToFalse={setSuccessToFalse}
        />
        <NavigationContainer ref={navigationRef}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={variables.primary}
          />
          <RootStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: variables.primary,
              },
              headerTintColor: '#0A0A0A',
              headerTitleStyle: {
                fontSize: variables.fontLarger,
                fontWeight: '100',
              },
            }}>
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
              options={{headerShown: true, title: 'Voltar'}}
              name="MedicalRecord">
              {props => <MedicalRecord {...props} extra={this.props} />}
            </RootStack.Screen>
            <RootStack.Screen
              options={{headerShown: true, title: 'Voltar'}}
              name="EmergencyContacts">
              {props => <EmergencyContacts {...props} extra={this.props} />}
            </RootStack.Screen>
            <RootStack.Screen
              options={{headerShown: true, title: 'Voltar'}}
              name="Monitor">
              {props => <Monitor {...props} extra={this.props} />}
            </RootStack.Screen>
            <RootStack.Screen
              options={{headerShown: true, title: 'Voltar'}}
              name="DetailsMonitor">
              {props => <DetailsMonitor {...props} extra={this.props} />}
            </RootStack.Screen>
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }

  routeNotLogged() {
    const {user, setErrorToFalse, setSuccessToFalse} = this.props;

    return (
      <SafeAreaView style={[{flex: 1}, {backgroundColor: '#FFF'}]}>
        <AppMessageNotification
          user={user}
          setErrorToFalse={setErrorToFalse}
          setSuccessToFalse={setSuccessToFalse}
        />
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Login">
            <RootStack.Screen name="Login" component={Login} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }

  render() {
    const {user} = this.props;
    if (user.isAuthenticated && user.roles == null)
      return this.routeFirstAccess();
    if (user.isAuthenticated) return this.routeLogged();
    if (user.loginMethod === 'phone') return this.routePhoneAuth();
    return this.routeNotLogged();
  }
}
