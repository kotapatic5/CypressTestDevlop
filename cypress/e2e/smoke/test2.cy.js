import Constants from '../../support/Locators/Locators';
import  {login } from '../../support/Help/utilit';

describe('template spec', () => {
    it('passes', () => {
      cy.visit(Constants.url)
     login();
    })
  })