function Cs142TemplateProcessor(template){
	this.template = template;
}
Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
		var template = this.template;
		for ( key in dictionary) {
		template = template.replace('{{'+key+'}}', dictionary[key]);
	}
	return template;
};