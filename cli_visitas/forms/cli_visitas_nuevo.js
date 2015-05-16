/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3479EC70-6912-41B2-8BB1-A4AE54C605A6"}
 */
function onActionGrabar(event) 
{
	databaseManager.saveData(foundset)
		
	/** @type {JSFoundSet<db:/sistemas/visita_informe>} */
	var fs_informe = databaseManager.getFoundSet('sistemas','visita_informe')		
	fs_informe.newRecord()
	fs_informe.visita_id = visita_id
	databaseManager.saveData(fs_informe)
	
	forms.cli_visitas_lst.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CE9EA3F5-92B9-4A4E-AC54-3C9321FF5B4A"}
 */
function onActionVolver(event) 
{

	databaseManager.revertEditedRecords(foundset)
	databaseManager.setAutoSave(true)
	forms.cli_visitas_lst.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"391CE877-BD27-455E-87D5-598D4BE40545"}
 */
function onShow(firstShow, event) 
{
	databaseManager.setAutoSave(false)
	controller.newRecord()
	visita_fecha = application.getServerTimeStamp()
	emp_id = scopes.globals.mx_empresa_id
}
