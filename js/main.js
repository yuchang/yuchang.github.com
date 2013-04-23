(function(window){
	Template.loadTpls([
	    'Header/Header',
	    'Maquette/Maquette',
	    'Footer/Footer',
		
	    //Insertion de nouveaux templates ici 
	    ], function(){
		AppPricing = new AppPricing();
		Backbone.history.start(); //Activer le routage pour demarrer l'application
	});	
})(window);