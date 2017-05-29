import { SowmithPage } from './app.po';

describe('sowmith App', () => {
  let page: SowmithPage;

  beforeEach(() => {
    page = new SowmithPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
