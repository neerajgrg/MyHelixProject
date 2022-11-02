  var body = DocumentApp.getActiveDocument().getBody();
      // Create a two-dimensional array containing the cell contents.
  var cells = [
    ['CARD COMPONENT',''],
    ['Row 2, Cell 1', 'Row 2, Cell 2']
  ];

  var table = body.appendTable(cells);
   
  var row = table.getRow(0);

  // Get the two cells this row.
  var cell1 = row.getCell(0);
  var cell2 = row.getCell(1);

  cell2.merge();
