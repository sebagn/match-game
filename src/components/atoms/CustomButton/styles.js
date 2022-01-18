import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/constants/theme';

export const styles = StyleSheet.create({
  // button: {
    // backgroundColor: theme.darkSecColor,
  // },
  buttonText: {
    borderRadius: 20,
    color: theme.darkSecColor,
    textAlign: 'center',
    fontSize: 40,
    backgroundColor: theme.lightColor,
    margin: 20,
    padding: 5,
    fontFamily: 'Dongle-Regular',
  },
});
