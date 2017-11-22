Ext.define('App.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'App.view.main.MainController',
        'App.view.main.List',
        'App.view.main.Details'
    ],

    controller: 'main',

    //layout: 'vbox',
    
    items: [{
    	//flex: 3,
    	xtype: 'mainlist'
    }, {
    	height: 200,
    	xtype: 'details'
    }]
});
 
