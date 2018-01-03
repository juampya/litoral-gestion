/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"222E7904-2E62-47C8-8100-1BBE82EFD2BF"}
 */
function onActionBorrar(event) 
{
	var nombre = utils.stringTrim(alqyser_contratos_rel_garantes_to_alqyser_garantes.garante_nombre)+" del contrato ID "+(contrato_id)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Contrato: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"B5282D32-A7EA-4B07-82C1-81602156FED8"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}