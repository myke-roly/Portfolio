const withSourcesMaps = require('@zeit/next-source-maps');

module.exports = withSourcesMaps({
  env: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DB_URL,
    projectId: process.env.NEXT_PUBLIC_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGIN_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  },
})