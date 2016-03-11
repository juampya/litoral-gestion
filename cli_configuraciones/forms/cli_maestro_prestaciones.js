/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"70FEDD97-F3EA-46EF-B817-DBD00BF4CE42"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"68B2E108-4C0E-4BEA-B065-222280475D71"}
 */
function onActionNuevo(event) 
{
	forms.cli_maestro_prestaciones_abm.vl_frm_anterior = controller.getName()
	forms.cli_maestro_prestaciones_abm.vl_nuevo = 1
	forms.cli_maestro_prestaciones_abm.vl_titulo = "Nueva"
	//forms.cli_maestro_prestaciones_abm.controller.loadRecords(mae_presta_id)
	
	var win = application.createWindow("prestacion", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_maestro_prestaciones_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"589E4D18-C2E8-4A7D-BDBD-968A43F4DF40"}
 */
function onActionDetalle(event) 
{
	forms.cli_maestro_prestaciones_abm.vl_frm_anterior = controller.getName()
	forms.cli_maestro_prestaciones_abm.vl_nuevo = 0
	forms.cli_maestro_prestaciones_abm.vl_titulo = "Modifica"
	forms.cli_maestro_prestaciones_abm.controller.loadRecords(mae_presta_id)
	
	var win = application.createWindow("prestacion", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_maestro_prestaciones_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B2F31BB0-5547-4D7C-938B-3D1F490D37ED"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms["clinica_inicio_clinica"].controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"02555E40-A446-4F6E-92A5-2C489BB30F96"}
 */
function onActionBorrar(event) 
{
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar este registro?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"ECB1A3C9-30C1-4501-A6F6-414133747844"}
 */
function Borrar()
{
	controller.deleteRecord()
}