export default [
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      format: 'esm',
      file: 'dist/index.mjs',
      sourcemap: false
    }
  },
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      format: 'cjs',
      file: 'dist/index.cjs',
      sourcemap: false
    }
  }
]
