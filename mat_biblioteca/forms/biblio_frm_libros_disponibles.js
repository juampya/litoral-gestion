/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B5B81A8B-16FA-464A-9756-4DC2219D4644"}
 */
var vl_frm_anterior = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B21DC9DF-2B92-4C79-9D11-A3FE5DD6CF93"}
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
 * @properties={typeid:24,uuid:"EED15F11-F60F-4F26-806F-664305247499"}
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
 * @properties={typeid:24,uuid:"5C5BA96C-76ED-4809-B97C-8BEA1E862524"}
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
 * @properties={typeid:24,uuid:"E224338B-5847-4651-BD54-A6FE15D49BFE"}
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
