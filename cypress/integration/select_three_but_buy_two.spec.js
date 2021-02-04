/* eslint-disable no-undef */
describe('Add three different Pokémon to shopping cart, remove one and buy the remaining two', () => {
  it('adds three different Pokémon to shopping cart, removes one and clicks on the purchase button', () => {
    cy.visit('/');

    // Waits 10s for JSON, then clicks on first "add to cart" button
    cy.xpath('//*[@id="root"]/div[3]/div/div/div[1]/div/div/div/button', {
      timeout: 10000,
    }).click();

    // Closes the shopping cart
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/button', {
      timeout: 10000,
    }).click();

    // Clicks on fourth "add to cart" button
    cy.xpath('//*[@id="root"]/div[3]/div/div/div[4]/div/div/div/button', {
      timeout: 3000,
    }).click();

    // Closes the shopping cart
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/button', {
      timeout: 10000,
    }).click();

    // Clicks on sixth "add to cart" button
    cy.xpath('//*[@id="root"]/div[3]/div/div/div[6]/div/div/div/button', {
      timeout: 3000,
    }).click();

    // Remove one Pokémon the shopping cart
    cy.xpath(
      '/html/body/div[2]/div[3]/div/div[2]/ul/div[1]/li[1]/div[2]/button',
      {
        timeout: 10000,
      },
    ).click();

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
