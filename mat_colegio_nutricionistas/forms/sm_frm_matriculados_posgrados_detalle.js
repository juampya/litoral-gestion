/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"22C16FC9-0913-4F7B-AE80-33A1CEBCDE0E",variableType:4}
 */
var vl_rel_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CEB7EE5D-02F8-407A-8395-DC4992C0BEDA",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F08725D3-A9F7-4121-AF85-004A1B1D980E"}
 */
var vl_titulo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6481BD98-385D-4B16-82D6-547FE5F431F9"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("mat_posgrados").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B19EA6C-98A2-4668-82EC-6BBB01143EFF"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords(foundset)
	application.getWindow("mat_posgrados").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B0B8719-FCAC-4725-8813-E3B40351A4C8"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{

	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		rel_estado = 1
		mat_id = forms.sm_frm_matriculados_tabpanel.mat_id
		elements.btn_borrar.visible = false
	}
	else
	{
		controller.find()
		rel_id=vl_rel_id
		controller.search()
		elements.btn_borrar.visible = true		
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F11E4403-EBA3-4E22-BE7A-8FD5D5DBE45D"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords(foundset)
	return true
}



/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EFCA2EBA-43DD-4D3A-8597-390AB80149E7"}
 */
function onActionBorrar(event) 
{
	globals.ventanaSiNo("Desea Borrar el Registro","borrarRegistro","",controller.getName())
}

/**
 * @properties={typeid:24,uuid:"9C012E58-F47C-42C4-A6A4-6839751894AB"}
 */
function borrarRegistro()
{
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()
	application.getWindow("mat_posgrados").hide()
}
