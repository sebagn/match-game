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

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleOnStart = () => {
    setGameStarted(true);
  };
  const handleGoBack = () => {
    setGameStarted(false);
  };

  let content = gameStarted ? (
    <GameScreen handleGoBack={handleGoBack}/>
  ) : (
    <WelcomeScreen handleOnStart={handleOnStart} />
  );
  return <SafeAreaView style={styles.Container}>{content}</SafeAreaView>;
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
