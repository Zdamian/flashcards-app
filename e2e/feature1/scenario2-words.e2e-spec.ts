import { browser } from 'protractor';
import { FlashcardsRemoveWord } from './feature1-remove-word.po';

describe('flashcards remove word', () => {
  let page: FlashcardsRemoveWord;
  page = new FlashcardsRemoveWord();

  it('should go to words list', () => {

    page.clickWordsListButton(1);

    browser.sleep(1000);

    expect(page.getSpinner().isPresent()).toEqual(false);

    browser.getCurrentUrl().then(url => {
      expect(url.indexOf('/words')).not.toBe(-1);
    });
  });

  it('should count words', () => {

    expect(page.getWords().count()).toEqual(73);
  });

  it('should get words text', () => {

    expect(page.getWordsText(0)).toEqual('Room - Pokój');
    expect(page.getWordsText(1)).toEqual('Floor - Podłoga');
  });

  it('should click on word and show card word', () => {

    page.clickWord(1);

    browser.sleep(1000);

    expect(page.getWord().isPresent()).toEqual(true);
    expect(page.getWordText()).toEqual('Floor - Podłoga');
    expect(page.getEditBtn()).toEqual('Edit');
    expect(page.getRemoveBtn()).toEqual('Remove');
  });

});
