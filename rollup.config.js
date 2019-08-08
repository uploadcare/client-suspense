export default [
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      format: 'esm',
      file: 'dist/index.js',
      sourcemap: false
    }
  },
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      format: 'cjs',
      file: 'dist/index.cjs.js',
      sourcemap: false
    }
  }
]
