import { FlashcardsAppPage } from './app.po';

xdescribe('flashcards-app App', () => {
  let page: FlashcardsAppPage;

  beforeEach(() => {
    page = new FlashcardsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('flashcards works!');
  });
});
