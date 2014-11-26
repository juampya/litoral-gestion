/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"236D1743-5018-4FD5-AEEE-4AF597607D03",variableType:4}
 */
var vl_mae_presta_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0F31CF80-A037-4DA7-80A5-08623329F007"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A91D8A77-B855-4310-9A7C-0FE4C4B18572",variableType:8}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7C9740A8-67D8-48AE-9BE3-9A1352CEE714"}
 */
var vl_frm_anterior = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7BC28D1D-1744-4821-8886-D8659EEBA329"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("prestacion_items").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"3FE71D78-CCF0-4EA0-8D99-56234DC24481"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("prestacion_items").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"1990C69D-10B4-456C-B149-348673D9D03C"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id = scopes.globals.mx_empresa_id
		mae_presta_id = vl_mae_presta_id
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
 * @properties={typeid:24,uuid:"422ACC2C-8E7A-4731-B7BE-B94D410F9BB3"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}
