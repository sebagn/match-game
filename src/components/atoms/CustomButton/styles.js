import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/constants/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.darkSecColor,
  },
  buttonText: {
    borderRadius: 20,
    color: theme.darkSecColor,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: theme.lightColor,
    margin: 20,
    padding: 20,
    fontFamily: 'Dongle-Light',
  },
});
