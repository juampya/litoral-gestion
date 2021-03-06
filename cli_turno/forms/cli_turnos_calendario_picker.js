/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"716F04D2-D725-4CB0-B27F-A76B43DBE84C",variableType:-4}
 */
var vl_meses = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"65EB0EC8-3EE3-4D42-AB29-980B9FD1EECF",variableType:93}
 */
var vl_dia_actual = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"658387F7-4AB6-436A-94C5-F5823DF35229",variableType:93}
 */
var vl_dia_seleccionado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3D3417B9-B794-4E53-BC09-DCD529866C84"}
 */
var vl_color_seleccionado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"76310ADF-4102-4982-84D8-75F36A7077F2"}
 */
var vl_color_dia_hoy = null;

/**
 * @properties={typeid:24,uuid:"E2650F22-A1AE-4080-8C73-623F5EEA2771"}
 */
/* declaration missing */
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"446A1284-5CF8-46B0-B336-26CD78BB2E7B"}
 */
var vl_btn_select = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0457F878-3AD8-4DFB-BB20-707BBE13D087"}
 */
var vl_btn_hoy = null;

/**
 * @type {Array<Number>}
 * @properties={typeid:35,uuid:"98083CF4-962B-4016-AF33-FD35CC8408D0",variableType:-4}
 */
var vl_mes_anio = null;

/**
 * @param {Date} diaSemilla
 * @properties={typeid:24,uuid:"7ACE6A7B-8A33-4CB7-AAC0-28269479E42F"}
 * @AllowToRunInFind
 */
function armaNumeracion(diaSemilla)
{
	if(vl_dia_actual==null) vl_dia_actual = vl_dia_actual = new Date(application.getServerTimeStamp().getFullYear(),application.getServerTimeStamp().getMonth(),application.getServerTimeStamp().getDate(),0,0,0);
	
	inicializarBotones()
	diaSemilla.setHours(0,0,0)
	var primerDia = new Date(diaSemilla.getFullYear(),diaSemilla.getMonth(),1);
	var diaDeSemana = primerDia.getDay() + 1;
	var ultimoDia = globals.ultimoDiaMes(diaSemilla.getMonth()+1,diaSemilla.getFullYear())
	var diaNro = 0;
	
	for(var i=1;i<=6;i++)
	{
		var j = i==1?diaDeSemana:1;
		for(j;j<=7;j++)
		{
			var boton = 'nro_'+i+"_"+j;
			
			if(diaNro<ultimoDia)
			{
				diaNro++;
				/**@type {Array}*/
				var array = BuscaTurnos(diaNro,diaSemilla.getMonth(),diaSemilla.getFullYear());
				
				elements[boton].visible = true;
				elements[boton]['text'] = diaNro;
				elements[boton]['toolTipText'] = array[0] 
				
				if(forms.cli_turnos_calendario.array_dias_atencion.indexOf(j)>0 && array[2]==null)
				{
					//elements[boton].bgcolor = '#80ff80'
					elements[boton].bgcolor = array[1]
				}
				else
				{
					if(array[2]==null)
					{
						elements[boton]['toolTipText'] = 'No trabaja'
					}
					else
					{
						elements[boton]['toolTipText'] = array[2]
						elements[boton].bgcolor = '#0080ff'
					}
					
				//	elements[boton].bgcolor = '#ffff9d'
				}
				
				if(diaSemilla == vl_dia_actual && diaNro == diaSemilla.getDate())
				{
					elements[boton].bgcolor = '#ffff9d'
					vl_btn_hoy = boton
					if(vl_dia_actual == vl_dia_seleccionado)
					{
						vl_btn_select = boton
					}
				}
				else
				{
					if((diaSemilla.getMonth() == vl_dia_actual.getMonth()) && vl_btn_hoy != null && vl_btn_hoy != 0)
					{
						elements[vl_btn_hoy].bgcolor = '#ffff9d'
					}
					
					if(diaSemilla == vl_dia_seleccionado && diaNro == diaSemilla.getDate())
					{
						elements[boton].bgcolor = '#b0b0ff'
						vl_btn_select = boton	
					}	
				}
			}
		}
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD2CD8EF-23DF-4986-9BC3-FCCA44558AEE"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		vl_meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
		vl_dia_actual = new Date(application.getServerTimeStamp().getFullYear(),application.getServerTimeStamp().getMonth(),application.getServerTimeStamp().getDate(),0,0,0);
		vl_dia_seleccionado = vl_dia_actual
		elements.mes_anio.text = vl_meses[vl_dia_actual.getMonth()] + " del " + vl_dia_actual.getFullYear()
		vl_mes_anio = [vl_dia_actual.getMonth(),vl_dia_actual.getFullYear()]
		armaNumeracion(vl_dia_actual)
		vl_btn_select = vl_btn_hoy
		
		if(forms.cli_turnos_calendario.vl_medico!=null)
		{
			onActionDate(event)
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0B654D0-053E-4CCB-8C45-C3B76EADD615"}
 * @AllowToRunInFind
 */
function onActionDate(event) 
{
	databaseManager.saveData()
	
	if(vl_mes_anio[0]==vl_dia_actual.getMonth() && vl_mes_anio[1]==vl_dia_actual.getFullYear())
	{
		elements[vl_btn_hoy].bgcolor = '#ffff9d'
	}

	if(vl_btn_select != vl_btn_hoy)
	{
		elements[vl_btn_select].bgcolor = "#eeeeee"
	}
	
	vl_btn_select = event.getElementName()
	
	if(vl_btn_select=="btn_hoy")
	{
		vl_dia_seleccionado = new Date(vl_mes_anio[1],vl_mes_anio[0],application.getServerTimeStamp().getDate())
	}
	else
	{
		if(vl_btn_select!=null)
		{	
			vl_dia_seleccionado = new Date(vl_mes_anio[1],vl_mes_anio[0],new Number(elements[vl_btn_select]['text']))
		}
	}	
	
	
	if((vl_btn_select != vl_btn_hoy || vl_mes_anio[0]!=vl_dia_actual.getMonth()) && vl_btn_select!=null)
	{
		elements[vl_btn_select].bgcolor = '#b0b0ff'
	}
	
	forms.cli_turnos_calendario.vl_dia = vl_dia_seleccionado
	forms.cli_turnos_calendario.cargaTurnos(vl_dia_seleccionado)
}

/**
 * @properties={typeid:24,uuid:"505CFA7B-6F16-40D4-9DB2-F5709A6B6791"}
 */
function inicializarBotones()
{
	for(var i=1;i<=6;i++)
	{
		for(var j=1;j<=7;j++)
		{
			var boton = 'nro_'+i+"_"+j;
			elements[boton].bgcolor = "#eeeeee"
			elements[boton].visible = false
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BB8129E-EE22-49B0-A2EF-B939C5C7C287"}
 */
function onActionAdelante(event) 
{
	databaseManager.saveData()
	vl_mes_anio[1] = vl_mes_anio[0]==11?vl_mes_anio[1]+1:vl_mes_anio[1]
	vl_mes_anio[0] = vl_mes_anio[0]==11?0:vl_mes_anio[0]+1
	vl_dia_seleccionado = new Date(vl_mes_anio[1],vl_mes_anio[0],new Number(elements[vl_btn_select]['text']),0,0,0)
	elements.mes_anio.text = vl_meses[vl_mes_anio[0]] + " del " + vl_mes_anio[1]
	armaNumeracion(vl_dia_seleccionado)
	forms.cli_turnos_calendario.vl_dia = vl_dia_seleccionado
	forms.cli_turnos_calendario.cargaTurnos(vl_dia_seleccionado)

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F9D2487E-14A5-4EFE-BC4E-F9AF8F3FB6B7"}
 */
function onActionAtras(event) 
{
	databaseManager.saveData()
	vl_mes_anio[1] = vl_mes_anio[0]==0?vl_mes_anio[1]-1:vl_mes_anio[1]
	vl_mes_anio[0] = vl_mes_anio[0]==0?11:vl_mes_anio[0]-1
	vl_dia_seleccionado = new Date(vl_mes_anio[1],vl_mes_anio[0],new Number(elements[vl_btn_select]['text']),0,0,0)
	elements.mes_anio.text =vl_meses[vl_mes_anio[0]] + " del " + vl_mes_anio[1]
	armaNumeracion(vl_dia_seleccionado)
	forms.cli_turnos_calendario.vl_dia = vl_dia_seleccionado
	forms.cli_turnos_calendario.cargaTurnos(vl_dia_seleccionado)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7EF0458E-E877-4231-97C7-6ADA826A7566"}
 */
function onActionHoy(event) 
{
	databaseManager.saveData()
	onShow(true,event)
}


/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param pdia
 * @param pmes
 * @param panio
 * @return {Array}
 * @properties={typeid:24,uuid:"1F74CC82-E859-4E45-B34F-D7C24A8FD211"}
 */
function BuscaTurnos(pdia,pmes,panio)
{
	/** @type {JSFoundSet<db:/sistemas/turno>} */
	var fs_turnos = databaseManager.getFoundSet('sistemas','turno')
	
	/** @type {JSFoundSet<db:/sistemas/agenda_excepciones>} */
	var fs_excepciones = databaseManager.getFoundSet('sistemas','agenda_excepciones')
		fs_excepciones.loadAllRecords()
		
	var vl_dia = new Date(panio,pmes,pdia,0,0,0);

	databaseManager.setAutoSave(false)
	fs_turnos.find()
	fs_turnos.medico_id = forms.cli_turnos_calendario.vl_medico
	fs_turnos.turno_dia = vl_dia
	fs_turnos.search()	
	databaseManager.setAutoSave(true)
	
	var vl_turnos_libre 	  = 0
	var vl_turnos_ocupados 	  = 0
	var vl_turnos_confirmados = 0
	var vl_sobreturnos 		  = 0
	var vl_turnos_no_atiende  = 0
	
	var libres 	  	= "     Libres: "
	var ocupados 	= "   Ocupados: "
	var confirmados = "Confirmados: "
	var sobreturnos = "Sobreturnos: "

	var no_atiende  = null
	
	var j
	var record1
	
	if(forms.cli_turnos_calendario.vl_medico==null)
	{	
		for (j = 1; j <= fs_excepciones.getSize(); j++)
		{
			record1 = fs_excepciones.getRecord(j);
			if(record1.excep_fecha_ini.getFullYear()==vl_dia.getFullYear() && record1.excep_fecha_ini.getMonth()==vl_dia.getMonth())
			{
				if(vl_dia.getDate()>=record1.excep_fecha_ini.getDate() && vl_dia.getDate()<=record1.excep_fecha_fin.getDate() && record1.medico_id == null)
				{
					no_atiende = application.getValueListDisplayValue('vl_tipo_dias_no_laborables',record1.excep_tipo)
				}
			}
		}
	}
	else
	{
		for (j = 1; j <= fs_excepciones.getSize(); j++)
		{
			record1 = fs_excepciones.getRecord(j);
			if(record1.excep_fecha_ini.getFullYear()==vl_dia.getFullYear() && record1.excep_fecha_ini.getMonth()==vl_dia.getMonth())
			{
				if(vl_dia.getDate()>=record1.excep_fecha_ini.getDate() && vl_dia.getDate()<=record1.excep_fecha_fin.getDate() && (record1.medico_id == null||record1.medico_id == forms.cli_turnos_calendario.vl_medico))
				{
					no_atiende = application.getValueListDisplayValue('vl_tipo_dias_no_laborables',record1.excep_tipo)
				}
			}
		}	
	}
	
//	if(tmp_excepcion>0)
//	{
//		no_atiende = application.getValueListDisplayValue('vl_tipo_dias_no_laborables',fs_excepciones.excep_tipo)
//	}
	
	for(var i=1;i<=fs_turnos.getSize();i++)
	{
		var record = fs_turnos.getRecord(i)
		
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
	
	var color = '#80ff80'
	
	if(fs_turnos.getSize()>0)
	{	
		if(vl_turnos_ocupados+vl_turnos_confirmados==fs_turnos.getSize())
		{
			color = '#ff0000' //rojo
		}
		else
		{
			if(vl_turnos_ocupados>0)
			{
				color = '#ffff80' //amarillo
			}
		}
	}	
	
	libres = libres+utils.numberFormat(vl_turnos_libre,'##')+" "
	ocupados = ocupados+utils.numberFormat(vl_turnos_ocupados,'##')+" "
	confirmados = confirmados+utils.numberFormat(vl_turnos_confirmados,'##')+" "
	sobreturnos = sobreturnos+utils.numberFormat(vl_sobreturnos,'##')+" "

	return [libres+ocupados+confirmados+sobreturnos,color,no_atiende]
} 