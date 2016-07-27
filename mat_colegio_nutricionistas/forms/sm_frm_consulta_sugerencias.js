/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8F707A31-EA56-4D97-8D61-48287A6012B2",variableType:4}
 */
var vl_tipo_solicitud = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7E2580B1-EDBF-4B6B-B524-4B39A905AD49",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9C3CBA22-0224-4475-802E-8D3CC0DBDC40",variableType:4}
 */
var vl_matriculado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"08501343-77C1-408B-A098-761F625ECDC9",variableType:4}
 */
var vl_documento = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B31BB5F3-2FDC-432D-AC1A-DDA8CC99D8A8"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C6CC30AD-3842-4EE7-AD93-4184F2D65CDF"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		onActionRefrescar()
	}
	plugins.window.getMenuBar().removeAllMenus()
	plugins.window.setToolBarAreaVisible(false)	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"9D6FB5EA-3DED-4DE0-83D9-ADD58B885E80"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"29570E9C-B309-43D3-A396-048B38DA5BB2"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_consulta_sugerencias_detalle.vl_frm_anterior = controller.getName()
	forms.sm_frm_consulta_sugerencias_detalle.vl_nuevo = 1
	forms.sm_frm_consulta_sugerencias_detalle.vl_titulo = "Nueva"
	
	var win = application.createWindow("dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_consulta_sugerencias_detalle);	
}

/**
 * @properties={typeid:24,uuid:"FC76CFA9-2B5F-4393-8A97-2656F3C1D11F"}
 */
function onActionRefrescar() 
{
	vl_documento = null
	vl_estado = 0
	vl_matriculado = null
	vl_tipo_solicitud = null
	filtrar()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B05E7E14-9B54-4258-BA48-A03CAC2A5DB3"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_consulta_sugerencias_detalle.vl_frm_anterior = controller.getName()
	forms.sm_frm_consulta_sugerencias_detalle.vl_nuevo = 0
	forms.sm_frm_consulta_sugerencias_detalle.vl_titulo = "Modifica"
	forms.sm_frm_consulta_sugerencias_detalle.controller.loadRecords(sugerencia_id)
	
	var win = application.createWindow("dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_consulta_sugerencias_detalle);	
}

/**
 * @properties={typeid:24,uuid:"94EF88D7-47B0-4F62-9533-62F94E3D4D0C"}
 * @AllowToRunInFind
 */
function filtrar()
{
	controller.find()
	if(vl_matriculado!=null) mat_id = vl_matriculado
	if(vl_estado!=null) sugerencia_estado = vl_estado
	controller.search()
}
