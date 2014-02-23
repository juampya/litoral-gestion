/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E8923236-6E22-4552-8B92-DE4223AF5C5F",variableType:4}
 */
var vl_cantidad = 0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FE2019B0-0E62-422B-87D9-BBACE9CC95A4",variableType:8}
 */
var vl_total_total = 0.0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"51A681B0-7514-4644-9904-E33BBE792EFB",variableType:8}
 */
var vl_total_cobrado = 0.0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1B048438-11DA-43DC-AFB1-0E827B2D7DF9",variableType:8}
 */
var vl_total_pendiente = 0.0

/**
 * @properties={typeid:24,uuid:"4EB698EF-FFCD-4BD9-B872-B02D93075F4D"}
 */
function filtrar()
{
	forms.mat_liquidacion.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9973C152-E922-48FC-9FA1-DE93A25D5F23"}
 */
function onActionGenerarCuotas(event) 
{
	var win1 = application.createWindow("generarLiquidacion", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Liquidacion.';
	win1.show(forms.mat_nueva_liquidacion);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1FB04F7B-DF46-432A-A6EC-A475320D1877"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms["mat_inicio"].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A00CC111-D3EE-4A05-9E5C-13916DAAF2EA"}
 */
function onActionDetalle(event) 
{
	forms.mat_liquidacion_resumen_detalle.vl_mes = forms['matriculados'].mes
	forms.mat_liquidacion_resumen_detalle.vl_anio = forms['matriculados'].anio
	forms.mat_liquidacion_resumen_detalle.controller.show()
}
