/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B5B81A8B-16FA-464A-9756-4DC2219D4644"}
 */
var vl_frm_anterior = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B21DC9DF-2B92-4C79-9D11-A3FE5DD6CF93"}
 */
function onActionVolver(event) 
{
	forms[vl_frm_anterior].controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"250A03AB-E37C-4E0A-8261-19A69CA731AB"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7E376096-EFEE-4572-BC2A-E32468AB492C"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro.", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"51E33D79-4107-411C-81F2-46BDFE79A47F"}
 */
function borrarRegistro()
{
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()
	forms[vl_frm_anterior].controller.show()
}