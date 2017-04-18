import { FirstAngular4AppPage } from './app.po';

describe('first-angular4-app App', () => {
  let page: FirstAngular4AppPage;

  beforeEach(() => {
    page = new FirstAngular4AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
