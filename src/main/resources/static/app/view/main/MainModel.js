Ext.define('App.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: [
        'App.model.Item'
    ],

    links: [
    	currentItem: {
    		type: 'Item',
    		create: true
    	}
    ]
    
});
