const TESTS = process.env.NODE_ENV === 'test'

module.exports = function(api) {
  api.cache(true)

  return {
    presets: [TESTS && '@babel/preset-env', '@babel/preset-react'].filter(
      Boolean
    )
  }
}
