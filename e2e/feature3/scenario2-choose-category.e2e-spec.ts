import { browser } from 'protractor';
import { FlashcardsAddWord } from './feature3-known.po';

describe('flashcards click on known button', () => {
  let page: FlashcardsAddWord;
  page = new FlashcardsAddWord();

  it('should count flashcards', () => {

    expect(page.getFlashcards().count()).toEqual(14);
  });

  it('should get flascards text', () => {

    expect(page.getFlashcardsText(0)).toEqual('home');
    expect(page.getFlashcardsText(1)).toEqual('eating');
    expect(page.getFlashcardsText(2)).toEqual('family');
    expect(page.getFlashcardsText(3)).toEqual('weather');
    expect(page.getFlashcardsText(4)).toEqual('work');
    expect(page.getFlashcardsText(5)).toEqual('numbers');
    expect(page.getFlashcardsText(6)).toEqual('colours');
    expect(page.getFlashcardsText(7)).toEqual('days');
    expect(page.getFlashcardsText(8)).toEqual('fantasy');
    expect(page.getFlashcardsText(9)).toEqual('transport');
    expect(page.getFlashcardsText(10)).toEqual('months');
    expect(page.getFlashcardsText(11)).toEqual('sounds');
    expect(page.getFlashcardsText(12)).toEqual('war');
    expect(page.getFlashcardsText(13)).toEqual('travelling');
  });

  it('should hover on flashcard', () => {

    page.hoverFlashcard(page.getFlashcard(9));

    browser.sleep(2000);

    expect(
      page.getFleshcardCssValueOf('background-color')
    ).toEqual('rgba(255, 255, 224, 1)');
  });

  it('should click on flashcard and show dialog', () => {

    page.getFlashcard(12).click();

    browser.sleep(1000);

    expect(page.getDialog().isPresent()).toEqual(true);
    expect(page.getSpinner().isPresent()).toEqual(false);
    expect(page.getDialogHeaderText()).toEqual('WAR');
    expect(page.getDialogCategoryCountWordsText()).toEqual('4');
    expect(page.getDialogCategoryText()).toEqual('YOU HAVE 4 WORDS IN THIS CATEGORY');
    expect(page.getDialogCategoryBtnPreviewText()).toEqual('Preview');
    expect(page.getDialogCategoryBtnLearnText()).toEqual('Go to learn');
  });

});
