/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"74970A5B-47BE-494D-9876-FB90248B039D"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"79AC7C5F-D48E-440B-B44A-E75CA94AC6E0"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"24375434-6047-4A57-86B3-763A58055542"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_localidades_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_localidades_abm.vl_nuevo = 1
	forms.sm_frm_localidades_abm.vl_titulo = "Nuevo"
	forms.sm_frm_localidades_abm.controller.loadRecords(localidad_id)
	
	var win = application.createWindow("localidades", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_localidades_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"654A6B9F-65F5-457F-B779-52B9750DD02E"}
 */
function onActionRefrescar(event) 
{
	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"232DBE5D-390E-4D1A-B904-76E1D1F5366A"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_localidades_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_localidades_abm.vl_nuevo = 0
	forms.sm_frm_localidades_abm.vl_titulo = "Modifica"
	forms.sm_frm_localidades_abm.controller.loadRecords(localidad_id)
	
	var win = application.createWindow("localidades", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_localidades_abm);	
}