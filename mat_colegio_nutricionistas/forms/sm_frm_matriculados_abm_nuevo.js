/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1D608637-3CB3-4590-AAC5-852349057BD6"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D2594EB-005A-4B53-9E3C-9DA0F0AB758F",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1A990727-0DB5-4FC0-8435-D6A8A3F6FBC7"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"795ECCDA-F647-4323-9CDF-9F83DA23FE2F"}
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
 * @properties={typeid:24,uuid:"3502BD1C-6F14-4505-B646-37AC8C9960C8"}
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
