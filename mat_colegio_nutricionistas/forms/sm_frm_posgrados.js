/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC7CE10B-8C5C-474F-BBC7-06B4E6C546EC"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"AE0AF66B-7104-4590-9AFC-2DCC5BC9BB71"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"47D4430F-951D-4682-9127-AA3103894555"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_posgrados_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_posgrados_abm.vl_nuevo = 1
	forms.sm_frm_posgrados_abm.vl_titulo = "Nuevo"
	forms.sm_frm_posgrados_abm.controller.loadRecords(posgrado_id)
	
	var win = application.createWindow("posgrados", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_posgrados_abm);	
}


/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"95EF3F3C-28A9-4021-BB72-10F6DFF0B078"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_posgrados_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_posgrados_abm.vl_nuevo = 0
	forms.sm_frm_posgrados_abm.vl_titulo = "Modifica"
	forms.sm_frm_posgrados_abm.controller.loadRecords(posgrado_id)
	
	var win = application.createWindow("posgrados", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_posgrados_abm);	
}