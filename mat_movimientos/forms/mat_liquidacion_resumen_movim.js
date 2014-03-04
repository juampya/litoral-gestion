/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3A99CDF8-A64A-4158-A9BD-9CA498886E74",variableType:4}
 */
var vl_matriculado = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F4AD5AA4-F1DF-4105-973E-0EC16943B89F"}
 */
function onActionVolver(event) 
{
	forms.mat_liquidacion_resumen.controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"F67A5698-EB45-40C6-97A4-5D9A88B4B006"}
 */
function filtrar()
{
	controller.find()
	mov_anio_emision = forms.mat_liquidacion_resumen.vl_anio 
	mov_mes_emision = 	forms.mat_liquidacion_resumen.vl_mes
	tmp_id = globals.vg_nro_tmp
	mat_id = vl_matriculado
	controller.search()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"56FD90B5-C627-4778-AE78-8D2D957490DF"}
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
 * @properties={typeid:24,uuid:"3E7826C3-9836-4486-B7B2-01BA7BDA6F99"}
 * @AllowToRunInFind
 */
function onActionDetalle(event) 
{
	forms.mat_liquidacion_resumen_movim_det.controller.show()
}
