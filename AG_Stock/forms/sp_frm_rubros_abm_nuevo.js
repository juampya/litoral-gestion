/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"40F43EEA-6650-4556-BBEE-702C89084386"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"12B82C94-FC6D-4A92-B1E7-46D85F114265",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"072563D1-3E74-4A1E-AA7D-45FC81D2C495"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"D15E9817-8974-402D-A986-844E45544319"}
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
 * @properties={typeid:24,uuid:"070386A5-FF4E-4258-80E0-86D3C3237EFA"}
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
