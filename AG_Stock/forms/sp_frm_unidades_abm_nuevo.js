/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9F86F388-F0F1-43E4-8D17-00B53D1D4A16"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A065FC96-2397-4966-9D8F-960890172207",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"FB64697C-AA1E-4AC3-92ED-D1060074011D"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E2427361-E5B8-4BBC-B2A8-63193A514563"}
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
 * @properties={typeid:24,uuid:"35B85040-4E45-4653-AB78-42DE7A19E6B1"}
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
