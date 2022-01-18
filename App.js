/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {GameScreen} from './src/screens/GameScreen';
import {WelcomeScreen} from './src/screens/WelcomeScreen';
import {WinScreen} from './src/screens/WinScreen';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleOnStart = () => {
    setGameStarted(true);
  };
  const handleGoBack = () => {
    setGameStarted(false);
    setGameWon(false);
  };

  let content =
    !gameStarted && !gameWon ? (
      <WelcomeScreen handleOnStart={handleOnStart} />
    ) : gameStarted && !gameWon ? (
      <GameScreen handleGoBack={handleGoBack} setGameWon={setGameWon} />
    ) : gameStarted && gameWon && (
      <WinScreen handleGoBack={handleGoBack} />
    );

  return (
    <SafeAreaView style={styles.Container}>
      {content}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    fontFamily: 'Dongle',
  },

});

export default App;
