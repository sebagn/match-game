import React from 'react';
import {View} from 'react-native';
import {Header} from '../../components/molecules/Header';
import {Title} from '../../components/atoms/Title';
import {CustomButton} from '../../components/atoms/CustomButton'
import {styles} from './styles';

export const WelcomeScreen = ({handleOnStart}) => {
  return (
    <View style={styles.container}>
      <Header title="Match-Game" />
      <Title text="Prueba tu memoria!" />
      <CustomButton buttonText={'Jugar'} handleOnPress={handleOnStart}/>
    </View>
  );
};
