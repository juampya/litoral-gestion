/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB6C8E13-13C2-4477-8454-F41C32F04D97"}
 */
function onActionVolverInicio(event) 
{
	scopes.globals.CargarMenu()
	forms['clinica_inicio_clinica'].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE0942D6-E684-426F-9AC6-822A17180AA1"}
 */
function onActionAgregarPaciente(event) {
	forms.cli_pacientes_abm.vl_abm = 1
	forms.cli_pacientes_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A6A22593-FCA8-4960-A207-6197B9FA1C3A"}
 */
function onActionVerPaciente(event) {
	forms.cli_pacientes_abm.vl_abm = 0
	forms.cli_pacientes_abm.controller.show()
}
