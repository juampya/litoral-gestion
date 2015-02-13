/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E89C5366-221C-4ED0-831D-35A342DC35CE"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1C889258-FA92-4675-A8DB-1D1840148223"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C18E7C70-A7F0-4E80-866D-7564861E55B9"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_departamentos_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_departamentos_abm.vl_nuevo = 1
	forms.sm_frm_departamentos_abm.vl_titulo = "Nuevo"
	forms.sm_frm_departamentos_abm.controller.loadRecords(depar_id)
	
	var win = application.createWindow("departamentos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_departamentos_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"AE41D71B-5FE5-4E4F-BB43-AF6BE68553EC"}
 */
function onActionRefrescar(event) 
{
	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C5B4D28C-15E8-4FB8-8093-6BAC1F303EDB"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_departamentos_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_departamentos_abm.vl_nuevo = 0
	forms.sm_frm_departamentos_abm.vl_titulo = "Modifica"
	forms.sm_frm_departamentos_abm.controller.loadRecords(depar_id)
	
	var win = application.createWindow("departamentos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_departamentos_abm);	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2721F055-A768-49E0-9905-47840A7983A1"}
 */
function onActionCopiar(event) 
{
	forms.sm_frm_departamentos_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_departamentos_abm.vl_nuevo = 2
	forms.sm_frm_departamentos_abm.controller.show() 
}
