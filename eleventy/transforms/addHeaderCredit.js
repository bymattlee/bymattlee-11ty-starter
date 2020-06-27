/* ***** ----------------------------------------------- ***** **
/* ***** Add Header Credit Transform
/* ***** ----------------------------------------------- ***** */

const markupHeader = [
  '<!DOCTYPE html>',
  '<!--',
  '**',
  '**',
  '**',
  '**',
  '**',
  '**',
  '**              {{ @bymattlee }}',
  '**              {{ bymattlee.com }}',
  '**',
  '**',
  '**',
  '**',
  '**',
  '**',
  '-->\n'
];

module.exports = function(content, outputPath) {
  if (outputPath.endsWith('.html')) {
    return markupHeader.join('\n') + content;
  }
  return content;
}
