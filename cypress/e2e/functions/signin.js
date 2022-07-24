class SignInPage {

  login() {
    // cy.clearCookies();
    // cy.clearLocalStorage();
    var username = '09029950050';
    var password = '*hsdfhjA7';
    cy.session([username, password], () => {
      cy.viewport(1280, 720);
      cy.visit('https://www.digikala.com/users/login/', { headers: { 'Connection': "Keep-Alive" } });
      cy.get("[name='username'").type(username);
      cy.get("[type='submit']").click();
      // cy.get("div:contains('ورود با رمز عبور')[class]").last().click();
      cy.get("[name='password'").type(password);
      cy.get("[type='submit']").click();
      cy.get("[class*='BaseLayoutMiniProfile_']").should("exist");
    });
  }
}

export default SignInPage;