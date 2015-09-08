/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE525ECE-802A-4FA1-AD8D-839700ED98FC"}
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
 * @properties={typeid:24,uuid:"680ED3EE-0EE5-4EB1-8559-E36882809A4E"}
 */
function onActionAgregarMedicos(event) {
	forms.cli_medico_abm.vl_abm = 1
	forms.cli_medico_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"575C0F5B-7FA5-4A23-9E37-E5E6228E83CE"}
 */
function onActionVerMedico(event) {
	forms.cli_medico_abm.vl_abm = 0
	forms.cli_medico_abm.controller.show()
}
