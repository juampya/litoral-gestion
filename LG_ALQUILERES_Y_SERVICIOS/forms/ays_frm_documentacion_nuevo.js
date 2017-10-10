/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C2A378E1-F542-4E66-81D7-6EC746DED204"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4A1BCEBA-67CF-4136-8921-09BF66DC7F20",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"42CACBE9-699F-454E-879B-B9BFBFFD2E10"}
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
 * @properties={typeid:24,uuid:"7EF5B572-459B-4402-AF49-6C2968625FF5"}
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
 * @properties={typeid:24,uuid:"7CE248B7-0345-40EA-9EAB-296CFB8ED66B"}
 */
function onShow(firstShow, event) 
{
	//Variables para archivos Adjuntos//
	scopes.globals.vg_archivo_funcion_codigo = 156
	scopes.globals.vg_archivo_tabla_id		 = documentacion_id
	
	//Variables para Auditoría//
	scopes.globals.vg_auditoria_pk    = documentacion_id
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
 * @properties={typeid:24,uuid:"4F019444-F91A-4323-8197-159B08F5E134"}
 */
function onActionBorrar(event)
{
	var nombre = utils.stringTrim(documentacion_id.toString())+"-"+utils.stringTrim(documentacion_descripcion)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Tipo de Documentación: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"B46F1576-DEC4-4FD1-98AF-0F2BF5FC880A"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	forms.ays_frm_documentacion_abm.controller.show()
}
