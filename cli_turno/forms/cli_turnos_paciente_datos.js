/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9FFD615B-0728-4E2B-AC14-B2D93B198B5C"}
 */
var vl_form_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"22B310DC-4050-44EA-AC0E-C7C3C1875C3C"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	//forms.cli_turnos_lst_x_dia.controller.show()
	//forms[vl_form_anterior].controller.show()
	application.getWindow('datosTurnos').hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A37E8F5-809C-4B69-89D1-3A9094BA5DD6"}
 * @AllowToRunInFind
 */
function onActionGrabar(event) 
{
	/** @type {JSFoundSet<db:/sistemas/paciente>} */
	var fs_pac = databaseManager.getFoundSet('sistemas','paciente')
	databaseManager.setAutoSave(false)
	fs_pac.find()
	fs_pac.paciente_doc_nro = turno_paciente_nro_docu
	var cant = fs_pac.search()
	databaseManager.setAutoSave(true)
	if(cant<=0)
	{	
		fs_pac.newRecord()
		fs_pac.obsoc_id_1 = turno_paciente_obra_social
		fs_pac.paciente_doc_nro = turno_paciente_nro_docu
		fs_pac.paciente_apellido = turno_paciente_nombre
		databaseManager.saveData(fs_pac)
		paciente_id = fs_pac.paciente_id
		databaseManager.saveData(foundset.getSelectedRecord())
	}
	databaseManager.saveData()
//	forms.cli_turnos_lst_x_dia.onDataChangeDocumento(null,paciente_doc_nro,null)
//	forms.cli_turnos_lst_x_dia.controller.show()
//	
	forms[vl_form_anterior].onDataChangeDocumento(null,turno_to_paciente.paciente_doc_nro,null)
	application.getWindow('datosTurnos').hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"4A907614-23CE-470C-945C-E4505973716E"}
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
