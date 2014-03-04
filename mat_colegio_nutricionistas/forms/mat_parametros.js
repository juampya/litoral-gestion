
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F5241D06-31B6-4171-B04E-CBC34A1E548F"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	databaseManager.revertEditedRecords(foundset)
	forms["mat_inicio"].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6DBA1F4B-1C61-4DA4-97CA-AAD05E8E1E7D"}
 */
function onActionGrabar(event) 
{
	scopes.globals.CargarMenu()
	databaseManager.saveData(foundset)
	forms["mat_inicio"].controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"99ACC1CC-BA6B-4C34-8C6F-943C84BA708D"}
 */
function onShow(firstShow, event) 
{
	if(!foundset.loadAllRecords())
	{
		controller.newRecord()
	}
}
