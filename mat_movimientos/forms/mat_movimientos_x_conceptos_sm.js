/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ED851053-7C90-463C-AEF6-97775640D1C5"}
 */
var vl_fec_hasta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BAA0D997-2050-4A34-8685-9FE16794E91E"}
 */
var vl_fec_desde = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB1A5C2E-5D64-4A4F-91CE-F0087D4C0C7F"}
 */
function onActionVolver(event) 
{
	forms.mat_movimientos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CA68633E-5D02-416B-8AA2-75425AC1BD56"}
 */
function onActionImprimir(event)
{
	plugins.jasperPluginRMI.runReport(foundset,'total_por_conceptos.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,null)
}
