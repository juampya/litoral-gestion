/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D4023A5-4E7F-4CCA-AC6D-67189F9C25E2"}
 */
function onActionDetalle(event) 
{
	forms.admin_lg_empresas_detalle.vl_nuevo = 0
	scopes.globals.AbrirGenerico(forms.admin_lg_empresas_detalle.controller.getName())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1BAFF30C-7B79-4C88-BF28-73665B39933D"}
 */
function onActionVolver(event) 
{
	scopes.globals.VolverGenerico()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"9AB73D17-D394-4ADB-B6AB-D4A5CBBDAF1B"}
 */
function onActionAgregar(event) 
{
	forms.admin_lg_empresas_detalle.vl_nuevo = 1
	scopes.globals.AbrirGenerico(forms.admin_lg_empresas_detalle.controller.getName())
}