/**
 * Script used for changing color of a specific word.
 * Useful for changing colors of nicknames, etc.
 */
var documentId = '';

function colorify(textToHighlight, color) {
  var doc  = DocumentApp.openById(documentId);
  var highlightStyle = {};
  highlightStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = color;
  var paras = doc.getParagraphs();
  var textLocation = {};

  for (i=0; i<paras.length; i++) {
    textLocation = paras[i].findText(textToHighlight);
    if (textLocation != null && textLocation.getStartOffset() != -1) {
      textLocation.getElement().setAttributes(textLocation.getStartOffset(),textLocation.getEndOffsetInclusive(), highlightStyle);
    }
  }
}

// run this
function run() {
  colorify('test', '#F44336');
}