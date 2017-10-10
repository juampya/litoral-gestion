/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"91A7C31D-62C8-4D2C-825C-EDC742B6B50A"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"435BDA74-B496-458E-B214-4038405E3C72",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CA5C183B-0FF2-4991-A419-A2EFB324DF0B"}
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
 * @properties={typeid:24,uuid:"639E13F8-4CEB-4F52-874E-45EC22E21B92"}
 */
function onActionAceptar(event) 
{
	if(inmueble_calle==null | inmueble_calle=="")
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El campo calle no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(localidad_id==null | localidad_id==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El campo localidad no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
//	if(propietario_id==null | propietario_id==0)
//	{
//		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El campo propietario no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
//		return
//	}
	
	databaseManager.saveData(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"32891019-AA54-4AC0-BCB1-C51BA59AC770"}
 */
function onShow(firstShow, event) 
{
	//Variables para archivos Adjuntos//
	scopes.globals.vg_archivo_funcion_codigo = 154
	scopes.globals.vg_archivo_tabla_id		 = inmueble_id
	
	//Variables para Auditoría//
	scopes.globals.vg_auditoria_pk    = inmueble_id
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
 * @properties={typeid:24,uuid:"1D5809DD-6AA8-4A4D-AFEE-CC549A6C3AF4"}
 */
function onActionBorrar(event)
{
	var nombre = utils.stringTrim(inmueble_id.toString())+"-"+utils.stringTrim(inmueble_calle)+" "+utils.stringTrim(inmueble_nro)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Inmueble: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"0748BC77-9B10-49E5-9DEF-1EEB570FA75E"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	//controller.deleteRecord()
	forms.ays_frm_inmuebles_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7C4A84A2-2463-4D9B-AE5D-D6C889139174"}
 */
function NuevoPropietario(event) {
	// TODO Auto-generated method stub
}
