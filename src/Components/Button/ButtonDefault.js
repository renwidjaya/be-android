import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Colors} from '../../Themes';
import {primary} from '../../Ui/Button';

const ButtomDefault = ({handleSubmit, typeName, typeColor}) => {
  const styles = primary();
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        typeColor
          ? {backgroundColor: typeColor}
          : {backgroundColor: Colors.DEFAULT_PRIMARY},
      ]}
      activeOpacity={0.5}
      onPress={handleSubmit}>
      <Text style={styles.buttonTextStyle}>{typeName}</Text>
    </TouchableOpacity>
  );
};

export default ButtomDefault;
