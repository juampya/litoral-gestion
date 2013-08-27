/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8BA3D79D-DC95-48C1-9B32-28022F387352"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"39D4069B-F553-4469-9B0F-531AFBE88C6C"}
 */
function onShow(firstShow, event) 
{
	plugins.window.getMenuBar().removeAllMenus()
	plugins.window.setToolBarAreaVisible(false)	
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DF101DF9-39C7-4FBA-BD63-6E27B81969B1"}
 */
function onActionVolver(event) 
{
	globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9C519846-BB9A-4869-BF4E-72D2A4F9A899"}
 */
function onActionNuevo(event) 
{
	forms.vc_frm_grupos_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_grupos_nuevo.vl_nuevo = 1
	forms.vc_frm_grupos_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E0CA8FE8-C334-453D-BE37-BFD6DD334745"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54F6BB59-5AAA-4F09-854E-383A6C6C6A20"}
 */
function onActionDetalle(event) 
{
	forms.vc_frm_grupos_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_grupos_nuevo.vl_nuevo = 0
	forms.vc_frm_grupos_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B665DED6-4B15-4148-A6D5-6412E6596F97"}
 */
function onActionCopiar(event) 
{
	forms.vc_frm_grupos_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_grupos_nuevo.vl_nuevo = 2
	forms.vc_frm_grupos_nuevo.controller.show() 
}
