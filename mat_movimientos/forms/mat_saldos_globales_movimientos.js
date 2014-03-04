/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"64D32B42-6770-41E8-B7CB-101F58FA7A78",variableType:4}
 */
var vl_matriculado_id = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D44D5725-350D-40E8-8A08-17A85D7F1F4C"}
 */
function onActionVolver(event) 
{
	forms.mat_saldos_globales.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1220A14B-D704-4663-B5E4-B0F2D41A8981"}
 */
function onActionDetalle(event) 
{
	forms.mat_saldos_globales_movimientos_detalle.vl_anio = mov_anio_emision
	forms.mat_saldos_globales_movimientos_detalle.vl_mes = mov_mes_emision
	forms.mat_saldos_globales_movimientos_detalle.vl_matriculado_id = mat_id
	forms.mat_saldos_globales_movimientos_detalle.vl_mov_id = mov_id	
	forms.mat_saldos_globales_movimientos_detalle.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5E6E35FC-E6E7-489C-8232-755D54B68E39"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.find()
	mat_id = vl_matriculado_id
	mov_estado = 0
	controller.search()
}
