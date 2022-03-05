import React from 'react';
import {View, Text, Image} from 'react-native';
import {boarding} from '../../Ui/Auth';

const BoardingCard = ({image, title, content}) => {
  return (
    <View style={boarding.Container}>
      <Image source={image} style={boarding.Logo} />
      <Text style={boarding.Title}>{title}</Text>
      <Text style={boarding.Content}>{content}</Text>
    </View>
  );
};

export default BoardingCard;
