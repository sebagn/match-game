import React, {useState} from 'react';
import {View} from 'react-native';

import {CustomButton} from '../../components/atoms/CustomButton';
import {Header} from '../../components/molecules/Header';
import {Tablero} from '../../components/organisms/Tablero';
import { buildDeck } from '../../utils/buildDeck';
import {styles} from './styles';

export const GameScreen = ({handleGoBack}) => {

  const [deck, setDeck] = useState([]);
  const [comparingCards, setComparingCards] = useState([]);
  const [guessedCards, setGuessedCards] = useState([]);

  const handleOnReset = () => {
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
        guessedCards={guessedCards}
        setGuessedCards={setGuessedCards}
      />
      <CustomButton buttonText={"Restart"} handleOnPress={handleOnReset} />
      <CustomButton buttonText={"Back"} handleOnPress={handleGoBack} />
    </View>
  );
};
