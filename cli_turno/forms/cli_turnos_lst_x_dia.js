/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB239388-CC41-4339-AE4B-C30A0109DEF7",variableType:4}
 */
var vl_sobreturnos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F680C7FF-EF2C-42CA-ABD2-96A5F709BD99",variableType:4}
 */
var vl_turnos_no_atiende = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3A35EDED-F3F6-41E5-9140-CA651F9E00AE",variableType:4}
 */
var vl_turnos_confirmados = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"92F54F09-42FE-4E36-BAE6-C6991864C355",variableType:4}
 */
var vl_turnos_ocupados = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6A5B7895-A643-43F3-8E73-96C6CB28CA9A",variableType:4}
 */
var vl_turnos_libre = null;

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
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
	    plugins.busy.prepare();
	}
	
	var params = {
		processFunction: cargaTurnos,
		message: 'Cargando Turnos... espere un momento por favor.',
		opacity: 0.5,
		paneColor: '#000000',
		showCancelButton: false,
		cancelButtonText: 'Stop!'
	};
	plugins.busy.block(params);
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
	var cant=0
	for(var i=1;i<=foundset.getSize();i++)
	{
		var rec = foundset.getRecord(i)
		if(rec.turno_dia_estado == 0)
		{
			cant++
		}
		var nombre = 'cal_turno_id_' + vl_dia.getDate()
		forms.cli_turnos_calendario.foundset.getSelectedRecord()[nombre]=utils.numberFormat(cant,'#')
		databaseManager.saveData(forms.cli_turnos_calendario.foundset.getSelectedRecord())
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
 * @public 
 * @AllowToRunInFind
 */
function cargaTurnos() 
{
	application.updateUI()
	
	forms.cli_turnos_auxiliar.generarTurno(vl_medico, vl_dia,vl_cli_turno_id)
	
	databaseManager.setAutoSave(false)
	controller.find()
	if(vl_medico!=null) medico_id = vl_medico
	turno_dia = vl_dia
	controller.search()	
	databaseManager.setAutoSave(true)
	
	/** @type {JSFoundSet<db:/sistemas/medico>} */
	var fs_medico = databaseManager.getFoundSet('sistemas','medico')
	fs_medico.loadRecords(vl_medico)
	
	elements.lbl_fecha.text = "Turnos del dia: " + utils.dateFormat(vl_dia,'yyyy-MM-dd');
	elements.lbl_medico.text = "Doctor/a: " + fs_medico.calc_nombre_apellido_medico + '.'
	calcularCantTurnos()
	plugins.busy.unblock();

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
	calcularCantTurnos()
	return true
}

/**
 * @param {Number} doc
 * @properties={typeid:24,uuid:"CCF2AAAF-CDC5-4B6E-BE02-F96C7908C7CE"}
 * @AllowToRunInFind
 */
function cargarDatos(doc)
{
	var record = null
	/** @type {JSFoundSet<db:/sistemas/paciente>} */
	var fs_pac = databaseManager.getFoundSet('sistemas','paciente')
	fs_pac.find()
	fs_pac.paciente_doc_nro = doc
	var cant = fs_pac.search()
	if(cant <= 0)
	{
		record = foundset.getSelectedRecord()
		record.turno_dia_estado = 1
		return
	}
	if(cant > 1)
	{
		return
	}
	if(cant == 1)
	{
		
		record = foundset.getSelectedRecord()
		record.turno_paciente_nombre = fs_pac.getRecord(1).calc_nombre_apellido_paciente
		record.turno_paciente_tel = fs_pac.getRecord(1).paciente_telefono_1
		record.turno_paciente_obra_social = fs_pac.getRecord(1).obsoc_id_1
		record.turno_dia_estado = 1
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
	if(record)
	{
		var rec_turno_dia_estado = record.turno_dia_estado
		var rec_turno_estado = record.turno_estado
	
		event.getRenderable().fgcolor = '#000000';
		
		if(rec_turno_dia_estado == 0)
		{
			if(rec_turno_estado == 5)
			{
				event.getRenderable().bgcolor = '#80ff80'
				event.getRenderable().toolTipText = 'Turno Cancelado por el paciente. Turno Libre'
			}
			else
			{
				event.getRenderable().bgcolor = '#80ff80'
				event.getRenderable().toolTipText = 'Turno Libre'
			}		
		}
		if(rec_turno_dia_estado == 1)
		{
			event.getRenderable().bgcolor = '#ffff80'
			event.getRenderable().toolTipText = 'Turno Ocupado Sin confirmar'			
			if(rec_turno_estado == 1)
			{
				event.getRenderable().bgcolor = '#ff8040'
				event.getRenderable().toolTipText = 'Turno Ocupado Confirmado'	
			}
			
			if(rec_turno_estado == 2)
			{
				event.getRenderable().bgcolor = '#80ffff'
				event.getRenderable().toolTipText = 'Paciente en sala de espera'	
			}
			
			if(rec_turno_estado == 3)
			{
				event.getRenderable().bgcolor = '#ff80ff'
				event.getRenderable().toolTipText = 'Paciente en Consultorio'	
			}
			if(rec_turno_estado == 4)
			{
				event.getRenderable().bgcolor = '#ffffff'
				event.getRenderable().toolTipText = 'Paciente Atendido'	
			}
			if(rec_turno_estado == 5)
			{
	//			event.getRenderable().bgcolor = '#c0c0c0'
	//			event.getRenderable().toolTipText = 'Turno Cancelado por el Paciente'
				record.turno_dia_estado = 0
			}
			if(rec_turno_estado== 6)
			{
				event.getRenderable().bgcolor = '#ff80ff'
				event.getRenderable().toolTipText = 'Ausencia del Paciente'
			}
			if(rec_turno_estado == 7)
			{
				event.getRenderable().bgcolor = '#808000'
				event.getRenderable().toolTipText = 'Se retiró'
			}
		}
	
		if(rec_turno_dia_estado == 2)
		{
			event.getRenderable().bgcolor = '#ff8080'
			event.getRenderable().toolTipText = 'No Atiende'	
		}
		
		if(rec_turno_dia_estado == 3)
		{
			event.getRenderable().bgcolor = '#ff0000'
			event.getRenderable().toolTipText = 'Sobreturno'	
		}
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
 * @properties={typeid:24,uuid:"14CFFEC2-A13B-4D99-B1A2-0402D8E2C9A2"}
 * @AllowToRunInFind
 */
function onDataChangeCambioEstado(oldValue, newValue, event) 
{
	var record = foundset.getSelectedRecord()
	if(record.turno_dia_estado == 0 || record.turno_dia_estado == 2)
	{
		record.turno_paciente_nombre = null
		record.turno_paciente_tel = null
		record.turno_paciente_obra_social = null
		record.turno_paciente_nro_docu = null
		record.turno_estado = null
	}
	calcularCantTurnos()
	return true
}

/**
 * @properties={typeid:24,uuid:"81B37451-D0E4-4530-B762-EDFD9599899E"}
 */
function calcularCantTurnos()
{
	vl_turnos_libre 	  = 0
	vl_turnos_ocupados 	  = 0
	vl_turnos_confirmados = 0
	vl_turnos_no_atiende  = 0
	vl_sobreturnos 		  = 0
	
	for(var i=1;i<=foundset.getSize();i++)
	{
		var record = foundset.getRecord(i)
		if(record.turno_dia_estado == 0)
		{
			vl_turnos_libre++
		}
		if(record.turno_dia_estado == 1)
		{
		
			if(record.turno_estado == 1)
			{
				vl_turnos_confirmados++
			}
			else
			{
				vl_turnos_ocupados++	
			}
		}
		if(record.turno_dia_estado == 2)
		{
			vl_turnos_no_atiende++	
		}
		
		if(record.turno_dia_estado == 3)
		{
			vl_sobreturnos++	
		}
	}
}

/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F5CB543-AD4E-446B-8666-BA9D92765ECD"}
 */
function onRightClick(event) 
{
	// alternatively create a popup menu
	var menu = plugins.window.createPopupMenu();

	var item1 = menu.addMenuItem("Confirmar Turno",llamada,"media:///16x16/accept.png",null);
	var item2 = menu.addMenuItem("Completar Datos",llamada,"media:///16x16/pencil_add.png",null);
	var item3 = menu.addMenuItem("Eliminar Turno",llamada,"media:///16x16/delete.png",null);

	item1.methodArguments = [0]
	item2.methodArguments = [1]	
	item3.methodArguments = [2]	
	var record = foundset.getSelectedRecord()
	if(record.turno_dia_estado == 0 || record.turno_dia_estado == 2 || record.turno_dia_estado == 3)
	{
		item1.enabled = false
		item2.enabled = false
	}
	if(record.turno_dia_estado == 1)
	{
		item1.enabled = true
		item2.enabled = false
		if(record.turno_estado == 1)
		{
			item1.enabled = false
			item2.enabled = true			
		}
	}	
	menu.show(event.getSource())
}

/**
 * @properties={typeid:24,uuid:"EDFF9B5C-88F6-4C46-9A09-CF8EA3DE27BE"}
 */
function completarDatos()
{
	var paciente = foundset.getSelectedRecord().paciente_id
	forms.cli_turnos_paciente_datos.vl_form_anterior = controller.getName()
	forms.cli_turnos_paciente_datos.foundset.loadRecords(paciente)
	forms.cli_turnos_paciente_datos.controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"F22A3B25-878D-4610-81E0-3C94CC8FC637"}
 */
function confirmarTurno()
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
			fs_pac.emp_id = scopes.globals.mx_empresa_id
			databaseManager.saveData(fs_pac)
			
			record.turno_estado = 1
			record.paciente_id = fs_pac.paciente_id
			databaseManager.saveData(record)
		}
		if(cant >= 1)
		{
			record.turno_estado = 1
			record.paciente_id = fs_pac.paciente_id
			databaseManager.saveData(record)			
			return
		}
	}
	else
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Antención','Debe completar el Nro. de documento para confirmar el turno.','warning',controller.getName(),'Ok',null,null,null,null,null,null,null)
	}
}

/**
 * @properties={typeid:24,uuid:"17006424-7702-4890-8415-33E9B90E16B6"}
 */
function llamada()
{
	switch(arguments[5]) 
	{
	    case 0: confirmarTurno(); break;
	    case 1: completarDatos(); break;
	    case 2: eliminarRegTurno(); break;
	}
}

/**
 * @properties={typeid:24,uuid:"72F84F35-88BD-498F-AE97-CFEDBBE1AC08"}
 */
function eliminarRegTurno()
{
	foundset.deleteRecord(foundset.getSelectedRecord())
	vl_sobreturnos--
}

/**
 * @properties={typeid:24,uuid:"E2DE7F56-D702-43F0-9DD6-00D3F2949CA5"}
 */
function limpiarCantidades()
{
	vl_turnos_confirmados = 0
	vl_turnos_libre 	  = 0
	vl_turnos_no_atiende  = 0
	vl_turnos_ocupados    = 0
	vl_sobreturnos		  = 0
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
 * @properties={typeid:24,uuid:"E7FC3FAB-4B7F-4D90-97DF-BD7DFFC6B68B"}
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1BE87D16-1928-4719-9167-978A1F6BF1E6"}
 */
function onActionSobreturno(event) 
{
	controller.newRecord(false)
	emp_id = scopes.globals.mx_empresa_id
	turno_dia_estado = 3
	medico_id = vl_medico
	turno_dia = vl_dia
	cal_turno_id = vl_cli_turno_id
	turno_hora = application.getServerTimeStamp()
	databaseManager.saveData()
	vl_sobreturnos++
	
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0084D9FF-2694-457D-BB7B-7DFE232ED427"}
 */
function onRecordSelection(event) 
{
	elements.agenda_hora.editable = false
	if(turno_dia_estado==3)
	{
		elements.agenda_hora.editable = true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A03EA3C9-DB74-447E-A62D-30753C034770"}
 */
function onActionReprogramar(event) {
	// TODO Auto-generated method stub
}
