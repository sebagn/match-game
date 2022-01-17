import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/constants/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.lightColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.black,
  },
});