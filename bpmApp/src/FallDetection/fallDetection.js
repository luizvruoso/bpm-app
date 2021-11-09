import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  NativeModules,
} from 'react-native';
import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';
import {map, filter} from 'rxjs/operators';

const {Notification} = NativeModules;

class FallDetection {
  history = [
    {
      biggerAxis: 'y',
      x: 0,
      y: 0,
      z: 0,
    },
  ];
  lastDelta = {
    x: 0,
    y: 0,
    z: 0,
  };
  detect() {
    Notification.loadPredictionFile();

    setUpdateIntervalForType(SensorTypes.accelerometer, 1000); // defaults to 100ms
    //setUpdateIntervalForType(SensorTypes.gyroscope, 1000);

    subscription = accelerometer.subscribe(dados => {
      const payload = this.generatePayloadToPredict(dados.x, dados.y, dados.z);

      this.history.push(payload);
      this.calculateDelta(payload);
      //console.log('Values', payload);
      //console.log('Delta', this.lastDelta);
      if (this.lastDelta.y >= 3) {
        let result = Notification.predict(payload.x, payload.y, payload.z);

        if (result >= 0.5) console.log('Acerto', result, this.lastDelta);
        else console.log('Erro', result, this.lastDelta);
      }
    });
  }

  calculateDelta(payload) {
    let lastData = this.history[this.history.length - 2];

    this.lastDelta = {
      x: payload.x - lastData.x,
      y: payload.y - lastData.y,
      z: payload.z - lastData.z,
    };
    //console.log(payload);

    //console.log(this.lastDelta);
  }

  generatePayloadToPredict(dadosX, dadosY, dadosZ) {
    if (dadosX > dadosY && dadosX > dadosZ) {
      return {
        biggerAxis: 'x',
        x: dadosY,
        y: dadosX - 9.81,
        z: dadosZ,
      };
    } else if (dadosY > dadosX && dadosY > dadosZ) {
      return {
        biggerAxis: 'y',
        x: dadosX,
        y: dadosY - 9.81,
        z: dadosZ,
      };
    } else {
      return {
        biggerAxis: 'z',
        x: dadosX,
        y: dadosZ - 9.81,
        z: dadosY,
      };
    }
  }
}
export default FallDetection;
