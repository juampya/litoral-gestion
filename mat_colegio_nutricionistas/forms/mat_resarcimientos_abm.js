
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"02189668-B48F-46D9-B88B-AAF0ABA57E43"}
 */
function onActionDetalle(event) 
{
	forms.mat_resarcimientos_detalle.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E8F6D1A-3283-4B42-8876-2BBC9426ED58"}
 */
function onActionNuevo(event) 
{
	forms.mat_resarcimientos_nuevo.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"731B95C1-6EEB-4746-84C7-319B78588A2A"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms["mat_inicio"].controller.show()
}
