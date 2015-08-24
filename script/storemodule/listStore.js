define(['backbone', 'underscore', 'jquery', 'SM', 'VM'], function(backbone, _, $, SM, VM) {
    //这里不需要SM和VM把~嗯~我是赋值粘贴的....老婆牛逼.........
    var listModel = Backbone.Model.extend({
        defaults : {

        }
    });

    var listCollection = Backbone.Collection.extend({
        model : listModel,
        url : '../api/list1.json',
        totalPage : 0,
        currentPage : 0,
        listSize : 10,
        parse : function(res) {
            var attrs;
            this.totalPage = res.totalPage;
            this.currentPage = res.currentPage;
            return attrs = res.attrs;
        }
    });

    return new listCollection();
});