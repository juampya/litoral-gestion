/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E81A840-613A-4EF0-AB5C-4266694B3394"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F400362E-EBEA-4525-B2A4-07C418DF4C1D",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BE6C8D45-0F28-4BCC-8C2A-A52E44C56904",variableType:4}
 */
var vl_editorial = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8E412E88-E65E-4532-95CC-75497ED0C3D5",variableType:4}
 */
var vl_autor = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C85CC5A3-6E00-4616-9775-343A80FE35D1"}
 */
var vl_codigo = null;

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
	vl_autor     = null
	vl_codigo    = null
	vl_editorial = null
	vl_estado	 = null
	vl_titulo	 = null
	Filtrar()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E79944F0-4E18-4378-A745-B02C7C695E5D"}
 */
function onActionDetalle(event) 
{
//	forms.biblio_frm_libros_abm.vl_frm_anterior = controller.getName()
//	forms.biblio_frm_libros_abm.vl_nuevo = 0
//	forms.biblio_frm_libros_abm.vl_titulo = "Modifica"
//	forms.biblio_frm_libros_abm.controller.loadRecords(libro_id)
//	
//	var win = application.createWindow("libros", JSWindow.MODAL_DIALOG);
//		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
//		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
//		win.resizable = false
//		win.title= 'Litoral Gestion';
//		win.show(forms.biblio_frm_libros_abm);	

	forms.biblio_frm_libros_detalle.vl_frm_anterior = controller.getName()
	forms.biblio_frm_libros_detalle.controller.show()
}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"AA4E76FF-2D79-4DE4-B8B9-3C9EE188C874"}
 */
function Filtrar()
{
	controller.find()
	if(vl_autor!=null) autor_id = vl_autor
	if(vl_editorial!=null) edito_id = vl_editorial
	if(vl_estado!=null) libro_estado = vl_estado
	if(vl_codigo!=null) libro_codigo = '%'+vl_codigo+'%'
	if(vl_titulo!=null) libro_titulo = '%'+vl_titulo+'%'
	controller.search()
	
	HabilitaBotones()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"99FFE8A8-5E06-4F5B-8A4D-0B88CC329A1D"}
 */
function onShow(firstShow, event)
{
	if (firstShow)
	{
				
	}
	HabilitaBotones()
}

/**
 * @properties={typeid:24,uuid:"783FA95B-E91D-4A40-A99A-1C836F38A952"}
 */
function HabilitaBotones()
{
	switch (vl_estado)
	{
	case 0:
		elements.btn_devolver.enabled = false
		elements.btn_prestar.enabled  = true
	break;
	case 1:
		elements.btn_devolver.enabled = true
		elements.btn_prestar.enabled  = false
	break;
	default:
		elements.btn_prestar.enabled  = false
		elements.btn_devolver.enabled = false
	break;
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B9F9611B-EED2-4BCA-8915-0842CA8100C2"}
 */
function onActionPrestarLibro(event) 
{
	var record = foundset.getSelectedRecord()
	if(record.libro_estado == 0)
	{
		forms.biblio_frm_libros_abm_prestamo.vl_frm_anterior  = controller.getName()
		forms.biblio_frm_libros_abm_prestamo.controller.newRecord()
		forms.biblio_frm_libros_abm_prestamo.emp_id   	  	  = scopes.globals.mx_empresa_id
		forms.biblio_frm_libros_abm_prestamo.rel_observa  	  = null
		forms.biblio_frm_libros_abm_prestamo.rel_fecha_salida = application.getServerTimeStamp()
		forms.biblio_frm_libros_abm_prestamo.libro_id     	  = libro_id
		forms.biblio_frm_libros_abm_prestamo.vl_titulo    	  = "Nuevo"
		forms.biblio_frm_libros_abm_prestamo.rel_dias_prestamo= 10
		
		var win = application.createWindow("libros", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= 'Litoral Gestion';
			win.show(forms.biblio_frm_libros_abm_prestamo);	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2148D9A5-9BDD-489C-B221-804B57BFD79F"}
 */
function onActionDevolverLibro(event) 
{
	var record = foundset.getSelectedRecord()
	if(record.libro_estado == 1)
	{
		forms.biblio_frm_libros_abm_devolucion.vl_frm_anterior = controller.getName()
		forms.biblio_frm_libros_abm_devolucion.controller.loadRecords(rel_id)
		forms.biblio_frm_libros_abm_devolucion.vl_titulo = "Devolución de Libro"

		var win = application.createWindow("libros", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= 'Litoral Gestion';
			win.show(forms.biblio_frm_libros_abm_devolucion);	
	}
}
