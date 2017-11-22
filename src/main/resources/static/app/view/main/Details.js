Ext.define('App.view.main.Details', {
	extend: 'Ext.form.Panel',
    xtype: 'details',
    
    /*
    requires: [
        'App.view.main.MainModel'
    ],
    viewModel: { type: 'main' },
	*/
	
	title: 'Details',
    height: 350,
    width: 300,
    bodyPadding: 10,
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'Name',
            name: 'name'
            //, bind: '{currentItem.name}'
        },
        {
            fieldLabel: 'Description',
            name: 'description'
            //, bind: '{currentItem.description}'
        }
    ]
});