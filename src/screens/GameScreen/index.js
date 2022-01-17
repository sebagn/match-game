import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {CustomButton} from '../../components/atoms/CustomButton';
import {Header} from '../../components/molecules/Header';
import {Tablero} from '../../components/organisms/Tablero';
import {buildDeck} from '../../utils/buildDeck';
import {styles} from './styles';
import {onCardsCompare} from '../../utils/onCardsCompare';

export const GameScreen = ({handleGoBack, setGameWon}) => {
  const [deck, setDeck] = useState([]);
  const [comparingCards, setComparingCards] = useState([]);
  const [guessedCards, setGuessedCards] = useState([]);

  const handleOnReset = () => {
    let cards = buildDeck();
    setDeck(cards);
    setComparingCards([]);
    setGuessedCards([]);
  };

  // Comparar 2 cartas
  if (comparingCards.length == 2) {
    onCardsCompare(
      comparingCards,
      deck,
      setDeck,
      setComparingCards,
      guessedCards,
      setGuessedCards,
    );
  }
  // GameOver
  if (guessedCards.length === 16) {
    setGameWon(true);
  }

  return (
    <View style={styles.container}>
      <Header title={'Encuentra las parejas'}></Header>
      <Tablero
        deck={deck}
        setDeck={setDeck}
        comparingCards={comparingCards}
        setComparingCards={setComparingCards}
        guessedCards={guessedCards}
        setGuessedCards={setGuessedCards}
      />
      <CustomButton buttonText={'Restart'} handleOnPress={handleOnReset} />
      <CustomButton buttonText={'Volver'} handleOnPress={handleGoBack} />
    </View>
  );
};
