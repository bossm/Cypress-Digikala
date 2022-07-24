
import SignInPage from './functions/signin.js';

describe('Sign In', () => {

    const signIn = new SignInPage();

    beforeEach(() => {
        signIn.login();
    })

    it('Cancel the order', () => {
        cy.visit('https://www.digikala.com/profile/my-orders/?activeTab=in_progress');
        cy.get("a[href*='/profile/orders/']").first().click();
        cy.get("a[href*='/profile/orders/cancel']").first().click();
        cy.contains("علت لغو").should("exist");
        cy.get("[type='text']").click();
        cy.get("ul > li").first().click();
        cy.get("[data-cro-id='profile-submit-cancel-order']").click();
        cy.contains("کالاهای مورد نظر لغو شدند!").should("exist");
    });
});