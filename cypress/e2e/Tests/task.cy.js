/// <reference types="cypress" />

//User Data
const Email = "qa_engineer_interview@reffie.me"
const Password = "QaEngineerInterview2024-06-20"
const ErrorMsgText = 'Either the user does not exist or the password is incorrect'

//Selectors
const TXT_UserEmail = '[name="email"]'
const TXT_UserPasword = '[name="password"]'
const BTN_SignIn = 'button[type="submit"]'
const MSG_Error = '.MuiAlert-message'

describe('Upwork Task', () => {
  beforeEach(() => {
    cy.visit('https://platform-staging.reffie.me/')
  })

  it('verify that user are unable to login with the invalid Email and valid Password', () => {

    //Enter invalid user email
    cy.get(TXT_UserEmail).type('Test@gmail.com')

    //Enter valid user password
    cy.get(TXT_UserPasword).type(Password)

    //Click on Sign In button
    cy.get(BTN_SignIn).click()

    //Verify error message
    cy.get(MSG_Error).should('contain', ErrorMsgText)

  })

  it('verify that user are unable to login with the valid Email and invalid Password', () => {

    //Enter valid user email
    cy.get(TXT_UserEmail).type(Email)

    //Enter invalid user password
    cy.get(TXT_UserPasword).type('test123')

    //Click on Sign In button
    cy.get(BTN_SignIn).click()

    //Verify error message
    cy.get(MSG_Error).should('contain', ErrorMsgText)

  })

  it('verify that user are unable to login with the invalid Email and invalid Password', () => {

    //Enter invalid user email
    cy.get(TXT_UserEmail).type('test@gmail.com')

    //Enter invalid user password
    cy.get(TXT_UserPasword).type('test123')

    //Click on Sign In button
    cy.get(BTN_SignIn).click()

    //Verify error message
    cy.get(MSG_Error).should('contain', ErrorMsgText)

  })

  it.only('verify that user are able to login with the credentials', () => {

    //Enter valid user email
    cy.get(TXT_UserEmail).type(Email)

    //Enter valid user password
    cy.get(TXT_UserPasword).type(Password)

    //Click on Sign In button
    cy.get(BTN_SignIn)
    .click()
    .wait(2000)

    cy.url().should('include', 'https://platform-staging.reffie.me/landlord/inner/messages')
    cy.wait(2000);
    cy.contains('Active').click();
    cy.wait(2000);
    cy.get('[type="checkbox"]').eq(0).click({force:true});
    cy.wait(2000);
    cy.contains('Evgeny Bareev').click({force:true});
    cy.get('.ellipsisText > .MuiTypography-root').should('contain','Evgeny Bareev');


  })


})
