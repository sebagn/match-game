import shuffle from 'lodash.shuffle';
import {iconLibrary} from '../../../utils/constants/iconLibrary';

export const buildDeck = () => {
  let deck = iconLibrary.map(icon => ({
    icon: icon,
    selected: true,
    wasGuessed: false,
    key: Math.random().toString()
  }));

  return shuffle(deck);
};
