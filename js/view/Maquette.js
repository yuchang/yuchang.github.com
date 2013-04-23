var MaquetteV = Backbone.View.extend({
	
	className : "hero-unit",
	
	initialize : function(){
		this.template = _.template(Template.get('Maquette/Maquette'));
	},
	
	events : {
		
	},
	
	render : function(e){
		$(this.el).html(this.template());
		return this;
	},
	
});