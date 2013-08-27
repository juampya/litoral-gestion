/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C5A6540E-EF7A-4C82-BBED-CD48E3E6B833"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1FA31863-254C-4F3C-BDCA-00831F160B56",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AFB928D1-17DC-47CF-A90C-F6361296B4EF"}
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
 * @properties={typeid:24,uuid:"7DC68755-6A3E-47BF-80DF-28638E0F641E"}
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
 * @properties={typeid:24,uuid:"934B5B83-5AA1-4BE0-98FE-69ECEFEDBE59"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
		suc_id=1
		zona_comision =0
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
	
}
