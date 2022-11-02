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

  // Check the contents of cells 1 and 2
  Logger.log('Cell1 contents: %s', cell1.getText());
  Logger.log('Cell2 contents: %s', cell2.getText());

