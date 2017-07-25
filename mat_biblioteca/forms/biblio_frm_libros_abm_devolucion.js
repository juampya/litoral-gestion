/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7F2E5950-2C7D-4367-A983-23039969072B"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"42A9E310-B725-4EE7-AA36-707F8C2DA055",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8AD12BA5-96B5-4E35-B3D0-281C67BF36CD"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC9985E8-6E9F-44AC-A8B5-0CEF3D193CC6"}
 */
function onActionAceptar(event) 
{
	mat_rel_mat_libros_to_biblio_libros_por_relacion.rel_id = 0
	mat_rel_mat_libros_to_biblio_libros_por_relacion.libro_estado = 0
	databaseManager.saveData()
	application.getWindow("libros").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"671AF557-8419-4D39-B09D-16D863090FCB"}
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
 * @properties={typeid:24,uuid:"1893C58A-E4DD-4BD7-9111-EF427088321E"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	rel_fecha_devol = application.getServerTimeStamp()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"FCAE6CC3-21C0-46A1-95AE-3C4C16991B2A"}
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
 * @properties={typeid:24,uuid:"6079C425-6313-47E6-91E3-4CC3CF80A2D2"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro.", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"683BDA29-1BB9-4BC3-9599-800F791C41B0"}
 */
function borrarRegistro()
{
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()
	application.getWindow("libros").hide()
}