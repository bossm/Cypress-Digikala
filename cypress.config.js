const { defineConfig } = require('cypress')

module.exports = defineConfig({
	"experimentalStudio" : true,
	
  e2e: {
    experimentalSessionAndOrigin : true,
    baseUrl: 'https://www.digikala.com/'
  }
})