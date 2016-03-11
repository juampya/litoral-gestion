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
	forms.cli_nomencladores_items_abm.vl_frm_anterior = controller.getName()
	forms.cli_nomencladores_items_abm.vl_nuevo = 1
	forms.cli_nomencladores_items_abm.vl_titulo = "Nuevo"
	forms.cli_nomencladores_items_abm.vl_nomen_id = forms.cli_nomencladores_abm.nomen_id		
	
	var win = application.createWindow("nomenclador_items", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_nomencladores_items_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"18528F0E-8BBE-49E5-9021-73B18F72D6D3"}
 */
function onActionDetalle(event) 
{
	forms.cli_nomencladores_items_abm.vl_frm_anterior = controller.getName()
	forms.cli_nomencladores_items_abm.vl_nuevo = 0
	forms.cli_nomencladores_items_abm.vl_titulo = "Modifica"
	forms.cli_nomencladores_items_abm.controller.loadRecords(nomen_item_id)
	
	var win = application.createWindow("nomenclador_items", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_nomencladores_items_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FDFDADF1-BA08-480F-8B07-A1E1676CEB59"}
 */
function onActionBorrar(event) 
{
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar este registro?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"3B9C5B1F-21F4-4105-B70C-76E6F1CAAB98"}
 */
function Borrar()
{
	controller.deleteRecord()
}