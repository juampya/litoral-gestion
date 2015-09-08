/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"19A651A7-F506-40D0-845F-FAE4DBF99C0B",variableType:4}
 */
var vl_abm = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"768210AA-12C5-4839-909E-642A45B6D3B9"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.cli_paises.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F357D13-2481-4FC3-836C-835E22785B88"}
 */
function onActionBorrarPais(event) {
	var pais = pais_nombre
	
	var PressedButton = plugins.dialogs.showQuestionDialog( 'Borrar Registro','¿Está seguro de eliminar el pais: '+ pais +'?',  'Si',  'No')
	if (PressedButton  == 'Si') {
		controller.deleteRecord()		
		forms.cli_paises.controller.show()
	}

}

/**
 * @properties={typeid:24,uuid:"F60F0A76-5F55-4BD6-8A63-B47581E66C70"}
 */
function Borrar(){
	controller.deleteRecord()
	forms.cli_paises.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"00A60FD9-74BE-431E-A4E8-EDB84393E5B1"}
 */
function onShow(firstShow, event) {
	if (vl_abm == 1)
	{
		controller.newRecord()
		elements.btnBorrar.visible = false
		elements.pais_id.visible = false
		elements.pais_id_label.visible = false
		elements.tabs.visible = false
	}else
	{
		elements.btnBorrar.visible = true
		elements.pais_id.visible = true
		elements.pais_id_label.visible = true
		elements.tabs.visible = true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6F75678F-2E8C-4353-A0B2-36B5E46B2388"}
 */
function onActionGrabarPais(event) {
	if (vl_abm == 1)
	{
		if (pais_nombre == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Complete el nombre del Pais','Aceptar')
			
			elements.pais_nombre.requestFocus(true)
			return
		}
		if (pais_cuit == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Complete le CUIT','Aceptar')
			
			elements.pais_cuit.requestFocus(true)
			return
		}
	}
	
	databaseManager.saveData()
	forms.cli_paises.controller.show()
}
