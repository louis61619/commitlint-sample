const standardVersion = require('standard-version')

// Options are the same as command line, except camelCase
// standardVersion returns a Promise
standardVersion({
  noVerify: true,
  infile: 'CHANGELOG.md',
  silent: true
}).then((res) => {
  // standard-version is done
  console.log(res, 'fjeiofjewoijo')
  
}).catch(err => {
    console.error(`standard-version failed with message: ${err.message}`)
})