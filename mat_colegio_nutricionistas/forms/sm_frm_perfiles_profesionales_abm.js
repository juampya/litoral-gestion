/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A2847A86-630E-44CD-B16F-A3A09F8537C6"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"280B9345-D7A8-421D-9A80-95529E591D50",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"364956A6-2A55-4F08-9446-298F97AAD586"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1ED345F3-5423-48A1-A795-2B626DD13220"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("perfil").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"13D3CE25-8DF0-45DF-AD76-07DD114B20FF"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("perfil").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B3EA2D19-2DC6-4FBF-B03F-5217308EEE08"}
 * @AllowToRunInFind
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
 * @properties={typeid:24,uuid:"F457739F-688D-438A-A7F5-F4856DD80BBE"}
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
 * @properties={typeid:24,uuid:"A3D14373-9E7B-4915-8377-133F54BBA35B"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro.", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"83D656C0-69CB-4CA9-A188-BEFCB63A6A0E"}
 */
function borrarRegistro()
{
	controller.deleteRecord()
	application.getWindow("perfil").hide()
}
