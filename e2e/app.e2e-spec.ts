import { SAMPage } from './app.po';

describe('sam App', () => {
  let page: SAMPage;

  beforeEach(() => {
    page = new SAMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
