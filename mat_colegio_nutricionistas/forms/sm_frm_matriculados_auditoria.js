/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C44A4052-1D90-407A-AE45-1BCE43D217B7"}
 */
function onDataChangeBanco(oldValue, newValue, event) 
{
	scopes.globals.vg_foa_banco = banco_id
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B706C3C7-3717-4F4D-B7BB-B39D201A5815"}
 */
function onDataChangeCUIT(oldValue, newValue, event) 
{
	if(scopes.globals.ValidarCuit(newValue))
	{
		return true
	}
	else
	{
		scopes.globals.ventanaAceptar("CUIT inválido. Por favor verifíquelo.",controller.getName())
		return false
	}
}
