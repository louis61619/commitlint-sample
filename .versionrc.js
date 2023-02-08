const tracker = {
  filename: 'VERSION_TRACKER.json',
  updater: require('./updater')
}

module.exports = {
  bumpFiles: [tracker],
  packageFiles: [tracker]
}