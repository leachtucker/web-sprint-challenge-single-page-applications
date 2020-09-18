describe('Pizza Order App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name=name]');
    const sizeSelect = () => cy.get('select[name=size]'); // Use .select('<option-name>')
    const garlicRanch = () => cy.get('input[value="garlic ranch"]');
    const pepperoni = () => cy.get('input[name=pepperoni]'); // .check
    const sausage = () => cy.get('input[name=sausage]'); // .check
    const onions = () => cy.get('input[name=onions]'); // .check
    const dicedTomatoes = () => cy.get('input[name=dicedTomatoes]'); // .check
    const glutenFree = () => cy.get('input[name=glutenFree]'); // .check
    const specialInstructions = () => cy.get('input[name=specialInstructions]');

    const submitButton = () => cy.get('button[id="submit-order-btn"]')

    // Check that we can find all the elements on screen
    it('Proper elements are showing', () => {
        nameInput().should('exist');
        sizeSelect().should('exist');
        garlicRanch().should('exist');
        pepperoni().should('exist');
        sausage().should('exist');
        onions().should('exist');
        dicedTomatoes().should('exist');
        glutenFree().should('exist');
        specialInstructions().should('exist');
        submitButton().should('exist');
    })

    // Test that we can add text to our name input
    it('Can write in name field', () => {
        nameInput()
            .should('have.value', '')
            .type('Jane Doe')
            .should('have.value', 'Jane Doe')
    })

    // Test that we can add text to our special instructions input
    it('Can write in name field', () => {
        specialInstructions()
            .should('have.value', '')
            .type('Leave by door')
            .should('have.value', 'Leave by door')
    })

    // Test that we can select multiple toppings
    it('Can select multiple toppings', () => {
        pepperoni()
            .check()
            .should('have.value', "on");
        sausage()
            .check()
            .should('have.value', "on");
        onions()
            .check()
            .should('have.value', "on");
        dicedTomatoes()
            .check()
            .should('have.value', "on");
    })

    // Check that we can submit the form with proper input and the button disables after submission
    it('Can submit form with proper input', () => {
        nameInput().type('John Smith');
        sizeSelect().select('small');
        garlicRanch().check();
        sausage().check();
        submitButton().should('not.be.disabled');
        submitButton()
            .click()
            .should('be.disabled');
    })


})