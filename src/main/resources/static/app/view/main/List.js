Ext.define('App.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'App.store.Items'
    ],

    title: 'Items',

    store: { type: 'items' },

    frame: true,
    
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
    }],

    listeners: {
        select: 'onGridSelected'
    }
});
