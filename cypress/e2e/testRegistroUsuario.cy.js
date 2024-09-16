describe('registro usuario', () => {
  it('se deberia registrar correctamente un nuevo usuario', () => {
    //acceder a la pagina
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')

    //acceder al sing up
    cy.get('#signup').click();


    //completar el registro de usuario, los # SON LOS ID
    cy.get('#firstName').type('TestFirstName');
    cy.get('#lastName').type('TestLastName');
    cy.get('#email').type('giovanni@example.com');
    cy.get('#password').type('password123');

    //enviar el registro
    cy.get('#submit').click();

    //verificar si fue exitoso
    cy.contains('Contact List').should('be.visible');
  })
})