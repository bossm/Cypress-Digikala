/// <reference types='cypress' />
import SignInPage from '../functions/signin.js';

describe("video auto play", () => {
  
  const signIn = new SignInPage();
  beforeEach(() => {
    signIn.loginLocal('mohammad.kh06@gmail.com','Dark@5680');
    //https://www.roomvu.com/agent/{$user->agent_profile_name}/landing/1/{$user->agent_token}/{$video['slug']}
    // cy.visit("/agent-dashboard/");
    cy.visit("/agent-dashboard/");
  });

  it("should be auto play", () => {
    cy.on('window:before:load', (win) => {
      // just log the win.location.href for convenience
      console.log('WINDOW BEFORE LOAD', win.location.href)
  
      // if we're trying to load the page we want to stop, win.stop()
      if (win.location.href.includes('roomvu.com/')) {
        win.stop();
      }
    });
    cy.get("[class^='dashboard_dashboardDesktop_']").scrollTo('bottom',{ensureScrollable: false});
    //cy.get("[class^='branded-news_title_']").scrollTo('bottom');
    cy.get("[class^='news-item_btnDownload_']").first().then(

      
    ).click();
    // Cypress.$(cy.state("$autIframe")).trigger("load");
  //   cy.window().document().then(function (doc) {
  //     doc.addEventListener('click', () => {
  //       setTimeout(function () { doc.location.reload() }, 5000);
  //     });
      
  // });
  cy.get("[class^='news-item_btnDownload_']").click();
    cy.wait(5000);
    
    //cy.get("[class^='news-item_overlay_']").first().click();
   
    
    
    // react video player
    // const container = "[class^='custom-video-player_videoPlayerWrapper_'] ";

    // cy.get(container + ".video-player")
    //   .should("have.prop", "paused", false)
    //   .and("have.prop", "ended", false);
    // cy.get(container + "[class^='video-player_loadingOverlay_']").should(
    //   "not.have.class",
    //   "video-player_loadingOverlayActive_"
    // );
  });
  
  // it("Closing the popup", () => {
  //   // react video player
  //   const container = "[class^='video-player_container_']";

  //   cy.get("[class^='PopupComponent_close_'] > svg").click();
  //   cy.url().should("include", "/agent-dashboard/video-lists");

  // });

  // it("should ask to connect facebook", () => {
  //   cy.get("[class^='video-popup_facebook_']").click();
  //   cy.contains("Share on Facebook").should("exist");
  // });

  // it("should ask to connect instagram", () => {
  //   cy.get("[class^='video-popup_instagram_']").click();
  //   cy.contains("Connect Instagram").should("exist");
  // });

  // // it("should ask to connect linkedin", () => {
  // //   cy.get("[class^='video-popup_linkedin_']").click();
  // //   cy.contains("Share on Linkedin").should("exist");
  // // });
  
  // it("Download video", () => {
  //   cy.get("[class^='video-popup_download_']").click();
  //   cy.contains("Download Video").should("exist");
  // });

  //   it("Edit Info", () => {
  //   cy.get("[class^='video-popup_editButton_']").click();
  //   cy.contains("Edit Info").should("exist");
  // });


});
