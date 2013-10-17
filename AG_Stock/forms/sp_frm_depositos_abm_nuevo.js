/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"51B1CB28-76F8-4C54-B5C3-EEB508075F6B"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6CB2D8E4-8746-4508-8B30-E25F9DC3EF40",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"5379712A-852C-4DD7-94F8-5647E5920B90"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"39B9F92A-B71B-4ED0-8CF4-DB6A4543B3A7"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C9AFF0C9-CF20-4A5F-AF02-029082121012"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
}
