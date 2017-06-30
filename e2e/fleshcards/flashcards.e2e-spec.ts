import { browser } from 'protractor';
import { Flashcards } from './flashcards.po';

xdescribe('flashcards-learn App', () => {
  let page: Flashcards;
  page = new Flashcards();

  beforeAll(() => {
    page.navigateTo();
  });

  it('should count flashcards', () => {

    expect(page.getFlashcards().count()).toEqual(14);
  });

  it('should get flascards text', () => {

    expect(page.getFlashcardsText(0)).toEqual('family');
    expect(page.getFlashcardsText(1)).toEqual('eating');
    expect(page.getFlashcardsText(2)).toEqual('work');
    expect(page.getFlashcardsText(3)).toEqual('weather');
    expect(page.getFlashcardsText(4)).toEqual('home');
    expect(page.getFlashcardsText(5)).toEqual('numbers');
    expect(page.getFlashcardsText(6)).toEqual('fantasy');
    expect(page.getFlashcardsText(7)).toEqual('colours');
    expect(page.getFlashcardsText(8)).toEqual('transport');
    expect(page.getFlashcardsText(9)).toEqual('months');
    expect(page.getFlashcardsText(10)).toEqual('travelling');
    expect(page.getFlashcardsText(11)).toEqual('days');
    expect(page.getFlashcardsText(12)).toEqual('sounds');
    expect(page.getFlashcardsText(13)).toEqual('war');
  });

  it('should click on flashcard and show dialog', () => {

    page.clickFlashcard(9);

    browser.sleep(1000);

    expect(page.getDialog().isPresent()).toEqual(true);
    expect(page.getSpinner().isPresent()).toEqual(false);
    expect(page.getDialogHeaderText()).toEqual('MONTHS');
    expect(page.getDialogCategoryCountWordsText()).toEqual('10');
    expect(page.getDialogCategoryText()).toEqual('YOU HAVE 10 WORDS IN THIS CATEGORY');
    expect(page.getDialogCategoryBtnPreviewText()).toEqual('Preview');
    expect(page.getDialogCategoryBtnLearnText()).toEqual('Go to learn');
  });

  it('should click on Preview button and show word dialog', () => {

    page.clickPreviewButton();

    expect(page.getDialogWords().isPresent()).toEqual(true);
    expect(page.getDialogHeaderText()).toEqual('MONTHS');
    expect(page.getDialogWordCountWords().count()).toEqual(10);
    expect(page.getDialogWordBtnBackText()).toEqual('Back');
    expect(page.getDialogWordBtnLearnText()).toEqual('Go to learn');
  });

  xit('should go to learn "months" flashcards', () => {

    page.clickLearnButton();

    browser.sleep(1000);

    browser.getCurrentUrl().then(url => {
      expect(url.indexOf('flashcards/months')).not.toBe(-1);
    });
  });

  it('should click Back button and show dialog', () => {

    page.clickBackButton();

    expect(page.getDialog().isPresent()).toEqual(true);
    expect(page.getDialogWords().isPresent()).toEqual(false);
    expect(page.getDialogHeaderText()).toEqual('MONTHS');
    expect(page.getDialogCategoryCountWordsText()).toEqual('10');
    expect(page.getDialogCategoryText()).toEqual('YOU HAVE 10 WORDS IN THIS CATEGORY');
    expect(page.getDialogCategoryBtnPreviewText()).toEqual('Preview');
    expect(page.getDialogCategoryBtnLearnText()).toEqual('Go to learn');
  });

  it('should go to learn "months" flashcards', () => {

    page.clickLearnButton();

    browser.sleep(1000);

    browser.getCurrentUrl().then(url => {
      expect(url.indexOf('flashcards/months')).not.toBe(-1);
    });
  });

});
