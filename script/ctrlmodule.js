/**
 * Created by hello-potato on 2015-07-14.
 */
define([
    'ctrlmodule/homeCtrl',
    'ctrlmodule/listCtrl'
], function(homeCtrl, listCtrl) {
    var module = {};
    module['homeCtrl'] = homeCtrl;
    module['listCtrl'] = listCtrl;
    module.module = function(m) {
        return module[m];
    }
    return module;
});
