/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB6F378D-EC02-4C68-86B6-85BB42CA2657",variableType:4}
 */
var vl_abm = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E72DB29E-415F-4E52-8C63-CE6EEE58C059"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.cli_localidades.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"059D327A-5DE7-4B96-ACB5-69580D7FDF83"}
 */
function onActionGrabarLocalidad(event) {
	if (vl_abm == 1)
	{
		if (localidad_nombre == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Complete el nombre de la localidad','Aceptar')
			
			elements.localidad_nombre.requestFocus(true)
			return
		}
		if (localidad_cod_postal == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Complete el código postal','Aceptar')
		
			elements.localidad_cod_postal.requestFocus(true)
			return
		}
	}
	
	databaseManager.saveData()
	forms.cli_localidades.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D3CE52C9-5915-4A98-8CA0-EA9BA57DC1FD"}
 */
function onActionBorrarLocalidad(event) {
	var localidad = localidad_nombre
	var codigo = localidad_cod_postal
	var PressedButton = plugins.dialogs.showQuestionDialog( 'Borrar Registro', '¿Está seguro de eliminar la localidad: '+ codigo +' - '+localidad +'?',  'Si',  'No')
	if (PressedButton  == 'Si') {	
		Borrar()
	}
}

/**
 * @properties={typeid:24,uuid:"CC7E129A-5DB8-44C4-B29E-F22367C3356B"}
 */
function Borrar(){
	controller.deleteRecord()
	forms.cli_localidades.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE2E3E2E-B60E-4DA9-BCE0-33D85A10213C"}
 */
function onShow(firstShow, event) {
	if (vl_abm == 1)
	{
		controller.newRecord()
		elements.btnBorrar.visible = false
		elements.localidad_id.visible = false
		elements.localidad_id_label.visible = false
	}else
	{
		elements.btnBorrar.visible = true
		elements.localidad_id.visible = true
		elements.localidad_id_label.visible = true
	}
}
