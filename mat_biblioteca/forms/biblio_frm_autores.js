/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"715533AB-E298-45C4-9827-B8969AB4C74C"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1C834297-02C2-4AEF-A052-A4C9553A75BD"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"504A2517-6D6B-462A-BE9D-1385F7F3A435"}
 */
function onActionNuevo(event) 
{
	forms.biblio_frm_autores_abm.vl_frm_anterior = controller.getName()
	forms.biblio_frm_autores_abm.vl_nuevo = 1
	forms.biblio_frm_autores_abm.vl_titulo = "Nuevo"
	forms.biblio_frm_autores_abm.controller.loadRecords(autor_id)
	
	var win = application.createWindow("autores", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.biblio_frm_autores_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"DDACA21D-518B-4C74-85A5-1225A66D54FB"}
 */
function onActionDetalle(event) 
{
	forms.biblio_frm_autores_abm.vl_frm_anterior = controller.getName()
	forms.biblio_frm_autores_abm.vl_nuevo = 0
	forms.biblio_frm_autores_abm.vl_titulo = "Modifica"
	forms.biblio_frm_autores_abm.controller.loadRecords(autor_id)
	
	var win = application.createWindow("autores", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.biblio_frm_autores_abm);	
}