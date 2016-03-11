/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84D8E1F9-CF35-4863-BE9B-693847BF6514",variableType:4}
 */
var vl_turno = null;

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
	databaseManager.setAutoSave(true)
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
//	/** @type {JSFoundSet<db:/sistemas/paciente>} */
//	var fs_pac = databaseManager.getFoundSet('sistemas','paciente')
//	databaseManager.setAutoSave(false)
//	fs_pac.find()
//	fs_pac.paciente_doc_nro = turno_paciente_nro_docu
//	var cant = fs_pac.search()
////	databaseManager.setAutoSave(true)
//	if(cant<=0)
//	{	
//		fs_pac.newRecord()
//		fs_pac.obsoc_id_1 = turno_paciente_obra_social
//		fs_pac.paciente_doc_nro = turno_paciente_nro_docu
//		fs_pac.paciente_apellido = turno_paciente_nombre
//		databaseManager.saveData(fs_pac)
//		paciente_id = fs_pac.paciente_id
//		databaseManager.saveData(foundset.getSelectedRecord())
//	}
//	databaseManager.saveData()
//	forms.cli_turnos_lst_x_dia.onDataChangeDocumento(null,paciente_doc_nro,null)
//	forms.cli_turnos_lst_x_dia.controller.show()
//	
	
	if(turno_to_paciente.paciente_nro_ficha==null | turno_to_paciente.paciente_nro_ficha==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El número de ficha no puede quedar vacío.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
		return
	}
	
	if(turno_to_paciente.paciente_doc_nro==null | turno_to_paciente.paciente_doc_nro==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El número de documento no puede quedar vacío.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
		return
	}
	
	if(turno_to_paciente.paciente_nombre==null | turno_to_paciente.paciente_nombre.length==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El nombre del paciente no puede quedar vacío.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
		return
	}
	
	if(turno_to_paciente.paciente_fecha_naci==null)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','La fecha de nacimiento no puede quedar vacía.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
		return
	}
	
	if(turno_to_paciente.paciente_sexo==null)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El sexo del paciente no puede quedar vacío.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
		return
	}
	
	if(!onDataChangeNroFicha(null,turno_to_paciente.paciente_nro_ficha,event))
	{
		return
	}
	
	forms[vl_form_anterior].onDataChangeDocumento(null,turno_to_paciente.paciente_doc_nro,null)
	databaseManager.setAutoSave(true)
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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"76D13A66-2BAD-444F-8A2F-EAA1F62AF27E"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event)
{
	databaseManager.setAutoSave(false)
	
	///** @type {JSFoundSet<db:/sistemas/turno>} */
	//var fs_turno = databaseManager.getFoundSet('sistemas','turno')
	controller.loadRecords(vl_turno)

	/** @type {JSFoundSet<db:/sistemas/paciente>} */
	var fs_pac = databaseManager.getFoundSet('sistemas','paciente')
	fs_pac.find()
	fs_pac.paciente_doc_nro = turno_paciente_nro_docu
	var cant = fs_pac.search()

	if(cant==0)
	{
		fs_pac.newRecord()
		fs_pac.obsoc_id_1 		= turno_paciente_obra_social
		fs_pac.paciente_doc_nro = turno_paciente_nro_docu
		fs_pac.paciente_nombre  = turno_paciente_nombre
		fs_pac.emp_id			= scopes.globals.mx_empresa_id
		databaseManager.saveData(fs_pac)
		paciente_id = fs_pac.paciente_id
		databaseManager.saveData(foundset.getSelectedRecord())
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"0B9EA1AC-833C-44C6-8680-CBE342A839AE"}
 * @AllowToRunInFind
 */
function onDataChangeNroFicha(oldValue, newValue, event)
{
	/** @type {JSFoundSet<db:/sistemas/paciente>} */
	var fs_pac = databaseManager.getFoundSet('sistemas','paciente')
	fs_pac.find()
	fs_pac.paciente_nro_ficha = newValue
	var cant = fs_pac.search()
	if(cant>0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','Ese número de ficha ya exite con el paciente: '+fs_pac.paciente_nombre +' DNI: '+fs_pac.paciente_doc_nro,'warning',controller.getName(),'OK',null,null,null,null,null,null,null)
		return false
	}
	return true
}
