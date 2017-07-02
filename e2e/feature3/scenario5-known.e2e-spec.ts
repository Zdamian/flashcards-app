import { browser, Key } from 'protractor';
import { FlashcardsAddWord } from './feature3-known.po';

describe('flashcards click on known button', () => {
  let page: FlashcardsAddWord;
  page = new FlashcardsAddWord();

  it('should reverse the card', () => {

    page.clickCard();

    expect(page.getCardText()).toEqual('war');
    page.isCardKnown().then(isKnown => {
      if (isKnown) {
        expect(
          page.getKnownButtonCssValueOf('background-color')
        ).toEqual('rgba(144, 238, 144, 1)');
        expect(page.getKnownButtonText()).toEqual('known');
      } else {
        expect(
          page.getKnownButtonCssValueOf('background-color')
        ).toEqual('rgba(240, 128, 128, 1)');
        expect(page.getKnownButtonText()).toEqual('unknown');
      }
    });
  });

  it('should hover on known button', () => {

    page.hoverKnownButton();

    expect(
      page.getKnownButtonCssValueOf('background-color')
    ).toEqual('rgba(255, 160, 122, 1)');
  });

  it('should click known/unknown', () => {

    // page.clickKnownButton();
    page.keydown(Key.SPACE);
    page.hoverMenu();

    browser.sleep(1000);

    page.isCardKnown().then(isKnown => {
      if (isKnown) {
        expect(
          page.getKnownButtonCssValueOf('background-color')
        ).toEqual('rgba(144, 238, 144, 1)');
        expect(page.getKnownButtonText()).toEqual('known');
      } else {
        expect(
          page.getKnownButtonCssValueOf('background-color')
        ).toEqual('rgba(240, 128, 128, 1)');
        expect(page.getKnownButtonText()).toEqual('unknown');
      }
    });
  });

  it('should reverse the card to the front side', () => {

    page.keydown(Key.ARROW_UP);

    expect(page.getCardText()).toEqual('wojna');
  });

});
