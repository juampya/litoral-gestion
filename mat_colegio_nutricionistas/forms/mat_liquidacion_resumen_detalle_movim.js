
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AADC540B-9611-4B71-A267-B42C86A53B68"}
 */
function onActionVolver(event) 
{
	forms.mat_liquidacion_resumen_detalle.controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"FF9A8238-AB18-450E-BC00-F89C708CC65F"}
 */
function filtrar()
{
	controller.find()
	mov_anio_emision = forms.mat_liquidacion_resumen_detalle.vl_anio 
	mov_mes_emision = 	forms.mat_liquidacion_resumen_detalle.vl_mes
	controller.search()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8ACEFAD2-BFFB-417D-B081-0BD4469907FF"}
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
 * @properties={typeid:24,uuid:"8B177B3F-43EC-4C72-B87F-47A38CE86E87"}
 */
function onActionDetalle(event) 
{
	forms.mat_liquidacion_resumen_detalle_movim_det.controller.show()
}
