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
    SensorTypes
  } from "react-native-sensors";
  import { map, filter } from "rxjs/operators";

  const {Notification} = NativeModules;

  data = [0, 0, 0, 0, 0, 0];
  variation = [];
  predict = 0;
  buffer = [0, 0, 0, 0, 0, 0];
  acerto = 0;
  erro = 0; 
  predict = false;

class FallDetection {

    detect() {
        Notification.loadPredictionFile();

        setUpdateIntervalForType(SensorTypes.accelerometer, 5000); // defaults to 100ms
        setUpdateIntervalForType(SensorTypes.gyroscope, 5000);

    console.log(Notification);
    subscription = accelerometer.subscribe((dados) => {
    
        var operation = 0;
        var dadosX = 0;
        var dadosY = 0;
        var dadosZ = 0;
  
        if(dados.x >= dados.y && dados.x >= dados.z) {
          operation = 1;
        } else if(dados.y >= dados.x && dados.y >= dados.z) {
          operation = 2;
        } else  {
          operation = 3;
        }
  
        if(operation == 1) {
          dados.x = dados.x - 9.81;
        }
        if(operation == 2) {
          dados.y = dados.y - 9.81;
        }
        if(operation == 3) {
          dados.z = dados.z - 9.81;
        }
  
        let deltaX = dados.x - dadosX;
        let deltaY = dados.y - dadosY;
        let deltaZ = dados.z - dadosZ;
  
        if(deltaX > 4 || deltaY > 4 || deltaZ > 4) {
            predict = 1;
        }
  
        data.push([dados.x, dados.y, dados.z]);
  
        console.log("X: ", dados.x, "Y: ", dados.y, "Z: ", dados.z);
  
        console.log("Dados: ", data);
        for (let i = data.length - 1; i < data.length; i++) {
            let op = 0;
            console.log("for")
            if(predict == 1) {
              op = Notification.predict(
                data[i][0],
                data[i][1],
                data[i][2]
              );
      
              console.log("OP: ", op);
              console.log("Data: " + data);
      
              if (op >= 0.5) {
                acerto += 1;
              }
              console.log("Predict da hora");
              console.log("Acerto: " + acerto, "Erro: " + erro, "Tamanho" + data.length);
      
              predict = 0;
            }
            else {
            if (( 
               (data[i][0] != null  && !Number.isNaN(data[i][0])) &&
               (data[i][1] != null  && !Number.isNaN(data[i][1])) &&
               (data[i][2] != null  && !Number.isNaN(data[i][2])))
              ) {
              op = Notification.predict(
                data[i][0],
                data[i][1],
                data[i][2]
              );
      
              if (op <= 0.49999) {
                erro += 1;
              }
            }
        }
      
          }
          data = [];
          console.log("Predict lixo")
          console.log("Acerto: " + acerto, "Erro: " + erro, "Tamanho" + data.length);
    });
    }
    
}
export default FallDetection;

