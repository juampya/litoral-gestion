/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"6DF83EDA-C060-41D4-BA00-B5BF4B628A69"}
 */
function onDataChangeNroFicha(oldValue, newValue, event)
{
	/** @type {JSFoundSet<db:/sistemas/paciente>} */
	var fs_pac = databaseManager.getFoundSet('sistemas','paciente')
	fs_pac.find()
	fs_pac.paciente_nro_ficha = newValue
	var cant = fs_pac.search()
	if(cant>0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','Ese número de ficha ya exite con el paciente: '+fs_pac.paciente_nombre +' DNI: '+fs_pac.paciente_doc_nro,'warning',controller.getName(),'OK',null,null,null,null,null,null,null)
		return false
	}
	return true
}
