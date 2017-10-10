/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2EF814A4-D9C4-414F-8E75-4AC61C3EC67F"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2DB919EA-5137-4526-B9AF-6EDC77141DF8"}
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
 * @properties={typeid:24,uuid:"E89F5787-1331-496B-B5D7-16916E0DC6AB"}
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
 * @properties={typeid:24,uuid:"CF78CCFE-A8FE-48FD-B281-C2D122B089D8"}
 */
function onActionNuevo(event) 
{
	forms.ays_frm_propietarios_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_propietarios_nuevo.vl_nuevo = 1
	forms.ays_frm_propietarios_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"34C9EF2F-17F0-4592-B786-B886EFF88AA5"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2FF7F89B-2D3F-415C-9AD6-47BFD7A33C06"}
 */
function onActionDetalle(event) 
{
	forms.ays_frm_propietarios_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_propietarios_nuevo.vl_nuevo = 0
	forms.ays_frm_propietarios_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"37F5F0EE-563D-42AB-ACCA-ACB101E6BAE8"}
 */
function onActionCopiar(event) 
{
	forms.ays_frm_propietarios_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_propietarios_nuevo.vl_nuevo = 2
	forms.ays_frm_propietarios_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67A74F1F-B4A6-4AC5-A958-389CBF1033EA"}
 */
function onActionBorrar(event) 
{
	var nombre = utils.stringTrim(propietario_id.toString())+"-"+utils.stringTrim(propietario_nombre)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Propietario: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"17ACAE4A-BBAA-4092-8B19-425E81EA089A"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}
