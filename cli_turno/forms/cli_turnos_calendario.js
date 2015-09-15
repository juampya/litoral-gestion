/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6B44F041-AC35-489D-B846-6D1C758C067A",variableType:4}
 */
var vl_medico = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"29FCBC88-4060-48F7-B362-952FE0A9F7E1",variableType:93}
 */
var vl_dia = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3EB7A1FF-15B3-4DB8-9A6A-00A3E8E5CA6A"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		vl_dia = application.getServerTimeStamp()
		elements.lbl_fecha.text = "FECHA: "+utils.dateFormat(vl_dia,"dd-MM-yyyy")
		vl_medico = null
		elements.btn_sobreturno.enabled = false
		crearDatePicker()
		forms.cli_turnos_calendario_horas.vl_dia = vl_dia
		forms.cli_turnos_calendario_horas.vl_medico = 0
		forms.cli_turnos_calendario_horas.Filtro()
	}
}

/**
 * @properties={typeid:24,uuid:"A1C95474-4395-49C0-A513-09C84B478C3F"}
 */
function crearDatePicker()
{
//	var _oDP = new JSDatePicker();
//	
//	// required parameters
//	_oDP.callback.formName = "cli_turnos_calendario";
//	_oDP.callback.tabPanel = "tabless";
//	_oDP.callback.method = "cargaTurnos";
//	_oDP.callback.columnName = "vl_dia";
//	
//	_oDP.show(0,0);	
	elements.tabless.removeAllTabs()
	elements.tabless.addTab(forms.cli_turnos_calendario_picker)

}

/**
 * TODO generated, please specify type and doc for the params
 * @param dia
 * @properties={typeid:24,uuid:"1731A21A-DE2A-4170-B238-1FB461A369D1"}
 */
function cargaTurnos(dia)
{
	if(vl_medico == null || vl_medico == 0)
	{
		forms.cli_turnos_calendario_horas.vl_dia = vl_dia
		forms.cli_turnos_calendario_horas.vl_medico = 0
		forms.cli_turnos_calendario_horas.Filtro()
	}
	else
	{
		forms.cli_turnos_calendario_horas.vl_dia = dia
		forms.cli_turnos_calendario_horas.vl_medico = vl_medico
		forms.cli_turnos_calendario_horas.cargar()
	}
	elements.lbl_fecha.text = "FECHA: "+utils.dateFormat(dia,"dd-MM-yyyy")
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"066CE1F2-0621-458F-A5B2-6455F5B83280"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms['clinica_inicio_clinica'].controller.show()
}

/**
 * @properties={typeid:24,uuid:"A0B97CED-CE33-480A-88A0-CF1270060D42"}
 */
function Imprimir() 
{
	plugins.jasperPluginRMI.runReport('sistemas','rpt_cli_turnos.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pturno_dia:vl_dia, pmedico:vl_medico})
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
 * @properties={typeid:24,uuid:"7408035A-133B-4C61-B04D-CF57D0C94C5E"}
 * @AllowToRunInFind
 */
function onDataChangeMedico(oldValue, newValue, event) 
{
	elements.btn_sobreturno.enabled = false
	if(vl_medico != null && vl_medico != 0)
	{
		elements.btn_sobreturno.enabled = true
	}
	
	/** @type {JSFoundSet<db:/sistemas/agenda_parametros>} */
	var fs_age_param = databaseManager.getFoundSet('sistemas','agenda_parametros')	
	fs_age_param.find()
	fs_age_param.medico_id = vl_medico
	var cant = fs_age_param.search()
	
	/**@type {Array}*/
	var array = new Array()
		
	if(cant>0)
	{
		if(fs_age_param.age_lun==1)
		{
			array.push("Lunes")
		}
		
		if(fs_age_param.age_mar==1)
		{
			array.push("Martes")
		}
		
		if(fs_age_param.age_mie==1)
		{
			array.push("Miércoles")
		}
		
		if(fs_age_param.age_jue==1)
		{
			array.push("Jueves")
		}
		
		if(fs_age_param.age_vie==1)
		{
			array.push("Viernes")
		}
		
		if(fs_age_param.age_sab==1)
		{
			array.push("Sábado")
		}
		
		if(fs_age_param.age_dom==1)
		{
			array.push("Domingo")
		}
	}
	
	if(array.length>0)
	{
		elements.lbl_dias_atencion.text = array.join(" - ")
	}
	else
	{
		elements.lbl_dias_atencion.text = "No configurado."
	}

	cargaTurnos(vl_dia)
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5C3EC1F9-4B87-405A-9D9F-9AF6335E7F82"}
 */
function onActionSobreturno(event) {
	forms.cli_turnos_calendario_horas.sobreturno()
}
