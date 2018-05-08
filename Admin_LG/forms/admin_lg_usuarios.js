/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D22D592F-3C02-460B-AA9B-A33E1ED40841"}
 */
function onActionDetalle(event) 
{
	forms.admin_lg_usuarios_detalle.vl_nuevo = 0
	scopes.globals.AbrirGenerico(forms.admin_lg_usuarios_detalle.controller.getName())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DA9BA7A0-C0B5-482D-8330-B8D7E0D37A82"}
 */
function onActionVolver(event) 
{
	//forms.admin_lg_inicio.controller.show()
	scopes.globals.VolverGenerico()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"868987B8-444E-4D2E-9AF4-1D770454212E"}
 */
function onActionAgregar(event) 
{
	forms.admin_lg_usuarios_detalle.vl_nuevo = 1
	scopes.globals.AbrirGenerico(forms.admin_lg_usuarios_detalle.controller.getName())
}