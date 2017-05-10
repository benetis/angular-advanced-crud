import { AngularAdvancedCrudPage } from './app.po';

describe('angular-advanced-crud App', () => {
  let page: AngularAdvancedCrudPage;

  beforeEach(() => {
    page = new AngularAdvancedCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
