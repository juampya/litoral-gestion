/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5D60748D-7791-4E1C-AE16-F9C930626330",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FAC0419C-59F0-4560-9730-3F3A2FE26765",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5067B97B-2CC3-4475-90E8-9F92B44824E0",variableType:4}
 */
var vl_matriculado_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C62E9546-7668-4962-84EC-580863015F7A",variableType:4}
 */
var vl_mov_id = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A4534926-7B3B-4758-AE14-ECBEE174A62B"}
 */
function onActionVolver(event) 
{
	forms.mat_saldos_globales_movimientos.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E8E6B5CE-E82A-40B7-9D3E-E1767053A23D"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.find()
	mov_id = vl_mov_id
	controller.search()
}
