/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A6E72112-36F3-4BAE-8377-DBCD79A91103",variableType:4}
 */
var vl_sobreturnos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C9F6FB18-C26E-4617-AA6C-FA8A7EA7395C",variableType:4}
 */
var vl_turnos_no_atiende = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"783BE36B-75D9-4C0E-B27A-C7999091CF52",variableType:4}
 */
var vl_turnos_confirmados = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EA2698AC-711B-4DB6-872D-FA833F09A859",variableType:4}
 */
var vl_turnos_ocupados = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F649A61E-8B24-4B29-A27A-087D50D2E915",variableType:4}
 */
var vl_turnos_libre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"85625035-6DC8-4DAE-94B4-BFCA42F56387",variableType:4}
 */
var vl_cli_turno_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9C64B097-F606-436D-BB47-A11ACF400D9A",variableType:4}
 */
var vl_medico = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4CBD3936-3AAE-4842-8A5C-32634F4EEC42",variableType:4}
 */
var vl_doc = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"0E115758-BD3F-48DA-B88C-F6845B74E866",variableType:93}
 */
var vl_dia = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"73573560-1F62-45B6-8E3E-511C07733B25"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	cargar()
	foundset.sort('turno_hora asc')
}

/**
 * @properties={typeid:24,uuid:"4824AF2B-CCAC-4D4A-92B3-904F587A35BB"}
 */
function cargar()
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
 * @properties={typeid:24,uuid:"EC7AB6AD-A2FF-4DE5-B383-42D1B7A22D6F"}
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
 * @properties={typeid:24,uuid:"CEFC5CD8-2208-4EA7-A8F6-EB047F428D32"}
 */
function Filtro()
{
	controller.find()
	if(vl_medico!=null) medico_id = vl_medico
	turno_dia = vl_dia
	controller.search()
	calcularCantTurnos()
}

/**
 * @properties={typeid:24,uuid:"482985EA-1601-4951-9425-5E4AF84103E8"}
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
 * @properties={typeid:24,uuid:"77BF29F2-5C62-4507-A4AD-B5521EA157DF"}
 */
function onDataChangeDocumento(oldValue, newValue, event) 
{
	cargarDatos(newValue)
	calcularCantTurnos()
	return true
}

/**
 * @param {Number} doc
 * @properties={typeid:24,uuid:"6DA564DA-A330-4570-8458-4B021D20F58B"}
 * @AllowToRunInFind
 */
function cargarDatos(doc)
{
	var record = null
	/** @type {JSFoundSet<db:/sistemas/paciente>} */
	var fs_pac = databaseManager.getFoundSet('sistemas','paciente')
	
	databaseManager.setAutoSave(false)
	fs_pac.find()
	fs_pac.paciente_doc_nro = doc
	var cant = fs_pac.search()
	databaseManager.setAutoSave(true)
	if(cant <= 0)
	{
		record = foundset.getSelectedRecord()
		record.turno_dia_estado = 1
		return
	}
	if(cant > 1)
	{
		scopes.globals.ventanaAceptar("Existe mas de una persona con ese DNI. Por favor verifique.",controller.getName())
		return
	}
	if(cant == 1)
	{
		record = foundset.getSelectedRecord()
		record.paciente_id = fs_pac.getRecord(1).paciente_id
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
 * @properties={typeid:24,uuid:"E41287C6-59A8-4D74-BDD6-478ADB0B493D"}
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
 * @properties={typeid:24,uuid:"15DAEACE-00F6-4631-9198-838BD2D8A309"}
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
 * @properties={typeid:24,uuid:"CD7DCFBC-55E5-4C81-B3FA-8167095207F3"}
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
 * @properties={typeid:24,uuid:"AEFC3A76-595C-4099-8A8E-0B766075BF18"}
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
		record.paciente_id = 0
		databaseManager.saveData()
	}
	calcularCantTurnos()
	return true
}

/**
 * @properties={typeid:24,uuid:"819EC050-2E08-49D5-9FFE-435B872B9254"}
 * @AllowToRunInFind
 */
function calcularCantTurnos()
{
	vl_turnos_libre 	  = 0
	vl_turnos_ocupados 	  = 0
	vl_turnos_confirmados = 0
	vl_turnos_no_atiende  = 0
	vl_sobreturnos 		  = 0

	/** @type {JSFoundSet<db:/sistemas/paciente>} */
	var fs_pac = databaseManager.getFoundSet('sistemas','paciente')

	for(var i=1;i<=foundset.getSize();i++)
	{
		var record = foundset.getRecord(i)
		
		databaseManager.setAutoSave(false)
		fs_pac.find()
		fs_pac.paciente_doc_nro = record.turno_paciente_nro_docu
		var cant = fs_pac.search()
		databaseManager.setAutoSave(true)
		
		if(cant == 1)
		{
			record.paciente_id = fs_pac.paciente_id
		}	
	
		
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
 * @properties={typeid:24,uuid:"D2A75A63-EB5F-430D-BC3E-3EF3166FB15B"}
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
		if(record.turno_estado == 1|| record.turno_estado == 2 || record.turno_estado == 3 || record.turno_estado == 4 || record.turno_estado == 5)
		{
			item1.enabled = false
			item2.enabled = true			
		}
	}	
	menu.show(event.getSource())
}

/**
 * @properties={typeid:24,uuid:"69805071-28BC-44CB-BA25-AE5514EE5427"}
 * @AllowToRunInFind
 */
function completarDatos()
{
	forms.cli_turnos_paciente_datos.vl_form_anterior = controller.getName()	
	globals.ventanaFormulario('datosTurnos','Litoral Software',forms.cli_turnos_paciente_datos.controller.getName())
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"5C369EA8-F7EF-4B6F-93C6-D58840C6A1D7"}
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
			fs_pac.obsoc_id_1 = new Number(turno_paciente_obra_social)
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
 * @properties={typeid:24,uuid:"BD74351A-42A5-4C9E-8D20-08C4C15C7F86"}
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
 * @properties={typeid:24,uuid:"810EC29C-81F0-4780-9BE8-66CB93E55F0E"}
 */
function eliminarRegTurno()
{
	foundset.deleteRecord(foundset.getSelectedRecord())
	vl_sobreturnos--
}

/**
 * @properties={typeid:24,uuid:"86647ABA-3F44-4A2E-87B1-363438D60118"}
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
 * @properties={typeid:24,uuid:"306B0F8B-6D73-40A5-82ED-42DFE24F3E97"}
 */
function sobreturno() 
{
	if(vl_medico == null || vl_medico == 0)
	{
		return
	}
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
 * @properties={typeid:24,uuid:"D84214AE-626E-4492-B288-B28B4CFCCA48"}
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
 * @properties={typeid:24,uuid:"3F245900-F978-419C-AB93-54B69EEBC3C1"}
 */
function onDataChangeEstado() 
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
