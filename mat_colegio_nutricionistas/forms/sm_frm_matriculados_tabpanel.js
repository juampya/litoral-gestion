/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B7DAAE6B-7471-4ADF-A0B7-62ECD1C57DDA"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D54E7178-9813-456D-A12E-190E105255D3",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1FF0465A-20BC-411E-9976-E529C31FF26E"}
 */
function onActionCancelar(event) 
{
	if(utils.hasRecords(foundset.mat_matriculados_to_mat_matriculado_rel_ingresos)||vl_nuevo == 1)
	{	
		databaseManager.revertEditedRecords(foundset)
		forms[vl_frm_anterior].controller.show()
	}
	else
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","El Matriculado no tiene asociado ningún Concepto de Ingreso.","atention",controller.getName(),"Aceptar",null,null,null,null,null,null,null)
		forms[vl_frm_anterior].controller.show()
	}	

}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C52C6B40-9228-4FC1-BA01-F073C71C6840"}
 * @AllowToRunInFind
 */
function onActionAceptar(event) 
{
	if(vl_nuevo == 1)
	{
		/** @type {JSFoundSet<db:/sistemas/mat_ingresos>} */
		var fs_ingr = databaseManager.getFoundSet('sistemas','mat_ingresos')
		fs_ingr.find()
		fs_ingr.ingr_tipo_asignacion = 0
		var cant = fs_ingr.search()
		if(cant > 0)
		{	
			databaseManager.saveData()
			globals.asociaIngresosPorDefecto(mat_id)
			globals.grabarPrimerMovimiento(mat_id,application.getServerTimeStamp().getMonth() + 1,application.getServerTimeStamp().getFullYear())
			forms[vl_frm_anterior].controller.show()
		}
		else
		{
			globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","No Existen Conceptos para asociar al Matriculado","atention",controller.getName(),"Aceptar",null,null,null,null,null,null,null)
		}
	}
	else
	{
		if(utils.hasRecords(foundset.mat_matriculados_to_mat_matriculado_rel_ingresos))
		{	
			databaseManager.saveData()
			forms[vl_frm_anterior].controller.show()
		}
		else
		{
			globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","El Matriculado no tiene asociado ningún Concepto de Ingreso.","atention",controller.getName(),"Aceptar",null,null,null,null,null,null,null)
			databaseManager.saveData()
			forms[vl_frm_anterior].controller.show()
		}		
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"D3C34D80-6F2D-4C5D-9891-2E3A3859AFEE"}
 */
function onShow(firstShow, event) 
{
	elements.btn_borrar.visible = true
	elements.tabs.setTabEnabledAt(2,true)
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
		elements.btn_borrar.visible = false
		elements.tabs.setTabEnabledAt(2,false)			
	}
	
	if(!utils.hasRecords(mat_matriculados_to_mat_rel_mat_cuentas))
	{
		mat_matriculados_to_mat_rel_mat_cuentas.newRecord()
		mat_matriculados_to_mat_rel_mat_cuentas.emp_id = emp_id
		mat_matriculados_to_mat_rel_mat_cuentas.mat_id = mat_id
		databaseManager.saveData(mat_matriculados_to_mat_rel_mat_cuentas)
	}
	
	//Variables para Auditoría//
	scopes.globals.vg_auditoria_pk    = mat_id
	scopes.globals.vg_auditoria_tabla = new Array('mat_matriculados')
	scopes.globals.vg_auditoria_campo = null
	
	//Variables para archivos Adjuntos//
	scopes.globals.vg_archivo_funcion_codigo = 1
	scopes.globals.vg_archivo_tabla_id		 = mat_id
	verificarDeuda()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5FF2DE46-3A4B-412E-93FB-B5E13FF2CF4D"}
 */
function onActionEnviarMail(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C9DD57BF-7D9F-4409-8361-4D8AE02402A1"}
 */
function onActionBorrar(event) 
{
	globals.ventanaSiNo("Desea Borrar el Registro?","BorrarRegistro","",controller.getName())
}

/**
 * @properties={typeid:24,uuid:"7D812533-638F-4718-9C1E-E1A5915718FA"}
 */
function BorrarRegistro()
{
	if(utils.hasRecords(mat_matriculados_to_mat_movimientos))
	{
		globals.ventanaAceptar("El Matriculado tiene movimientos Registrados.\n No se Puede Borrar",controller.getName())
	}
	else
	{
		for (var i = 1; i <= mat_matriculados_to_mat_resarcimientos.getSize(); i++) 
		{
			var record = mat_matriculados_to_mat_resarcimientos.getRecord(i);
			
			record.eliminado = 1
			record.eliminado_usu_id = scopes.globals.mx_usuario_id
			record.eliminado_fecha  = application.getServerTimeStamp()
			databaseManager.saveData(record)
		}
		
		for (var j = 1; j <= mat_matriculados_to_mat_matriculado_rel_ingresos.getSize(); j++) 
		{
			var record1 = mat_matriculados_to_mat_matriculado_rel_ingresos.getRecord(j);
			
			record1.eliminado = 1
			record1.eliminado_usu_id = scopes.globals.mx_usuario_id
			record1.eliminado_fecha  = application.getServerTimeStamp()
			databaseManager.saveData(record1)
		}
		
//		if(utils.hasRecords(mat_matriculados_to_mat_resarcimientos))
//		{
//			mat_matriculados_to_mat_resarcimientos.deleteAllRecords()
//		}
//		if(utils.hasRecords(mat_matriculados_to_mat_matriculado_rel_ingresos))
//		{
//			mat_matriculados_to_mat_matriculado_rel_ingresos.deleteAllRecords()
//		}
		
		eliminado = 1
		eliminado_usu_id = scopes.globals.mx_usuario_id
		eliminado_fecha  = application.getServerTimeStamp()
		databaseManager.saveData()
		databaseManager.refreshRecordFromDatabase(foundset,-1)
		
		//controller.deleteRecord()
		forms[vl_frm_anterior].controller.show()
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"C5477B5E-500E-4DCB-BD18-00935026019F"}
 */
function verificarDeuda()
{
	mat_matriculados_to_mat_movimientos.find()
	mat_matriculados_to_mat_movimientos.mov_estado = 0
	var cant = mat_matriculados_to_mat_movimientos.search()
	if(cant > 0)
	{
		forms.sm_frm_matriculados_abm_nuevo.elements.btn_light.imageURL = "media:///red_light.png"
	}
	else
	{
		forms.sm_frm_matriculados_abm_nuevo.elements.btn_light.imageURL = "media:///green_light.png"		
	}
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D1B335FD-BF40-4821-900A-F1E7F8F0661B"}
 */
function onActionImprimirFicha(event) 
{
	plugins.jasperPluginRMI.runReport('sistemas','mat_matriculado_ficha.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmat_id:mat_id})
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"14CD50F7-E596-4C3E-86D7-878A31E8978A"}
 */
function onActionImprimirCarnet(event) 
{
	plugins.jasperPluginRMI.runReport('sistemas','mat_matriculado_carnet.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmat_id:mat_id})
}
