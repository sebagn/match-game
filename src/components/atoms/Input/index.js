import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';

export const Input = ({value, handleOnChange}) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoFocus={true}
        autoComplete="off"
        keyboardType="numeric"
        onChangeText={handleOnChange}
        value={value}
      />
    </View>
  );
};
