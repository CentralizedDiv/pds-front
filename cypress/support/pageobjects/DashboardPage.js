/// <reference types="Cypress" />
const url = Cypress.config("baseUrl");

class DashboardPage {

  navigateToURL() {
    cy.visit(url);
  }

  clickOnDataTest(dataTestId) {
    cy.get(`[data-testid=${dataTestId}]`).click();
  }

  visualizarBotaoRecuperarSenha() {
    cy.get("[data-testid=create-new-album-modal]").should(
      "contain",
      "Novo álbum"
    );
  }
}

export default DashboardPage;
