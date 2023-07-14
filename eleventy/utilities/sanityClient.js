/* ***** ----------------------------------------------- ***** **
/* ***** Sanity Client
/* ***** ----------------------------------------------- ***** */

const sanityClient = require('@sanity/client')
const { sanity } = require('../../config.js')

module.exports = sanityClient({ ...sanity })
