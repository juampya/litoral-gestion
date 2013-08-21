/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"99E9FE68-BB71-460B-8D35-CDB130481BAD",variableType:4}
 */
var vl_abm = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"73270251-D561-4EC5-BD37-1FA7A2ABD475"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.cli_sucursales.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5D199C5D-A32F-492B-9A4D-9C5378F6D4F5"}
 */
function onActionGrabarSucursal(event) {
	if (vl_abm == 1)
	{
		if (suc_nombre == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Complete el nombre de la Sucursal','Aceptar')
			
			elements.suc_nombre.requestFocus(true)
			return
		}
		if (suc_domicilio == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Complete la dirección','Aceptar')
		
			elements.suc_domicilio.requestFocus(true)
			return
		}
	}
	
	databaseManager.saveData()
	forms.cli_sucursales.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98214FE0-FD46-44E8-AD42-25D730586D30"}
 */
function onActionBorrarSucursal(event) {
	var sucursal = suc_nombre
	var PressedButton = plugins.dialogs.showQuestionDialog( 'Borrar Registro','¿Está seguro de eliminar la sucursal: '+ sucursal +'?',  'Si',  'No')
	if (PressedButton  == 'Si') {
		Borrar()
	}
	
}

/**
 * @properties={typeid:24,uuid:"D91E81D4-BD28-4040-BB2B-0A5C9BD37927"}
 */
function Borrar(){
	controller.deleteRecord()
	forms.cli_sucursales.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"22FFA630-FC45-4B60-9FB5-057C545947C0"}
 */
function onShow(firstShow, event) {
	if (vl_abm == 1)
	{
		controller.newRecord()
		elements.btnBorrar.visible = false
		elements.suc_fec_crea.visible = false
		elements.suc_fec_crea_label.visible = false
		elements.suc_fec_modi.visible = false
		elements.suc_fec_modi_label.visible = false
		elements.suc_id.visible = false
		elements.suc_id_label.visible = false
		elements.suc_usu_crea.visible = false
		elements.suc_usu_crea_label.visible = false
		elements.suc_usu_modi.visible = false
		elements.suc_usu_modi_label.visible = false
		elements.lbl_grab_final.visible = false
		elements.lbl_grab_inicial.visible = false
	}else
	{
		elements.btnBorrar.visible = true
		elements.suc_fec_crea.visible = true
		elements.suc_fec_crea_label.visible = true
		elements.suc_fec_modi.visible = true
		elements.suc_fec_modi_label.visible = true
		elements.suc_id.visible = true
		elements.suc_id_label.visible = true
		elements.suc_usu_crea.visible = true
		elements.suc_usu_crea_label.visible = true
		elements.suc_usu_modi.visible = true
		elements.suc_usu_modi_label.visible = true
		elements.lbl_grab_final.visible = true
		elements.lbl_grab_inicial.visible = true
	}
}
