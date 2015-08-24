define(['backbone', 'underscore', 'jquery', 'SM', 'VM'], function(backbone, _, $, SM, VM) {
    var homeView = Backbone.View.extend({
        el : '.pages',

        template: '',

        renderPage : function(html) {
            $(this.el).html(html);
        }
    });

    return homeView;
});