import { browser } from 'protractor';
import { FlashcardsRemoveWord } from './feature1-remove-word.po';

describe('flashcards remove word', () => {
  let page: FlashcardsRemoveWord;
  page = new FlashcardsRemoveWord();

  it('should click on remove button and refresh page', () => {

    page.clickRemoveButton();

    expect(page.getSpinner().isPresent()).toEqual(false);
    expect(page.getWord().isPresent()).toEqual(false);
    expect(page.getSnackBar().isPresent()).toEqual(true);
    expect(page.getWords().count()).toEqual(72);
    expect(page.getWordsText(0)).toEqual('Room - Pokój');
    expect(page.getWordsText(1)).toEqual('Wall - Ściana');
  });

});
