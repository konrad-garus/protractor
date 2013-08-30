// The main suite of Protractor tests.
exports.config = {
  seleniumServerJar: './selenium/selenium-server-standalone-2.35.0.jar',
  chromeDriver: './selenium/chromedriver',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to this directory.
  specs: [
    'findelements_spec.js',
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
  }
};