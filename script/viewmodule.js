/**
 * Created by hello-potato on 2015-07-14.
 */
define([
    'viewmodule/homeView',
    'viewmodule/listView'
], function(homeView, listView) {
    var module = {};
    module['homeView'] = homeView;
    module['listView'] = listView;
    module.module = function(m) {
        return module[m];
    }
    return module;
});
