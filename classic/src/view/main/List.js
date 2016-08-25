Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Superhero Movies since 2000',

    store: {
        type: 'personnel'
    },
    columns: [
        { text: 'Id',  dataIndex: 'Id', width: 50 },
        { text: 'Title', dataIndex: 'Title', flex: 1 },
        { text: 'Distributed By', dataIndex: 'Distributed-by', flex: 1 },
        { text: 'Tomatometer', dataIndex: 'Tomatometer', flex: 1, renderer: function(value) {
            return Ext.String.format('{0}%', value);
        } },
        { text: 'Box Office', dataIndex: 'Box-office', flex: 1 , renderer: function(value) {
            return Ext.String.format('${0} M', value);
        } },
        { text: 'Budget', dataIndex: 'Budget', flex: 1, renderer: function(value) {
            return Ext.String.format('${0} M', value);
        } },
        { text: 'Box Office / Budget Ratio', dataIndex: 'Box-office-Budget-ratio', flex: 1, renderer: function(value) {
            return Ext.String.format('{0}%', value);
        } },
        { text: 'Premiere Date', dataIndex: 'Premiere-Date', xtype:'datecolumn', flex: 1, renderer: Ext.util.Format.dateRenderer('M d, Y')},
        { text: 'Running Time', dataIndex: 'Running-time', flex: 1, renderer: function(value) {
            return Ext.String.format('{0} min', value);
        } },
        { text: 'MPAA Rating', dataIndex: 'MPAA', flex: 1 },
        { text: 'Editorial', dataIndex: 'Editorial', flex: 1 },
    ],
});
