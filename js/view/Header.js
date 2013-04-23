//Representation de la barre en haut de page
var HeaderV = Backbone.View.extend({
	
	className : "navbar navbar-inverse navbar-fixed-top",
	
	initialize : function(){
		this.template = _.template(Template.get('Header/Header'));
	},
	
	events : {
		
	},
	
	render : function(e){
		$(this.el).html(this.template());
		return this;
	},
	
});