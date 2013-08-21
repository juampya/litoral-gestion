/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B0ABF64C-516A-466E-9489-995DE37FEACE",variableType:4}
 */
var vl_abm = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BF45060D-5FB6-4942-B45B-B7D3CA705AF7"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.cli_empresas.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6AC445CA-C0DE-4B7F-AED1-F5AF3CE926C4"}
 */
function onActionBorrar(event) {
	var empresa = emp_nombre
	var PressedButton = plugins.dialogs.showQuestionDialog( 'Borrar Registro','¿Está seguro de eliminar la empresa: '+ empresa +'?',  'Si',  'No')
	if (PressedButton  == 'Si') {
		Borrar()
	}
	
}

/**
 * @properties={typeid:24,uuid:"04E44997-A9EC-4D5D-9711-18FCE5A1F650"}
 */
function Borrar(){
	controller.deleteRecord()
	forms.cli_empresas.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C77846DA-30B4-49A9-A35D-34CA766BC7D1"}
 */
function onActionGrabar(event) {
	if (vl_abm == 1)
	{
		if (emp_nombre == null)
		{
			plugins.dialogs.showInfoDialog('Datos Incompletos','Complete el nombre de la empresa','Aceptar')
			elements.emp_nombre.requestFocus(true)
			return
		}
	}
	
	databaseManager.saveData()
	forms.cli_empresas.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"15DB249B-A5AE-4694-922E-5947D3FC2C95"}
 */
function onShow(firstShow, event) {
	if (vl_abm == 1)
	{
		controller.newRecord()
		elements.btnBorrar.visible = false
		elements.btnDatos.visible = false
	}else
	{
		elements.btnBorrar.visible = true
		elements.btnDatos.visible = true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"56C4D8F3-51FE-44BE-9825-0A27350138C7"}
 */
function onActionAbrirWeb(event) {
	if(emp_www) 
	{
		var url = emp_www

		//not empty - check for http
		if(url.indexOf('http://') < 0) url = 'http://' + url

		application.showURL( url, '_blank')
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F0E9A37F-1D9E-4948-844B-ABB862F80114"}
 */
function onActionAuditoria(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
    win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
    win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
    win.resizable = false
    win.title= 'Datos de Auditoría';
    win.show(forms.cli_empresas_datos);
}
