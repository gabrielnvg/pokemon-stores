/* eslint-disable no-undef */
describe('Searches for Pokémon with "a" on its name', () => {
  it('searches for Pokémon with "a" on its name, from the search input, then adds it to shopping cart and clicks on the purchase button', () => {
    cy.visit('/');

    // Waits 10s for JSON, then searches for Pokémon with "a" on its name
    cy.xpath('//*[@id="root"]/div[1]/header/div/div/div/div[2]/input', {
      timeout: 10000,
    }).type('a');

    // Waits for the search debounce
    cy.wait(1000);

    // Clicks on first "add to cart" button
    cy.xpath('//*[@id="root"]/div[3]/div/div/div[1]/div/div/div/button', {
      timeout: 3000,
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
