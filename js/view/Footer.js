//La barre Notebook en bas de page
var FooterV = Backbone.View.extend({
	
	className : "navbar navbar-fixed-bottom",
	
	initialize : function(){
		this.template = _.template(Template.get('Footer/Footer'));
	},

	render : function(e){
		$(this.el).html(this.template());
		$(this.el).css("height","20px");
		return this;
	},
	
	events : {

	}, 
	
});