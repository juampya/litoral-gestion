/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C00B7333-AB3B-484C-B315-3AB938FD4602"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"07141AC6-8D59-4D37-9F98-E32FC5905EDD"}
 */
function onActionNuevo(event) 
{
	forms.cli_nomencladores_abm.vl_frm_anterior = controller.getName()
	forms.cli_nomencladores_abm.vl_nuevo = 1
	forms.cli_nomencladores_abm.vl_titulo = "Nueva"
	//forms.cli_nomencladores_abm.controller.loadRecords(nomen_id)
	
	var win = application.createWindow("nomenclador", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_nomencladores_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7D4BA6AC-E43A-408A-A593-529ADF79CC10"}
 */
function onActionDetalle(event) 
{
	forms.cli_nomencladores_abm.vl_frm_anterior = controller.getName()
	forms.cli_nomencladores_abm.vl_nuevo = 0
	forms.cli_nomencladores_abm.vl_titulo = "Modifica"
	forms.cli_nomencladores_abm.controller.loadRecords(nomen_id)
	
	var win = application.createWindow("nomenclador", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_nomencladores_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C091B2FC-BB11-4011-BDDA-20FCC37A8AE2"}
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
 * @properties={typeid:24,uuid:"11C557F5-70F2-4E3B-8F0E-98BEC16ACAEF"}
 */
function onActionBorrar(event) 
{
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar este registro?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"34E16CEB-E27F-4D9A-B471-4E5FB80C431D"}
 */
function Borrar()
{
	controller.deleteRecord()
}