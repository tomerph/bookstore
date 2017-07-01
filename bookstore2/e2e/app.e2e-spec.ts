import { Bookstore2Page } from './app.po';

describe('bookstore2 App', () => {
  let page: Bookstore2Page;

  beforeEach(() => {
    page = new Bookstore2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
