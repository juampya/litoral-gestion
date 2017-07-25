/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"52047920-4B2D-4C6C-BE68-A33E52B8198D"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DF2C8FEA-B16C-49C6-BA8E-427538B8ADC4",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BDEDEAA1-63A7-4747-BBC5-CB6BBD4C4035"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D4CF7B0B-5337-4672-8677-B55E50D06076"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("editorial").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"41F8E90F-3A8F-49FD-9A2F-3070F5F48F63"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("editorial").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"52DD60BA-ECBB-47E0-913D-95EE21F7EA8A"}
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
 * @properties={typeid:24,uuid:"F0108AF4-B2E9-4139-908B-2BE6C402D8EB"}
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
 * @properties={typeid:24,uuid:"ADC9E245-65DC-415C-8E51-CB38975C627F"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro.", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"93D15A00-771F-4DD8-8F0E-009484643C0E"}
 */
function borrarRegistro()
{
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	//controller.deleteRecord()
	application.getWindow("editorial").hide()
}
