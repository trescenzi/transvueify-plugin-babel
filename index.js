const babel = require('babel-core');

module.exports = function(compiledVueFile) {
  if (!compiledVueFile.script) {
    return compiledVueFile;
  }
  const babelOutput = babel.transform(compiledVueFile.script.content);
  compiledVueFile.script.content = babelOutput.code;
  return compiledVueFile;
};
