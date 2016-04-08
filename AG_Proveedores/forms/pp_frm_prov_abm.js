/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"33E42872-400B-41DA-92DD-9184CA8BCC2B"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"584C6FE9-E669-46F5-90B4-686F05E91A80"}
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
 * @properties={typeid:24,uuid:"52A9A700-8984-4A4D-A02B-5E73082D70F1"}
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
 * @properties={typeid:24,uuid:"906F7BA2-C858-4C70-814D-0CA2798125BD"}
 */
function onActionNuevo(event) 
{
	forms.vc_frm_clientes_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_clientes_nuevo.vl_nuevo = 1
	forms.vc_frm_clientes_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"15AA18D3-125F-42B8-84E2-7E869361EDBD"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F9E590A0-BFAD-432C-9D06-C264005DEA4F"}
 */
function onActionDetalle(event) 
{
	forms.vc_frm_clientes_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_clientes_nuevo.vl_nuevo = 0
	forms.vc_frm_clientes_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EBCFE362-E468-4D66-9CDC-BAF6253DEC74"}
 */
function onActionCopiar(event) 
{
	forms.vc_frm_clientes_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_clientes_nuevo.vl_nuevo = 2
	forms.vc_frm_clientes_nuevo.controller.show() 
}
