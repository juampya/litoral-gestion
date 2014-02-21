/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"021856D9-2CF1-4D82-9953-219AACF459D0"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B7F3808C-D695-498D-87B2-47EDE66E1CCD"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"027FB7A7-B897-464A-8192-8EF473019511"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_universidades_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_universidades_abm.vl_nuevo = 1
	forms.sm_frm_universidades_abm.vl_titulo = "Nueva"
	
	var win = application.createWindow("universidades", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_universidades_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"6FAB62BC-2BAC-47BF-AF43-33B772E8135A"}
 */
function onActionRefrescar(event) 
{
	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"0B5A794D-75DC-47C9-B6CE-139E7C628E79"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_universidades_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_universidades_abm.vl_nuevo = 0
	forms.sm_frm_universidades_abm.vl_titulo = "Modifica"
	forms.sm_frm_universidades_abm.controller.loadRecords(uni_id)
	
	var win = application.createWindow("universidades", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_universidades_abm);	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E53D4498-7D6F-447F-A9EF-E11AB2077B53"}
 */
function onActionCopiar(event) 
{
	forms.sm_frm_universidades_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_universidades_abm.vl_nuevo = 2
	
	var win = application.createWindow("universidades", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_universidades_abm);	
}
