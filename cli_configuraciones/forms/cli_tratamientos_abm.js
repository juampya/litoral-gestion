/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"300D99E6-06A4-48D7-AA7E-1BCD325BD491",variableType:4}
 */
var vl_abm = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3EE74CE6-4EDC-4B1A-9471-576B3A3D5EED"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.cli_tratamientos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"34EBECF1-C7C3-47E2-99DF-8DBAFE129AF8"}
 */
function onActionGrabar(event) {
	if (vl_abm == 1)
	{
		if (tratamieno_nombre == null)
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Datos Incompletos','Debe completar el nombre del tratamiento','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
			elements.tratamieno_nombre.requestFocus(true)
			return
		}
	}
	emp_id = scopes.globals.mx_empresa_id
	databaseManager.saveData()
	forms.cli_tratamientos.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"733DBC9F-F59A-4C84-9E90-E6B67194649D"}
 */
function onShow(firstShow, event) {
	if (vl_abm == 1)
	{
		controller.newRecord()
		elements.btnBorrar.visible = false
		elements.tratamiento_fec_crea.visible = false
		elements.tratamiento_fec_crea_label.visible = false
		elements.tratamiento_fec_modi.visible = false
		elements.tratamiento_fec_modi_label.visible = false
		elements.tratamiento_id.visible = false
		elements.tratamiento_id_label.visible = false
		elements.tratamiento_usu_crea.visible = false
		elements.tratamiento_usu_crea_label.visible = false
		elements.tratamiento_usu_modi.visible = false
		elements.tratamiento_usu_modi_label.visible = false
		elements.lbl_grab_final.visible = false
		elements.lbl_grab_inicial.visible = false
		
	}else
	{
		elements.btnBorrar.visible = true
		elements.tratamiento_fec_crea.visible = true
		elements.tratamiento_fec_crea_label.visible = true
		elements.tratamiento_fec_modi.visible = true
		elements.tratamiento_fec_modi_label.visible = true
		elements.tratamiento_id.visible = true
		elements.tratamiento_id_label.visible = true
		elements.tratamiento_usu_crea.visible = true
		elements.tratamiento_usu_crea_label.visible = true
		elements.tratamiento_usu_modi.visible = true
		elements.tratamiento_usu_modi_label.visible = true
		elements.lbl_grab_final.visible = true
		elements.lbl_grab_inicial.visible = true
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"5AD3A95C-26EC-45AC-8D06-36BE92D4E16C"}
 */
function onActionBorrarTratamiento(event) 
{
	var tratamiento = tratamieno_nombre
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el tratamiento: '+ tratamiento+'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"8AD855DD-E113-467A-BBE7-5797DB1BE112"}
 */
function Borrar()
{
	controller.deleteRecord()
	forms.cli_tratamientos.controller.show()
}
