/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"22B310DC-4050-44EA-AC0E-C7C3C1875C3C"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	forms.cli_turnos_lst_x_dia.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A37E8F5-809C-4B69-89D1-3A9094BA5DD6"}
 */
function onActionGrabar(event) 
{
	databaseManager.saveData(foundset)
	forms.cli_turnos_lst_x_dia.controller.show()
}
