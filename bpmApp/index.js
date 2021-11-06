/**
 * @format
 */

import {AppRegistry, NativeModules, NativeEventEmitter} from 'react-native';

import App from './App';
import {name as appName} from './app.json';
import Ble from './src/components/Ble/BleClass';
import SocketClient from './src/Networking/client';
import {store} from './src/store';
import {setActualHeartBeat} from './src/store/modules/heartBeatInstant/Actions';
import {setActualSteps} from './src/store/modules/stepsInstant/Actions';

const MyHeadlessTask = async () => {
  const socket = new SocketClient();
  socket.initSocket(store.dispatch, store.getState().user.uuid);
  //socket.joinSession(store.getState().user.uuid);

  Ble.setProps({
    setActualHeartBeat: data => {
      store.dispatch(setActualHeartBeat(data));
    },
    setActualSteps: data => {
      store.dispatch(setActualSteps(data));
    },
  });

  Ble.init();

  await Ble.RetrieveConnected();
  const peripheral = Ble.getPeripheral();

  Ble.testPeripheral(peripheral[0]);

  return () => {
    Ble.clean();
  };
};

const MyHeadlessTask1 = async () => {
  const socket = new SocketClient();
  socket.initSocket();

  socket.joinSession(store.getState().user.uuid);
};

AppRegistry.registerHeadlessTask('Heartbeat', () => MyHeadlessTask);
AppRegistry.registerHeadlessTask('Notification', () => MyHeadlessTask);

AppRegistry.registerComponent(appName, () => App);
