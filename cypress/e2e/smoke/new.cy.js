
import Constants from '../../support/Locators/Locators';
/// <reference types="Cypress" />

import  { login } from '../../support/Help/utilit';
//import { UtilityClass } from '../../support/Help/utility';

//let UtilityHelper = new UtilityClass();
//var UtilityHelper1 = new UtilityClass();
//Cypress.env('RETRIES', 1);
describe('template spec', { retries: { openMode: 3, } }, () => {
    it('passes', () => {
  
//login()
      cy.visit(Constants.url);
    cy.get(Constants.username).type('clonecptadmin')
    cy.get('#passwordtest').type('Password1@')
    cy.contains('Log In').click()


    / login()

    })
  })


 // Cypress.env('RETRIES', 1);
//describe("DXA-1782: Checking Import SFTP",
//{ retries: { runMode: 2, openMode: 2, } }, () => {
  



