class TableTemplate {
	static fillIn(id, dic, columnName) {
		var columnName = columnName;
		console.log(columnName);
		var dic = dic;
		console.log(dic);
		const table = document.getElementById(id);
		console.log(table);

		// get lenght of first row
		var c = document.getElementById(id).rows[0].cells.length - 1; // number of columns, zero indexed
		for (let y = 0; y <= 4; y++) {
			for (let z = 0; z <= c; z++) {
				var template = document.getElementById(id).rows[y].cells[z].innerHTML;
				var dateTemplate = new Cs142TemplateProcessor(template);
				var str = dateTemplate.fillIn(dic);

				document.getElementById(id).rows[y].cells[z].innerHTML = str;
			}
		}


        table.style.visibility = "visible";
	}
}