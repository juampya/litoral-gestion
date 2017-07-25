/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3D4875AF-93A4-4FDB-A3E2-69DD0BF997F0"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6BBE7CF5-B165-4F97-B610-693537BD281C",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6B7E70F4-AE71-49E2-8D05-58CF68CBDC84"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"63AF559D-7861-456A-8C07-FBAB645DB2CA"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("medios_de_cobro").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F9A3C51F-670D-4923-B6EF-73E5A05AA431"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("medios_de_cobro").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2E75A19-D5E4-4945-8EC3-108346663096"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id = scopes.globals.mx_empresa_id
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"FB546215-B4A0-4DC7-8D28-311460004D9B"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"DDE60EFA-C7BA-4587-845C-A65D526670CA"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro.", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"C7D998CF-0571-41B4-91FB-63DBC588742D"}
 */
function borrarRegistro()
{
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()
	application.getWindow("medios_de_cobro").hide()
}
