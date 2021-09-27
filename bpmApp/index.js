/**
 * @format
 */

import {AppRegistry, NativeModules, NativeEventEmitter} from 'react-native';

import App from './App';
import {name as appName} from './app.json';
import Ble from './src/components/Ble/BleClass';
import {store} from './src/store';
import {setActualHeartBeat} from './src/store/modules/heartBeatInstant/Actions';
import {setActualSteps} from './src/store/modules/stepsInstant/Actions';

const MyHeadlessTask = async () => {
  Ble.setProps({
    setActualHeartBeat: data => {
      store.dispatch(setActualHeartBeat(data));
    },
    setActualSteps: data => {
      store.dispatch(setActualHeartBeat(data));
    },
  });

  Ble.init();

  await Ble.RetrieveConnected();
  const peripheral = Ble.getPeripheral();

  Ble.testPeripheral(peripheral[0]);
};

AppRegistry.registerHeadlessTask('Heartbeat', () => MyHeadlessTask);

AppRegistry.registerComponent(appName, () => App);
