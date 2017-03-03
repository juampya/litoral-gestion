/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7D1C2FD4-9383-432F-A0E4-7F27F599758E"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"99BE4065-E4EF-4A4C-9EB8-BA756488312C"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C384EA39-9E60-489A-A9FD-B5C97718C4E1"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_perfiles_profesionales_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_perfiles_profesionales_abm.vl_nuevo = 1
	forms.sm_frm_perfiles_profesionales_abm.vl_titulo = "Nuevo"
	forms.sm_frm_perfiles_profesionales_abm.controller.loadRecords(perfil_id)
	
	var win = application.createWindow("perfil", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_perfiles_profesionales_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"778147E5-D641-4167-8621-7C2F1DEA5DAC"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_perfiles_profesionales_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_perfiles_profesionales_abm.vl_nuevo = 0
	forms.sm_frm_perfiles_profesionales_abm.vl_titulo = "Modifica"
	forms.sm_frm_perfiles_profesionales_abm.controller.loadRecords(perfil_id)
	
	var win = application.createWindow("perfil", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_perfiles_profesionales_abm);	
}
