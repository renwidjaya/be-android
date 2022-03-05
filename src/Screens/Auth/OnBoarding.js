import React, {useRef, useState} from 'react';
import {View, StatusBar, FlatList, Text, TouchableOpacity} from 'react-native';
import {boarding} from '../../Ui/Auth';
import {Colors, General} from '../../Themes';
import {BoardingCard} from '../../Components/Card';
import {ButtonDefault} from '../../Components/Button';

const pageStyle = isActive =>
  isActive
    ? boarding.Page
    : {...boarding.Page, backgroundColor: Colors.DEFAULT_GREY};

const Pagination = ({index}) => {
  return (
    <View style={boarding.PageCounter}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i} />
        ) : (
          <View style={pageStyle(false)} key={i} />
        ),
      )}
    </View>
  );
};

const OnBoarding = ({navigation}) => {
  const [WelcomeIndex, setWelcomeIndex] = useState(0);

  const onViewRef = useRef(({changed}) => {
    setWelcomeIndex(changed[0].index);
  });

  return (
    <View style={boarding.Container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_PRIMARY_100}
        translucent
      />
      <View style={boarding.WelcomeList}>
        <FlatList
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
          renderItem={({item}) => <BoardingCard {...item} />}
        />
      </View>
      <Pagination index={WelcomeIndex} />
      <View style={boarding.BtnContent}>
        <ButtonDefault
          typeName={'Daftar'}
          handleSubmit={() => navigation.navigate('register')}
        />
      </View>
      <TouchableOpacity
        style={boarding.BtnLogin}
        onPress={() => navigation.navigate('login')}>
        <Text style={boarding.BtnLogin}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding;
