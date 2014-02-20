/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4D19F43F-1774-4040-A850-130607FB9C52",variableType:4}
 */
var vl_matriculado_id = null
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"082C7DA2-E53D-41AB-84F0-81D6707D494B"}
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
 * @properties={typeid:24,uuid:"91146CF6-686A-4E8C-AD95-DA845CE5BD27"}
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
 * @properties={typeid:24,uuid:"F3AEDEC5-EADA-4E5F-A40D-2D094CF9CCA0"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.find()
	mat_id = vl_matriculado_id
	mov_estado = 0
	controller.search()
}
