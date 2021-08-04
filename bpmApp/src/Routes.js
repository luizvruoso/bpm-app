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
  Text,
} from 'react-native';
import React, {Component} from 'react';
import {Icon} from 'react-native-elements'; //https://fonts.google.com/icons?selected=Material+Icons
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContent,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Home from './containers/Home';
import HeartBeat from './containers/HeartBeat';
import Steps from './containers/Steps';
import AlertScreen from './containers/Alert';
import {variables} from './assets/variables';
import MainTemplate from './components/MainTemplate';
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
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={() => (
            <Text style={[styles.colorPrimary, {marginLeft: -20}]}>Sair</Text>
          )}
          icon={() => (
            <Icon name="logout" size={20} color={variables.primary} />
          )}
          onPress={() => {
            //onLogout();
          }}
        />
      </DrawerContentScrollView>
    );
  }

  header() {
    return <Text style={{color: '#000', fontSize: 30}}> Pronto </Text>;
  }

  routeNotLogged() {
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
              headerShown: true,
              title: 'Batimentos',
            }}>
            {props => (
              <MainTemplate {...props}>
                <HeartBeat />
              </MainTemplate>
            )}
          </Drawer.Screen>

          <Drawer.Screen
            options={{
              //headerShown: true,
              title: 'Passos',
            }}
            name="Steps"
            component={Steps}
          />
          <Drawer.Screen
            options={{
              //headerShown: true,
              title: 'Alerta',
            }}
            name="Alert"
            component={AlertScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  render() {
    return this.routeNotLogged();
  }
}
