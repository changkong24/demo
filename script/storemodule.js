/**
 * Created by hello-potato on 2015-07-14.
 */
define([
    'storemodule/listStore'
], function(listStore) {
    var module = {};
    module['listStore'] = listStore;
    module.module = function(m) {
        return module[m];
    }
    return module;
});
