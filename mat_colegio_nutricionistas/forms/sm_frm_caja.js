/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A7DB81D0-99DA-4F4E-B57A-B8489BA60CCE"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"523ADDB4-A1A6-4CA2-ABDD-6CF74DD8D22B"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"6864012A-0ABE-4B42-AC2D-C7667DB8A50A"}
 */
function onActionNuevoIngreso(event) 
{
	forms.sm_frm_caja_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_caja_abm.vl_nuevo = 1
	forms.sm_frm_caja_abm.vl_titulo = "Ingreso"
	
	var win = application.createWindow("caja", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_caja_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"DDD62059-0B2D-4E91-8FC8-691DF359E1B5"}
 */
function onActionRefrescar(event) 
{
	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"8430984F-35CB-4AB1-9EF5-377F3229B1F1"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_caja_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_caja_abm.vl_nuevo = 0
	forms.sm_frm_caja_abm.vl_titulo = "Modifica"
	forms.sm_frm_caja_abm.controller.loadRecords(caja_id)
	
	var win = application.createWindow("caja", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_caja_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"4C590D8A-870F-4569-8A65-5BE7EE23A06C"}
 */
function onActionNuevoEgreso(event) 
{
	forms.sm_frm_caja_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_caja_abm.vl_nuevo = 2
	
	var win = application.createWindow("caja", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_caja_abm);	
}
