import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {Card} from '../../molecules/Card';
import {styles} from './styles';
import {buildDeck} from './buildDeck';

export const Tablero = ({deck, setDeck, comparingCards, setComparingCards}) => {
  useEffect(() => {
    // construye el mazo para el tablero.
    let cards = buildDeck();
    setDeck(cards);
  }, []);

  const handleOnPress = id => {
    // encuentra posicion de la carta elegida en la baraja.
    let index = deck.findIndex(card => {
      return card.key == id;
    });

    let deckChange = [...deck];
    // si ya esta seleccionada, no debe hacer nada mas.
    if (
      // deckChange[index].selected == true ||
      deckChange[index].wasGuessed == true
    ) {
      return;
    }

    // selecciona la carta en esa posicion.
    deckChange[index].selected = true;
    setDeck(deckChange);

    // agrega la carta para comparar.
    let comparing = [...comparingCards];
    comparing.push(deck[index]);
    setComparingCards(comparing);
    console.log(comparingCards)
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.tablero}
        numColumns={4}
        data={deck}
        renderItem={({item}) => {
          return (
            <Card
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
