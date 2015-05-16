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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"14D55E7F-CBAA-4C28-9416-585D3CEBBBBA"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	/** @type {JSFoundset<db:/sistemas/medico>}*/
	var fs_medicos = databaseManager.getFoundSet('sistemas','medico')
		fs_medicos.loadAllRecords()
	
		
	for (var i = 1; i <= fs_medicos.getSize(); i++) 
	{
		var record = fs_medicos.getRecord(i);
		
		controller.find()
		medico_id = record.medico_id
		if(controller.search()==0)
		{
			controller.newRecord(false)
			emp_id = scopes.globals.mx_empresa_id
			medico_id = record.medico_id
			
			databaseManager.saveData(foundset)
		}
	}
	
	controller.loadAllRecords()
}
