

var body = DocumentApp.getActiveDocument().getBody();
      // Create a two-dimensional array containing the cell contents.
var cells = [
  ['  Cards '],
  [' <card_image> ', ' <card_description> ']
];

// Build a table from the array.
body.appendTable(cells);

