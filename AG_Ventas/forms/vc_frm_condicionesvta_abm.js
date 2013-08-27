/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"72107DB5-FEDC-423F-A3AC-B1C16E69ADFD"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6ACB10EF-7064-4D10-93BD-B8DEF9051954"}
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
 * @properties={typeid:24,uuid:"68415B82-1880-4238-978F-85ACD59C2D31"}
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
 * @properties={typeid:24,uuid:"BA58D5D0-A5E1-4B8D-A747-18005809D794"}
 */
function onActionNuevo(event) 
{
	forms.vc_frm_condicionesvta_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_condicionesvta_nuevo.vl_nuevo = 1
	forms.vc_frm_condicionesvta_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E42F24C2-06EE-4C45-B96E-C2AEB00E059E"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"346508B7-CC8B-4764-9FD4-3A79812C8FE5"}
 */
function onActionDetalle(event) 
{
	forms.vc_frm_condicionesvta_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_condicionesvta_nuevo.vl_nuevo = 0
	forms.vc_frm_condicionesvta_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"72831392-5343-40B8-8DDB-FC3C76C36578"}
 */
function onActionCopiar(event) 
{
	forms.vc_frm_condicionesvta_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_condicionesvta_nuevo.vl_nuevo = 2
	forms.vc_frm_condicionesvta_nuevo.controller.show() 
}
