import shuffle from 'lodash.shuffle';
import {iconLibrary} from './constants/iconLibrary';

export const buildDeck = () => {
  let deck = iconLibrary.map(e => ({
    icon: e,
    wasGuessed: false,
  }));

  return shuffle(deck);
};
