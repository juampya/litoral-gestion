/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3479EC70-6912-41B2-8BB1-A4AE54C605A6"}
 */
function onActionGrabar(event) 
{
	databaseManager.saveData(foundset)
		
	/** @type {JSFoundSet<db:/sistemas/visita_informe>} */
	var fs_informe = databaseManager.getFoundSet('sistemas','visita_informe')		
	fs_informe.newRecord()
	fs_informe.visita_id = visita_id
	databaseManager.saveData(fs_informe)
	
	forms.cli_visitas_lst.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CE9EA3F5-92B9-4A4E-AC54-3C9321FF5B4A"}
 */
function onActionVolver(event) 
{

	databaseManager.revertEditedRecords(foundset)
	databaseManager.setAutoSave(true)
	forms.cli_visitas_lst.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"391CE877-BD27-455E-87D5-598D4BE40545"}
 */
function onShow(firstShow, event) 
{
	databaseManager.setAutoSave(false)
	controller.newRecord()
	visita_fecha = application.getServerTimeStamp()
	emp_id = scopes.globals.mx_empresa_id
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98AFC6E1-1BA8-421D-B152-9B9AE9C15873"}
 */
function onActionBuscar(event)
{
	forms.cli_busca_paciente.vl_paciente = null
	forms.cli_busca_paciente.vl_cliente  = cliente_id 
	
	var win = application.createWindow("empleados", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.cli_busca_paciente);	
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
 * @properties={typeid:24,uuid:"2CBE1A60-3888-48F8-9010-536FF439CE24"}
 * @AllowToRunInFind
 */
function onDataChangePaciente(oldValue, newValue, event)
{
	cargarDatos(newValue)
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param id
 *
 * @properties={typeid:24,uuid:"774F2812-3034-4680-8003-B33D4FEF693C"}
 * @AllowToRunInFind
 */
function cargarDatos(id)
{
	/** @type {JSFoundSet<db:/sistemas/paciente>} */
	var fs_pac = databaseManager.getFoundSet('sistemas','paciente')
	
	databaseManager.setAutoSave(false)
	fs_pac.find()
	fs_pac.paciente_id = id
	var cant = fs_pac.search()

	if(cant <= 0)
	{
		scopes.globals.ventanaAceptar("Ese código de empleado no existe. Por favor verifique.",controller.getName())
		visita_paciente_nombre = null
		visita_paciente_domicilio = null
	}
	else
	{
		visita_paciente_nombre = fs_pac.paciente_nombre
		visita_paciente_domicilio = fs_pac.paciente_domicilio
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
 * @properties={typeid:24,uuid:"ED3A4F5E-1F66-426D-A4F9-91DFF9456B33"}
 */
function onDataChangeEmpresa(oldValue, newValue, event) 
{
	if(oldValue != newValue)
	{
		paciente_id 			  = null
		visita_paciente_nombre 	  = null
		visita_paciente_domicilio = null
	}
	return true
}
