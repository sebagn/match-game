import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {theme} from '../../../utils/constants/theme';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Carta = ({cardIcon, handleOnPress, selected, wasGuessed}) => {
  return (
    <TouchableOpacity style={styles.carta} onPress={handleOnPress}>
      {(selected || wasGuessed) && (
        <Icon name={cardIcon} size={60} color={theme.darkSecColor} />
      )}
    </TouchableOpacity>
  );
};
