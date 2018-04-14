/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D0CDB11A-35F3-4387-BEBB-CB7FF2CD4B84"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A501C1C-46AB-4D85-8CD4-14EC1E87CF83"}
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
 * @properties={typeid:24,uuid:"A33A2EFA-EAD1-40D2-8759-F31841D8CFBB"}
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
 * @properties={typeid:24,uuid:"E6007017-C6F7-4840-BEB5-C5326562509A"}
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
 * @properties={typeid:24,uuid:"CB687827-E18E-472F-B6D8-7312660EA65C"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B3F2846E-069C-4192-9A2A-7CCC2FD1647C"}
 */
function onActionDetalle(event) 
{
	forms.ays_frm_contratos_datos.vl_frm_anterior = controller.getName()
	forms.ays_frm_contratos_datos.vl_nuevo = 0
	forms.ays_frm_contratos_datos.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75AAFB51-E49D-42FD-A6F6-3F5F9773D486"}
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
 * @properties={typeid:24,uuid:"83C57ECC-9A4E-4240-8969-66C088847A7A"}
 */
function onActionBorrar(event) 
{
//	var nombre = utils.stringTrim(fa.toString())+"-"+utils.stringTrim(contrato_numero)
//	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Contrato: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"4FD55449-F934-48FA-9C70-67CCB521240D"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}
