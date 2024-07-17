module.exports = (api) => {
  // only use babel cache if in development to speed up dev build
  api.cache.using(() => process.env.NODE_ENV === 'development')

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs',
    ],
  }
}
