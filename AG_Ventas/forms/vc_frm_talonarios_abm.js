/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3EBF9A41-3751-4172-91A7-B3EAE899770D"}
 */
var vl_frm_anterior = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"099A0767-6C61-4DCC-8E6C-A91A0EFA4792"}
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
 * @properties={typeid:24,uuid:"22851A04-CF35-4D9E-AC6A-B0C1117B8D78"}
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
 * @properties={typeid:24,uuid:"0C6B8794-FAB2-4EB7-96B2-96B2DF338717"}
 */
function onActionNuevo(event) 
{
	forms.vc_frm_talonarios_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_talonarios_abm_nuevo.vl_nuevo = 1
	forms.vc_frm_talonarios_abm_nuevo.controller.show() 
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"F77314AB-ABFA-46EE-ABB3-EFAEEC349E42"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1BB31C49-E2DC-4D91-8C03-A1138000BA42"}
 */
function onActionDetalle(event) 
{
	forms.vc_frm_talonarios_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_talonarios_abm_nuevo.vl_nuevo = 0
	forms.vc_frm_talonarios_abm_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5EA16660-86A8-4417-AE12-F8A4EB9D2831"}
 */
function onActionCopiar(event) 
{
	forms.vc_frm_talonarios_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_talonarios_abm_nuevo.vl_nuevo = 2
	forms.vc_frm_talonarios_abm_nuevo.controller.show() 
}
