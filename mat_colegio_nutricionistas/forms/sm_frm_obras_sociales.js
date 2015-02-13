/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8AA157EB-7D86-4476-81CA-C9A66E28A465"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"EC0E387A-ACD3-4C1C-A893-8D3B7A1D1237"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"00C18385-D21F-4FB2-AFE9-54B2153A1AF0"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_obras_sociales_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_obras_sociales_abm.vl_nuevo = 1
	forms.sm_frm_obras_sociales_abm.vl_titulo = "Nuevo"
	forms.sm_frm_obras_sociales_abm.controller.loadRecords(obsoc_id)
	
	var win = application.createWindow("obra_social", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_obras_sociales_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"65C43D2A-BC37-45EC-8763-CD42C5E82C2C"}
 */
function onActionRefrescar(event) 
{
	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"F4DF0399-9AEE-45BF-9D23-5D82D623D94B"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_obras_sociales_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_obras_sociales_abm.vl_nuevo = 0
	forms.sm_frm_obras_sociales_abm.vl_titulo = "Modifica"
	forms.sm_frm_obras_sociales_abm.controller.loadRecords(obsoc_id)
	
	var win = application.createWindow("obra_social", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_obras_sociales_abm);	
}
