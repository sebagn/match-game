import {StyleSheet} from 'react-native';
import {theme} from '../../../utils/constants/theme';

export const styles = StyleSheet.create({

  tablero: {
    alignSelf: 'center',
    marginVertical: 20,

    width: '98%',
    aspectRatio: 1,
    
    alignItems: 'center',
    backgroundColor: theme.darkSecColor,
  },
});
