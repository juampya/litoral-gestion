/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"64870445-828A-41E7-BF51-97D93B02962E"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B04802C7-F310-47BF-A57E-522CBC3B1FC7",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C0D70CA2-582F-47A7-9917-8B420C0508FB"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A06A96F-107A-4710-8141-A7267169CEA8"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("libros").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"580B4A3B-1181-4DCE-B2EB-354299F8B427"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("libros").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B1C6AE52-40F0-4289-9506-BC0CDD80DC5C"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
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
 * @properties={typeid:24,uuid:"97360FA5-DBA3-48BD-8F15-E6D237DDA008"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"952616B6-8812-4CC9-A988-CAB70A6B6984"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro.", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"7CE391F7-CE05-4E9D-83B3-820BB7B0A2A2"}
 */
function borrarRegistro()
{
	controller.deleteRecord()
	application.getWindow("libros").hide()
}
