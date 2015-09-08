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
	if (vl_abm == 1)
	{
		controller.newRecord(false)
		elements.btnBorrar.visible 				= false
	}
	else
	{
		databaseManager.saveData()
		elements.btnBorrar.visible 				= true
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
		if (paciente_nombre == null)
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Datos Incompletos','Debe completar el nombre del Paciente.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
			return
		}
//		if (paciente_apellido == null)
//		{
//			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Datos Incompletos','Debe completar el apellido del Paciente.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
//			return
//		}

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
