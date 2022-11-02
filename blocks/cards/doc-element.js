  var body = DocumentApp.getActiveDocument().getBody();
      // Create a two-dimensional array containing the cell contents.
  var cells = [
    ['Component1 Row 1, Cell 1', 'Row 1, Cell 2'],
    ['Row 2, Cell 1', 'Row 2, Cell 2']
  ];

  // Build a table from the array.
  body.appendTable(cells);
