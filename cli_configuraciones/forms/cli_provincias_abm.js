/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AF782205-2164-4EBB-BA24-85052D139CC8",variableType:4}
 */
var cerrar = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DB9B8D23-4239-42AF-B7AD-7DD6B5066512",variableType:4}
 */
var vl_abm = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E411B3C1-0A55-4AA4-8E39-D6DE6DA316D7"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB4AA486-87BC-4064-A637-63546BF5C2DE"}
 */
function onActionGrabarProvincia(event) {
	if (vl_abm == 1)
	{
		if (provincia_nombre == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Complete el nombre de la Provincia','Aceptar')
			
			elements.provincia_nombre.requestFocus(true)
			return
		}
		if (pais_id == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Seleccione el Pais','Aceptar')
			
			elements.pais_id.requestFocus(true)
			return
		}
	}
	
	databaseManager.saveData()
	application.getWindow().hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BD31AD09-183C-4FC1-B1CF-53268A2CA4ED"}
 */
function onActionBorrarProvincia(event) {
	var provincia = provincia_nombre
	var PressedButton = plugins.dialogs.showQuestionDialog( 'Borrar Registro','¿Está seguro de eliminar la provincia: '+ provincia +'?',  'Si',  'No')
	if (PressedButton  == 'Si') 
	{
		Borrar()
	}

}

/**
 * @properties={typeid:24,uuid:"ADB45CD9-C68E-4984-A178-C441FE4C9F97"}
 */
function Borrar(){
	controller.deleteRecord()
	application.getWindow().hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"41A8F2A4-07CD-4CEE-9E7D-401CB1E5396D"}
 */
function onShow(firstShow, event) {
	if (vl_abm == 1)
	{
		controller.newRecord()
		elements.btnBorrar.visible = false
		elements.provincia_id.visible = false
		elements.provincia_id_label.visible = false
	}else
	{
		elements.btnBorrar.visible = true
		elements.provincia_id.visible = true
		elements.provincia_id_label.visible = true
	}
}
