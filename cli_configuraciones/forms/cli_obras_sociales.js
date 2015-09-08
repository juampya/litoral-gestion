/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5F1BFC15-999F-4A4D-85EC-93055AFDF5E9"}
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
 * @properties={typeid:24,uuid:"7BBA4CA4-8D32-4DD2-ADD9-EE8ACB4611D6"}
 */
function onActionNuevaObraSocial(event) {
	forms.cli_obras_sociales_abm.vl_abm = 1
	forms.cli_obras_sociales_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DA841054-439C-4B5E-85B9-E32EF1419251"}
 */
function onActionVerObra(event) {
	forms.cli_obras_sociales_abm.vl_abm = 0
	forms.cli_obras_sociales_abm.controller.show()
}
