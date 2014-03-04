/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"16BB5741-E178-4D56-A68A-3203BD7344D9",variableType:4}
 */
var vl_estado = null
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61FE3B7B-97D2-4B65-A7B7-F66E7B535453",variableType:4}
 */
var vl_matriculado = null
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"235B8210-8CDF-49A8-9BA2-F8C6B2D689C4",variableType:4}
 */
var vl_documento = null

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35C2E4C7-BD63-4AFC-B1F3-6BF8C64F3A00"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7D06E01B-80F1-44FE-97C5-EBC0BFA5E403"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		filtrar()
	}
	plugins.window.getMenuBar().removeAllMenus()
	plugins.window.setToolBarAreaVisible(false)	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7156CCDB-1EAD-4FD6-8A76-DFEB5E9E8BED"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"861E7797-87FA-4ECF-A012-75B03088668B"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_matriculados_tabpanel.vl_frm_anterior = controller.getName()
	forms.sm_frm_matriculados_tabpanel.vl_nuevo = 1
	forms.sm_frm_matriculados_tabpanel.controller.show() 
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"EC0C777D-191C-4CA2-816F-F71A35E083CA"}
 */
function onActionRefrescar(event) 
{
	vl_documento = null
	vl_estado = null
	vl_matriculado = null
	filtrar()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"57A47ECA-BD7B-4A47-93A5-51A7F97B7721"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_matriculados_tabpanel.vl_frm_anterior = controller.getName()
	forms.sm_frm_matriculados_tabpanel.vl_nuevo = 0
	forms.sm_frm_matriculados_tabpanel.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E1F7AC68-1585-4A3B-9CE7-1CEA92D0759B"}
 */
function onActionCopiar(event) 
{
	forms.sm_frm_matriculados_tabpanel.vl_frm_anterior = controller.getName()
	forms.sm_frm_matriculados_tabpanel.vl_nuevo = 2
	forms.sm_frm_matriculados_tabpanel.controller.show() 
}

/**
 * @properties={typeid:24,uuid:"8225D3AB-AC12-40BF-B7D4-0E1BC8952225"}
 * @AllowToRunInFind
 */
function filtrar()
{
	controller.find()
	mat_id = vl_matriculado
	mat_dni = vl_documento
	mat_estado = vl_estado
	controller.search()
}
