/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BA3B29C2-64B7-4BE4-A9BB-02131F3949A9"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2FC78335-8E4A-4A79-B9AA-B97CB0E59300",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"63C58978-2C36-4266-B1AC-F95B3179A7F9"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A9625D15-53D9-48F8-BA3E-168D1105ABB5"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A867ADE4-6793-4B52-AE38-E8850BCB4D57"}
 */
function onShow(firstShow, event) 
{
	//Variables para archivos Adjuntos//
	scopes.globals.vg_archivo_funcion_codigo = 157
	scopes.globals.vg_archivo_tabla_id		 = inquilino_id
	
	//Variables para Auditoría//
	scopes.globals.vg_auditoria_pk    = inquilino_id
	scopes.globals.vg_auditoria_tabla = new Array(controller.getDataSource())
	scopes.globals.vg_auditoria_campo = null
	
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id= scopes.globals.mx_empresa_id
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5453CAB5-40B4-4E00-8F26-6822498B6EF1"}
 */
function onActionBorrar(event)
{
	var nombre = utils.stringTrim(inquilino_id.toString())+"-"+utils.stringTrim(inquilino_nombre)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Inquilino: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"ECA99F86-0961-4F27-88C4-76CA1ADD1331"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	//controller.deleteRecord()
	forms.ays_frm_inquilinos_abm.controller.show()
}
