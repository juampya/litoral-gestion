/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6BB66A19-F823-4AA2-A89E-2B397AF87810"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"E0B3B41E-D217-452E-BBA4-4AFE48F340EE"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"87E24ADA-A142-4A6E-AC87-7837453F7B11"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_consejo_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_consejo_abm.vl_nuevo = 1
	forms.sm_frm_consejo_abm.vl_titulo = "Nuevo"
	//forms.sm_frm_consejo_abm.controller.loadRecords(consejo_id)
	
	var win = application.createWindow("consejo", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_consejo_abm);	
}


/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"BB01961B-FEC9-472F-BAB5-F56E9E188E57"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_consejo_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_consejo_abm.vl_nuevo = 0
	forms.sm_frm_consejo_abm.vl_titulo = "Modifica"
	forms.sm_frm_consejo_abm.controller.loadRecords(consejo_id)
	
	var win = application.createWindow("consejo", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_consejo_abm);	
}