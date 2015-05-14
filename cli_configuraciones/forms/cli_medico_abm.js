/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1193C3DF-B643-4A46-88EA-D19E0A5E93D3",variableType:4}
 */
var vl_abm = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6BC1CBF4-43FC-46A9-85CA-69EF1AC6EB5E"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.cli_medicos.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D5A2AA5-E0C6-43F9-A345-33676F11A9FB"}
 */
function onShow(firstShow, event) {
	if (vl_abm == 1)
	{
		controller.newRecord()
		elements.btnBorrar.visible 				= false
		elements.medico_fec_crea.visible 		= false
		elements.medico_fec_crea_label.visible 	= false
		elements.medico_fec_modi.visible 		= false
		elements.medico_fec_modi_label.visible 	= false
		elements.medico_id.visible 				= false
		elements.medico_id_label.visible 		= false
		elements.medico_usu_crea.visible 		= false
		elements.medico_usu_crea_label.visible 	= false
		elements.medico_usu_modi.visible		= false
		elements.medico_usu_modi_label.visible 	= false
		elements.lbl_grab_final.visible 		= false
		elements.lbl_grab_inicial.visible 		= false
	}else
	{
		elements.btnBorrar.visible 				= true
		elements.medico_fec_crea.visible 		= true
		elements.medico_fec_crea_label.visible 	= true
		elements.medico_fec_modi.visible 		= true
		elements.medico_fec_modi_label.visible 	= true
		elements.medico_id.visible 				= true
		elements.medico_id_label.visible 		= true
		elements.medico_usu_crea.visible 		= true
		elements.medico_usu_crea_label.visible 	= true
		elements.medico_usu_modi.visible 		= true
		elements.medico_usu_modi_label.visible 	= true
		elements.lbl_grab_final.visible 		= true
		elements.lbl_grab_inicial.visible 		= true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"618BADDC-A1D2-4472-A580-289A87F2EDEE"}
 */
function onActionGrabarMedico(event) {
	if(vl_abm == 1)
	{
		if (medico_nombre == null)
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Datos Incompletos','Debe completar el nombre del Medico.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
			//plugins.dialogs.showInfoDialog('Datos Incompletos','Debe completar el nombre del Medico','Aceptar')
			elements.medico_nombre.requestFocus(true)
			return
		}
		if (medico_apellido == null)
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Datos Incompletos','Debe completar el apellido del Medico.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
			//plugins.dialogs.showInfoDialog('Datos Incompletos','Debe completar el apellido del Medico','Aceptar')
			elements.medico_apellido.requestFocus(true)
			return
		}
		emp_id = 1
	}
	
	databaseManager.saveData()
	forms.cli_medicos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88E23E7E-3E68-483A-977E-BB7EF85D2AC4"}
 */
function onActionBorrarMedico(event) 
{
	var apellido = medico_apellido
	var nombre   = medico_nombre
	//var PressedButton = plugins.dialogs.showQuestionDialog( 'Borrar Registro','¿Está seguro de eliminar el medico: '+ apellido+', '+nombre +'?',  'Si',  'No')
	
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el medico: '+ apellido+', '+nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
	
	//if (PressedButton  == 'Si') {
	//	Borrar()
	//}
}

/**
 * @properties={typeid:24,uuid:"8C887C13-EC44-4ED7-826B-FB07A449181D"}
 */
function Borrar(){
	controller.deleteRecord()
	forms.cli_medicos.controller.show()
}
