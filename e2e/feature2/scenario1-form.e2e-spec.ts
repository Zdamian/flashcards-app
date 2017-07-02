import { browser } from 'protractor';
import { FlashcardsAddWord } from './feature2-add-word.po';

describe('flashcards add word', () => {
  let page: FlashcardsAddWord;
  page = new FlashcardsAddWord();

  beforeAll(() => {
    page.navigateTo('/');
  });

  it(`should get welcome and footer text`, () => {

    expect(page.getHeaderText()).toEqual('Flashcards App');
    expect(page.getSecondHeaderText()).toEqual('For your phone');
    expect(page.getFooterText()).toEqual('© 2017 All rights reserved');
  });

  it(`should go to page with form to add a new word`, () => {

    page.clickAddWordButton();

    browser.getCurrentUrl().then(url => {
      expect(url.indexOf('/new-word')).not.toBe(-1);
    });
  });

});
