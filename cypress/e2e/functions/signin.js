class SignInPage {
  visit() {
        return cy.visit('http://localhost:3000/signin', {headers: {'Connection': "Keep-Alive"}});
  }

  loginLocal(username, password) {
    cy.session([username, password], () => {
   // cy.clearCookies();
   // cy.clearLocalStorage();
    cy.viewport(1280, 720);
    cy.visit('http://localhost:3000/agent-dashboard', {headers: {'Connection': "Keep-Alive"}});
		cy.get('input[name=email]').type(username)
		// {enter} causes the form to submit
    cy.get('input[name=psw]').type(`${password}{enter}`)
    cy.url().should('not.contain', 'signin');
	// cy.url().should('contain', 'roomvu');
  // cy.visit('http://localhost:3000/agent-dashboard', {headers: {'Connection': "Keep-Alive"}});
  })
  cy.visit('http://localhost:3000/agent-dashboard', {headers: {'Connection': "Keep-Alive"}});
	// return this;
  }

  loginDev(username, password) {
    cy.visit('https://dev.roomvu.com/login', {headers: {'Connection': "Keep-Alive"}});
		cy.get('#email[name=email]').type(username)
		// {enter} causes the form to submit
    cy.get('input[name=password]').type(password)
	  cy.url().should('contain', 'roomvu');
    cy.visit('https://dev.roomvu.com/agent-dashboard', {headers: {'Connection': "Keep-Alive"}});

	  return this;
  }

  loginWithToken(email, token) {
    cy.visit('https://dev.roomvu.com/login?t=' + token + '&email=' + email);

	  return this;
  }

  loginWithTokenAsFreeUser() {
    this.loginWithToken('automation@roomvu.co','JQof4');
  }
}

export default SignInPage;