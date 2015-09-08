/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"129BC284-C7C5-47B1-B8FD-3D5371B4FDB4",variableType:4}
 */
var cerrar = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"55D68B7E-60F2-4685-A7ED-4ABB4450051C",variableType:4}
 */
var vl_abm = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"37CAA452-4318-4F5E-A5E6-FA921AE0831F"}
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
 * @properties={typeid:24,uuid:"0DBA9E7E-8CFB-4D9B-8493-EB214C4300B8"}
 */
function onActionGrabar(event) {
	if (vl_abm == 1)
	{
		if (docu_codigo == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Complete el código')
			elements.docu_codigo.requestFocus(true)
			return
		}
		
		if (docu_descripcion == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Debe completar el documento')
			elements.docu_descripcion.requestFocus(true)
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
 * @properties={typeid:24,uuid:"A220D52E-6A9D-4DCE-B305-BDA3390ACCE9"}
 */
function onActionBorrarDocumento(event) {
	var documento = docu_descripcion
	var cod = docu_codigo
	var PressedButton = plugins.dialogs.showQuestionDialog( 'Borrar Registro','¿Está seguro de eliminar el documento: '+ cod +' - '+ documento+'?',  'Si',  'No')
	if (PressedButton  == 'Si') 
	{
		
		Borrar()
	}
	
}

/**
 * @properties={typeid:24,uuid:"BBA332D5-AD09-4AE6-9B4E-1C588A48A28E"}
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
 * @properties={typeid:24,uuid:"F1C4D523-81ED-4523-8034-21BFBEF9EEB5"}
 */
function onShow(firstShow, event) {
	if (vl_abm == 1)
	{
		controller.newRecord()
		elements.btnBorrar.visible = false
		elements.docu_id.visible = false
		elements.docu_id_label.visible = false
	}else
	{
		elements.btnBorrar.visible = true
		elements.docu_id.visible = true
		elements.docu_id_label.visible = true
	}
}
