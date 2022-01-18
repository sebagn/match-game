import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/constants/theme';

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.darkSecColor,
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 60,
    color: theme.lightColor,
    fontFamily: theme.fontBold,
  },
});
