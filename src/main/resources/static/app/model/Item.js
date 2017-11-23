Ext.define('App.model.Item', {
    extend: 'Ext.data.Model',
    alias: 'model.item',
    
    fields: [{
        name: 'id',
        type: 'int',
        useNull: false
    }, 'name', 'description'],
    
    validators: [{
        type: 'length',
        field: 'name',
        min: 1
    }]

});
 
