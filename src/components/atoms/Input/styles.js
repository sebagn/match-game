import {StyleSheet} from 'react-native';

import {theme} from '../../../utils/constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '60%',
    backgroundColor: theme.white,
  },
  input: {
    textAlign: 'center',
    borderColor: theme.darkSecColor,
    borderWidth: 1,
    borderRadius: 5,
  },
});
