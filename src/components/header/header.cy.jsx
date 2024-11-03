import { MemoryRouter } from 'react-router-dom';

import { AuthProvider } from '../../providers/authProvider';
import Header from './header';

const MockAuthContext = ({ children, isAuth, signOut }) => {
    return <AuthProvider value={{ isAuth, signOut }}>{children}</AuthProvider>;
};

describe('Header Component', () => {
    it('renders correctly when user is authenticated', () => {
        const signOutStub = cy.stub();

        cy.mount(
            <MemoryRouter>
                <MockAuthContext isAuth={true} signOut={signOutStub}>
                    <Header />
                </MockAuthContext>
            </MemoryRouter>,
        );

        cy.get('h1').should('contain.text', 'Blog Vibe');
        cy.get('.logout-wrapper').should('exist');

        cy.get('.logout-wrapper button').should('exist').and('contain.text', 'Logout');

        cy.get('.logout-wrapper button').click();

        cy.wrap(signOutStub).should('have.been.called');
    });
});
