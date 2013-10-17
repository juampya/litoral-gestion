/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"14BACAA6-F9B5-45D9-A33A-63F355CE3DBE"}
 */
var vl_frm_anterior = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"FB4742DB-0991-4853-8031-BD29A7DCA703"}
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
 * @properties={typeid:24,uuid:"03574501-75E2-4F4B-BD42-ED248929C4F1"}
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
 * @properties={typeid:24,uuid:"7BF68C2A-EF93-42AB-BF35-F99C960E7F20"}
 */
function onActionNuevo(event) 
{
	forms.sp_frm_articulos_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_articulos_abm_nuevo.vl_nuevo = 1
	forms.sp_frm_articulos_abm_nuevo.controller.show() 
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"2691E48A-6A36-47D5-89D8-28D232066468"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E34F4F87-18DD-4DA6-B874-D2F1F6C69951"}
 */
function onActionDetalle(event) 
{
	forms.sp_frm_articulos_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_articulos_abm_nuevo.vl_nuevo = 0
	forms.sp_frm_articulos_abm_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FC4AAC07-A9DE-46C7-8112-14581F23E6D7"}
 */
function onActionCopiar(event) 
{
	forms.sp_frm_articulos_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_articulos_abm_nuevo.vl_nuevo = 2
	forms.sp_frm_articulos_abm_nuevo.controller.show() 
}
