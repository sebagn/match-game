import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {CustomButton} from '../../components/atoms/CustomButton';
import {Header} from '../../components/molecules/Header';
import {Tablero} from '../../components/organisms/Tablero';
import {styles} from './styles';
import {onCardsCompare} from './onCardsCompare';

export const GameScreen = ({handleGoBack, setGameWon}) => {
  const [deck, setDeck] = useState([]);
  const [comparingCards, setComparingCards] = useState([]);
  const [guessedCards, setGuessedCards] = useState([]);

  useEffect(() => {
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
  }, [comparingCards]);

  const handleOnReset = () => {
    // Vuelve los estados a iniciales
    let cards = buildDeck();
    setDeck(cards);
    setComparingCards([]);
    setGuessedCards([]);
  };

  return (
    <View style={styles.container}>
      <Header title={'Encuentra las parejas'}></Header>
      <Tablero
        deck={deck}
        setDeck={setDeck}
        comparingCards={comparingCards}
        setComparingCards={setComparingCards}
      />
      <CustomButton buttonText={'Restart'} handleOnPress={handleOnReset} />
      <CustomButton buttonText={'Volver'} handleOnPress={handleGoBack} />
    </View>
  );
};
