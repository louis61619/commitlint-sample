const tracker = {
  filename: 'VERSION_TRACKER.json',
  updater: require('./updater')
}

const tracker2 = {
  filename: 'package.json',
}

module.exports = {
  header: `# Changelog
  custom header
`,
  bumpFiles: [tracker, tracker2],
  packageFiles: [tracker, tracker2]
}