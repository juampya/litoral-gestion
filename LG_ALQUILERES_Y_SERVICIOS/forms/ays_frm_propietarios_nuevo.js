/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D494438A-C55E-4386-BD0A-F41D61FB6EA7"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"64B3F8F9-E7F6-49DB-99BF-41B18A199A99",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F0E5CB2D-DDD1-45D7-BD12-59943B959AE2"}
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
 * @properties={typeid:24,uuid:"829E3FB1-CCCD-4E77-916A-556B11D1DF73"}
 */
function onActionAceptar(event) 
{
	if(propietario_nombre==null | propietario_nombre=="")
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El campo Nombre no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(localidad_id==null | localidad_id==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El campo Localidad no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(propietario_domicilio==null | propietario_domicilio==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El campo Domicilio no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(propietario_nro_docu==null | propietario_nro_docu==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El campo Documento no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(iva_id==null | iva_id==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El campo Categoría IVA no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	
	databaseManager.saveData(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6718DC6C-EDCC-4E40-A26B-7700AD4F9816"}
 */
function onShow(firstShow, event) 
{
	//Variables para archivos Adjuntos//
	scopes.globals.vg_archivo_funcion_codigo = 155
	scopes.globals.vg_archivo_tabla_id		 = propietario_id
	
	//Variables para Auditoría//
	scopes.globals.vg_auditoria_pk    = propietario_id
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
 * @properties={typeid:24,uuid:"595A1D2C-513F-4020-9572-736AAD168808"}
 */
function onActionBorrar(event)
{
	var nombre = utils.stringTrim(propietario_id.toString())+"-"+utils.stringTrim(propietario_nombre)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Propietario: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"39149AA0-D58D-439A-907B-BB21A1D11639"}
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
