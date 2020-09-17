describe('user-onboarding app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passInput = () => cy.get('input[name=password]')
    const checkbox = () => cy.get('input[name=terms]')
    const submit = () => cy.get('button')

    it('shouldstart', () => {
      //test
    })
    
    // Get the Name input and type a name in it.
    // Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
    it('should get the name and type in it', () =>{
        nameInput()
        .type('Steven')
        .should('have.value', 'Steven')
    })

    // Get the Email input and type an email address in it
    it('should get the e-mail input and type an email', () =>{
      emailInput()
      .type('steven-sussman@lambdastudents.com')
    })

    // Get the password input and type a password in it
    it("should get the passpword input and type a password", () =>{
      passInput()
      .type('abcdefg123')
    })

    // Set up a test that will check to see if a user can check the terms of service box
    it('should be able to check the ToS', () =>{
      checkbox()
      .click()
    }) 

    it('should fill out everything and submit', () =>{
      it('should get the name and type in it', () =>{
        nameInput()
        .type('Steven')
        .should('have.value', 'Steven')
        emailInput()
        .type('steven-sussman@lambdastudents.com')
        .should('have.value', 'steven-sussman@lambdastudents.com')
        passInput()
        .type('abcdefg123')
        .should('have.value', 'abcdefg123')
        checkbox()
        .check()
        submit()
        .click
        cy.contains('Steven steven-sussman@lambdastudents.com').should('exist')
    })


    })
    it('should check for validation', () => {
      nameInput()
        .type('St')
        cy.contains('Name must be 3 chars or longer').should('exist')
      emailInput()
        .type('steven-sussmanatlambdastudents.com')
        cy.contains('Must be a valid email').should('exist')
      passInput()
        .type('ab')
        cy.contains('Password is too short - needs to be at least 8 chars').should('exist')
      checkbox()
      .check()
      .click()
      cy.contains('Please agree to ToS').should('exist')
    })
})
