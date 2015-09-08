/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"65DFB6F1-3E83-4961-AF5C-D9F9E4CF9635"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"19F1DC4A-6C94-45BD-B3BC-D8322F387C52",variableType:8}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"78297FCE-D890-4A3B-ACD4-962E39546916"}
 */
var vl_frm_anterior = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"17CF4BA4-AB46-4970-9EF3-CD51E9ABFA20"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("nomenclador").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"4DB37134-769B-4465-BFE2-F9972D385B2C"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("nomenclador").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"29523A8C-34A1-49DC-9D98-F5F933DB3ED4"}
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
 * @properties={typeid:24,uuid:"08F268BD-BD83-4931-B21B-71BE0E3DFA08"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}
