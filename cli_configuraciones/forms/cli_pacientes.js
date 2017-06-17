/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"63DD264E-892A-409D-A4AE-7333ABD98C16",variableType:93}
 */
var vl_ultimaconsulta_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5E73BD81-0A0A-4035-9C8B-E4AD49FDEFA1",variableType:93}
 */
var vl_ultimaconsulta_desde = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2CBBD731-0EDA-4041-8745-0E0578B73080",variableType:93}
 */
var vl_fingreso_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"43D29A22-7BA5-46B8-8614-DFB29CB7C992",variableType:93}
 */
var vl_fingreso_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6669C77A-79B7-4D2E-A4C6-565919180477",variableType:4}
 */
var vl_documento = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"90B0BD66-1588-4216-99EB-DF1F60853E03"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"621EE3EC-31D2-4223-98DD-3FED4DE31E68",variableType:4}
 */
var vl_nro_ficha = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB6C8E13-13C2-4477-8454-F41C32F04D97"}
 */
function onActionVolverInicio(event) 
{
	databaseManager.setAutoSave(true)
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
function onActionAgregarPaciente(event)
{
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
		processFunction: copia,
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
//	application.updateUI()
//	
//	/** @type {JSFoundSet<db:/movedb/tbldpacientes>} */
//	var fs_pacientes = databaseManager.getFoundSet('movedb','tbldpacientes')
//		fs_pacientes.loadAllRecords()
//		fs_pacientes.find()
//		fs_pacientes.nump = ' > 85096 '
//		fs_pacientes.search()
//		
//		/** @type {JSFoundSet<db:/sistemas/localidades>} */
//	var fs_localidades = databaseManager.getFoundSet('sistemas','localidades')
//		fs_localidades.loadAllRecords()
//
//	for (var i = 1; i <= databaseManager.getFoundSetCount(fs_pacientes); i++)
//	//for (var i = 1; i <= 10; i++) 
//	{
//		var record = fs_pacientes.getRecord(i);
//		if(record.nump > 85096)
//		{	
//			controller.newRecord(false)
//			paciente_nro_ficha = record.nump
//			paciente_nombre = record.apep
//			paciente_domicilio = record.domicp
//			paciente_telefono_1 = record.telefonop
//			paciente_doc_nro = utils.stringToNumber(record.docump)
//			if(record.sexop=="M")
//			{
//				paciente_sexo = 1
//			}
//			else
//			{
//				paciente_sexo = 2
//			}
//			
//			fs_localidades.find()
//			fs_localidades.localidad_cod_postal = record.tbldpacientes_to_tbldatoslocalidades.cplocalidad
//			if(fs_localidades.search()>0)
//			{
//				cod_postal_id = fs_localidades.localidad_id
//			}
//			docu_id = 1
//			paciente_fec_ingreso = record.fechaingp
//			paciente_fecha_naci  = record.fechanacp
//			paciente_fec_ultima_consulta = record.fechaultp
//			emp_id = 2
//			
//			databaseManager.saveData(foundset)
//		}
//	}
//	plugins.busy.unblock();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5826DFB8-1B0B-42EE-9206-0184E20B26EF"}
 * @AllowToRunInFind
 */
function onActionFiltro(event)
{
	controller.find()
	if(vl_nombre!=null) paciente_nombre = vl_nombre
	if(vl_nro_ficha!=null) paciente_nro_ficha = vl_nro_ficha
	if(vl_documento!=null) paciente_doc_nro = vl_documento
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8D6428AC-FC3C-4D02-9055-87A5146837C6"}
 */
function onActionRefrescar(event) 
{
	vl_documento 			= null
	vl_fingreso_desde 		= null
	vl_fingreso_hasta 		= null
	vl_nombre 				= null
	vl_nro_ficha 			= null
	vl_ultimaconsulta_desde = null
	vl_ultimaconsulta_hasta = null
	
	onActionFiltro(event)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B6D2C79A-E4EE-480E-8A6E-973AA21DAE85"}
 */
function onShow(firstShow, event)
{
	databaseManager.setAutoSave(false)
}
