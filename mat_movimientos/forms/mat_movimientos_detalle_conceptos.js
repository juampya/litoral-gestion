/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"2461210A-7448-4A2E-A2D4-1209CFBD47E7"}
 */
function onActionAgregar(event) 
{
	controller.newRecord(false)
	mov_id = forms.mat_movimientos_detalle.mov_id
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5388C5DC-991C-40B1-A12C-1AE3C9523E0E"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención","Desea Borrar el Registro?",'atention',controller.getName(),"No",null,"Si","borrarRegistro",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"82A22CFE-4AB4-4AE2-9398-0583C4C528A2"}
 */
function borrarRegistro()
{
	forms.mat_movimientos_detalle.mov_importe -= det_importe
	forms.mat_movimientos_detalle.mov_importe_2vto = forms.mat_movimientos_detalle.mov_importe+(forms.mat_movimientos_detalle.mov_importe*forms.mat_movimientos_detalle.mov_recargo)/100
	
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()
}


/**
 * @properties={typeid:24,uuid:"BC73CE93-F821-48A8-8338-F830CC431CF4"}
 */
function onDataChangeImporte() 
{
	forms.mat_movimientos_detalle.mov_importe += det_importe
	det_importe_2vto = det_importe+(det_importe*forms.mat_movimientos_detalle.mov_recargo)/100
	forms.mat_movimientos_detalle.mov_importe_2vto = forms.mat_movimientos_detalle.mov_importe+(forms.mat_movimientos_detalle.mov_importe*forms.mat_movimientos_detalle.mov_recargo)/100
	return true
}