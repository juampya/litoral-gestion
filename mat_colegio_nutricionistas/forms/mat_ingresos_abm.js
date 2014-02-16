
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6952ECA5-0A45-4CD9-BA0D-FCDFFDAB2EB7"}
 */
function onActionVolver(event) 
{
	forms["mat_inicio"].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"247BDAD7-E112-4216-B5A7-EC4E961C0661"}
 */
function onActionNuevo(event) 
{
	forms.mat_ingresos_nuevo.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"26FEE9B1-865D-432A-BFDC-4DA1DC656ED5"}
 */
function onActionDetalle(event) 
{
	forms.mat_ingresos_detalle.controller.show()
}
