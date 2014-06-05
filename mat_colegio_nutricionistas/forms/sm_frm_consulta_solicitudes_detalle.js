/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"990DFBED-14E6-4F7A-9810-6E07A47693E1",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D5ED8A66-E256-4413-8890-2950D1B2B9EF"}
 */
var vl_titulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFEB07BE-23AB-4196-B463-7CE2ECBE676A"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"95E0E70D-3C0B-439B-9C6E-3896AE2E6C8B"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FD248301-71F6-4ED4-80B1-9D9C667F1002"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("consulta_solicitudes").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"27015DA7-A5EE-4DC3-97DB-55848E752932"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("consulta_solicitudes").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"A0E6DAC1-7E3F-4297-9393-0F472C489F2F"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}

