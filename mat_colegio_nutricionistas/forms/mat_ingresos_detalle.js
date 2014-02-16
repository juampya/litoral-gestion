
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8210911B-BD93-4153-B55F-93B04C567597"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	//forms.mat_ingresos_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"55CCA076-8B0E-44C9-97D5-AF285C29759D"}
 */
function onActionGrabar(event) 
{
	databaseManager.saveData(foundset)
	//forms.mat_ingresos_abm.controller.show()
}
