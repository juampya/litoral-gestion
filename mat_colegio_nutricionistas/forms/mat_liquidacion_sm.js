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
