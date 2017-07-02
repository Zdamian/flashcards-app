import { browser } from 'protractor';
import { FlashcardsLearnPage } from './flashcards-learn.po';

xdescribe('flashcards-learn App', () => {
  let page: FlashcardsLearnPage;
  page = new FlashcardsLearnPage();

  beforeAll(() => {
    page.navigateTo();
  });

  it(`should show the first card
    and two nav buttons where the previous one is disabled`, () => {

    expect(page.getNavigationButtons().get(0).isEnabled()).toEqual(false);
    expect(page.getNavigationButtons().get(1).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().count()).toEqual(2);
    expect(page.getCardText()).toEqual('podłoga');
  });

  it('should not go to the previous card', () => {

    page.getNavigationButtons().get(0).click();

    expect(page.getCardText()).toEqual('podłoga');
  });

  it('should go to the next card', () => {

    page.getNavigationButtons().get(1).click();

    browser.sleep(1000);

    expect(page.getNavigationButtons().get(0).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().get(1).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().count()).toEqual(2);
    expect(page.getCardText()).toEqual('pokój');

    page.getNavigationButtons().get(1).click();

    browser.sleep(1000);

    expect(page.getNavigationButtons().get(0).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().get(1).isEnabled()).toEqual(false);
    expect(page.getNavigationButtons().count()).toEqual(2);
    expect(page.getCardText()).toEqual('kuchnia');

    page.getNavigationButtons().get(0).click();

    browser.sleep(1000);

    expect(page.getNavigationButtons().get(0).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().get(1).isEnabled()).toEqual(true);
    expect(page.getNavigationButtons().count()).toEqual(2);
    expect(page.getCardText()).toEqual('pokój');
  });

  it('should reverse the card', () => {

    page.clickCard();

    expect(page.getCardText()).toEqual('room');
    page.isCardKnown().then(isKnown => {
      if (isKnown) {
        expect(
          page.getKnownButtonCssValueOf('background-color')
        ).toEqual('rgba(144, 238, 144, 1)');
        expect(page.getKnownButtonText()).toEqual('known');
      } else {
        expect(
          page.getKnownButtonCssValueOf('background-color')
        ).toEqual('rgba(240, 128, 128, 1)');
        expect(page.getKnownButtonText()).toEqual('unknown');
      }
    });
  });

  it('should click known/unknown', () => {

    page.clickKnownButton();

    page.isCardKnown().then(isKnown => {
      if (isKnown) {
        expect(
          page.getKnownButtonCssValueOf('background-color')
        ).toEqual('rgba(144, 238, 144, 1)');
        expect(page.getKnownButtonText()).toEqual('known');
      } else {
        expect(
          page.getKnownButtonCssValueOf('background-color')
        ).toEqual('rgba(240, 128, 128, 1)');
        expect(page.getKnownButtonText()).toEqual('unknown');
      }
    });
  });

  it('should reverse the card to the front side', () => {

    page.clickCard();

    expect(page.getCardText()).toEqual('pokój');
  });

  it('should go to "home-page"', () => {

    page.clickHomePageButton();

    browser.getCurrentUrl().then(url => {
      expect(url.indexOf('/')).not.toBe(-1);
    });
  });

});
