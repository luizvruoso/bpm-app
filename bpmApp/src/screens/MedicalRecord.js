import React, {
  Component,
  useEffect,
  useState,
  useRef,
  useCallback,
  memo,
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
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import {convertDate, fromDate, fromDateToDate} from '../assets/utils';
import DashMenu from '../components/DashMenu';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {variables} from '../assets/variables';
import styles from '../assets/globals';
import Header from '../components/Header';
import HeartMeasure from '../components/HeartMeasure';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {launchImageLibrary} from 'react-native-image-picker';

function MedicalRecord(props) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [mounted, setMounted] = useState(true);
  const [photo, setPhoto] = useState(null);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: props.user.userInfo.name,
      phone: props.user.userInfo.phone,
      birth: props.user.userInfo.birth,
      height: props.user.userInfo.height,
      weight: props.user.userInfo.weight,
      sex: props.user.userInfo.sex,
      alzheimer: props.user.userInfo.alzheimer,
      wheelchair: props.user.userInfo.wheelchairUser,
    },
  });
  useEffect(() => {
    console.log(new Date(), props.user.userInfo);
  }, []);
  const onSubmit = data => send(data);

  const send = async data => {
    const {saveData} = props;
    var base64 = null;
    var imageType = null;
    if (photo?.assets[0]?.uri != null) {
      var fs = require('react-native-fs');

      base64 = await fs.readFile(photo.assets[0].uri, 'base64');
      //var Buffer = require('buffer/').Buffer;
      //const buffer = Buffer.from(base64, 'ascii');

      /*  data.append('photo', {
      name: photo.assets[0].fileName,
      type: photo.assets[0].type,
      uri:
        Platform.OS === 'ios'
          ? photo.assets[0].uri.replace('file://', '')
          : photo.assets[0].uri,
    });*/
      imageType =
        photo.assets != null
          ? photo.assets[0].type.slice(6, photo.assets[0].type.length)
          : null;
    }
    saveData({
      image: base64,
      imageType: imageType,
      name: control._formValues.name,
      phone: control._formValues.phone,
      birth: control._formValues.birth,
      height: control._formValues.height,
      weight: control._formValues.weight,
      sex: control._formValues.sex,
      alzheimer: control._formValues.alzheimer,
      wheelchairUser: control._formValues.wheelchair,
    });
  };

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
    } else if (r.length > 1) {
      // 0..2 digits. Just add (0XX
      //r = r.replace(/^(\d*)/, '(0XX$1');
      r = r.replace(/^(\d*)/, '(0$1');
    }
    return r;
  };

  return (
    <View
      style={[
        {backgroundColor: variables.primary, height: '100%'},
        //styles.mt10,
        //styles.mb10,
        styles.p10,
        styles.px20,
      ]}>
      <AvoidKeyboard>
        <ScrollView refreshControl={false} style={[styles.flex1]}>
          <View style={[styles.row]}>
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={[
                {
                  padding: 10,
                  backgroundColor: variables.secondary,
                  borderRadius: 10,
                },
              ]}>
              <Text style={[styles.textRight, {color: 'white'}]}>Salvar</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.row, styles.centerXY]}>
            <ImageUser
              actualPhoto={props.user.userInfo.photoPath}
              photo={photo}
              setPhoto={data => {
                setPhoto(data);
              }}
            />
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

          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View>
                <Text style={[{fontSize: variables.fontNormal, color: "black"}, styles.mb10]}>
                  Nome:
                </Text>
                <TextInput
                  onBlur={onBlur}
                  autoCorrect={false}
                  value={value}
                  onChangeText={onChange}
                  style={[
                    styles.input,
                    {borderWidth: 1, borderColor: '#CCC', color: '#000'},
                  ]}
                  placeholderTextColor={variables.gray3}
                  placeholder="Antonio Roberto"
                />
              </View>
            )}
            name="name"
            //defaultValue={props.user.userInfo.name}
          />

          {/*<Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View>
                <Text style={[{fontSize: variables.fontNormal}, styles.mb10]}>
                  Celular:
                </Text>

                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={formatCel(value)}
                  keyboardType="numeric"
                  placeholderTextColor={variables.gray3}
                  style={[
                    styles.input,
                    {borderWidth: 1, borderColor: '#CCC', color: '#000'},
                  ]}
                  placeholder="11 21345-8891"
                />
              </View>
            )}
            name="phone"
            //defaultValue=""
          />*/}

          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <BirthInput
                handleBlurInput={onBlur}
                handleChange={onChange}
                value={value}
              />
            )}
            name="birth"
            //defaultValue=""
          />

          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View>
                <Text style={[{fontSize: variables.fontNormal, color: "black"}, styles.mb10]}>
                  Peso (Kg):
                </Text>
                <TextInput
                  onBlur={onBlur}
                  keyboardType="numeric"
                  onChangeText={onChange}
                  value={value.toString()}
                  placeholderTextColor={variables.gray3}
                  style={[
                    styles.input,
                    {borderWidth: 1, borderColor: '#CCC', color: '#000'},
                  ]}
                  placeholder="90 Kg"
                />
              </View>
            )}
            name="weight"
            //defaultValue=""
          />

          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View>
                <Text style={[{fontSize: variables.fontNormal, color: "black"}, styles.mb10]}>
                  Altura (cm):
                </Text>

                <TextInput
                  onBlur={onBlur}
                  keyboardType="numeric"
                  onChangeText={onChange}
                  value={value.toString()}
                  placeholderTextColor={variables.gray3}
                  style={[
                    styles.input,
                    {borderWidth: 1, borderColor: '#CCC', color: '#000'},
                  ]}
                  placeholder="193"
                />
              </View>
            )}
            name="height"
            //defaultValue=""
          />

          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <SexInput
                handleBlurInput={onBlur}
                handleChange={onChange}
                value={value}
              />
            )}
            name="sex"
            //defaultValue=""
          />

          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <AlzheimerInput
                handleBlurInput={onBlur}
                handleChange={onChange}
                value={value}
              />
            )}
            name="alzheimer"
            //defaultValue=""
          />

          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <WheelchairInput
                handleBlurInput={onBlur}
                handleChange={onChange}
                value={value}
              />
            )}
            name="wheelchair"
            //defaultValue=""
          />
        </ScrollView>
      </AvoidKeyboard>
    </View>
  );
}
function areEqual(a, b) {
  if (a === b) return true;
  return true;
}

export default React.memo(MedicalRecord, areEqual);

function ImageUser(props) {
  //const [photo, setPhoto] = React.useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      // console.log(response);
      if (response.didCancel != true) {
        props.setPhoto(response);
      }
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <Image
          key={'img'}
          style={{
            borderRadius: 50,
            height: 100,
            width: 100,
            borderWidth: 0.2,
            borderColor: '#ccc',
          }}
          source={
            props.photo != null
              ? {
                  uri: props?.photo?.assets[0]?.uri,
                }
              : props.actualPhoto != null
              ? {
                  uri: props.actualPhoto,
                }
              : require('../assets/img/profile-user.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
}

function BirthInput(props) {
  const [date, setDate] = useState(
    props.value != null ? props.value : new Date(),
  );
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(fromDateToDate(currentDate));
    props.handleChange(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal, color: "black"}, styles.mb10]}>
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
            color: '#000',
          },
          styles.centerY,
        ]}>
        <TouchableOpacity
          style={[
            {fontSize: variables.fontLarge},
            styles.spaceBetween,
            styles.row,
          ]}
          onPress={showDatepicker}>
          <Text style={[{color: "black"}, styles.mt5]}>
            {isNaN(new Date(date).getTime())
              ? 'Selecione uma data'
              : convertDate(date)}
          </Text>
          <Icon
            name="keyboard-arrow-down"
            size={variables.icon}
            // style={{marginTop: -5}}
          />
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(date)}
            mode={mode}
            display="spinner"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
}

function AlzheimerInput(props) {
  const convertToString = val => {
    if (val) return 'Sim';
    else if (val === false) return 'Não';

    return 'Selecione uma Opção';
  };

  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal, color: "black"}, styles.mb10]}>
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
            color: '#000',
          },
          styles.centerXY,
        ]}>
        <RNPickerSelect
          onClose={props.handleBlurInput}
          placeholder={{
            label:
              convertToString(props.value) == null
                ? 'Selecione uma opção'
                : 'Selecionado: ' + convertToString(props.value),
            value: props.value == null ? null : props.value,
          }}
          Icon={() => {
            return (
              Platform.OS === 'ios' && (
                <Icon
                  name="keyboard-arrow-down"
                  size={variables.icon}
                  style={{marginTop: 10}}
                />
              )
            );
          }}
          onValueChange={value => props.handleChange(value)}
          items={[
            {label: 'Sim', value: true},
            {label: 'Não', value: false},
          ]}
        />
      </View>
    </View>
  );
}

function SexInput(props) {
  const convertToString = val => {
    if (val == 'male') return 'Masculino';
    return 'Feminino';
  };
  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal, color: "black"}, styles.mb10]}>Sexo:</Text>
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
            color: '#000',
          },
          styles.centerXY,
        ]}>
        <RNPickerSelect
          onClose={props.handleBlurInput}
          placeholder={{
            label:
              convertToString(props.value) == null
                ? 'Selecione uma opção'
                : 'Selecionado: ' + convertToString(props.value),
            value: props.value == null ? null : props.value,
          }}
          Icon={() => {
            return (
              Platform.OS === 'ios' && (
                <Icon
                  name="keyboard-arrow-down"
                  size={variables.icon}
                  style={{marginTop: 10}}
                />
              )
            );
          }}
          onValueChange={value => props.handleChange(value)}
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
  const convertToString = val => {
    if (val) return 'Sim';
    else if (val === false) return 'Não';

    return null;
  };
  return (
    <View>
      <Text style={[{fontSize: variables.fontNormal, color: "black"}, styles.mb10]}>
        Cadeirante:
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
            color: '#000',
            backgroundColor: '#fcfcfc',
          },
          styles.centerXY,
        ]}>
        <RNPickerSelect
          onClose={props.handleBlurInput}
          placeholder={{
            label:
              convertToString(props.value) == null
                ? 'Selecione uma opção'
                : 'Selecionado: ' + convertToString(props.value),
            value: props.value == null ? null : props.value,
          }}
          Icon={() => {
            return (
              Platform.OS === 'ios' && (
                <Icon
                  name="keyboard-arrow-down"
                  size={variables.icon}
                  style={{marginTop: 10}}
                />
              )
            );
          }}
          onValueChange={value => props.handleChange(value)}
          items={[
            {label: 'Sim', value: true},
            {label: 'Não', value: false},
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
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      enabled
      //behavior="position"
      style={{flex: 1}}>
      <View style={{flex: 1, zIndex: 9999}}>{props.children}</View>
    </KeyboardAvoidingView>
  );
}
