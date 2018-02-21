/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
  'demo test google': client => {
    client.url('http://google.com').waitForElementPresent('body', 1000)
  },

  'part two': client => {
    client
      .setValue('input[type=text]', ['google', client.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#rso', 'google')
      .end()
  }
}
