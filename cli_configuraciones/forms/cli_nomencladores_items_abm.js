/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"51C65C86-28EE-468F-A506-7D61B43966E1",variableType:4}
 */
var vl_nomen_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3293CCFB-F6D9-470F-9FD0-A0CFF11E5391"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"47FFC428-5AB9-4EB6-9156-197608829507",variableType:8}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C7449A9-EF75-47DD-A7AE-DA954AB6492E"}
 */
var vl_frm_anterior = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"49DA398B-315D-414B-A762-47883FA414A5"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("nomenclador_items").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"6FD1083C-3E5B-4F0B-A5D3-77B659F40363"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("nomenclador_items").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"9FB0F832-13B9-4512-A4B6-E636C327EE4D"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id = scopes.globals.mx_empresa_id
		nomen_id = vl_nomen_id
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
 * @properties={typeid:24,uuid:"9F0A62FF-E18C-40F2-A88F-4616C8689C84"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}
