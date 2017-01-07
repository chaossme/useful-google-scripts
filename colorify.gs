/**
 * Script used for changing the color of a specific word inside a specific Google Drive Document.
 * Useful for changing colors of nicknames, etc.
 */

var documentId = '';

function colorify(textToColorify, color) {
  var doc  = DocumentApp.openById(documentId);
  var highlightStyle = {};
  highlightStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = color;
  var paras = doc.getParagraphs();
  var textLocation = {};

  for (i=0; i<paras.length; i++) {
    textLocation = paras[i].findText(textToColorify);
    if (textLocation != null && textLocation.getStartOffset() != -1) {
      textLocation.getElement().setAttributes(textLocation.getStartOffset(),textLocation.getEndOffsetInclusive(), highlightStyle);
    }
  }
}

function run() {
  colorify('word', '#F44336');
}
