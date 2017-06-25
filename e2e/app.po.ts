import { browser, by, element } from 'protractor';

export class FlashcardsAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-flashcards h1')).getText();
  }
}
