import { browser, by, element } from 'protractor';

export class FlashcardsAddWord {
  navigateTo(url: string) {
    return browser.get(url);
  }

  getComponent() {
      return element(by.css('app-new-word'));
  }

  getHeaderText() {
      return element(by.css('h1')).getText();
  }

  getSecondHeaderText() {
      return element(by.css('h2')).getText();
  }

  getFooterText() {
      return element(by.css('footer p')).getText();
  }

  getSpinner() {
    return element(by.css('md-spinner'));
  }

  clickAddWordButton() {
      return element(by.css('.btn-add-word')).click();
  }

  sendKeysEnglishInput(text: string) {
      return element(by.css('.english-input')).sendKeys(text);
  }

  sendKeysPolishInput(text: string) {
      return element(by.css('.polish-input')).sendKeys(text);
  }

  getEnglishInputValue() {
      return element(by.css('.english-input')).getAttribute('value');
  }

  getPolishInputValue() {
      return element(by.css('.polish-input')).getAttribute('value');
  }

  clickGetAllCategories() {
      return element(by.css('md-select')).click();
  }

  getOptions() {
     return element(by.css('.mat-select-panel'));
  }

  getAllCategories() {
      return this.getOptions().all(by.css('md-option'));
  }

  getCategoriesText(index: number) {
      return this.getAllCategories().get(index).getText();
  }

  clickChooseCategory(index: number) {
      return this.getAllCategories().get(index).click();
  }

  getChooseCategoryText() {
      return element(by.css('.mat-select-trigger .mat-select-value-text')).getText();
  }

  clickBtnAddWord() {
      return element(by.css('.example-container .btn-add-new-word')).click();
  }

  getBtnAddWordText() {
      return element(by.css('.example-container .btn-add-new-word')).getText();
  }

  getChosenCategoryText() {
      return element(by.css('.mat-select-trigger')).getText();
  }

  getSnackBar() {
     return element(by.css('snack-bar-container'));
  }

}
