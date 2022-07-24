const { defineConfig } = require('cypress')

module.exports = defineConfig({
	"experimentalStudio" : true,
  e2e: {
    baseUrl: 'https://www.digikala.com/'
  }
})