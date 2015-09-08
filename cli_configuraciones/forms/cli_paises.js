/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87237B11-D536-422E-AF67-5007571631FB"}
 */
function onActionVolverInicio(event) {
	forms.cli_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E61427BF-F6B9-419A-9F9C-07097D29698F"}
 */
function onActionNuevoPais(event) {
	forms.cli_paises_abm.vl_abm = 1
	forms.cli_paises_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"08DD9F89-1C81-4B5B-B324-1C11843AEB49"}
 */
function onActionVerPais(event) {
	forms.cli_paises_abm.vl_abm = 0
	forms.cli_paises_abm.controller.show()
}
