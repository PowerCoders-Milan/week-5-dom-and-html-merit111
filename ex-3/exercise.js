function insert_Row(tableId) {
    var rows = document.querySelectorAll("tr");

    rows.forEach((row) => {
     var table = document.createElement("td");
     table.textContent = `(row #${row.rowIndex})`;
     row.appendChild(table);

     console.log(rows);
    });
}
