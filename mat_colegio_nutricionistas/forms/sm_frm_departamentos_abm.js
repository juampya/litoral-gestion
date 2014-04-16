/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4D98633C-971B-4787-ADCF-028379ABD4E1"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ADA6A265-89AA-4B6E-89C2-7DF3A3BE68C7",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6F0FFD02-4A82-40F1-947E-EFA6AA4C73F7"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3A9D8326-3192-40D4-BF66-B4D12E42E404"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("titulos").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"411E8C6E-8145-451E-B655-2F9382C23D67"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("titulos").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AB520E68-222C-4C76-A705-42D91AD64561"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		//emp_id = scopes.globals.mx_empresa_id
	}
	
	if(vl_nuevo==2)
	{	
		controller.duplicateRecord(false)
		//emp_id = scopes.globals.mx_empresa_id
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"CBDF95A0-D8C1-4210-9790-8AE8E94BDB7F"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}
