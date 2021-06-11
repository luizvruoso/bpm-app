
/*
 * DOCUMENTATION: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 **/

import {Image, ActivityIndicator, Alert} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import Home from './containers/Home';

const navigationRef = React.createRef();

const Stack = createStackNavigator();

const RootStack = createStackNavigator();

export function navigate(name, params) {
  //USADO PARA ABRIR UMA PAGINA MESMO QUE SEJA FORA DE UM COMPONENTE
  navigationRef.current && navigationRef.current.navigate(name, params);
}


export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  routeNotLogged() {
    return (
      <NavigationContainer ref={navigationRef} >
        <RootStack.Navigator>
          <RootStack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }

  
  render() {
    return this.routeNotLogged();
  }
}