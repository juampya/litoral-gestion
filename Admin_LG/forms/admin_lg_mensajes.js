/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D3834E2A-9196-4824-9E40-3E3A62FFDCD6"}
 */
function onActionDetalle(event) 
{
	forms.admin_lg_funciones_detalle.vl_nuevo = 0
	forms.admin_lg_funciones_detalle.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16CF8D92-7F62-4977-B0FF-51B798C2002A"}
 */
function onActionVolver(event) 
{
	forms.admin_lg_inicio.controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"F5756A7B-E416-48EA-A084-55E9E1D54F7B"}
 */
function onActionAgregar(event) 
{
	forms.admin_lg_funciones_detalle.vl_nuevo = 1
	forms.admin_lg_funciones_detalle.controller.show()
}
