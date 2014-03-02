/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9DBB1B05-79F8-4211-8EA0-2890DEE74C0C"}
 */
function onActionVolver(event) 
{
	forms.mat_liquidacion_resumen.controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"87F8264D-4F5C-4BED-A3E0-AE82EFD54514"}
 */
function filtrar()
{
	controller.find()
	mov_anio_emision = forms.mat_liquidacion_resumen.vl_anio 
	mov_mes_emision = 	forms.mat_liquidacion_resumen.vl_mes
	tmp_id = globals.vg_nro_tmp
	controller.search()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3261312C-A362-4F9F-8B8B-A986D0CAE93E"}
 */
function onShow(firstShow, event) 
{

		filtrar()


}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5FB8DB5D-2C0D-4BB1-831E-1FD999546BDE"}
 * @AllowToRunInFind
 */
function onActionDetalle(event) 
{
	forms.mat_liquidacion_resumen_movim_det.controller.show()
}
