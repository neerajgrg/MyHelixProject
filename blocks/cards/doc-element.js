

var body = DocumentApp.getActiveDocument().getBody();
      // Create a two-dimensional array containing the cell contents.
var table = [
  ['  Cards '],
  [' <card_image> ', ' <card_description> ']
];

// Build a table from the array.

var element = cursor.getElement();
var parent = element.getParent();
//here table is an array of cells like
// [[r1c1, r1c2], [r2c1, r2c2]]
body.insertTable(parent.getChildIndex(element) + 1, table);


//body.appendTable(cells);

