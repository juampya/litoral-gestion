/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D7FB0BF9-EB5F-490D-93FD-0747BF0F5CF3"}
 */
var vl_frm_anterior = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C0FB5C62-B73E-4767-BE06-DEF41075DC21"}
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
 * @properties={typeid:24,uuid:"9F81D456-84D4-4343-B01C-8F186C5AF228"}
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
 * @properties={typeid:24,uuid:"7C4AB2F3-CD12-402E-A093-2364F8E663B4"}
 */
function onActionNuevo(event) 
{
	forms.sp_frm_talonarios_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_talonarios_abm_nuevo.vl_nuevo = 1
	forms.sp_frm_talonarios_abm_nuevo.controller.show() 
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"D6249829-59EE-4312-AD16-307BD42157AD"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"F92E9C7B-5E87-4F00-A1B0-E8B1B7509D54"}
 */
function onActionDetalle(event) 
{
	forms.sp_frm_talonarios_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_talonarios_abm_nuevo.vl_nuevo = 0
	forms.sp_frm_talonarios_abm_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB237EA8-3EBC-4469-98BE-AEFA72C7A016"}
 */
function onActionCopiar(event) 
{
	forms.sp_frm_talonarios_abm_nuevo.vl_frm_anterior = controller.getName()
	forms.sp_frm_talonarios_abm_nuevo.vl_nuevo = 2
	forms.sp_frm_talonarios_abm_nuevo.controller.show() 
}
