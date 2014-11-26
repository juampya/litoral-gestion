/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E14B9EE7-AF2E-4F66-9B39-12349779DD8E"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F24CCA07-C23D-4EEA-A7F8-08DF7D8B6B59",variableType:8}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"534D64A1-7B7D-4E19-B14D-145C1CC4E415"}
 */
var vl_frm_anterior = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"4C864268-9A65-40A6-B759-026294A2BEB0"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("galenos").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"6B08B324-A9B2-4F86-BAE4-B574E2343C5B"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("galenos").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"102B03C2-D09F-4B1A-8CB3-57645FED1D32"}
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
 * @properties={typeid:24,uuid:"9A7CFAB0-21AD-4A89-9FAC-D9655D5C488F"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}
