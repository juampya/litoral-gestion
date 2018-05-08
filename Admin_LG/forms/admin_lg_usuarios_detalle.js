/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9905096B-15FD-47E6-85B5-D7C9ED96797D",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D75DFFCF-56AC-4CD8-865E-50467B8B6200"}
 */
function onActionDetalle(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B4A4CF68-326C-45D0-A4FA-DEE0684EA611"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.admin_lg_usuarios.controller.getName())
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5E460F40-03A4-4ECC-A5DB-F0A0A6BA9194"}
 */
function onActionGrabar(event) 
{
	databaseManager.saveData()
	scopes.globals.AbrirGenerico(forms.admin_lg_usuarios.controller.getName())
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C7C521EA-66F4-4C73-8132-7EF3B6E249E4"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{
		usu_estado=1
		controller.newRecord(false)
	}
}
