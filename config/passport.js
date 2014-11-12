/**
 * Passport configuration
 *
 * This if the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  google: {
    name: 'Google',
    protocol: 'oauth2',
    strategy: require('passport-google-oauth').OAuth2Strategy,
    options: {
      scope: ['https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/userinfo.email'],
      clientID: '241021784461-o46l7n43ca41c6ok8mkkah9mfqjm3n9c.apps.googleusercontent.com',
      clientSecret: 'Oh11presZ3Qw09BKXaO1MAqd'
    }
  }
};