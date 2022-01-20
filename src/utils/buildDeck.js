import shuffle from 'lodash.shuffle';
import {iconLibrary} from './constants/iconLibrary';

export const buildDeck = () => {
  let deck = iconLibrary.map(icon => ({
    icon: icon,
    selected: false,
    wasGuessed: false,
    key: Math.random().toString()
  }));

  return shuffle(deck);
};
