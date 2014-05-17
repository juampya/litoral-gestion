/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5CAB86F1-AFF5-40BA-B503-5512721FEB6C"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D2CB481C-4F84-4685-A0CA-F67F870FC678",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"824A91E8-B3FA-4DC1-9C55-0A9732224A20"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A6ADA579-8F67-437B-9815-DF486D5DBDA2"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("localidades").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A037231B-CCB3-4D4E-9090-79E17954AFA1"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("localidades").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3C55AECE-7F52-49BB-A4B1-44950E40D22E"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id = scopes.globals.mx_empresa_id
	}
	
	if(vl_nuevo==2)
	{	
		controller.duplicateRecord(false)
		emp_id = scopes.globals.mx_empresa_id
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"61A8F2AA-45B7-4222-BD3A-DD06789570CD"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}
