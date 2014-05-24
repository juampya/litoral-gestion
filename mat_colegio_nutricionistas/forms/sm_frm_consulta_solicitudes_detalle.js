/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D5ED8A66-E256-4413-8890-2950D1B2B9EF"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FD14D73E-8CAC-450A-A1F7-50042DBAE173",variableType:4}
 */
var vl_tipo_solicitud = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"970AA4F3-3A76-4A7B-B257-25942226826B",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7ED32080-0A2A-47DB-9F7A-8B35F24B1B43",variableType:4}
 */
var vl_matriculado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BE9DC6EB-BB1D-4FD7-AAE1-B9CEDEB0B4F5",variableType:4}
 */
var vl_documento = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFEB07BE-23AB-4196-B463-7CE2ECBE676A"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"95E0E70D-3C0B-439B-9C6E-3896AE2E6C8B"}
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
 * @properties={typeid:24,uuid:"A2698F88-DED1-4070-9DD9-ACA7FEBD5C4A"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"FB77B845-5232-4A54-8EED-EE8CD96E470A"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_consulta_solicitudes_detalle.vl_frm_anterior = controller.getName()
	forms.sm_frm_consulta_solicitudes_detalle.vl_nuevo = 1
	forms.sm_frm_consulta_solicitudes_detalle.controller.show() 
}

/**
 * @properties={typeid:24,uuid:"7B9D2ABE-BAA3-4DCC-ADCE-3D0B753C5E8E"}
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
 * @properties={typeid:24,uuid:"074DDA06-37E5-4108-92C8-D171C82CF464"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_consulta_solicitudes_detalle.vl_frm_anterior = controller.getName()
	forms.sm_frm_consulta_solicitudes_detalle.vl_nuevo = 0
	forms.sm_frm_consulta_solicitudes_detalle.controller.show() 
}

/**
 * @properties={typeid:24,uuid:"C3145540-B3DB-482D-9769-7B63D5D07363"}
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
