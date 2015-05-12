/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"52D394DD-151B-439B-B785-8AAA7BCD4EBB"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms['clinica_inicio_clinica'].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0FB16245-A3CD-4FA4-9FFF-E9C6166CD3BC"}
 * @AllowToRunInFind
 */
function onActionConfigAge(event) 
{
	forms.cli_agenda_config_param.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"24D16683-8B53-4D75-9ADB-0C848EE91F08"}
 */
function onActionFechas(event) 
{
	forms.cli_agenda_no_laborable_gral.controller.show()
}
