import { browser } from 'protractor';
import { FlashcardsAddWord } from './feature2-add-word.po';

describe('flashcards add word', () => {
  let page: FlashcardsAddWord;
  page = new FlashcardsAddWord();

  beforeAll(() => {
    page.navigateTo('/new-word');
  });

  it(`should fill in form`, () => {

    page.sendKeysEnglishInput('floor');
    page.sendKeysPolishInput('podłoga');

    browser.sleep(1000);

    expect(page.getEnglishInputValue()).toEqual('floor');
    expect(page.getPolishInputValue()).toEqual('podłoga');
  });

  it(`should show list of categories`, () => {

    page.clickGetAllCategories();

    expect(page.getOptions().isPresent()).toEqual(true);
    expect(page.getAllCategories().count()).toEqual(14);
    expect(page.getCategoriesText(0)).toEqual('home');
    expect(page.getBtnAddWordText()).toEqual('Add New Word');
  });

  it(`should choose category`, () => {

    page.clickChooseCategory(0);

    browser.sleep(1000);

    expect(page.getOptions().isPresent()).toEqual(false);
    expect(page.getChooseCategoryText()).toEqual('home');
  });

  it(`should add new category`, () => {

    page.clickBtnAddWord();

    browser.sleep(1000);

    expect(page.getSnackBar().isPresent()).toEqual(true);
    expect(page.getEnglishInputValue()).toEqual('');
    expect(page.getPolishInputValue()).toEqual('');
    expect(page.getChosenCategoryText()).toEqual('Choose Category');
  });

});
