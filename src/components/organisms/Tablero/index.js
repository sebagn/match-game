import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Carta} from '../../atoms/Carta';
import {styles} from './styles';
import {buildDeck} from '../../../utils/buildDeck';
import shuffle from 'lodash.shuffle';
import {iconLibrary} from '../../../utils/constants/iconLibrary';

export const Tablero = () => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    let cards = buildDeck();
    setDeck(cards);
  }, []);

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.tablero}
        numColumns={4}
        data={deck}
        // keyExtractor={index => index.toString()}
        renderItem={({item}) => {
          return <Carta cardIcon={item.icon}></Carta>;
        }}
      />
    </View>
  );
};
