/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2D56473B-0739-4AFD-B93F-39C4DBAA692C"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F0F104FB-CFCB-46A7-812A-6845B1EEEFE5",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FAA1F16F-7C13-4E82-B6AB-A8BF40C95BF7"}
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
 * @properties={typeid:24,uuid:"C44A4173-2B48-4E65-91AF-2777FAAFAB19"}
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
 * @properties={typeid:24,uuid:"B2E03232-2E7F-4D57-A010-A09736B95052"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
		suc_id=1
		transporte_comision = 0
	}
	
	if(vl_nuevo==2)
	{	
		controller.duplicateRecord(false)
	}
}
