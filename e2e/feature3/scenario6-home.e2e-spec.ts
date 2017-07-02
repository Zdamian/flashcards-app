import { browser } from 'protractor';
import { FlashcardsAddWord } from './feature3-known.po';

describe('flashcards click on known button', () => {
  let page: FlashcardsAddWord;
  page = new FlashcardsAddWord();

  it('should go to "home-page"', () => {

    page.clickHomePageButton();

    browser.getCurrentUrl().then(url => {
      expect(url.indexOf('/')).not.toBe(-1);
    });
  });

});
