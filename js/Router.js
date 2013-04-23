var AppPricing = Backbone.Router.extend({
	
	//Definition du routage pour l'application web
	routes : {
		"" : "home",
		
	},
	
	initialize : function(){
		this.headerV = new HeaderV();
        $('#header').html(this.headerV.render().el);

	},
	
	home : function() {
		$('#content').html(new MaquetteV().render().el);
	},
	
});