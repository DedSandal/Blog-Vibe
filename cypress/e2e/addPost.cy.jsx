describe('Add Post E2E Test', () => {
    beforeEach(() => {
        cy.visitApp();
        cy.getByDataCy('login').click();
        cy.getByDataCy('sign-up-link').click();
        cy.getByDataCy('username').type('pupsik');
        cy.getByDataCy('password').type('pupsik');
        cy.getByDataCy('confirm-password').type('pupsik');
        cy.getByDataCy('submit').click();
    });

    it('allows a user to add a post', () => {
        cy.getByDataCy('create-post').click();
        cy.getByDataCy('image-url').type('pupsik');
        cy.getByDataCy('title').type('pupsik');
        cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).as('editorBody');
        cy.get('@editorBody').clear();
        const textToType = 'Hello, TinyMCE!';
        cy.get('@editorBody').type(textToType);
        cy.getByDataCy('button-submit').click();
    });
});
