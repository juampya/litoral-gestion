/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5E557943-01EB-43C5-A4F4-29EBBA917589"}
 */
function onActionClinica(event) 
{
	forms.cli_agenda.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"18AF1C53-B5B1-4DC1-AB46-DB934A8FD064"}
 */
function onActionGestion(event) 
{
	forms.cli_turnos_calendario.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0A54DE26-007B-4AC2-9A5B-2987D4D5B05A"}
 */
function onActionVisita(event) 
{
	forms.cli_visitas_lst.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1779A78C-7BB7-4081-A431-5339FFB3D421"}
 */
function onActionConfig(event) 
{
	forms.cli_inicio.controller.show()
}


/**
 * @properties={typeid:24,uuid:"36A394EF-C171-46FA-8EB2-7E80CC2714EE"}
 */
function Salir()
{
	if(application.isInDeveloper())
	{
		application.exit()
	}
	else
	{
		application.closeSolution('LitoralGestion','InicializaArgento')
	}
}
