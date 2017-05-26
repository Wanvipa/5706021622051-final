// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
    .url(devServer)
    .waitForElementVisible('#app', 5000)
    .setValue('input[name=nameadd]', 'Networklap')
    .setValue('select[name=credit]', 3)
    .setValue('select[name=grade]', 'A')
    .click('button[name=addgrade]')
    .pause(5000)
    .end()
  }
}
