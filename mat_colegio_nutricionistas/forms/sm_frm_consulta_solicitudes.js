/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1855FD21-5934-473F-9C66-FB2CD5C5DF13",variableType:4}
 */
var vl_tipo_solicitud = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7639AB41-7A31-4352-A108-DFE719D49FF1",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2455871B-F5CD-48F7-93DE-33F161D703C6",variableType:4}
 */
var vl_matriculado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"72988D02-E07E-4F2F-BF33-F6C5D754B884",variableType:4}
 */
var vl_documento = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F0EFEFFC-BC01-4C46-9BE8-D64351653BA1"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B0291585-BEF0-42D0-8766-06885107BCD5"}
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
 * @properties={typeid:24,uuid:"88F80AE0-E904-46EE-B5A1-6CD3A291ACAD"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"BA1EE6A2-2623-436E-BCF5-0C3454171E8D"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_consulta_solicitudes_detalle.vl_frm_anterior = controller.getName()
	forms.sm_frm_consulta_solicitudes_detalle.vl_nuevo = 1
	forms.sm_frm_consulta_solicitudes_detalle.controller.show() 
}

/**
 * @properties={typeid:24,uuid:"B933C398-B072-4CD9-8058-37EE56D827A6"}
 */
function onActionRefrescar() 
{
	vl_documento = null
	vl_estado = 0
	vl_matriculado = null
	filtrar()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"07CCCE2D-895E-43EF-9AAE-120C6565B66E"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_consulta_solicitudes_detalle.vl_frm_anterior = controller.getName()
	forms.sm_frm_consulta_solicitudes_detalle.vl_nuevo = 0
	forms.sm_frm_consulta_solicitudes_detalle.controller.show() 
}


/**
 * @properties={typeid:24,uuid:"5321A1EA-524C-4C99-8264-2F44F0B68690"}
 * @AllowToRunInFind
 */
function filtrar()
{
	controller.find()
	if(vl_matriculado!=null) mat_id = vl_matriculado
	if(vl_documento!=null) mat_rel_mat_sol_to_mat_matriculados.mat_dni = vl_documento
	if(vl_estado!=null)rel_estado = vl_estado
	controller.search()
}
