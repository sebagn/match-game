import React, {useEffect, useState} from 'react';
import {Alert, Button, FlatList, Text, View} from 'react-native';
import {Carta} from '../../atoms/Carta';
import {styles} from './styles';
import {buildDeck} from '../../../utils/buildDeck';
import {onCardsCompare} from './onCardsCompare';

export const Tablero = ({deck, setDeck, comparingCards, setComparingCards, guessedCards, setGuessedCards}) => {

  useEffect(() => {
    // construye el mazo para el tablero
    let cards = buildDeck();
    setDeck(cards);
  }, []);

  const handleOnPress = id => {
    // encuentra posicion de la carta elegida en la baraja
    let index = deck.findIndex(card => {
      return card.key == id;
    });

    // selecciona la carta en esa posicion
    let deckChange = [...deck];
    deckChange[index].selected = true;
    setDeck(deckChange);

    // agrega la carta a comparar
    let comparing = [...comparingCards];
    comparing.push(deck[index]);
    setComparingCards(comparing);
  };

  // Comparar 2 cartas
  onCardsCompare(
    comparingCards,
    deck,
    setDeck,
    setComparingCards,
    guessedCards,
    setGuessedCards,
  );

  // GameOver
  if (guessedCards.length === 16) {
    alert('GANASTE');
  }

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.tablero}
        numColumns={4}
        data={deck}
        renderItem={({item}) => {
          return (
            <Carta
              deck={deck}
              selected={item.selected}
              wasGuessed={item.wasGuessed}
              key={item.key}
              cardIcon={item.icon}
              handleOnPress={() => handleOnPress(item.key)}
            />
          );
        }}
      />
    </View>
  );
};
