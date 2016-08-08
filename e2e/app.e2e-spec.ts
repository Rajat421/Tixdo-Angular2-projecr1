import { TixPage } from './app.po';

describe('tix App', function() {
  let page: TixPage;

  beforeEach(() => {
    page = new TixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
