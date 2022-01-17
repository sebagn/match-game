import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const CustomButton = ({buttonText, handleOnPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleOnPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
