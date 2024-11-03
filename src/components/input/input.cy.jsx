import Input from './input';

describe('Input Component', () => {
    it('renders correctly', () => {
        cy.mount(<Input placeholder="Enter text" />);

        cy.get('input').should('exist');
        cy.get('input').should('have.attr', 'placeholder', 'Enter text');
    });
});
