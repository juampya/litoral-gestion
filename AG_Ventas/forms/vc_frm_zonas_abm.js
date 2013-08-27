/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FFF85F64-9B5B-4881-87E4-823CC970758C"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA241175-873B-40A2-823B-5DB1F69AE9A5"}
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
 * @properties={typeid:24,uuid:"BA6B71F0-D594-493A-BCDC-BC1B8E434728"}
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
 * @properties={typeid:24,uuid:"3405DBA3-5163-45C3-8F25-F6AAA137BD36"}
 */
function onActionNuevo(event) 
{
	forms.vc_frm_zonas_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_zonas_nuevo.vl_nuevo = 1
	forms.vc_frm_zonas_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A7C29406-146E-48DC-AF8B-097A21F2C995"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"735EEA73-C27A-48C1-A681-D456892C1673"}
 */
function onActionDetalle(event) 
{
	forms.vc_frm_zonas_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_zonas_nuevo.vl_nuevo = 0
	forms.vc_frm_zonas_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CDA4E1D7-18D6-43CD-8A1D-3876F291AF30"}
 */
function onActionCopiar(event) 
{
	forms.vc_frm_zonas_nuevo.vl_frm_anterior = controller.getName()
	forms.vc_frm_zonas_nuevo.vl_nuevo = 2
	forms.vc_frm_zonas_nuevo.controller.show() 
}
