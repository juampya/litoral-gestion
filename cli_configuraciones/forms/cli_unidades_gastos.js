/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"836F1761-A2CD-4680-91D2-9D8BB2A7EAA6"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C0782B4F-908F-4D3B-80B4-E28767E7F849"}
 */
function onActionNuevo(event) 
{
	forms.cli_unidades_gastos_abm.vl_frm_anterior = controller.getName()
	forms.cli_unidades_gastos_abm.vl_nuevo = 1
	forms.cli_unidades_gastos_abm.vl_titulo = "Nuevo"
	forms.cli_unidades_gastos_abm.controller.loadRecords(gasto_id)
	
	var win = application.createWindow("gastos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_unidades_gastos_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7C8B6DE5-D2A9-42B8-844A-20D868EB36A7"}
 */
function onActionDetalle(event) 
{
	forms.cli_unidades_gastos_abm.vl_frm_anterior = controller.getName()
	forms.cli_unidades_gastos_abm.vl_nuevo = 0
	forms.cli_unidades_gastos_abm.vl_titulo = "Modifica"
	forms.cli_unidades_gastos_abm.controller.loadRecords(gasto_id)
	
	var win = application.createWindow("gastos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_unidades_gastos_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E5484F17-E649-4746-B20E-BB157120BD69"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms["clinica_inicio_clinica"].controller.show()
}
