/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9AB4658B-49AC-4F9B-8522-8654FADA575A"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2F006EC4-B78B-4DDC-8D73-96074ECACCD6",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A0D3B364-27A1-4632-9F1B-71A9EB00163D"}
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
 * @properties={typeid:24,uuid:"F41599AE-C68E-4486-B932-A587EB9A6A5A"}
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
 * @properties={typeid:24,uuid:"9416B1A1-258C-4B6A-A94D-CC04FE948B0F"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
		suc_id=1
		vendedor_comision = 0
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
}
