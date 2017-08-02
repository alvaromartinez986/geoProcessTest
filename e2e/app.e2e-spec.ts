import { GeoProcessTestPage } from './app.po';

describe('geo-process-test App', () => {
  let page: GeoProcessTestPage;

  beforeEach(() => {
    page = new GeoProcessTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
