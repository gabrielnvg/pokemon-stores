/* eslint-disable no-undef */
describe('Buys multiple times the same Pokémon after altering its quantity', () => {
  it('adds a Pokémon to shopping cart and clicks multiple times to increase and decrease its quantity, then clicks on purchase button', () => {
    cy.visit('/');

    // Waits 10s for JSON, then clicks on first "add to cart" button
    cy.xpath('//*[@id="root"]/div[3]/div/div/div[1]/div/div/div/button', {
      timeout: 10000,
    }).click();

    const clicksOnIncreaseQuantity = () => {
      cy.xpath(
        '/html/body/div[2]/div[3]/div/div[2]/ul/div/li[1]/div[1]/div[3]/button[2]',
        {
          timeout: 3000,
        },
      ).click();
    };

    const clicksOnDecreaseQuantity = () => {
      cy.xpath(
        '/html/body/div[2]/div[3]/div/div[2]/ul/div/li[1]/div[1]/div[3]/button[1]',
        {
          timeout: 3000,
        },
      ).click();
    };

    // Clicks 10 times on increase quantity button
    clicksOnIncreaseQuantity();
    clicksOnIncreaseQuantity();
    clicksOnIncreaseQuantity();
    clicksOnIncreaseQuantity();
    clicksOnIncreaseQuantity();
    clicksOnIncreaseQuantity();
    clicksOnIncreaseQuantity();
    clicksOnIncreaseQuantity();
    clicksOnIncreaseQuantity();
    clicksOnIncreaseQuantity();

    // Clicks 3 times on increase quantity button
    clicksOnDecreaseQuantity();
    clicksOnDecreaseQuantity();
    clicksOnDecreaseQuantity();

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
