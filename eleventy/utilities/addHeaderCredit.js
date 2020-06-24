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
  return markupHeader.join('\n') + content;
}
