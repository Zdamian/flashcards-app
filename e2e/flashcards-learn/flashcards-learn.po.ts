import { browser, by, element } from 'protractor';

export class FlashcardsLearnPage {
  navigateTo() {
    return browser.get('/flashcards/home');
  }

  getComponentElement() {
      return element(by.css('app-flashcards-learn'));
  }

  getCard() {
    return this.getComponentElement().all(by.css('li'));
  }

  getNavigationButtons() {
    return this.getComponentElement().all(by.css('.mat-fab'));
  }

  getCardText() {
    return element(by.css('.card-content')).getText();
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

}
