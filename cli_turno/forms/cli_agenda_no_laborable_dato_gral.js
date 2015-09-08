/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6BD4A87E-F2FC-460A-963A-9B4F90F39D9E",variableType:4}
 */
var vl_accion = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C94AF21F-0370-4A14-9916-74DA27178C7F"}
 */
function onShow(firstShow, event) 
{
	databaseManager.setAutoSave(false)
	elements.btn_borrar.visible = true
	if(vl_accion == 0)
	{
		controller.newRecord()
		medico_id = null
		excep_tipo = 1
		excep_fecha = application.getServerTimeStamp()
		emp_id = scopes.globals.mx_empresa_id
		elements.btn_borrar.visible = false
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7931E59B-0CDD-4A8D-9138-3738E7080828"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	databaseManager.setAutoSave(true)
	application.getWindow('age_fechas_no_laborables_gral').hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ABE057C5-37CD-44C8-96F8-EBBF1260537E"}
 */
function onActionGrabar(event) 
{
	switch (excep_tipo) 
	{
	case 1:
		excep_mascara = 'FE'
		break;
	case 4:
		excep_mascara = 'NL'
	break;	
	default:
		excep_mascara = 'FE'		
		break;
	}
	databaseManager.saveData(foundset)
	databaseManager.setAutoSave(true)
	application.getWindow('age_fechas_no_laborables_gral').hide()	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4760E405-C2A4-4F68-92E5-93ABEC103D85"}
 */
function onActionBorrar(event) 
{
	controller.deleteRecord()
	databaseManager.setAutoSave(true)
	application.getWindow('age_fechas_no_laborables_gral').hide()	
	
}
