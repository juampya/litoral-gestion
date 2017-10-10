/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"34A8E063-9220-4CE2-8C88-C881979D1328"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"45514D34-C709-4A48-849C-01119B2206D3",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9F4B512A-5F48-45A0-BDDC-55F29EB5476A"}
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
 * @properties={typeid:24,uuid:"3C05DB39-78BC-4040-8378-0E9266C3CE34"}
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
 * @properties={typeid:24,uuid:"D03EDF0C-EC94-45BF-A360-1D097627DBCD"}
 */
function onShow(firstShow, event) 
{
	//Variables para archivos Adjuntos//
	scopes.globals.vg_archivo_funcion_codigo = 153
	scopes.globals.vg_archivo_tabla_id		 = garante_id
	
	//Variables para Auditoría//
	scopes.globals.vg_auditoria_pk    = garante_id
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
 * @properties={typeid:24,uuid:"9D52A956-7142-4C84-8843-0DA39B07175E"}
 */
function onActionBorrar(event)
{
	var nombre = utils.stringTrim(garante_id.toString())+"-"+utils.stringTrim(garante_nombre)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Garante: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"CB90FF05-A58D-4EA6-8EA7-37956CC6843E"}
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
