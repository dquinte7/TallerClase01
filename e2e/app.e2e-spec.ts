import { Tallerclase01Page } from './app.po';

describe('tallerclase01 App', function() {
  let page: Tallerclase01Page;

  beforeEach(() => {
    page = new Tallerclase01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
