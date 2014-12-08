
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"895E7293-7903-4537-A424-AA55764A8986",variableType:8}
 */
var vl_saldo_actual = null
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
	vl_saldo_actual = 0
	controller.find()
	mat_id = vl_matriculado_id
	mov_estado = "0||2"
	controller.search()
	foundset.sort("mov_fecha_emision asc")
	for (var i = 1; i <= foundset.getSize(); i++) 
	{
		var myRecord = foundset.getRecord(i)
		vl_saldo_actual = myRecord.mov_importe
	}
	
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"D0B196F2-A38F-468D-91DE-D429FFB0A437"}
 */
function onRenderSaldoActual(event) 
{
	/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
	var myRecord = event.getRecord()
	if (myRecord.mov_estado == 0) 
	{
		event.getRenderable().bgcolor = '#ff9b9b';
	}
}
