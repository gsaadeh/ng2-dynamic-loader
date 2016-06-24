import { Ng2DynamicLoaderPage } from './app.po';

describe('ng2-dynamic-loader App', function() {
  let page: Ng2DynamicLoaderPage;

  beforeEach(() => {
    page = new Ng2DynamicLoaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
