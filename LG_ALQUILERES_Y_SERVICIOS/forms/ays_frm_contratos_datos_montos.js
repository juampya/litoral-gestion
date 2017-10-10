/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D9C7D5A6-771F-4955-9403-9799A6394ADA"}
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
 * @properties={typeid:24,uuid:"B8FBD216-37BA-4A8C-9D2E-0539B27945D4"}
 */
function onActionAgregarGarantes(event) 
{
	alqyser_contratos_to_alqyser_contratos_rel_garantes.newRecord(false)
}
