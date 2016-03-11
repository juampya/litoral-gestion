/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3ACDDF9E-02BB-442F-9E6C-DC34EC3BF0CB",variableType:4}
 */
var vl_abm = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B33AE559-CDEE-4EC9-9417-4AAEAFFC9E70"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.cli_pacientes.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BE5F3989-66C3-4627-A080-6C69061D4DF4"}
 */
function onShow(firstShow, event) 
{
	//Variables para archivos Adjuntos//
	scopes.globals.vg_archivo_funcion_codigo = 2
	scopes.globals.vg_archivo_tabla_id		 = paciente_id
	
	//Variables para Auditoría//
	scopes.globals.vg_auditoria_pk    = paciente_id
	scopes.globals.vg_auditoria_tabla = new Array('paciente')
	scopes.globals.vg_auditoria_campo = null
	
	if (vl_abm == 1)
	{
		controller.newRecord(false)
		elements.btnBorrar.visible = false
	}
	else
	{
		if(paciente_fecha_naci!=null)
		{
			var anios = application.getServerTimeStamp().getFullYear() - paciente_fecha_naci.getFullYear()
			var mes  = (application.getServerTimeStamp().getMonth()+1) - (paciente_fecha_naci.getMonth()+1)
			if (mes < 0)
			{
				anios = anios - 1;
			} 
			else
			{	
				if (mes == 0) 
				{
					var dia = application.getServerTimeStamp().getDate() - paciente_fecha_naci.getDate()
				    if (dia > 0)
				    {
				    	anios = anios - 1;
				    }
			    }
			}

			calc_edad = anios
		}
		
		//databaseManager.saveData()
		elements.btnBorrar.visible = true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E6B76E58-A8C6-4AA2-926D-2B0EAC6A6B3C"}
 */
function onActionGrabar(event) 
{
	if(vl_abm == 1)
	{
		if(paciente_nro_ficha==null | paciente_to_paciente.paciente_nro_ficha==0)
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El número de ficha no puede quedar vacío.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
			return
		}
		
		if(paciente_doc_nro==null | paciente_doc_nro==0)
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El número de documento no puede quedar vacío.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
			return
		}
		
		if(paciente_nombre==null | paciente_nombre.length==0)
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El nombre del paciente no puede quedar vacío.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
			return
		}
		
		if(paciente_fecha_naci==null)
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','La fecha de nacimiento no puede quedar vacía.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
			return
		}
		
		if(paciente_sexo==null)
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El sexo del paciente no puede quedar vacío.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
			return
		}
		
		if(!onDataChangeNroFicha(null,paciente_nro_ficha,event))
		{
			return
		}

		emp_id = scopes.globals.mx_empresa_id
	}
	
	databaseManager.saveData()
	forms.cli_pacientes.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D619899-B0CD-4BC4-A7E7-DC941852174A"}
 */
function onActionBorrarMedico(event) 
{
	var apellido = paciente_apellido
	var nombre   = paciente_nombre
	
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el paciente: '+ apellido+', '+nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"02D5A21B-6F5C-4032-9671-FF7820B85D63"}
 */
function Borrar()
{
	controller.deleteRecord()
	forms.cli_pacientes.controller.show()
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
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4C84CB00-7EDE-4B92-B67C-8AB6650D32BC"}
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

