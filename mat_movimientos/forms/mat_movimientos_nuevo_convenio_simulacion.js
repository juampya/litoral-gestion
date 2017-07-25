/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E213F54-4123-49FA-AD99-0B2CD738F3B0"}
 */
function onActionAgregar(event) 
{
	controller.newRecord(false)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E58A9D82-A36C-48E9-987F-AF253682F14A"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención","Desea Borrar el Registro?",'atention',controller.getName(),"No",null,"Si","borrarRegistro",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"A1C18B2C-EAF3-4CC5-A945-8E51DCB17630"}
 */
function borrarRegistro()
{
	forms.mat_movimientos_nuevo_manual.vl_importe -= det_importe
	forms.mat_movimientos_nuevo_manual.mov_importe_2vto = forms.mat_movimientos_nuevo_manual.vl_importe+(forms.mat_movimientos_nuevo_manual.vl_importe*forms.mat_movimientos_nuevo_manual.mat_movimientos_to_mat_configuraciones.conf_interes_x_atraso)/100
	
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()

}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4F58B038-BB76-4EAC-92E9-47A7C575F2CD"}
 */
function onDataChangeImporte(oldValue, newValue, event) 
{
	forms.mat_movimientos_nuevo_manual.vl_importe += det_importe
	//det_importe_original = det_importe
	det_importe_2vto = det_importe+(det_importe*forms.mat_movimientos_nuevo_manual.mat_movimientos_to_mat_configuraciones.conf_interes_x_atraso)/100
	forms.mat_movimientos_nuevo_manual.mov_importe_2vto = forms.mat_movimientos_nuevo_manual.vl_importe+(forms.mat_movimientos_nuevo_manual.vl_importe*forms.mat_movimientos_nuevo_manual.mat_movimientos_to_mat_configuraciones.conf_interes_x_atraso)/100
	return true
}
