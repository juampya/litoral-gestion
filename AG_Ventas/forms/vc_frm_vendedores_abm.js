/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A482B998-82DD-4B29-A4DF-81C33EFB47A6"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"137FA82B-0396-4D9D-95B2-B8B3C7AC0B35"}
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
 * @properties={typeid:24,uuid:"F8C3DC62-DE3D-4793-8301-CEC7D0880A53"}
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
 * @properties={typeid:24,uuid:"3DAC8B53-C031-487A-94D4-801CD6E14408"}
 */
function onActionNuevo(event) 
{
	forms.vc_frm_vendedores_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_vendedores_nuevo.vl_nuevo = 1
	forms.vc_frm_vendedores_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4CFB404D-1352-43DB-A5D3-82124CF395B2"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B799CC94-F657-480D-BD46-D405272CEBE7"}
 */
function onActionDetalle(event) 
{
	forms.vc_frm_vendedores_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_vendedores_nuevo.vl_nuevo = 0
	forms.vc_frm_vendedores_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0298BB3-56FD-4643-8840-FD205AAF23FF"}
 */
function onActionCopiar(event) 
{
	forms.vc_frm_vendedores_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_vendedores_nuevo.vl_nuevo = 2
	forms.vc_frm_vendedores_nuevo.controller.show() 
}
