import { browser } from 'protractor';
import { FlashcardsAddWord } from './feature3-known.po';

describe('flashcards click on known button', () => {
  let page: FlashcardsAddWord;
  page = new FlashcardsAddWord();

  it('should click on Preview button and show word dialog', () => {

    page.clickPreviewButton();

    expect(page.getDialogWords().isPresent()).toEqual(true);
    expect(page.getDialogHeaderText()).toEqual('WAR');
    expect(page.getDialogWordCountWords().count()).toEqual(4);
    expect(page.getDialogWordBtnBackText()).toEqual('Back');
    expect(page.getDialogWordBtnLearnText()).toEqual('Go to learn');
  });

  it('should go to learn "war" flashcards', () => {

    page.clickLearnButton();

    browser.sleep(1000);

    browser.getCurrentUrl().then(url => {
      expect(url.indexOf('flashcards/war')).not.toBe(-1);
    });
  });

});
