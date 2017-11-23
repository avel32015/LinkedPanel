Ext.define('App.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    title: 'Items',
    bind: '{items}',
    reference: 'itemsList',
    
    columns: [{
        text: 'ID',
        width: 50,
        sortable: true,
        dataIndex: 'id'
    }, {
        text: 'Name',
        flex: 1,
        sortable: true,
        dataIndex: 'name'
    }]
    
    /*,

    listeners: {
        select: 'onGridSelected'
    }*/
});
