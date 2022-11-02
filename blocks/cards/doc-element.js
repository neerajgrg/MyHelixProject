  var body = DocumentApp.getActiveDocument().getBody();
      // Create a two-dimensional array containing the cell contents.
  var cells = [
    ['CARD COMPONENT',''],
    ['Row 2, Cell 1', 'Row 2, Cell 2']
  ];

  var table = body.appendTable(cells);
   

