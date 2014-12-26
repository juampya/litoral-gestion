
/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"659E221F-C7E3-4936-80FB-929C8F653248"}
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
 * @properties={typeid:24,uuid:"63C635D2-239D-4320-B3A6-E329B846C89F"}
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
