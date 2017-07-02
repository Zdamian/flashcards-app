import { browser, Key } from 'protractor';
import { FlashcardsAddWord } from './feature3-known.po';

describe('flashcards click on known button', () => {
  let page: FlashcardsAddWord;
  page = new FlashcardsAddWord();

  it(`should show the first card
    and two nav buttons where the previous one is disabled`, () => {

    expect(page.getNavigationButtons().get(0).isEnabled()).toEqual(false);
    expect(page.getNavigationButtons().get(1).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().count()).toEqual(2);
    expect(page.getCardText()).toEqual('szpieg');
  });

  it('should not go to the previous card', () => {

    // page.getNavigationButtons().get(0).click();
    page.keydown(Key.ARROW_LEFT);

    expect(page.getCardText()).toEqual('szpieg');
  });

  it('should go to the next card', () => {

    page.getNavigationButtons().get(1).click();

    browser.sleep(1000);

    expect(page.getNavigationButtons().get(0).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().get(1).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().count()).toEqual(2);
    expect(page.getCardText()).toEqual('wojna');

    // page.getNavigationButtons().get(1).click();
    page.keydown(Key.ARROW_RIGHT);

    browser.sleep(1000);

    expect(page.getNavigationButtons().get(0).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().get(1).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().count()).toEqual(2);
    expect(page.getCardText()).toEqual('żołnierz');

    page.getNavigationButtons().get(0).click();

    browser.sleep(1000);

    expect(page.getNavigationButtons().get(0).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().get(1).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().count()).toEqual(2);
    expect(page.getCardText()).toEqual('wojna');
  });

});
