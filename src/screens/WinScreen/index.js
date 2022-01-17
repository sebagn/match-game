import React from 'react';
import {View} from 'react-native';
import {CustomButton} from '../../components/atoms/CustomButton';
import {Title} from '../../components/atoms/Title';
import {styles} from './styles';

export const WinScreen = ({handleGoBack}) => {
  return (
    <View style={styles.container}>
      <Title text={'FELICITACIONES! HAS GANADO!'} />
      <CustomButton buttonText={'Home'} handleOnPress={handleGoBack} />
    </View>
  );
};
