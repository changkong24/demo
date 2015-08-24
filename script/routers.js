define(['backbone', 'underscore', 'jquery', 'CM'], function(backbone, _, $, CM) {
    var appRouter = Backbone.Router.extend({
        routes : {
            '' : 'index',
            'list' : 'listPage',
            'form/*actions' : 'formPage'
        },
        index : function() {
            CM.module('homeCtrl').init();
        },
        listPage : function() {
            CM.module('listCtrl').init();
        },
        formPage : function(path) {
               console.log(path);
        }

    });

    return appRouter;
});