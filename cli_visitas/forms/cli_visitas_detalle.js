/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B074F11-176E-4D12-91EB-174FE07DADD7"}
 */
function onActionGrabar(event) 
{
	databaseManager.saveData(foundset)
	databaseManager.saveData(visita_to_visita_informe)
	forms.cli_visitas_lst.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C6F7540C-DB2E-4777-A55E-3AD67BDF5B3D"}
 */
function onActionVolver(event) 
{

	databaseManager.revertEditedRecords(foundset)
	databaseManager.revertEditedRecords(visita_to_visita_informe)
	databaseManager.setAutoSave(true)	
	forms.cli_visitas_lst.controller.show()	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"829E31DF-320C-4F97-98B3-2814CA261C3A"}
 */
function onShow(firstShow, event) 
{
	databaseManager.setAutoSave(false)
}
