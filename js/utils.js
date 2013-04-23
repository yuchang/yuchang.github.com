//Mini-chargeur de templates HTML
Template = {

    tpls: {},
 
    loadTpls: function(views, callback) {
        var self = this;
        var loadTpl = function(index) {
            var view = views[index];
            console.log("Loading : " + view);
            $.get("tmpl/" + view + ".html", function(template) {
                self.tpls[view] = template;
                ++index < views.length ? loadTpl(index):callback();
            });
        };
        loadTpl(0); //demarrage de chargement, de facon recursive
    },

    get: function(view) {
        return this.tpls[view];
    }
};


//Extension d'API native de JavaScript
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};