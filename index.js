const babel = require('babel-core');

module.exports = function(compiledVueFile, filename) {
  if (!compiledVueFile.script) {
    return compiledVueFile;
  }
  const babelOutput = babel.transform(compiledVueFile.script.content, {filename});
  compiledVueFile.script.content = babelOutput.code;
  return compiledVueFile;
};
