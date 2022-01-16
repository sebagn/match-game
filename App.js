/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Header} from './src/components/molecules/Header/index.js';
import {Tablero} from './src/components/organisms/Tablero/index.js';


const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View>
        <Header title={'Encuentra las parejas'}></Header>
        <Tablero />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
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
