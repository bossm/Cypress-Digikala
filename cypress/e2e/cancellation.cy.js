
import SignInPage from './functions/signin.js';

describe('Sign In', () => {

  const signIn = new SignInPage();

  beforeEach(() => {
    signIn.loginLocal('mohammad.kh06@gmail.com','Dark@5680');
    cy.visit("http://localhost:3000/agent-dashboard/leads-generation");
    cy.get(
      "[class^='news-list_newsList'] > :nth-child(1) > [class^='news-item_articleContainer']"
    ).click();

  })
  
  it('should sign in with correct credentials', () => {
 
    const signIn = new SignInPage();
    signIn.loginLocal();

    // const signIn = home.goToSignIn();

    // signIn
      // .fillEmail('john@doe.com')
      // .fillPassword('123456')
      // .submit();

    // home.getUserAvatar().should('exist');
  });
});