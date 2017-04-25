import { PetSuppliesFrontPage } from './app.po';

describe('pet-supplies-front App', () => {
  let page: PetSuppliesFrontPage;

  beforeEach(() => {
    page = new PetSuppliesFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
