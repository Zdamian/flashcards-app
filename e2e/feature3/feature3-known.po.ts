import { browser, by, element, ElementFinder  } from 'protractor';

export class FlashcardsAddWord {
  navigateTo(url: string) {
    return browser.get(url);
  }

  getComponent() {
      return element(by.css('app-flashcards-learn'));
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

  clickFlashcardsButton() {
      return element(by.css('.btn-flashcards')).click();
  }

  getFlashcards() {
      return element.all(by.css('md-grid-tile'));
  }

  getFlashcardsText(index: number) {
      return this.getFlashcards().get(index).element(by.css('.flashcard-text')).getText();
  }

  getDialog() {
    return element(by.css('app-dialog'));
  }

  getDialogHeaderText() {
    return element(by.css('app-dialog h3')).getText();
  }

  getDialogCategoryCountWordsText() {
    return element(by.css('app-dialog strong')).getText();
  }

  getDialogCategoryText() {
    return element(by.css('app-dialog p')).getText();
  }

  getDialogCategoryBtnPreviewText() {
    return element(by.css('app-dialog .preview')).getText();
  }

  getDialogCategoryBtnLearnText() {
    return element(by.css('app-dialog .learn')).getText();
  }

  getSpinner() {
    return element(by.css('md-spinner'));
  }

  hoverKnownButton() {
    browser.actions()
      .mouseMove(this.getKnownButton())
      .perform();
  }

  getKnownButton() {
    return element(by.css(`md-card-actions md-button-toggle`));
  }

  getMenuElement() {
    return element(by.css('app-menu .example-tooltip-host'));
  }

  hoverMenu() {
    browser.actions()
      .mouseMove(this.getMenuElement())
      .perform();
  }

  hoverFlashcard(el: ElementFinder) {
    browser.actions()
        .mouseMove(el)
        .perform();
  }

  getFlashcard(index: number) {
      return this.getFlashcards().get(index)
  }

  getFleshcardCssValueOf(cssStyleProperty: string) {
    return element(by.css('md-grid-tile md-card')).getCssValue(cssStyleProperty);
  }

  clickPreviewButton() {
      return element(by.css('app-dialog button.preview')).click();
  }

  getDialogWords() {
      return element(by.css('app-dialog .dialog-word'));
  }

  getDialogWordCountWords() {
      return element.all(by.css('md-list-item'));
  }

  getDialogWordBtnBackText() {
    return element(by.css('app-dialog .back')).getText();
  }

  getDialogWordBtnLearnText() {
    return element(by.css('app-dialog .learn')).getText();
  }

  clickLearnButton() {
    return element(by.css('app-dialog button.learn')).click();
  }

  getNavigationButtons() {
    return this.getComponent().all(by.css('.mat-fab'));
  }

  keydown(key: string) {
    browser.actions().sendKeys(key).perform();
  }

  getCardText() {
    return element(by.css('.card-content')).getText();
  }

  getCard() {
    return this.getComponent().all(by.css('li'));
  }

  clickCard() {
    return this.getCard().click();
  }

  // check if toggle known button is green (has class "known") or is red (has class "unknown")
  isCardKnown() {
    return this.getKnownButtonByClassName('known').isPresent();
  }

  getKnownButtonByClassName(className: string) {
    return element(by.css(`md-card-actions md-button-toggle.${className}`));
  }

  getKnownButtonCssValueOf(cssStyleProperty: string) {
    return element(by.css('md-card-actions md-button-toggle')).getCssValue(cssStyleProperty);
  }

  getKnownButtonText() {
    return element(by.css('md-card-actions md-button-toggle')).getText();
  }

  clickKnownButton() {
    return element(by.css(`md-card-actions md-button-toggle`)).click();
  }

  clickHomePageButton() {
    return this.getComponent().all(by.css('.home-page')).click();
  }

}
