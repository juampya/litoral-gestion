/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"760CD38F-343C-43F9-8142-98155FF47795",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E4A4579-0756-4656-BC25-A40E297BFFD1"}
 */
function onActionGrabar(event) 
{
	databaseManager.saveData()
	forms.admin_lg_modulos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4297F569-9700-4532-B25C-5313CA7F5C47"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	forms.admin_lg_modulos.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E413DA6-41E0-4A3C-82AF-96C1A7B1C849"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{
		controller.newRecord(false)
	}
}
