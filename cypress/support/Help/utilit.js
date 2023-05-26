import Constants from '../Locators/Locators';

export class UtilityClassTest {

}
export function login() {
    cy.visit(Constants.url);
    cy.get(Constants.username).type('clonecptadmin')
    cy.get('#password').type('Password1@')
    cy.contains('Log In').click()

}