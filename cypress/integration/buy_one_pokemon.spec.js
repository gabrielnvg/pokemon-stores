/* eslint-disable no-undef */
describe('Buys one Pokémon', () => {
  it('adds a Pokémon to shopping cart and clicks on the purchase button', () => {
    cy.visit('/');

    // Wait 10s for JSON, then clicks on first "add to cart" button
    cy.xpath('//*[@id="root"]/div[3]/div/div/div[1]/div/div/div/button', {
      timeout: 10000,
    }).click();

    // Clicks on "purchase" button
    cy.xpath('/html/body/div[2]/div[3]/div/div[3]/button', {
      timeout: 3000,
    }).click();

    // Expects to render the dialog
    cy.xpath('/html/body/div[3]/div[3]/div', { timeout: 2000 }).should(
      'be.visible',
    );
  });
});
