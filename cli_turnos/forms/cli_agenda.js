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
	forms.cli_agenda_config_param.foundset.find()
	forms.cli_agenda_config_param.medico_id = medico_id
	forms.cli_agenda_config_param.foundset.search()
	forms.cli_agenda_config_param.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3ED6CBB5-5B10-4297-A994-091402C08E44"}
 */
function onShow(firstShow, event) 
{
	scopes.globals.SacarMenu()
}
