class TableTemplate {
	static fillIn(id, dic, columnName) {
		var table = document.getElementById(id);
		table.style.visibility = "visible";
		console.log(table);
		var columnName = columnName;
		console.log(columnName);
		var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
        var dateTemplate = new Cs142TemplateProcessor(template);
	}
}