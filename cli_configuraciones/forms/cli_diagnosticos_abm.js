/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"40F3538E-6ED6-4F0C-8430-74FD1C2B4574",variableType:4}
 */
var vl_abm = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"99CA12A1-28B3-46EC-8334-703EAA41953E"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.cli_diagnosticos.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A0B02AE-BF00-44A9-B3F1-571BE8B286C6"}
 */
function onShow(firstShow, event) {
	if(vl_abm == 1)
	{
		controller.newRecord()
		elements.btnBorrar.visible = false
		elements.diagnostico_fec_crea.visible = false
		elements.diagnostico_fec_crea_label.visible = false
		elements.diagnostico_fec_modi.visible = false
		elements.diagnostico_fec_modi_label.visible = false
		elements.diagnostico_id.visible = false
		elements.diagnostico_id_label.visible = false
		elements.diagnostico_usu_crea.visible = false
		elements.diagnostico_usu_crea_label.visible = false
		elements.diagnostico_usu_modi.visible = false
		elements.diagnostico_usu_modi_label.visible = false
		elements.lbl_grab_final.visible = false
		elements.lbl_grab_inicial.visible = false
	}else{
		elements.btnBorrar.visible = true
		elements.diagnostico_fec_crea.visible = true
		elements.diagnostico_fec_crea_label.visible = true
		elements.diagnostico_fec_modi.visible = true
		elements.diagnostico_fec_modi_label.visible = true
		elements.diagnostico_id.visible = true
		elements.diagnostico_id_label.visible= true
		elements.diagnostico_usu_crea.visible = true
		elements.diagnostico_usu_crea_label.visible = true
		elements.diagnostico_usu_modi.visible = true
		elements.diagnostico_usu_modi_label.visible= true
		elements.lbl_grab_final.visible = true
		elements.lbl_grab_inicial.visible = true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"385C5CE0-9594-477D-988F-E24D3CA2A8BC"}
 */
function onActionGrabar(event) {
	if (vl_abm == 1)
	{
		if (diagnostico_nombre == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Debe completar el nombre del Diagnóstico','Aceptar')
			
			elements.diagnostico_nombre.requestFocus(true)
			return
		}
	}
	
	databaseManager.saveData()
	forms.cli_diagnosticos.controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"A42E4920-F234-4AB7-BEF4-56FBEE95740C"}
 */
function onActionBorrarDiagnostico(event) {
	var nombre = diagnostico_nombre
	
	
	var PressedButton = plugins.dialogs.showQuestionDialog( 'Borrar Registro','¿Está seguro de eliminar el diagnóstico: '+ nombre +'?',  'Si',  'No')
	if (PressedButton  == 'Si') {
		Borrar()
	}
}

/**
 * @properties={typeid:24,uuid:"5C202447-80BB-4553-BE30-8AF2B4CE9441"}
 */
function Borrar(){
	controller.deleteRecord()
	forms.cli_diagnosticos.controller.show()
}
