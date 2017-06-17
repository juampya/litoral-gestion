/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8049B36F-5D9E-49FD-8A89-C3299BB5E3BD"}
 */
var vl_form_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9D05696A-C22A-4A74-869A-C1590AE2C4C1"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	forms[vl_form_anterior].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F897FB43-E13A-4A22-BCD7-1522046203A0"}
 * @AllowToRunInFind
 */
function onActionGrabar(event) 
{
	databaseManager.saveData()
	forms[vl_form_anterior].controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"86880479-F1C1-4168-B6FF-C5CE4E04A5D9"}
 */
function onDataChangeEstado(oldValue, newValue, event) 
{
//	
//	Sin Confirmar|0
//	Confirmado|1
//	En Sala|2
//	En Consultorio|3
//	Atendido|4
//	Cancelado|5 
//	Ausente|6
		
	if(turno_estado == 2 && turno_hora_llegada==null)
	{
		turno_hora_llegada = application.getServerTimeStamp()
	}
	
	if(turno_estado == 3 && turno_hora_entra==null)
	{
		turno_hora_entra = application.getServerTimeStamp()
	}
	
	if(turno_estado == 4 && turno_hora_sale==null)
	{
		turno_hora_sale = application.getServerTimeStamp()
	}
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F5D7FBF-5082-4B53-9FC0-15CEF8A2F057"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event)
{
	if( forms.cli_turnos_calendario_detalle.paciente_id!=null)
	{	
		databaseManager.setAutoSave(false)
		controller.find()
		paciente_id = forms.cli_turnos_calendario_detalle.paciente_id
		controller.search()
		databaseManager.setAutoSave(true)
	}
	else
	{
		foundset.clear()
	}
}
