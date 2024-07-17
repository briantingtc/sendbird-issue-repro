This repo was created just to illustrate how `@babel/plugin-transform-modules-commonjs` in the babel transpile pluginchain would break `@sendbird/uikit-react`.

# Instructions 
1. `pnpm install && pnpm start`

2. Navigate to `http://localhost:8080`

3. Open the js dev console, you should see: `TypeError: SendbirdChat.init is not a function`

4. To confirm that `@babel/plugin-transform-modules-commonjs` is the culprit, comment it out in `babel.config.js` and rerun steps 1 and 2:

```javascript
    // in `babel.config.js`
    plugins: [
      // '@babel/plugin-transform-modules-commonjs',
```
