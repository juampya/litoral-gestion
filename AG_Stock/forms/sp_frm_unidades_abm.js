/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"51E98B02-B0B0-4BA5-9213-6ABA5DB96B96"}
 */
var vl_frm_anterior = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B043082B-90A6-46F4-AB1A-EB6ADBDA3F9C"}
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
 * @properties={typeid:24,uuid:"20AC72AC-3E89-42C2-A9AA-8F643CD8D618"}
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
 * @properties={typeid:24,uuid:"DA37D210-19F7-4166-93D2-B0E520CA8195"}
 */
function onActionNuevo(event) 
{
	forms.sp_frm_unidades_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_unidades_abm_nuevo.vl_nuevo = 1
	forms.sp_frm_unidades_abm_nuevo.controller.show() 
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"4FA514C2-4A7B-4783-8184-106434B8265F"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"CEEE14E9-9D38-4BE7-895B-0055A7E5E9DA"}
 */
function onActionDetalle(event) 
{
	forms.sp_frm_unidades_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_unidades_abm_nuevo.vl_nuevo = 0
	forms.sp_frm_unidades_abm_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EE80D1CA-C13C-4F1D-B58B-308EDAF39124"}
 */
function onActionCopiar(event) 
{
	forms.sp_frm_unidades_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_unidades_abm_nuevo.vl_nuevo = 2
	forms.sp_frm_unidades_abm_nuevo.controller.show() 
}
