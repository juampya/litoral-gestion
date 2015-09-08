/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A761F6BD-0CF9-4F43-942D-23552E21D1B3"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3362CEEA-5D00-45D7-93E3-4DCA4CB6F526"}
 */
function onActionNuevo(event) 
{
	forms.cli_galenos_abm.vl_frm_anterior = controller.getName()
	forms.cli_galenos_abm.vl_nuevo = 1
	forms.cli_galenos_abm.vl_titulo = "Nuevo"
	forms.cli_galenos_abm.controller.loadRecords(galeno_id)
	
	var win = application.createWindow("galenos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_galenos_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"22528B3D-311D-406A-86DC-9CB745DD7E04"}
 */
function onActionDetalle(event) 
{
	forms.cli_galenos_abm.vl_frm_anterior = controller.getName()
	forms.cli_galenos_abm.vl_nuevo = 0
	forms.cli_galenos_abm.vl_titulo = "Modifica"
	forms.cli_galenos_abm.controller.loadRecords(galeno_id)
	
	var win = application.createWindow("galenos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_galenos_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"ADBD8832-612B-4DD7-8EBA-6030262F7D65"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms["clinica_inicio_clinica"].controller.show()
}
