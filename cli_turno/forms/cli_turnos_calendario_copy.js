/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"86A83508-28CB-4C9B-B9FC-26B43039927B",variableType:4}
 */
var vl_medico = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1E110D8A-0766-4E0A-80E3-46C30DE8933F",variableType:93}
 */
var vl_dia = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D329FC4D-007A-483E-BD69-C1288718564C"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		//vl_dia = application.getServerTimeStamp()
		vl_dia = new Date(application.getServerTimeStamp().getFullYear(),application.getServerTimeStamp().getMonth(),application.getServerTimeStamp().getDate())
		
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
 * @properties={typeid:24,uuid:"91E25CDF-E5B0-454F-A054-C0389320BA76"}
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
 * @properties={typeid:24,uuid:"486CA4F8-2B15-48A9-87E5-6563DA505CE6"}
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
 * @properties={typeid:24,uuid:"7706C4C1-6B9E-41B2-B585-1BB170ABADD0"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms['clinica_inicio_clinica'].controller.show()
}

/**
 * @properties={typeid:24,uuid:"AB2CF0C6-90D5-4A72-AA97-E1DC1B6C9142"}
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
 * @properties={typeid:24,uuid:"AD5DE008-AE9B-4D44-8143-8DBDEA188D42"}
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
	databaseManager.setAutoSave(false)
	fs_age_param.find()
	fs_age_param.medico_id = vl_medico
	var cant = fs_age_param.search()
	databaseManager.setAutoSave(true)
	
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
 * @properties={typeid:24,uuid:"8D7A6BC7-3544-4303-A103-2D5F0A4CC3C9"}
 */
function onActionSobreturno(event) {
	forms.cli_turnos_calendario_horas.sobreturno()
}
