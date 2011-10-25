/*
 * File: app/view/ui/ExpenseColumnChart.js
 * Date: Tue Oct 25 2011 05:22:23 GMT-0700 (PDT)
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ui.ExpenseColumnChart', {
    extend: 'Ext.chart.Chart',

    height: 250,
    width: 400,
    animate: true,
    insetPadding: 20,
    store: 'ExpenseStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            axes: [
                {
                    type: 'Category',
                    fields: [
                        'actualDate'
                    ],
                    position: 'bottom',
                    title: 'Date'
                },
                {
                    type: 'Numeric',
                    fields: [
                        'amount'
                    ],
                    position: 'left',
                    title: 'Amount'
                }
            ],
            series: [
                {
                    type: 'column',
                    xField: 'actualDate',
                    yField: [
                        'amount'
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});