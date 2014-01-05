/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"863B2FE2-2C3C-4120-89A4-A9005259366B"}
 */
function onActionVolver(event) 
{
	forms.cli_agenda.controller.show()

}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"894B1524-8565-4EEF-ABAA-8FD387814401"}
 */
function onDataChangeParametros(oldValue, newValue, event) 
{
	var dia = new Date(2013,01,01)
	age_cantidad_turnos = forms.cli_turnos_auxiliar.calcularCantTurnoXDia(medico_id,dia)
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E93588D8-1A12-491B-B8EF-46E4935D9324"}
 */
function onActionFechas(event) 
{
	forms.cli_agenda_no_laborable_med.controller.show()
}
