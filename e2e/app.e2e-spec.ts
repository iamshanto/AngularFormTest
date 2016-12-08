import { FormTestPage } from './app.po';

describe('form-test App', function() {
  let page: FormTestPage;

  beforeEach(() => {
    page = new FormTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
