/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EAAC3A09-CD95-45AF-A70C-74D546F560B6"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B0419F66-EB0A-4EC2-9718-8A2EA024C5D1"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"A9F75ACF-BBD9-4604-81CD-133293BBA5CB"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_solicitudes_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_solicitudes_abm.vl_nuevo = 1
	forms.sm_frm_solicitudes_abm.vl_titulo = "Nuevo"
	forms.sm_frm_solicitudes_abm.controller.loadRecords(sol_id)
	
	var win = application.createWindow("solicitudes", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_solicitudes_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"EE73F4FA-DC3B-458C-99B5-8B4DCA210CBA"}
 */
function onActionRefrescar(event) 
{
	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"9DBC46E8-057D-4681-8913-348DFAA39258"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_solicitudes_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_solicitudes_abm.vl_nuevo = 0
	forms.sm_frm_solicitudes_abm.vl_titulo = "Modifica"
	forms.sm_frm_solicitudes_abm.controller.loadRecords(sol_id)
	
	var win = application.createWindow("solicitudes", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_solicitudes_abm);	
}