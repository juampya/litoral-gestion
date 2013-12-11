
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E310C21-0F8F-483D-BE03-22307DB47878"}
 * @AllowToRunInFind
 */
function onActionGrabar(event) 
{
	databaseManager.saveData(foundset.modulos_to_menus.getSelectedRecord())
	
	/** @type {JSFoundset<db:/Sistemas/usuarios>}*/
	var fs_usuarios = databaseManager.getFoundSet('Sistemas','usuarios')
		fs_usuarios.loadAllRecords()
	/** @type {JSFoundset<db:/Sistemas/accesos>}*/
	var fs_accesos = databaseManager.getFoundSet('Sistemas','accesos')
	
	/** @type {JSFoundset<db:/Sistemas/accesos>}*/
	var fs_accesos_existe = databaseManager.getFoundSet('Sistemas','accesos')
	
	for (var i=1; i<=fs_usuarios.getSize(); i++) 
	{
		var rec_usuario= fs_usuarios.getRecord(i)
		if(rec_usuario.usu_estado == 1)
		{
			fs_accesos_existe.loadAllRecords()
			fs_accesos_existe.find()
			fs_accesos_existe.usu_id = rec_usuario.usu_id
			fs_accesos_existe.modulo_id = modulo_id
			fs_accesos_existe.menu_id = foundset.modulos_to_menus.getSelectedRecord().menu_id
			fs_accesos_existe.search()
			
			if(fs_accesos_existe.getSize()==0)
			{
				fs_accesos.newRecord()
				fs_accesos.modulo_id = modulo_id
				fs_accesos.menu_id   = foundset.modulos_to_menus.getSelectedRecord().menu_id
				fs_accesos.usu_id	 = rec_usuario.usu_id
				fs_accesos.acc_si_no = 0
				databaseManager.saveData(fs_accesos)
			}	
		}
	}

	application.getWindow().hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CEB5B7CC-AFD4-43E0-AA34-F4E23FB5AF2A"}
 */
function onActionCancelar(event) 
{	
	foundset.modulos_to_menus.getSelectedRecord().revertChanges()
	application.getWindow().hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"13A6CEE3-C5C9-435E-AA69-69B512A870B1"}
 */
function onHide(event) 
{
	foundset.modulos_to_menus.getSelectedRecord().revertChanges()
	return true
}