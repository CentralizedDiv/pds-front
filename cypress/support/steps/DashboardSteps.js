/* global Given, Then, When */

import DashboardPage from "../pageobjects/DashboardPage";
const dashboardPage = new DashboardPage();

Given("the user is on dashboard page", () => {
  dashboardPage.navigateToURL();
});

When(/^the user clicks on "([^"]*)"$/, (dataTestId) => {
  dashboardPage.clickOnDataTest(dataTestId);
});

Then("should visualize the create new album modal", () => {
  dashboardPage.visualizarBotaoRecuperarSenha();
});
