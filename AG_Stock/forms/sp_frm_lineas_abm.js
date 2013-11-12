/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EB055754-27B8-4477-90A6-2E181226CDE4"}
 */
var vl_frm_anterior = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"6C6D323A-CC37-47E0-B1C2-E7621D4311C6"}
 */
function onShow(firstShow, event) 
{
	plugins.window.getMenuBar().removeAllMenus()
	plugins.window.setToolBarAreaVisible(false)	
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1C973AAD-509E-4AD3-A984-3FA155777389"}
 */
function onActionVolver(event) 
{
	globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E76F4ADC-3FF6-4376-93B4-D56CEF4A2D6E"}
 */
function onActionNuevo(event) 
{
	forms.sp_frm_lineas_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_lineas_abm_nuevo.vl_nuevo = 1
	forms.sp_frm_lineas_abm_nuevo.controller.show() 
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"07077EFA-29EE-4E20-A425-51E8E236CDDD"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"9549F81E-7122-46A1-9C99-6B55F4DE152E"}
 */
function onActionDetalle(event) 
{
	forms.sp_frm_lineas_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_lineas_abm_nuevo.vl_nuevo = 0
	forms.sp_frm_lineas_abm_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50A6C05C-FDAF-4DF9-8BC3-97D56F54A26B"}
 */
function onActionCopiar(event) 
{
	forms.sp_frm_lineas_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_lineas_abm_nuevo.vl_nuevo = 2
	forms.sp_frm_lineas_abm_nuevo.controller.show() 
}
