/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"762D02F6-B763-4F58-81C5-90BE3877E726"}
 */
var vl_frm_anterior = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"720BFE34-503E-4B07-9024-FFC78886305C"}
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
 * @properties={typeid:24,uuid:"4A2CCF1F-EB4F-4E46-98F5-F3D9CC3E2615"}
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
 * @properties={typeid:24,uuid:"B75B1269-0AA7-415C-9132-D3B2A68D5F74"}
 */
function onActionNuevo(event) 
{
	forms.ays_frm_talonarios_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_talonarios_abm_nuevo.vl_nuevo = 1
	forms.ays_frm_talonarios_abm_nuevo.controller.show() 
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"BCCF0BA1-926E-4153-A339-B8C6D5DC004A"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"2885A684-74EC-45A0-A014-35213356A81E"}
 */
function onActionDetalle(event) 
{
	forms.ays_frm_talonarios_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_talonarios_abm_nuevo.vl_nuevo = 0
	forms.ays_frm_talonarios_abm_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF79A8EB-8275-4A39-8FFC-6BA5C5B732B6"}
 */
function onActionCopiar(event) 
{
	forms.ays_frm_talonarios_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_talonarios_abm_nuevo.vl_nuevo = 2
	forms.ays_frm_talonarios_abm_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98D5A920-A5BD-40BD-AAE8-C8AB711336F0"}
 */
function onActionBorrar(event) {
	// TODO Auto-generated method stub
}
