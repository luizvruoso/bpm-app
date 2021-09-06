import React, {
  Component,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Button,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import {convertDate} from '../assets/utils';
import DashMenu from '../components/DashMenu';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {variables} from '../assets/variables';
import styles from '../assets/globals';
import Header from '../components/Header';
import HeartMeasure from '../components/HeartMeasure';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';

export default function MedicalRecord(props) {
  console.log(props.user);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [mounted, setMounted] = useState(true);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    birth: '',
    weight: '',
    height: '',
    sex: '',
    alzheimer: '',
    wheelchairUser: '',
  });
  const [name, setName] = useState(props.user.userInfo.name);
  const [phone, setPhone] = useState(props.user.userInfo.phone);
  const [birth, setBirth] = useState(props.user.userInfo.birth);
  const [heigth, setHeigth] = useState(props.user.userInfo.heigth);
  const [weight, setWeight] = useState(props.user.userInfo.weight);
  const [sex, setSex] = useState(props.user.userInfo.sex);
  const [alzheimer, setAlzheimer] = useState(props.user.userInfo.alzheimer);
  const [wheelchairUser, setWheelchairUser] = useState(
    props.user.userInfo.alzheimer,
  );

  useEffect(() => {
    const {user} = props;
    setForm({
      name: user.userInfo.name,
      phone: user.userInfo.phone,
      birth: user.userInfo.birth,
      weight: user.userInfo.weight,
      height: user.userInfo.height,
      sex: user.userInfo.sex,
      alzheimer: user.userInfo.alzheimer,
      wheelchairUser: user.userInfo.wheelchairUser,
    });
  }, []);

  const handleBlurInput = () => {
    const {saveData} = props;
    console.log('ddd', heigth);
    saveData({
      name,
      phone,
      birth,
      heigth: heigth,
      weight,
      sex,
      alzheimer,
      wheelchairUser,
    });
  };

  const handleChange = name => {
    return value => {
      setForm({
        ...form,
        [name]: value,
      });
    };
  };

  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        styles.mt10,
        styles.mb10,
      ]}>
      {/*<View style={[styles.row, {position: 'absolute', top: -55, right: 0}]}>
        <TouchableOpacity
          onPress={handleBlurInput}
          style={[{padding: 10, backgroundColor: '#1D00AB', borderRadius: 10}]}>
          <Text style={[styles.textRight, {color: 'white'}]}>Salvar</Text>
        </TouchableOpacity>
    </View>*/}
      <AvoidKeyboard>
        <ScrollView style={[styles.flex1, {marginBottom: 80}]}>
          <View style={[styles.row, styles.centerXY, styles.mr20]}>
            <ImageUser />
            <View
              style={[
                {
                  borderRadius: 40,
                  height: 30,
                  width: 30,
                  backgroundColor: '#FFF',
                  position: 'absolute',
                  bottom: -5,
                  right: 125,
                  borderWidth: 0.5,
                  borderColor: '#ccc',
                },
                styles.centerXY,
              ]}>
              <Icon
                name={'edit'}
                color={variables.darkGray1}
                size={variables.iconSm}
              />
            </View>
          </View>

          <NomeInput
            handleBlurInput={handleBlurInput}
            handleChange={handleChange}
            name={name}
            setName={setName}
          />

          <CelularInput
            handleBlurInput={handleBlurInput}
            handleChange={handleChange}
            phone={phone}
            setPhone={setPhone}
          />

          <BirthInput
            handleBlurInput={handleBlurInput}
            handleChange={handleChange}
            birth={birth}
            setBirth={setBirth}
          />

          <WeightInput
            handleBlurInput={handleBlurInput}
            handleChange={handleChange}
            weight={weight}
            setWeight={setWeight}
          />

          <HeigthInput
            handleBlurInput={handleBlurInput}
            handleChange={handleChange}
            heigth={heigth}
            setHeigth={setHeigth}
          />

          <SexInput
            handleBlurInput={handleBlurInput}
            handleChange={handleChange}
            sex={sex}
            setSex={setSex}
          />

          <AlzheimerInput
            handleBlurInput={handleBlurInput}
            handleChange={handleChange}
            alzheimer={alzheimer}
            setAlzheimer={setAlzheimer}
          />

          <WheelchairInput
            handleBlurInput={handleBlurInput}
            handleChange={handleChange}
            wheelchairUser={wheelchairUser}
            setWheelchairUser={setWheelchairUser}
          />

          <View style={{marginBottom: 30}}></View>
        </ScrollView>
      </AvoidKeyboard>
    </View>
  );
}

function ImageUser(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          //navigation.openDrawer();
        }}>
        <Image
          key={'img'}
          style={{
            borderRadius: 50,
            height: 100,
            width: 100,
            borderWidth: 0.2,
            borderColor: '#ccc',
          }}
          source={{
            uri: 'https://scontent.fvcp1-1.fna.fbcdn.net/v/t1.6435-9/75199895_570256540182686_4591403748336599040_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=ZiiIsURFBg8AX_kVmGN&_nc_ht=scontent.fvcp1-1.fna&oh=8b498cf0392cf9a7a7f41fc65fa19b55&oe=615ABE1B',
            cache: 'force-cache',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function NomeInput(props) {
  useEffect(() => {}, [props.name]);

  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>Nome:</Text>
      <TextInput
        onBlur={props.handleBlurInput}
        autoCorrect={false}
        name="name"
        value={props.name}
        onChangeText={props.setName}
        style={[styles.input, {borderWidth: 1, borderColor: '#CCC'}]}
        placeholderTextColor={variables.gray3}
        placeholder="Antonio Roberto"
      />
    </View>
  );
}

function CelularInput(props) {
  useEffect(() => {}, [props.phone]);

  const formatCel = v => {
    //var v = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    var r = v.replace(/\D/g, '');
    r = r.replace(/^0/, '');
    if (r.length > 10) {
      // 11+ digits. Format as 5+4.
      // r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '(0XX$1) $2-$3');
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '(0$1) $2-$3');
    } else if (r.length > 6) {
      // 6..10 digits. Format as 4+4
      //r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '(0XX$1) $2-$3');
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '(0$1) $2-$3');
    } else if (r.length > 2) {
      // 3..5 digits. Add (0XX..)
      //r = r.replace(/^(\d\d)(\d{0,5})/, '(0XX$1) $2');
      r = r.replace(/^(\d\d)(\d{0,5})/, '(0$1) $2');
    } else {
      // 0..2 digits. Just add (0XX
      //r = r.replace(/^(\d*)/, '(0XX$1');
      r = r.replace(/^(\d*)/, '(0$1');
    }
    return r;
  };

  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
        Celular:
      </Text>

      <TextInput
        onBlur={props.handleBlurInput}
        name="phone"
        onChangeText={props.setPhone}
        value={formatCel(props.phone)}
        placeholderTextColor={variables.gray3}
        style={[styles.input, {borderWidth: 1, borderColor: '#CCC'}]}
        placeholder="11 21345-8891"
      />
    </View>
  );
}

function BirthInput(props) {
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.birth != null && props.birth != date) setDate(props.birth);
  }, [props.birth]);

  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
        Data de Nascimento:
      </Text>
      <View
        style={[
          {
            marginBottom: 20,
            borderRadius: 5,
            flex: 1,
            borderColor: '#ccc',
            borderWidth: 1,
            padding: 10,
            height: 50,
            backgroundColor: '#fcfcfc',
          },
          styles.centerY,
        ]}>
        <TouchableOpacity
          style={[
            {fontSize: variables.fontLarge},
            styles.spaceBetween,
            styles.row,
          ]}
          onPress={() => setOpen(true)}>
          <Text style={[styles.mt5]}>
            {date == null ? 'Selecione uma data' : convertDate(date)}
          </Text>
          <Icon
            name="keyboard-arrow-down"
            size={variables.icon}
            // style={{marginTop: -5}}
          />
        </TouchableOpacity>

        <DatePicker
          locale={'pt-br'}
          mode={'date'}
          modal={true}
          open={open}
          date={new Date()}
          onConfirm={date => {
            setOpen(false);
            //setDate(new Date(date));

            props.setBirth(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </View>
  );
}

function WeightInput(props) {
  useEffect(() => {}, [props.weight]);

  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
        Peso (Kg):
      </Text>
      <TextInput
        onBlur={props.handleBlurInput}
        keyboardType="numeric"
        onChangeText={props.setWeight}
        value={props.weight}
        placeholderTextColor={variables.gray3}
        style={[styles.input, {borderWidth: 1, borderColor: '#CCC'}]}
        placeholder="90 Kg"
      />
    </View>
  );
}

function HeigthInput(props) {
  const [heigth, setHeigth] = useState('');
  useEffect(() => {}, [props.heigth]);

  const handleBlurInput = () => {
    props.setHeigth(heigth);
    console.log(heigth);
    props.handleBlurInput();
  };
  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
        Altura (cm):
      </Text>

      <TextInput
        onBlur={handleBlurInput}
        keyboardType="numeric"
        onChangeText={setHeigth}
        value={heigth}
        placeholderTextColor={variables.gray3}
        style={[styles.input, {borderWidth: 1, borderColor: '#CCC'}]}
        placeholder="193"
      />
    </View>
  );
}

function AlzheimerInput(props) {
  useEffect(() => {}, [props.alzheimer]);

  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
        Possui Alzheimer:
      </Text>
      <View
        style={[
          {
            marginBottom: 20,
            flex: 1,
            borderColor: '#ccc',
            borderWidth: 1,
            padding: 10,
            height: 50,
            backgroundColor: '#fcfcfc',
            borderRadius: 5,
          },
          styles.centerXY,
        ]}>
        <RNPickerSelect
          onClose={props.handleBlurInput}
          placeholder={{
            label: 'Selecione uma opção',
            value: null,
          }}
          Icon={() => {
            return (
              <Icon
                name="keyboard-arrow-down"
                size={variables.icon}
                style={{marginTop: -5}}
              />
            );
          }}
          onValueChange={props.setAlzheimer}
          items={[
            {label: 'Sim', value: 'true'},
            {label: 'Não', value: 'no'},
          ]}
        />
      </View>
    </View>
  );
}

function SexInput(props) {
  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>Sexo:</Text>
      <View
        style={[
          {
            marginBottom: 20,
            borderRadius: 5,
            flex: 1,
            borderColor: '#ccc',
            borderWidth: 1,
            padding: 10,
            height: 50,
            backgroundColor: '#fcfcfc',
          },
          styles.centerXY,
        ]}>
        <RNPickerSelect
          onClose={props.handleBlurInput}
          placeholder={{
            label: 'Selecione uma opção',
            value: null,
          }}
          Icon={() => {
            return (
              <Icon
                name="keyboard-arrow-down"
                size={variables.icon}
                style={{marginTop: -5}}
              />
            );
          }}
          onValueChange={props.setSex}
          items={[
            {label: 'Masculino', value: 'male'},
            {label: 'Feminino', value: 'female'},
          ]}
        />
      </View>
    </View>
  );
}

function WheelchairInput(props) {
  useEffect(() => {}, [props.wheelchairUser]);

  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
        Cadeirante:
      </Text>
      <View
        style={[
          {
            marginBottom: 20,
            flex: 1,
            borderColor: '#ccc',
            borderWidth: 1,
            padding: 10,
            height: 50,
            backgroundColor: '#fcfcfc',
            borderRadius: 5,
          },
          styles.centerXY,
        ]}>
        <RNPickerSelect
          onClose={props.handleBlurInput}
          placeholder={{
            label: 'Selecione uma opção',
            value: null,
          }}
          Icon={() => {
            return (
              <Icon
                name="keyboard-arrow-down"
                size={variables.icon}
                style={{marginTop: -5}}
              />
            );
          }}
          onValueChange={props.setWheelchairUser}
          items={[
            {label: 'Sim', value: 'true'},
            {label: 'Não', value: 'no'},
          ]}
        />
      </View>
    </View>
  );
}

function AvoidKeyboard(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={40}
      //behavior="position"
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>{props.children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
