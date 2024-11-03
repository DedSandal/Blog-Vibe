describe('Home E2E Test', () => {
    beforeEach(() => {
        cy.visitApp();
    });

    it('displays the banner and blog posts', () => {
        cy.getByDataCy('home-title').should('exist');

        cy.getByDataCy('post-item').should('have.length', 5);
    });
});
