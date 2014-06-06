/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"99CA8A10-A7F8-4FF6-AF6E-38F29DBF7694"}
 */
var vl_localidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"289DE5F8-D610-44F6-87EE-3244B93F355F"}
 */
var vl_codigo_postal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A74B12D5-EFFF-4625-8AB9-F28B7A5B9259",variableType:4}
 */
var vl_provincia_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A57DF848-C5AB-4589-9550-B1279E59A471",variableType:4}
 */
var vl_departamento_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E6293BCC-BF2E-4467-AFD2-0AE21DA893AD"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"2BDC40F9-B6BB-4A41-BB40-C0DE5E43FFA6"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"89DEF5E1-6DF7-4460-A82C-B4792D98A8D6"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_medios_cobro_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_medios_cobro_abm.vl_nuevo = 1
	forms.sm_frm_medios_cobro_abm.vl_titulo = "Nuevo"
	forms.sm_frm_medios_cobro_abm.controller.loadRecords(medios_cobro_id)
	
	var win = application.createWindow("medios_de_cobro", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_medios_cobro_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"4D062D60-AD0C-4364-8496-37FC060AB4F5"}
 */
function onActionRefrescar(event) 
{
	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"2149519C-7D8B-4FE0-8A70-174CF39D1BA2"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_medios_cobro_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_medios_cobro_abm.vl_nuevo = 0
	forms.sm_frm_medios_cobro_abm.vl_titulo = "Modifica"
	forms.sm_frm_medios_cobro_abm.controller.loadRecords(medios_cobro_id)
	
	var win = application.createWindow("medios_de_cobro", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_medios_cobro_abm);	
}