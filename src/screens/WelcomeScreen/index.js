import React from 'react';
import {View} from 'react-native';
import {Header} from '../../components/molecules/Header';
import {Title} from '../../components/atoms/Title';
import {CustomButton} from '../../components/atoms/CustomButton'
import {styles} from './styles';

export const WelcomeScreen = ({handleOnStart}) => {
  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <Title text="Test your memory!" />
      <CustomButton buttonText={'Start Game'} handleOnPress={handleOnStart}/>
    </View>
  );
};
