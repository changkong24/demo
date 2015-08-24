define(['backbone', 'underscore', 'jquery', 'SM', 'VM'], function(backbone, _, $, SM, VM) {
    var listCtrl = {

        listView : null,

        listInfor : {
            total : 0,
            current : 0,
            size : 0
        },

        init : function() {
            var listViewClass = VM.module('listView');
            listCtrl.listView = new listViewClass();
            this.renderPage();
        },
        renderPage : function(url) {
            var self = this;
            $.get('../html/pages/list.html', function(html) {
                listCtrl.listView.renderPage(html);
                self.renderList(0);
            });
        },
        renderList : function(page) {
            if (page == 0) {
                SM.module('listStore').url = '../api/list1.json';
            } else if(page) {
                var total = listCtrl.listInfor.total,
                    current = listCtrl.listInfor.current,
                    size = listCtrl.listInfor.size,
                    url = '';
                url = '../api/list' + (parseInt(current) + parseInt(page)) + '.json';
                SM.module('listStore').url = url;
            }

            SM.module('listStore').fetch({
                success : function(data,res) {

                    listCtrl.listView.model = SM.module('listStore');
                    listCtrl.listView.renderList();

                    listCtrl.listInfor.total = res.totalPage;
                    listCtrl.listInfor.current = res.currentPage;
                    listCtrl.listInfor.size = res.listSize;
                },
                error : function() {

                }
            });
        }
    }

    return listCtrl;
});