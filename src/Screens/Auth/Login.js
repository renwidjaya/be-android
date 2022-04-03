import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import HeaderCard from '../../Components/Card/HeaderCard';
import {useThemes} from '../../Themes/ThemeProvider';
import {useLang} from '../../Lang/';
import {login} from '../../Ui/Auth';
import {Images} from '../../Themes';
import Feather from 'react-native-vector-icons/Feather';
import ButtomDefault from '../../Components/Button/ButtonDefault';

const Login = ({navigation}) => {
  const {lang} = useLang();
  const {theme} = useThemes();
  const passInput = useRef();
  const [data, setData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    isIconEntry: 'eye-off',
    isErrorText: '',
    isCheck: true,
  });

  const onChangEmail = val => {
    setData({
      ...data,
      email: val,
    });
  };

  const onChangePassword = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      isIconEntry: !data.secureTextEntry ? 'eye-off' : 'eye',
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleRemember = () => {
    setData({
      ...data,
      isCheck: !data.isCheck,
    });
  };

  const handleLoginPress = () => {
    if (data.email === '') {
      setData({isErrorText: 'Email tidak boleh kosong!'});
    }

    if (data.password === '') {
      setData({isErrorText: 'Password tidak boleh kosong!'});
    }
  };
  console.log('====================================');
  console.log(data.isErrorText);
  console.log('====================================');

  return (
    <View style={login.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.color.default_white}
        translucent
      />
      <HeaderCard
        typeName={'bantuan'}
        handleTypeBack={() => navigation.navigate(lang.auth.boarding)}
        handleTypeHelp={''}
      />
      <View style={login.BoxLogo}>
        <Image source={Images.LOGO} style={login.Logo} resizeMode="stretch" />
      </View>
      <View style={login.boxContent}>
        <Text style={login.textTitle}>Masuk</Text>

        <View style={login.boxField}>
          <Text style={login.fieldTitle}>Email</Text>
          <TextInput
            style={login.fieldInput}
            onChangeText={val => onChangEmail(val)}
            value={data.email}
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="you@example.com"
            onSubmitEditing={input => input && passInput.current.focus()}
          />
        </View>

        <View style={login.boxField}>
          <Text style={login.fieldTitle}>Password</Text>
          <TextInput
            style={login.fieldInput}
            onChangeText={val => onChangePassword(val)}
            secureTextEntry={data.secureTextEntry ? true : false}
            value={data.password}
            ref={passInput}
            returnKeyType="go"
            placeholder="Ketikan Kata Sandi"
            onSubmitEditing={() => handleLoginPress()}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
            style={login.fieldIconEye}>
            <Feather name={data.isIconEntry} color="grey" size={20} />
          </TouchableOpacity>
        </View>

        {data.isErrorText != '' && (
          <Text style={login.fieldErrorText}>{data.isErrorText}</Text>
        )}

        <View style={login.fieldBoxRemember}>
          <View style={login.fieldRowCheck}>
            <TouchableOpacity
              style={[
                login.fieldCheckBox,
                {backgroundColor: data.isCheck ? '#FFF' : '#008FD7'},
              ]}
              onPress={() => handleRemember()}>
              <Feather name="check" color="white" size={14} />
            </TouchableOpacity>

            <Text style={login.fieldTextRemember}>Ingat akun saya</Text>
          </View>
          <Text style={login.fieldTextForgot}>Lupa kata sandi?</Text>
        </View>
      </View>
      <View style={login.fieldBoxButton}>
        <ButtomDefault
          typeName={'Masuk'}
          handleSubmit={() => handleLoginPress()}
        />
        <View style={login.fieldBoxCreate}>
          <Text style={login.fieldTextCreate1}>Belum punya akun?</Text>
          <Text style={login.fieldTextCreate2}>Daftar di sini</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
