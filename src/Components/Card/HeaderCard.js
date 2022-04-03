import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Images} from '../../Themes';
import {header} from '../../Ui/Card';

const HeaderCard = ({typeName, handleTypeBack, handleTypeHelp}) => {
  return (
    <View style={header.Card}>
      <TouchableOpacity onPress={handleTypeBack}>
        <View style={header.CardArrow}>
          <Image
            source={Images.IC_ARROW_LEFT}
            style={header.IconArrow}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTypeHelp}>
        <View style={header.CardHelp}>
          <Image source={Images.IC_HELP} style={header.IconHelp} />
          <Text style={header.CardText}>{typeName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderCard;
