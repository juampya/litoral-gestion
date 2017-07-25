/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"849B6F31-AF97-4CA9-B6BC-249FA4B34D7E"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1FA183F3-3E27-4287-9044-9A1F3746926D",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"79A97351-8CD4-49A7-A075-780F04E6E97B"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86923C61-13D3-4293-A617-E0D1BEAA5928"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("convenio").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A898D33-93D4-4ACE-9F17-851B68465D51"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("convenio").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D9D754A-592A-49DD-ADA6-84D7A9286332"}
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
 * @properties={typeid:24,uuid:"261F4D0B-4741-49F6-90E6-0182D67B1B31"}
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
 * @properties={typeid:24,uuid:"880773B9-09BF-4237-B38A-7BF0DB58961A"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea borrar el Convenio "+convenio_descripcion, 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"1686D311-C1CD-414F-BC96-068EC473CEEC"}
 */
function borrarRegistro()
{
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()
	application.getWindow("convenio").hide()
}
