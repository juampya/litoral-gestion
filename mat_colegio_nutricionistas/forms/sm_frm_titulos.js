/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AD2ED91A-CAC2-45E8-9DAF-F99499B171E4"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B655101A-6AF5-4300-9DC1-E9CCB7B3CD8C"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"F58F5AB9-AC27-458C-98D5-8FF5C7F495A9"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_titulos_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_titulos_abm.vl_nuevo = 1
	forms.sm_frm_titulos_abm.vl_titulo = "Nuevo"
	forms.sm_frm_titulos_abm.controller.loadRecords(titulo_id)
	
	var win = application.createWindow("titulos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_titulos_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"9627661A-EF91-4D32-B53C-612B6F450C57"}
 */
function onActionRefrescar(event) 
{
	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7283643F-6926-4219-9358-DA2392D30F0E"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_titulos_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_titulos_abm.vl_nuevo = 0
	forms.sm_frm_titulos_abm.vl_titulo = "Modifica"
	forms.sm_frm_titulos_abm.controller.loadRecords(titulo_id)
	
	var win = application.createWindow("titulos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_titulos_abm);	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98F5866B-AA88-4FBA-A698-D6D759C33BA6"}
 */
function onActionCopiar(event) 
{
	forms.sm_frm_universidades_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_universidades_abm.vl_nuevo = 2
	forms.sm_frm_universidades_abm.controller.show() 
}
