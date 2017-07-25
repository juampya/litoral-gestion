/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D128B671-6CBD-40A4-BE51-39B11367E984"}
 */
function onActionAgregarObSoc(event) 
{
	controller.newRecord(false)
	emp_id = scopes.globals.mx_empresa_id
	mat_id = forms.sm_frm_matriculados_tabpanel.mat_id
	elements.obsoc_id.editable = true
	elements.rel_observaciones.editable = true
	
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D849CFE6-2971-4D72-9B1E-EA02CA244097"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención","Desea Borrar el Registro?",'atention',controller.getName(),"No",null,"Si","borrarRegistro",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"B6215252-5196-4CDC-861D-D69A1221EED6"}
 */
function borrarRegistro()
{
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2A76C327-718B-467B-8998-6D629CDA48F0"}
 */
function onShow(firstShow, event) 
{
	elements.obsoc_id.editable = false
	elements.rel_observaciones.editable = false
}
