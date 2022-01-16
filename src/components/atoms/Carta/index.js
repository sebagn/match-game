import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {theme} from '../../../utils/constants/theme';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Carta = ({cardIcon}) => {
  const [selected, setSelected] = useState(false)
  const handleOnPress = () => {
    setSelected(true)
  }

  return (
    <TouchableOpacity style={styles.carta} onPress={handleOnPress}>
      {selected && (
        <Icon name={cardIcon} size={60} color={theme.darkSecColor} />
      )}
    </TouchableOpacity>
  );
};
