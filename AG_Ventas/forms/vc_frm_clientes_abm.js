/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2B0D07C0-2E44-4770-BDFD-7A776DA00590"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0065CC0F-2344-4845-92C7-AA13F8C30286"}
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
 * @properties={typeid:24,uuid:"F33B4C2C-ED47-43A0-AA2C-A938294A2120"}
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
 * @properties={typeid:24,uuid:"E4579086-6041-4735-B598-AE0C69EA5A3B"}
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
 * @properties={typeid:24,uuid:"B3E4C6E7-3733-492E-88BF-C4246D958227"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B5E23A5F-EEFD-402A-ADFB-5C4AE222987D"}
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
 * @properties={typeid:24,uuid:"49310A6E-9E6A-461D-B1F8-7E8880D303BF"}
 */
function onActionCopiar(event) 
{
	forms.vc_frm_clientes_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_clientes_nuevo.vl_nuevo = 2
	forms.vc_frm_clientes_nuevo.controller.show() 
}
