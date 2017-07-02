import { browser, by, element } from 'protractor';

export class Flashcards {
  navigateTo() {
    return browser.get('/flashcards');
  }

  getFlashcards() {
      return element.all(by.css('md-grid-tile'));
  }

  getFlashcardsText(index: number) {
      return this.getFlashcards().get(index).element(by.css('.flashcard-text')).getText();
  }

  clickFlashcard(index: number) {
    return this.getFlashcards().get(index).click();
  }

  getDialog() {
    return element(by.css('app-dialog'));
  }

  getSpinner() {
    return element(by.css('md-spinner'));
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

  clickBackButton() {
      return element(by.css('app-dialog button.back')).click();
  }

  clickLearnButton() {
    return element(by.css('app-dialog button.learn')).click();
  }

}
