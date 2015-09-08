/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EB7A674B-03CC-4E9B-B108-419EB5ABA4BF"}
 */
function onActionVolverInicio(event) {
	forms.cli_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"391F09BA-9125-49FE-9CD2-77E1B2EE35C2"}
 */
function onActionNuevaLocalidad(event) {
	forms.cli_localidades_abm.vl_abm = 1
	forms.cli_localidades_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4815BC2C-148F-43F8-9B82-59FADD03B155"}
 */
function onActionVerLocalidad(event) {
	forms.cli_localidades_abm.vl_abm = 0
	forms.cli_localidades_abm.controller.show()
}
