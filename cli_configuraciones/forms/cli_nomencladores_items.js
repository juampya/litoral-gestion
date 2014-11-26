/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D20141B6-FF50-483B-91EB-40FB08B40A89"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C5E67FC1-9783-48DF-9037-22901423713F"}
 */
function onActionNuevo(event) 
{
	forms.cli_maestro_prestaciones_items_abm.vl_frm_anterior = controller.getName()
	forms.cli_maestro_prestaciones_items_abm.vl_nuevo = 1
	forms.cli_maestro_prestaciones_items_abm.vl_titulo = "Nuevo"
	forms.cli_maestro_prestaciones_items_abm.vl_mae_presta_id = forms.cli_maestro_prestaciones_abm.mae_presta_id		
	forms.cli_maestro_prestaciones_items_abm.controller.loadRecords(mae_item_id)
	
	var win = application.createWindow("prestacion_items", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_maestro_prestaciones_items_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"18528F0E-8BBE-49E5-9021-73B18F72D6D3"}
 */
function onActionDetalle(event) 
{
	forms.cli_maestro_prestaciones_items_abm.vl_frm_anterior = controller.getName()
	forms.cli_maestro_prestaciones_items_abm.vl_nuevo = 0
	forms.cli_maestro_prestaciones_items_abm.vl_titulo = "Modifica"
	forms.cli_maestro_prestaciones_items_abm.controller.loadRecords(mae_item_id)
	
	var win = application.createWindow("prestacion_items", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_maestro_prestaciones_items_abm);	
}
