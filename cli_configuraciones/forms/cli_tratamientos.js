/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF79AFA3-8D6B-4A7C-89E2-FEEFCC2CBA7C"}
 */
function onActionVolverInicio(event) {
	forms.cli_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3C233665-F96C-4C07-9701-13A04101FF47"}
 */
function onActionNuevoTratamiento(event) {
	forms.cli_tratamientos_abm.vl_abm = 1
	forms.cli_tratamientos_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EE334204-E1B0-43FB-9BFA-F0CC4CBD7ADD"}
 */
function onActionDetalle(event) {
	forms.cli_tratamientos_abm.vl_abm = 0
	forms.cli_tratamientos_abm.controller.show()
}
