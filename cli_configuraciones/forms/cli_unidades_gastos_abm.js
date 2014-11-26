/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EAD91668-96D7-4F5F-9224-5096E3C2D114"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"36F63819-6DB4-4A63-B6F3-FAE71F8C0D6C",variableType:8}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CA59284C-00C8-4E49-8127-9F8E7C0CFD47"}
 */
var vl_frm_anterior = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"2044FBB9-861A-46DE-B1AE-E442EB349904"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("gastos").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"3A3F6A62-3EA7-43C4-9E40-A21EECC0691B"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("gastos").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"6736E29C-50D4-4D47-BC43-FB639A7AB9B5"}
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
 * @properties={typeid:24,uuid:"3E7D7607-CF91-411B-9173-822AED4FD08B"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}
