/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1814D5E8-6719-478D-8052-7F047FE8FFAA"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1117C542-1E22-4304-84D7-7F3038D10AB5"}
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
 * @properties={typeid:24,uuid:"D0FBA226-C2B2-4535-8F0F-FD90892A25AB"}
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
 * @properties={typeid:24,uuid:"A18C2C5A-289E-4B18-B020-20C07F844859"}
 */
function onActionNuevo(event) 
{
	forms.vc_frm_transportes_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_transportes_nuevo.vl_nuevo = 1
	forms.vc_frm_transportes_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2284D2CB-E8A1-4E05-B57A-A914D986DC35"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EE78BA49-BC1B-4DBF-ADED-B8DB0A67D32D"}
 */
function onActionDetalle(event) 
{
	forms.vc_frm_transportes_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_transportes_nuevo.vl_nuevo = 0
	forms.vc_frm_transportes_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6C7E28DE-4166-4AF8-BF8D-EC58A4078F24"}
 */
function onActionCopiar(event) 
{
	forms.vc_frm_transportes_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_transportes_nuevo.vl_nuevo = 2
	forms.vc_frm_transportes_nuevo.controller.show() 
	
}
