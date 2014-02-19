
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F5241D06-31B6-4171-B04E-CBC34A1E548F"}
 */
function onActionVolver(event) 
{
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
	databaseManager.saveData(foundset)
	forms["mat_inicio"].controller.show()
}
