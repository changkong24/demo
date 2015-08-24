define(['backbone', 'underscore', 'jquery', 'CM', 'SM'], function(backbone, _, $, CM, SM) {
    var listView = Backbone.View.extend({
        el : '.pages',

        template: _.template($('#list-template').html()),

        events : {
            'click #prev' : 'loadPrevPage',
            'click #next' : 'loadNextPage',
            'change #pages' : 'loadPage'
        },
        renderPage : function(html) {
            $(this.el).html(html);
        },
        renderList : function() {
            datas = this.model.toJSON();
            $('ul.list').html(this.template());
        },
        loadPrevPage : function() {
            this.changePage(-1, '');
        },
        loadNextPage : function() {
            this.changePage(1);
        },
        loadPage : function() {
            var p = $('#pages').val();
            window.CM.module('listCtrl').renderList(p);
        },
        changePage : function(page) {
            window.CM.module('listCtrl').renderList(page);
        }
    });

    return listView;
});