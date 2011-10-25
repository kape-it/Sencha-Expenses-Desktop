/*
 * File: app/view/ui/ExpenseGrid.js
 * Date: Tue Oct 25 2011 05:18:14 GMT-0700 (PDT)
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ui.ExpenseGrid', {
    extend: 'Ext.grid.Panel',

    height: 275,
    width: 519,
    store: 'ExpenseStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {

            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'actualDate',
                    text: 'ActualDate'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'submitDate',
                    text: 'SubmitDate'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'category',
                    text: 'Category'
                },
                {
                    xtype: 'numbercolumn',
                    align: 'right',
                    dataIndex: 'amount',
                    text: 'Amount',
                    format: '$0.00'
                }
            ]
        });

        me.callParent(arguments);
    }

});