describe('Add Post E2E Test', () => {
    beforeEach(() => {
        cy.visitApp();
    });

    it('displays the correct blog post based on the ID', () => {
        cy.getByDataCy('post-item').eq(0).click();
        cy.getByDataCy('post-title').should('exist');
    });
});
