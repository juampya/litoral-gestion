/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0528145F-033C-4805-A779-6EE171CF1434"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"14A5E3D0-93C1-45EA-8E31-2BB7456096C3",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"78AD0AF4-9CCA-4822-B0C0-5469334DC42C"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B56CEE6E-9CD8-4079-AF13-569958F5877E"}
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
 * @properties={typeid:24,uuid:"2BB4360D-F3EC-4B50-B485-374E928B4F3A"}
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
