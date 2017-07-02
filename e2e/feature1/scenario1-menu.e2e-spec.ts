import { browser } from 'protractor';
import { FlashcardsRemoveWord } from './feature1-remove-word.po';

describe('flashcards remove word', () => {
  let page: FlashcardsRemoveWord;
  page = new FlashcardsRemoveWord();

  beforeAll(() => {
    page.navigateTo('/');
  });

  it(`should get welcome and footer text`, () => {

    expect(page.getHeaderText()).toEqual('Flashcards App');
    expect(page.getSecondHeaderText()).toEqual('For your phone');
    expect(page.getFooterText()).toEqual('© 2017 All rights reserved');
  });

  it(`should get menu to words and category list`, () => {

    page.getMenu().click();

    expect(page.getButtonsList().isPresent()).toEqual(true);
    expect(page.getButtons().count()).toEqual(2);
    expect(page.getButtonsText(0)).toEqual('Categories List');
    expect(page.getButtonsText(1)).toEqual('Words List');
  });

});
