/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB6C8E13-13C2-4477-8454-F41C32F04D97"}
 */
function onActionVolverInicio(event) 
{
	scopes.globals.CargarMenu()
	forms['clinica_inicio_clinica'].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE0942D6-E684-426F-9AC6-822A17180AA1"}
 */
function onActionAgregarPaciente(event) {
	forms.cli_pacientes_abm.vl_abm = 1
	forms.cli_pacientes_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A6A22593-FCA8-4960-A207-6197B9FA1C3A"}
 */
function onActionVerPaciente(event) {
	forms.cli_pacientes_abm.vl_abm = 0
	forms.cli_pacientes_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B8DE24B-F347-4E61-B886-8896ECE5EC4A"}
 * @AllowToRunInFind
 */
function onActionCopiarDatos(event) 
{
	
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
	    plugins.busy.prepare();
	}
	
	var params = {
		processFunction: copia(),
		message: 'Copiando Pacientes... espere un momento por favor.',
		opacity: 0.5,
		paneColor: '#000000',
		showCancelButton: false,
		cancelButtonText: 'Stop!'
	};
	plugins.busy.block(params);	
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"F96B6C39-4A1A-4ABA-BCC2-7860B7E435D1"}
 */
function copia()	
{	
	application.updateUI()
	
	/** @type {JSFoundSet<db:/movedb/tbldpacientes>} */
	var fs_pacientes = databaseManager.getFoundSet('movedb','tbldpacientes')
		fs_pacientes.loadAllRecords()
		fs_pacientes.find()
		fs_pacientes.nump = ' > 64120 '
		fs_pacientes.search()
		
		/** @type {JSFoundSet<db:/sistemas/localidades>} */
	var fs_localidades = databaseManager.getFoundSet('sistemas','localidades')
		fs_localidades.loadAllRecords()

	for (var i = 1; i <= databaseManager.getFoundSetCount(fs_pacientes); i++)
	//for (var i = 1; i <= 10; i++) 
	{
		var record = fs_pacientes.getRecord(i);
		if(record.nump > 64120)
		{	
			controller.newRecord(false)
			paciente_nro_ficha = record.nump
			paciente_nombre = record.apep
			paciente_domicilio = record.domicp
			paciente_telefono_1 = record.telefonop
			paciente_doc_nro = utils.stringToNumber(record.docump)
			if(record.sexop=="M")
			{
				paciente_sexo = 1
			}
			else
			{
				paciente_sexo = 2
			}
			
			fs_localidades.find()
			fs_localidades.localidad_cod_postal = record.tbldpacientes_to_tbldatoslocalidades.cplocalidad
			if(fs_localidades.search()>0)
			{
				cod_postal_id = fs_localidades.localidad_id
			}
			docu_id = 1
			paciente_fec_ingreso = record.fechaingp
			paciente_fecha_naci  = record.fechanacp
			paciente_fec_ultima_consulta = record.fechaultp
			emp_id = 2
			
			databaseManager.saveData(foundset)
		}
	}
	plugins.busy.unblock();
}
