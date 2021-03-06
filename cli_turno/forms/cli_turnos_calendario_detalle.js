/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69E3AD3D-E395-4013-BD82-9AF6A83EEBD3"}
 */
var vl_nro_afiliado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B5A6C608-8C07-46D1-B84D-5E96290CD113"}
 */
var vl_form_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3959CCD2-4C2D-4516-8829-FF81A56A9C9E"}
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
 * @properties={typeid:24,uuid:"8BB8C943-D714-4A0A-9B95-6F229FC9BDF1"}
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
 * @properties={typeid:24,uuid:"B2EA44BA-B562-4180-9EAE-D3D32308A2DE"}
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
 * @properties={typeid:24,uuid:"29ADE969-E8B1-4FE1-A4DA-FB1EE1266504"}
 */
function onShow(firstShow, event) 
{
	//Variables para archivos Adjuntos//
	scopes.globals.vg_archivo_funcion_codigo = 2
	scopes.globals.vg_archivo_tabla_id		 = paciente_id
	vl_nro_afiliado = null
	
	if(utils.hasRecords(turno_to_paciente))
	{
		if(turno_paciente_obra_social==turno_to_paciente.obsoc_id_1)
		{
			vl_nro_afiliado = turno_to_paciente.paciente_obsoc_1_nro_afil
		}
		
		if(turno_paciente_obra_social==turno_to_paciente.obsoc_id_2)
		{
			vl_nro_afiliado = turno_to_paciente.paciente_obsoc_2_nro_afil
		}
		if(turno_paciente_obra_social==turno_to_paciente.obsoc_id_3)
		{
			vl_nro_afiliado = turno_to_paciente.paciente_obsoc_3_nro_afil
		}
	}
}
