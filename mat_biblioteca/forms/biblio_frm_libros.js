/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"68AAC4A1-D3AB-495C-B34C-475BFBB546CD"}
 */
var vl_frm_anterior = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7F6D3F66-9484-45CC-ADF9-ED157A9CEE36"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E5064233-256C-4D52-9B0D-FD9D2FDAF238"}
 */
function onActionNuevo(event) 
{
	forms.biblio_frm_libros_abm.vl_frm_anterior = controller.getName()
	forms.biblio_frm_libros_abm.vl_nuevo = 1
	forms.biblio_frm_libros_abm.vl_titulo = "Nuevo"
	forms.biblio_frm_libros_abm.controller.loadRecords(libro_id)
	
	var win = application.createWindow("libros", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.biblio_frm_libros_abm);	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"71E94D3C-3137-4EF4-A2C1-C454DABAAB19"}
 */
function onActionRefrescar(event) 
{
//	vl_codigo_postal   = null
//	vl_localidad 	   = null
//	vl_provincia_id    = null
//	vl_departamento_id = null
//	Filtrar()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E79944F0-4E18-4378-A745-B02C7C695E5D"}
 */
function onActionDetalle(event) 
{
	forms.biblio_frm_libros_abm.vl_frm_anterior = controller.getName()
	forms.biblio_frm_libros_abm.vl_nuevo = 0
	forms.biblio_frm_libros_abm.vl_titulo = "Modifica"
	forms.biblio_frm_libros_abm.controller.loadRecords(libro_id)
	
	var win = application.createWindow("libros", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.biblio_frm_libros_abm);	
}