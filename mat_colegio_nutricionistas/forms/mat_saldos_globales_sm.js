
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE4982E0-5E7A-4A9D-BE06-0FD66468FA9A"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms["mat_inicio"].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6675B4FD-53CF-4AA0-A58A-F117F4590F19"}
 */
function onActionDetalle(event) 
{
	forms.mat_saldos_globales_movimientos.vl_matriculado_id = forms["saldosGlobales"].id
	forms.mat_saldos_globales_movimientos.controller.show()
	//TODO Habilitar pago de saldo
}
