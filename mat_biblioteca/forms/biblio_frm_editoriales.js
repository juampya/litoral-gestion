/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6F5EED7-4E2E-4287-B14B-A78F7A4DD955"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"82FC2289-16BF-4E2F-A9C0-9919748E422E"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7D2C8BB4-0623-4B12-891C-BA7F2B51D32E"}
 */
function onActionNuevo(event) 
{
	forms.biblio_frm_editoriales_abm.vl_frm_anterior = controller.getName()
	forms.biblio_frm_editoriales_abm.vl_nuevo = 1
	forms.biblio_frm_editoriales_abm.vl_titulo = "Nuevo"
	forms.biblio_frm_editoriales_abm.controller.loadRecords(edito_id)
	
	var win = application.createWindow("editorial", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.biblio_frm_editoriales_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"FD5CBA3E-A404-433A-A11F-E47AD5F82D85"}
 */
function onActionRefrescar(event) 
{
	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"89895D3F-3927-49B4-8DDE-8FAE8A61A9AD"}
 */
function onActionDetalle(event) 
{
	forms.biblio_frm_editoriales_abm.vl_frm_anterior = controller.getName()
	forms.biblio_frm_editoriales_abm.vl_nuevo = 0
	forms.biblio_frm_editoriales_abm.vl_titulo = "Modifica"
	forms.biblio_frm_editoriales_abm.controller.loadRecords(edito_id)
	
	var win = application.createWindow("editorial", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.biblio_frm_editoriales_abm);	
}
