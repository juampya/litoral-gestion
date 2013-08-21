/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0B044646-0A84-4DA6-8AFE-043F6C267796"}
 */
function onActionVolverInicio(event) {
	forms.cli_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0AFC5B9F-D3E5-4FF0-87E7-E47E5A8F0DB3"}
 */
function onActionNuevaSucursal(event) {
	forms.cli_sucursales_abm.vl_abm = 1
	forms.cli_sucursales_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E761D865-2DC9-4A7E-8A1B-85E62038AD61"}
 */
function onActionVerSucursal(event) {
	forms.cli_sucursales_abm.vl_abm = 0
	forms.cli_sucursales_abm.controller.show()
}
