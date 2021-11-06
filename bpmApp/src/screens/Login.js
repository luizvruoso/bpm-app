import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  NativeModules,
} from 'react-native';
import {variables} from '../assets/variables';
import styles from '../assets/globals';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvoidKeyboard from '../components/AvoidKeyboard';
import {navigate} from '../Routes';
import {formatCel} from '../assets/utils';
import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes
} from "react-native-sensors";
import { map, filter } from "rxjs/operators";

const {Notification} = NativeModules;

setUpdateIntervalForType(SensorTypes.accelerometer, 100); // defaults to 100ms
setUpdateIntervalForType(SensorTypes.gyroscope, 100);
var data = [0,0,0,0,0,0];
var buffer = [0,0,0,0,0,0];
var predict = false;


  /*const subscription = accelerometer
  .pipe(map(({ x, y, z }) => x + y + z), filter(speed => speed > 20))
  .subscribe(
    speed => console.log(`You moved your phone with ${speed}`),
    error => {
      console.log("The sensor is not available");
    }
  );

  console.log("Dados aqui: " + data)
  */

  var initialPosition = {x:0,y:0,z:0};
  var lastTimestamp = 0;
  var firstRound = true;
  const subscription4 = accelerometer.subscribe((dados)=>{
    if(firstRound){
        initialPosition = {x:dados.x,y:dados.y,z:dados.z};

        lastTimestamp = dados.timestamp;
        firstRound=false;
    }else{

      const deltaSX = dados.x - initialPosition.x;
      const deltaSY = dados.y - initialPosition.y;
      const deltaSZ = dados.z - initialPosition.z;

      const time = dados.timestamp - lastTimestamp;

      const velocidadeX = deltaSX / time;
      const velocidadeY = deltaSY / time;
      const velocidadeZ = deltaSZ / time;      

      initialPosition = [{x:dados.x}, {y:dados.y}, {z:dados.z}];
      lastTimestamp = dados.timestamp;

      console.log("Dados1: ", dados.x, dados.y, dados.z, velocidadeX, velocidadeY, velocidadeZ);
      data.push([dados.x, dados.y, dados.z, velocidadeX, velocidadeY, velocidadeZ]);
      buffer.push([dados.x, dados.y, dados.z, velocidadeX, velocidadeY, velocidadeZ]);
      if(buffer.length == 500) {
        predict = true;
        console.log("PREDICT TRUE")
      }
      console.log(data);
    }

    console.log("Dados2", dados);
  });




  


export default function Login(props) {
  const [phone, setPhone] = useState('');
  const [showCodView, setCodView] = useState(false);

  const {sendToken, validateToken, setPhoneAuth} = props;
  const aloha = () => {
    console.log("chanouts")
    Notification.loadPredictionFile();
    let acerto = 0;
    let erro = 0;
    let dataAcerto = 0;
    let dataErro = 0;
    //const data = data1;
    console.log(
      data[0],
      data[1],
      data[2],
      data[3],
      data[4],
      data[5],

    );
    /* Too see
    if(predict == true) {
      for (let i = 0; i < buffer.length; i++) {
        if (
          buffer[i][0] != null &&
          buffer[i][1] != null &&
          buffer[i][2] != null &&
          buffer[i][3] != null &&
          buffer[i][4] != null &&
          buffer[i][5] != null
        ) {
          console.log(
            buffer[i][0],
            buffer[i][1],
            buffer[i][2],
            buffer[i][3],
            buffer[i][4],
            buffer[i][5],
            'pos',
            i,
          );
          op = Notification.predict(
            buffer[i][0],
            buffer[i][1],
            buffer[i][2],
            buffer[i][3],
            buffer[i][4],
            buffer[i][5],
          );
  
          if (op >= 0.5) {
            acerto += 1;
          }
          if (op <= 0.49999) {
            erro += 1;
          }
  
          data = [0,0,0,0,0,0];
      }
      buffer = [0, 0, 0, 0, 0]
      console.log("Acerto: " + acerto, "Erro: " + erro, "Tamanho" + data.length);
      sleep(20000)
      }
    };*/
    for (let i = 0; i < data.length; i++) {
      let op = 0;

      if (
        data[i][0] != null &&
        data[i][1] != null &&
        data[i][2] != null &&
        data[i][3] != null &&
        data[i][4] != null &&
        data[i][5] != null
      ) {
        console.log(
          data[i][0],
          data[i][1],
          data[i][2],
          data[i][3],
          data[i][4],
          data[i][5],
          'pos',
          i,
        );
        op = Notification.predict(
          data[i][0],
          data[i][1],
          data[i][2],
          data[i][3],
          data[i][4],
          data[i][5],
        );

        console.log("OP: ", op);
        console.log("data: " + data);

        if (op >= 0.5) {
          acerto += 1;
        }
        if (op <= 0.49999) erro += 1;
      }

    }
    
    console.log("Acerto: " + acerto, "Erro: " + erro, "Tamanho" + data.length);
  };
  return (
    <SafeAreaView style={[styles.flex1, styles.bgWhite]}>
      <ImageBackground
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          width: '100%',
          height: '100%',
        }}
        source={require('../assets/img/login-background4.png')}>
        <View style={[styles.flex2, styles.centerXY]}>
          <Image
            style={{height: 70, width: 100}}
            source={require('../assets/img/logo3.png')}
          />
          <Text style={{color: '#FFF', fontSize: 15, marginTop: 5}}>
            Saúde. Segurança. Tranquilidade.
          </Text>
        </View>

        <View
          style={[
            styles.flex1,
            // styles.py10,
            {
              backgroundColor: '#FFF',
              justifyContent: 'center',
              paddingBottom: 10,
            },
          ]}>
          <TouchableOpacity onPress={() => aloha()}>
            <View>
              <Text>Acionaaaar</Text>
            </View>
          </TouchableOpacity>
          <AvoidKeyboard>
            <View style={[styles.p10]}>
              <View style={[styles.row, styles.mt20, styles.mb10]}>
                <TextInput
                  placeholder="(21) 55555-1234"
                  placeholderTextColor={'#88b648'}
                  value={formatCel(phone)}
                  onChangeText={setPhone}
                  style={[
                    {
                      backgroundColor: '#FFF',
                      width: '100%',
                      borderWidth: 1,
                      borderColor: '#ccc',
                      fontSize: 16,
                      height: 50,
                      color: '#88b648',
                      width: '100%',
                      borderRadius: 5,
                    },
                    styles.p10,
                  ]}
                />
              </View>

              <View style={[styles.row, styles.mt20]}>
                <TouchableOpacity
                  onPress={() => {
                    if (phone.length == 16) {
                      sendToken(phone);
                      setPhoneAuth({phone});
                      //navigate('TypeAuthCode', {phone: phone});
                    }
                  }}
                  style={[
                    styles.row,
                    //styles.bgWhite,
                    styles.btnBorderRadius,
                    styles.centerXY,
                    {
                      width: '100%',
                      height: 60,
                      borderColor: '#FFF',
                      backgroundColor: '#88b648',
                    },
                  ]}>
                  <Text
                    style={[styles.textCenter, {fontSize: 18, color: '#fff'}]}>
                    Enviar Código
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </AvoidKeyboard>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
