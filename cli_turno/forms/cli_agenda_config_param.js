/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"863B2FE2-2C3C-4120-89A4-A9005259366B"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	databaseManager.setAutoSave(true)
	
	forms.cli_agenda.controller.show()
}

/**
 * @properties={typeid:24,uuid:"AA6431FD-6EE1-4310-B3C3-669D53DB0EFF"}
 */
function onActionGrabar() 
{
	databaseManager.saveData()
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
	// cast to runtime text field (change to anoter kind of type if you know the type)
	/** @type {RuntimeTextField} */
	var source = event.getSource();
	var sourceDataProvider = source.getDataProviderID();
	var nomdia = sourceDataProvider.substr(4,3)
	var dia = new Date(2013,01,01)
	
	foundset["age_"+nomdia+"_cant_turnos"] = forms.cli_turnos_auxiliar.calcularCantTurnoXDia(medico_id,dia,nomdia)
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
