import Banner from './banner';

it('renders correctly', () => {
    cy.mount(<Banner />);

    cy.get('h2').should('exist').and('have.text', 'Step-by-step guide to choosing great font pairs');
    cy.get('.author-name').should('exist').and('have.text', 'James West'.trim());
    cy.get('p')
        .should('exist')
        .and(
            'contain.text',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        );
});
