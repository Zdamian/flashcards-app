import { browser } from 'protractor';
import { FlashcardsAddWord } from './feature3-known.po';

describe('flashcards click on known button', () => {
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

  it(`should go to page with flashcards`, () => {

    page.clickFlashcardsButton();

    browser.getCurrentUrl().then(url => {
      expect(url.indexOf('/flashcards')).not.toBe(-1);
    });
  });

});
