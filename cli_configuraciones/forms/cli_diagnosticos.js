/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B6F836E-A44D-41BD-A2AE-55E355A74EEE"}
 */
function onActionVolverInicio(event) {
	forms.cli_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9BE6273E-BB7F-4EEF-ACD4-101261F8C442"}
 */
function onActionNuevoDiagnostico(event) {
	forms.cli_diagnosticos_abm.vl_abm = 1
	forms.cli_diagnosticos_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1FC4CE40-024E-4503-A639-1FAB7CA2C3CF"}
 */
function onActionVerDiagnostico(event) {
	forms.cli_diagnosticos_abm.vl_abm = 0
	forms.cli_diagnosticos_abm.controller.show()
}
