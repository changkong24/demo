(function() {
    require.config({
        paths : {
           jquery : '../vendor/jquery',
           underscore : '../vendor/underscore/underscore',
           backbone : '../vendor/backbone/backbone',
           router : 'routers',
           SM : 'storemodule',
           CM : 'ctrlmodule',
           VM : 'viewmodule'
        },
        shim : {
            'backbone' : {
                deps : ['jquery', 'underscore']
            }
        }
    });
    require(['jquery', 'router', 'backbone', 'CM'], function($, router, backbone, CM) {
        window.CM = CM;
        $(function() {
            var app = new router();
            Backbone.history.start();
        });
    });
})();