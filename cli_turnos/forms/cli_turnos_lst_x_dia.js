/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"75A5B604-9AB8-4303-B5CF-7CF30570C36C",variableType:4}
 */
var vl_cli_turno_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"382525F3-EEEE-4A61-9A0E-737AAF57E6A6",variableType:4}
 */
var vl_medico = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6C40E2FC-54CB-4663-BACD-8CDF4C3E4D5A",variableType:4}
 */
var vl_doc = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"4A11377F-58F7-49C5-924D-F72CE22935E4",variableType:93}
 */
var vl_dia = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"05F9F947-223D-4AB3-995E-D42E2B5139C2"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	cargaTurno()

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA9C1A05-820B-4CD9-9567-37E8A56554F7"}
 */
function onActionVolver(event) 
{
	if(databaseManager.getEditedRecords(foundset).length > 0)
	{
		//databaseManager.getEditedRecords(foundset)
		forms.cli_turnos_calendario.filtrar()
	}
	forms.cli_turnos_calendario.controller.show()

}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"E1AE0D6B-A413-45ED-B337-F3BD14EE14E7"}
 */
function Filtro()
{
	controller.find()
	if(vl_medico!=null) medico_id = vl_medico
	turno_dia = vl_dia
	controller.search()
}

/**
 * @properties={typeid:24,uuid:"7B1DC414-8F6B-4F4F-9E37-F34D53778CD6"}
 * @AllowToRunInFind
 */
function cargaTurno() 
{
	forms.cli_turnos_auxiliar.generarTurno(vl_medico, vl_dia,vl_cli_turno_id)
	
	controller.find()
	if(vl_medico!=null) medico_id = vl_medico
	turno_dia = vl_dia
	controller.search()	
	
	/** @type {JSFoundSet<db:/sistemas/medico>} */
	var fs_medico = databaseManager.getFoundSet('sistemas','medico')
	fs_medico.loadRecords(vl_medico)
	
	elements.lbl_fecha.text = "Turnos del dia: " + utils.dateFormat(vl_dia,'yyyy-MM-dd');
	elements.lbl_medico.text = "Doctor/a: " + fs_medico.calc_nombre_apellido_medico + '.'
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
 * @properties={typeid:24,uuid:"C2514586-4728-4C4B-A027-8C8437D26618"}
 */
function onDataChangeDocumento(oldValue, newValue, event) 
{
	cargarDatos(newValue)
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} doc
 * @properties={typeid:24,uuid:"CCF2AAAF-CDC5-4B6E-BE02-F96C7908C7CE"}
 * @AllowToRunInFind
 */
function cargarDatos(doc)
{
	/** @type {JSFoundSet<db:/sistemas/paciente>} */
	var fs_pac = databaseManager.getFoundSet('sistemas','paciente')
	fs_pac.find()
	fs_pac.paciente_doc_nro = doc
	var cant = fs_pac.search()
	if(cant <= 0)
	{
		return
	}
	if(cant > 1)
	{
		return
	}
	if(cant == 1)
	{
		
		var record = foundset.getSelectedRecord()
		record.turno_paciente_nombre = fs_pac.getRecord(1).calc_nombre_apellido_paciente
		record.turno_paciente_tel = fs_pac.getRecord(1).paciente_telefono_1
		record.turno_paciente_obra_social = fs_pac.getRecord(1).obsoc_id_1
	}	
	
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"5705E033-5733-4BEC-8357-83C231A25677"}
 */
function onRenderEstado(event) 
{
	if (event.isRecordSelected()) 
	{
		event.getRenderable().fgcolor = '#000000';
	}		
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"02C86B4F-9D3E-43A5-87C5-AE0F2667B55E"}
 */
function onRenderOS(event) 
{
	if (event.isRecordSelected()) 
	{
		event.getRenderable().fgcolor = '#000000';
	}
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"503BF4C4-D742-4DEF-AF23-89104F8F26F7"}
 */
function onRenderHora(event) 
{
	/** @type {JSFoundSet<db:/sistemas/turno>} */
	var record = event.getRecord()
	event.getRenderable().fgcolor = '#000000';
	if(record.turno_dia_estado == 0)
	{
		event.getRenderable().bgcolor = '#80ff80'
		event.getRenderable().toolTipText = 'Turno Libre'
	}
	if(record.turno_dia_estado == 1)
	{
		event.getRenderable().bgcolor = '#ffff80'
		event.getRenderable().toolTipText = 'Turno Ocupado Sin confirmar'			
		if(record.turno_estado == 1)
		{
			event.getRenderable().bgcolor = '#ff8040'
			event.getRenderable().toolTipText = 'Turno Ocupado Confirmado'	
		}
	}
	if(record.turno_dia_estado == 2)
	{
		event.getRenderable().bgcolor = '#ff8080'
		event.getRenderable().toolTipText = 'No Atiende'	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ABE75342-70AC-4A20-B6FE-C27FBE69A7BF"}
 * @AllowToRunInFind
 */
function onActionConfirmarTurno(event) 
{
	var record = foundset.getSelectedRecord()
	if(record.turno_paciente_nro_docu != 0 && record.turno_paciente_nro_docu != null)
	{
		/** @type {JSFoundSet<db:/sistemas/paciente>} */
		var fs_pac = databaseManager.getFoundSet('sistemas','paciente')
		fs_pac.find()
		fs_pac.paciente_doc_nro = record.turno_paciente_nro_docu
		var cant = fs_pac.search()
		if(cant <= 0)
		{
			fs_pac.newRecord()
			fs_pac.paciente_apellido = record.turno_paciente_nombre
			fs_pac.paciente_doc_nro = record.turno_paciente_nro_docu
			fs_pac.paciente_telefono_1 = record.turno_paciente_tel
			fs_pac.obsoc_id_1 = record.turno_paciente_obra_social
			fs_pac.emp_id = 1
			databaseManager.saveData(fs_pac)
			
			record.turno_estado = 1
			record.paciente_id = fs_pac.paciente_id
			databaseManager.saveData(record)
		}
		if(cant >= 1)
		{
			record.turno_estado = 1
			databaseManager.saveData(record)			
			return
		}

	}
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"F356CCA4-2A2D-4DD0-BD35-2638758AB5E8"}
 */
function onRenderCompletar(event) 
{
	/** @type {JSFoundSet<db:/sistemas/turno>} */
	var record = event.getRecord()
	event.getRenderable().enabled = false	
	if(record.turno_dia_estado == 0)
	{
		event.getRenderable().enabled = false
	}
	if(record.turno_dia_estado == 1)
	{
		if(record.turno_estado == 1)
		{
			event.getRenderable().enabled = true
		}
	}
	if(record.turno_dia_estado == 2)
	{
		event.getRenderable().enabled = false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EB076DC5-1A28-4451-93DC-DC25CA93DF18"}
 */
function onActionCompletar(event) 
{
	forms.cli_turnos_paciente_datos.foundset.loadRecords(foundset.getSelectedRecord().paciente_id)
	forms.cli_turnos_paciente_datos.controller.show()
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"C4AD4887-A5CB-48A9-9C83-173D3F687D46"}
 */
function onRenderConfirmar(event) 
{
	/** @type {JSFoundSet<db:/sistemas/turno>} */
	var record = event.getRecord()
	event.getRenderable().enabled = true	
	if(record.turno_dia_estado == 0)
	{
		event.getRenderable().enabled = false
	}
	if(record.turno_dia_estado == 1)
	{
		event.getRenderable().enabled = true
		if(record.turno_estado == 1)
		{
			event.getRenderable().enabled = false
		}
	}
	if(record.turno_dia_estado == 2)
	{
		event.getRenderable().enabled = false
	}
}
