/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A2C892BC-8D03-4CB8-8A2A-81DB7A324A8D"}
 */
function onDataChangeInmueble(oldValue, newValue, event)
{
	propietario_id = alqyser_contratos_to_alqyser_inmuebles.propietario_id
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"64B346C7-DADB-4105-9E06-A13EB287FB15"}
 */
function onActionAgregarGarantes(event) 
{
	alqyser_contratos_to_alqyser_contratos_rel_garantes.newRecord(false)
}
