# transvueify-plugin-babel

A [transvueify](https://github.com/trescenzi/transvueify) plugin which runs your
code through babel.

First install `transvueify-plugin-babel`

`npm install transvueify-plugin-babel --save-dev`

Then add it to your `transvueify.config.json`

```json
{
  "plugins": ["transvueify-plugin-babel"]
}
```

Make sure to set up your `.babelrc` to include the babel presets and plugins you'd like
as `transvueify-plugin-babel` respects your `.babelrc`(s).
