/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"06996DC3-3C15-47D2-B1A9-228EF0B954DA"}
 */
var vl_frm_anterior = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"65420C2D-ADB1-4240-A72F-81C55560D0C8"}
 */
function onShow(firstShow, event) 
{
	scopes.globals.SacarMenu()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"661AA992-4534-4120-BED5-F6225B61A6AC"}
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
 * @properties={typeid:24,uuid:"19AD056F-AEA1-4C95-A98A-FC9519C69B8F"}
 */
function onActionNuevo(event) 
{
	forms.sp_frm_depositos_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_depositos_abm_nuevo.vl_nuevo = 1
	forms.sp_frm_depositos_abm_nuevo.controller.show() 
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7E480092-C6E1-467A-AF07-B137BF1E4B12"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E637E2E5-E9CD-4C21-8472-4CDDB82FF020"}
 */
function onActionDetalle(event) 
{
	forms.sp_frm_depositos_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_depositos_abm_nuevo.vl_nuevo = 0
	forms.sp_frm_depositos_abm_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0A2A2FAD-B45E-4DB8-8345-069228221C33"}
 */
function onActionCopiar(event) 
{
	forms.sp_frm_depositos_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_depositos_abm_nuevo.vl_nuevo = 2
	forms.sp_frm_depositos_abm_nuevo.controller.show() 
}
