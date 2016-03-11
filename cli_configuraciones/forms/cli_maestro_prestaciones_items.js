/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BB6EF358-E3FF-4609-919C-FC2369A39DCF"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4294531F-79B1-4D33-A359-7EC31998E115"}
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
 * @properties={typeid:24,uuid:"C6F416F8-843D-43EB-B04C-8D3EC8650C0C"}
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

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"26FEA10B-802F-4789-B81A-E3D77229936D"}
 */
function onActionBorrar(event) 
{
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar este registro?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"8ACE3EBF-8715-4834-84A9-83E0F4D5C122"}
 */
function Borrar()
{
	controller.deleteRecord()
}