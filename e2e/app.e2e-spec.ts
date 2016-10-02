import { HealthcenterioNgPage } from './app.po';

describe('healthcenterio-ng App', function() {
  let page: HealthcenterioNgPage;

  beforeEach(() => {
    page = new HealthcenterioNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
