module.exports = config => {
  config.target = 'electron-renderer';
  config.externals = {
    typeorm: 'commonjs typeorm',
    sqlite3: 'commonjs sqlite3'
  }
  return config;
}