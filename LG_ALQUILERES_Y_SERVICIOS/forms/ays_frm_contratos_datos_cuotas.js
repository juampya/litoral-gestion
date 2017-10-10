/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FB0B050D-6B02-4599-B0B0-8CE9CB87AA7B"}
 */
function onActionBorrar(event) 
{
	
	var nombre = utils.stringTrim(alqyser_contratos_rel_garantes_to_alqyser_garantes.garante_nombre)+" del contrato ID "+(contrato_id)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Contrato: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"E468F562-9F6F-4856-96AB-6BFA35EBC7CC"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}
