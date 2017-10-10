/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FB7528CF-398B-4F16-8134-611989DCE4C0"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4831608C-8A15-4C29-8CBA-5141AD76A85D"}
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
 * @properties={typeid:24,uuid:"3A30261E-8B57-409F-A749-7862FD5B807C"}
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
 * @properties={typeid:24,uuid:"CEEDCD8A-4E58-4473-B338-8B3796249E71"}
 */
function onActionNuevo(event) 
{
	forms.ays_frm_contratos_datos.vl_frm_anterior = controller.getName()
	forms.ays_frm_contratos_datos.vl_nuevo = 1
	forms.ays_frm_contratos_datos.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DB70A2DC-A5A6-4AB4-A7F9-DEC8935308F2"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CEBBBF84-EE05-4F49-B597-230F300ED174"}
 */
function onActionDetalle(event) 
{
//	forms.ays_frm_inmuebles_nuevo.vl_frm_anterior = controller.getName()
//	forms.ays_frm_inmuebles_nuevo.vl_nuevo = 0
//	forms.ays_frm_inmuebles_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3901730A-ADB6-472E-B91E-06B56BCA0309"}
 */
function onActionCopiar(event) 
{
//	forms.ays_frm_inmuebles_nuevo.vl_frm_anterior = controller.getName()
//	forms.ays_frm_inmuebles_nuevo.vl_nuevo = 2
//	forms.ays_frm_inmuebles_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D2B89F2A-6B72-4E68-80A1-F6545F7AE40A"}
 */
function onActionBorrar(event) 
{
	var nombre = utils.stringTrim(contrato_id.toString())+"-"+utils.stringTrim(contrato_numero)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Contrato: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"078D2DCF-DDA1-40F5-B79B-6ADA92DC8F0F"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}
