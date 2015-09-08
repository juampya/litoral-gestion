/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"894C30EE-3DEE-4547-9338-D16968F09DA0",variableType:4}
 */
var vl_accion = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E81CA1BD-5A48-406A-9EDE-B94664ED222F"}
 */
function onShow(firstShow, event) 
{
	databaseManager.setAutoSave(false)
	elements.btn_borrar.visible = true
	if(vl_accion == 0)
	{
		controller.newRecord()
		excep_tipo = 2
		excep_fecha = application.getServerTimeStamp()
		emp_id = scopes.globals.mx_empresa_id
		elements.btn_borrar.visible = false
	}
	medico_id = forms.cli_agenda_config_param.medico_id

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A21FD999-27C9-434D-B4EA-FC140C40CC8E"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	databaseManager.setAutoSave(true)
	application.getWindow('age_fechas_no_laborables_med').hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3216CA12-4F45-4759-8F9C-6D3781D44F89"}
 */
function onActionGrabar(event) 
{
	switch (excep_tipo) 
	{
	case 2:
		excep_mascara = 'VA'
		break;
	case 3:
		excep_mascara = 'CC'
	break;	
	case 5:
		excep_mascara = 'FL'
	break;		
	default:
		excep_mascara = 'VA'		
		break;
	}
	databaseManager.saveData(foundset)
	databaseManager.setAutoSave(true)
	application.getWindow('age_fechas_no_laborables_med').hide()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E30C5F73-E0AC-46B8-B25F-020523700344"}
 */
function onActionBorrar(event) 
{
	controller.deleteRecord()
	databaseManager.setAutoSave(true)
	application.getWindow('age_fechas_no_laborables_med').hide()	
	
}
