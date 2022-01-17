export const onCardsCompare = (
  comparingCards,
  deck,
  setDeck,
  setComparingCards,
  guessedCards,
  setGuessedCards,
) => {
  let card1 = comparingCards[0];
  let card2 = comparingCards[1];

  let deckChange = [...deck];
  let index1 = deck.findIndex(card => card.key == card1.key);
  let index2 = deck.findIndex(card => card.key == card2.key);

  // si son iguales las marca como adivinadas
  if (card1.icon === card2.icon) {
    deckChange[index1].wasGuessed = true;
    deckChange[index2].wasGuessed = true;
    let guessedPair = [...guessedCards];
    guessedPair.push(card1);
    guessedPair.push(card2);
    setGuessedCards(guessedPair);
  }

  // limpia el tablero
  setTimeout(() => {
    deckChange[index1].selected = false;
    deckChange[index2].selected = false;
    setDeck(deckChange);
  }, 500);

  setComparingCards([]);
};
