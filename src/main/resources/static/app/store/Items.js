Ext.define('App.store.Items', {
    extend: 'Ext.data.Store',
    alias: 'store.items',
    
    requires: [
        'App.model.Item'
    ],

    autoLoad: true,
    autoSync: true,
    model: 'App.model.Item',

    proxy: {
    	type: 'rest',
    	url: 'api/items',
    	reader: {
    		type: 'json',
    	},
    	writer: {
    		type: 'json'
    	}
    }
    
    /*
    data: { items: [
    	{ id: 1, name: 'Item 1', description: ''},
    	{ id: 2, name: 'Item 2', description: ''},
    	{ id: 3, name: 'Item 3', description: ''}
    ]},
    
	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
	*/

});
