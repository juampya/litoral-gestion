/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B4E767D6-25D7-435B-9A88-037CF2C6EDE1"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"6F209F33-93B6-44C4-93A8-C8A7BEA540D8"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C5078FFC-CBAB-46D9-A0E3-6909D7AB689E"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_convenios_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_convenios_abm.vl_nuevo = 1
	forms.sm_frm_convenios_abm.vl_titulo = "Nuevo"
	//forms.sm_frm_perfiles_profesionales_abm.controller.loadRecords(perfil_id)
	
	var win = application.createWindow("convenio", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_convenios_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"690A3DCF-2E44-49A3-BA3C-137384BE183F"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_convenios_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_convenios_abm.vl_nuevo = 0
	forms.sm_frm_convenios_abm.vl_titulo = "Modifica"
	forms.sm_frm_convenios_abm.controller.loadRecords(convenio_id)
	
	var win = application.createWindow("convenio", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_convenios_abm);	
}
