/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2E78AF41-75EC-47B4-A75C-542EC0007EAA"}
 */
var vl_frm_anterior = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"F65F2CCE-F8A1-4F4F-92A9-E74AA043AE45"}
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
 * @properties={typeid:24,uuid:"343A03FB-AB0D-479E-8B96-AFCEA92360A5"}
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
 * @properties={typeid:24,uuid:"6F56FAC0-5DC6-4440-8DDC-35630A5E09A6"}
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
 * @properties={typeid:24,uuid:"BF906AD8-D8E4-4E98-B7CA-DD5223A3FEE7"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"BE875C79-CD6A-4530-92D6-B4E243E1033B"}
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
 * @properties={typeid:24,uuid:"792D22F9-8B06-4A1E-B89B-A8D0E0E0E98D"}
 */
function onActionCopiar(event) 
{
	forms.sp_frm_lineas_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_lineas_abm_nuevo.vl_nuevo = 2
	forms.sp_frm_lineas_abm_nuevo.controller.show() 
}
