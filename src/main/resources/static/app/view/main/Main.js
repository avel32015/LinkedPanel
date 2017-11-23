Ext.define('App.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'App.view.main.MainController',
        'App.view.main.List',
        'App.view.main.Details',
        'App.store.Items'
    ],

    controller: 'main',
    referenceHolder: true,
    session: {},
    viewModel: {
        stores: {
            items: { type: 'items' } 
        }
    },

    layout: {
        type: 'vbox',
        pack: 'end',
        align: 'stretch'
    },
    
    items: [{
    	xtype: 'mainlist',
    	flex: 1
    }, {
    	xtype: 'details'
    }]
});
 
