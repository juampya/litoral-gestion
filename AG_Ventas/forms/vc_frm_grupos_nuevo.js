/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2F665C2F-FC39-40F4-9500-AA76517D6CCE"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6484B67F-472F-4702-BF78-71B7971E6A85",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0037E669-93EF-4450-BC7A-3551B270799D"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61E3869E-A571-467A-B9F0-FBE3243B15B6"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10BEFFBA-DFF9-4C2F-8F43-81DABB8CB943"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
		suc_id=1
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
	
}
