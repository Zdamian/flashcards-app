import { browser, by, element } from 'protractor';

export class FlashcardsRemoveWord {
  navigateTo(url: string) {
    return browser.get(url);
  }

  getComponent() {
      return element(by.css('app-home-page'));
  }

  getHeaderText() {
      return this.getComponent().element(by.css('h1')).getText();
  }

  getSecondHeaderText() {
      return element(by.css('h2')).getText();
  }

  getFooterText() {
      return element(by.css('footer p')).getText();
  }

  getMenu() {
      return element(by.css('.menu-more-vert'));
  }

  getButtonsList() {
      return element(by.css('app-menu md-menu'));
  }

  getListButtons() {
      return element(by.css('.cdk-overlay-container .mat-menu-content'));
  }

  getButtons() {
      return this.getListButtons().all(by.css('button'));
  }

  getButtonsText(index: number) {
      return this.getButtons().get(index).getText();
  }

  getSpinner() {
    return element(by.css('md-spinner'));
  }

  clickWordsListButton(index: number) {
      return this.getButtons().get(index).click();
  }

  getWords() {
      return element.all(by.css('.words-cards .words'));
  }

  getWordsText(index: number) {
      return this.getWords().get(index).element(by.css('div')).getText();
  }

  clickWord(index: number) {
    return this.getWords().get(index).click();
  }

  getWord() {
    return element(by.css('.word-card'));
  }

  getWordText() {
    return element(by.css('md-card-content')).getText();
  }

  getEditBtn() {
    return element(by.css('.edit')).getText();
  }

  getRemoveBtn() {
    return element(by.css('.remove')).getText();
  }

  clickRemoveButton() {
      return element(by.css('.remove')).click();
  }

  getSnackBar() {
     return element(by.css('snack-bar-container'));
  }

}
