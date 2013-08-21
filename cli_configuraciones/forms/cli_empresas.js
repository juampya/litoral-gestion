/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AEB568D4-A35E-421F-91E5-7D1D4343B108"}
 */
function onActionVolverInicio(event) {
	forms.cli_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D26069EC-3A49-48A6-9308-E23280E5F10A"}
 */
function onActionNuevaEmpresa(event) {
	forms.cli_empresas_abm.vl_abm = 1
	forms.cli_empresas_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0F385F6-615C-4DEE-A0D2-E73EE86482A4"}
 */
function onActionVerEmpresa(event) {
	forms.cli_empresas_abm.vl_abm = 0
	forms.cli_empresas_abm.controller.show()
}
