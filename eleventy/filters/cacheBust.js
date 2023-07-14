/* ***** ----------------------------------------------- ***** **
/* ***** Cache Bust Filter
/* ***** ----------------------------------------------- ***** */

const timestamp = Math.floor(Date.now() / 1000)

module.exports = (value) => {
  return `${value}?${timestamp}`
}
