import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      format: 'esm',
      file: pkg.module,
      sourcemap: false
    }
  },
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      format: 'cjs',
      file: pkg.main,
      sourcemap: false
    }
  }
]
