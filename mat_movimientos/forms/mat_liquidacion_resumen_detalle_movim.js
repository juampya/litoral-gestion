/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E90E18EB-CC07-463C-B07A-9229B5A35FC9",variableType:4}
 */
var vl_matriculado = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"366A1A7F-0E95-4C54-B6D6-300A2C807186"}
 */
function onActionVolver(event) 
{
	forms.mat_liquidacion_resumen_detalle.controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"8B8FCD9A-E3F0-449C-B7EF-92BCD16842CC"}
 */
function filtrar()
{
	controller.find()
	mov_anio_emision = forms.mat_liquidacion_resumen_detalle.vl_anio 
	mov_mes_emision = 	forms.mat_liquidacion_resumen_detalle.vl_mes
	mat_id = vl_matriculado
	mov_tipo_de_movimiento = 0
	controller.search()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D1F83EFB-5994-4911-8B01-F71A9972EF15"}
 */
function onShow(firstShow, event) 
{
	vl_matriculado = null
	filtrar()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C6EF96D3-29CE-4AD0-9543-D21079972D4D"}
 */
function onActionDetalle(event) 
{
	forms.mat_liquidacion_resumen_detalle_movim_det.controller.show()
}
