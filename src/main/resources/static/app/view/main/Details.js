Ext.define('App.view.main.Details', {
	extend: 'Ext.form.Panel',
    xtype: 'details',
    
	title: 'Details',
    height: 200,
    bodyPadding: 10,
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'Name',
            name: 'name',
            bind: '{itemsList.selection.name}'
        },
        {
            fieldLabel: 'Description',
            name: 'description',
            bind: '{itemsList.selection.description}'
        }
    ]
});