
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86283674-E639-40B3-883A-C8E06E7A56DA"}
 */
function onActionDetalle(event) 
{
	forms.admin_lg_modulos_detalle.vl_nuevo = 0
	forms.admin_lg_modulos_detalle.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EB29CF3F-6ACD-419D-8E66-96D0EAC18062"}
 */
function onActionVolver(event) 
{
	forms.admin_lg_inicio.controller.show()
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C232D67A-020C-482F-A756-CA61CCB2379F"}
 */
function onActionAgregar(event) 
{
	forms.admin_lg_modulos_detalle.vl_nuevo = 1
	forms.admin_lg_modulos_detalle.controller.show()
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F395874-FD5B-4A06-B4AD-95352210D420"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.loadAllRecords()
	
	/** @type {JSFoundset<db:/Sistemas/usuarios>}*/
	var fs_usuarios = databaseManager.getFoundSet('Sistemas','usuarios')
		fs_usuarios.loadAllRecords()
	/** @type {JSFoundset<db:/Sistemas/accesos>}*/
	var fs_accesos = databaseManager.getFoundSet('Sistemas','accesos')
	
	/** @type {JSFoundset<db:/Sistemas/accesos>}*/
	var fs_accesos_existe = databaseManager.getFoundSet('Sistemas','accesos')
	
	for (var j=1;j<=foundset.getSize();j++)
	{	
		var rec_modulo= foundset.getRecord(j)
		
		for (var i=1; i<=fs_usuarios.getSize(); i++) 
		{
			var rec_usuario= fs_usuarios.getRecord(i)
			if(rec_usuario.usu_estado == 1)
			{
				fs_accesos_existe.loadAllRecords()
				fs_accesos_existe.find()
				fs_accesos_existe.usu_id = rec_usuario.usu_id
				fs_accesos_existe.modulo_id = rec_modulo.modulo_id
				fs_accesos_existe.menu_id = ' ^ '
				fs_accesos_existe.search()
				
				if(fs_accesos_existe.getSize()==0)
				{
					fs_accesos.newRecord()
					fs_accesos.modulo_id = rec_modulo.modulo_id
					fs_accesos.usu_id	 = rec_usuario.usu_id
					fs_accesos.acc_si_no = 0
					databaseManager.saveData(fs_accesos)
				}	
			}
		}
	}	
}
