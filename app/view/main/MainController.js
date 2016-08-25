/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onSeriesTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('name') + ': ' + record.get('g1') + '%');
    },
    onSeriesTooltipRenderBar: function (tooltip, record, item) {
        tooltip.setHtml(record.get('Title') + ': $' + record.get('Box-office') + 'M');
    },
    onSeriesTooltipRenderBarRatio: function (tooltip, record, item) {
        tooltip.setHtml(record.get('Title') + ': ' + record.get('Ratio') + '%');
    }
});
