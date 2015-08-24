define(['backbone', 'underscore', 'jquery', 'SM', 'VM'], function(backbone, _, $, SM, VM) {
    var homeCtrl = {
        init : function() {
            homeCtrl.renderHome();
        },
        renderHome : function() {
            var homeViewClass = VM.module('homeView');
            var homeView = new homeViewClass();
            $.get('../html/pages/home.html', function(html) {

                homeView.renderPage(html);

            });
        }
    }

    return homeCtrl;
});