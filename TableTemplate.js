class TableTemplate {
	static fillIn(id, dic, columnName) {
		const table = document.getElementById(id);

		// get lenght of first row
		var c = document.getElementById(id).rows[0].cells.length - 1; // number of columns, zero indexed	
		for (let z = 0; z <= c; z++) {
				let template = document.getElementById(id).rows[0].cells[z].innerHTML;
				let dateTemplate = new Cs142TemplateProcessor(template);
				let str = dateTemplate.fillIn(dic);
				document.getElementById(id).rows[0].cells[z].innerHTML = str;
				if (columnName === str || columnName === undefined){
					for (let y = 1; y <= 4; y++) {
						template = document.getElementById(id).rows[y].cells[z].innerHTML;
						dateTemplate = new Cs142TemplateProcessor(template);
						str = dateTemplate.fillIn(dic);
						document.getElementById(id).rows[y].cells[z].innerHTML = str;
					}
				}
		}

        table.style.visibility = "visible";
	}
}