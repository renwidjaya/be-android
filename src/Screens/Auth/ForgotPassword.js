import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Modal,
  TextInput,
  ToastAndroid,
  Animated,
  PanResponder,
} from 'react-native';
import HeaderCard from '../../Components/Card/HeaderCard';
import {useThemes} from '../../Themes/ThemeProvider';
import {useLang} from '../../Lang';
import {reset} from '../../Ui/Auth';
import ButtomDefault from '../../Components/Button/ButtonDefault';

const ForgotPassword = ({navigation}) => {
  const {lang} = useLang();
  const {theme} = useThemes();
  const [isVisible, setVisible] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
    isErrorText: '',
  });

  const onChangEmail = val => {
    setData({
      ...data,
      email: val,
    });
  };

  const handleSendMail = () => {
    setVisible(true);
    if (data.email === '') {
      setData({isErrorText: 'Email tidak boleh kosong!'});
    }
  };

  const handleHelpPress = () => {
    ToastAndroid.show('Sedang dalam implement!', ToastAndroid.SHORT);
  };

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
  });

  return (
    <View style={reset.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.color.default_white}
        translucent
      />
      <HeaderCard
        typeName={lang.text.help}
        handleTypeBack={() => navigation.navigate(lang.auth.login)}
        handleTypeHelp={() => handleHelpPress()}
      />

      <View style={reset.boxContent}>
        <Text style={reset.textTitle}>{lang.auth.forgot_password}</Text>
        <Text style={reset.textDescription}>
          {lang.text.login_text_description}
        </Text>

        <View style={reset.boxField}>
          <Text style={reset.fieldTitle}>{lang.field.email}</Text>
          <TextInput
            style={reset.fieldInput}
            onChangeText={val => onChangEmail(val)}
            value={data.email}
            keyboardType="email-address"
            returnKeyType="go"
            placeholder="you@example.com"
            onSubmitEditing={() => handleSendMail()}
          />
        </View>

        {data.isErrorText != '' && (
          <Text style={reset.fieldErrorText}>{data.isErrorText}</Text>
        )}
      </View>

      <View style={reset.fieldBoxButton}>
        <ButtomDefault
          typeName={lang.text.login_reset_password}
          typeColor={!data.email && '#D1D5DB'}
          handleSubmit={() => handleSendMail()}
        />
      </View>
      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          ToastAndroid.show('modal close!', ToastAndroid.SHORT);
          setVisible(false);
        }}
        style={{backgroundColor: 'yellow'}}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            //pan.getLayout(),
            {
              flex: 1,
              bottom: 0,
              height: 200,
              width: '100%',
              position: 'absolute',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              backgroundColor: 'blue',
              alignItems: 'center',
              opacity: 0.5,
              shadowColor: 'yellow',
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 4,
              elevation: 5,
            },
          ]}>
          <View
            style={{
              width: 50,
              height: 4,
              backgroundColor: '#E5E7EB',
              margin: 4,
              borderRadius: 2,
            }}
          />
        </Animated.View>
      </Modal>
    </View>
  );
};

export default ForgotPassword;
