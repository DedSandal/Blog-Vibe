import Blog from './blog';

describe('Blog Component', () => {
    const mockBlog = {
        img: '/9j/4AAQSkZJRgABAQEAAh...',
        title: 'Testing Blog Component',
        description: 'This is a test description.',
        content: '<p>This is the content of the blog.</p>',
    };

    it('renders correctly with provided blog data', () => {
        cy.mount(<Blog blog={mockBlog} />);

        cy.get('img').should('exist');
        cy.get('img').should('have.attr', 'alt', mockBlog.title);

        cy.get('h3').should('exist').and('have.text', mockBlog.title);

        cy.get('p').should('exist').and('have.text', mockBlog.description);
    });

    it('renders correctly without description and with content', () => {
        const blogWithoutDescription = {
            ...mockBlog,
            description: null,
        };

        cy.mount(<Blog blog={blogWithoutDescription} />);

        cy.get('img').should('exist');
        cy.get('img').should('have.attr', 'alt', blogWithoutDescription.title);

        cy.get('h3').should('exist').and('have.text', blogWithoutDescription.title);

        cy.get('div').should('contain.html', blogWithoutDescription.content);
    });
});
