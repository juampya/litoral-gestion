/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2544419B-7F0E-4580-8D32-3FC188967370",variableType:4}
 */
var vl_rango_turno = null;

/**
 *@param {Number} doctor
 *@param {Date} dia
 *@param {Number} id
 * @properties={typeid:24,uuid:"F960A8C1-B8D3-4038-982C-7CD6C58908FC"}
 * @AllowToRunInFind
 */
function generarTurno(doctor, dia, id) 
{
	
	if(dia == null || dia == 0)
	{
		return
	}
	
	/** @type {JSFoundSet<db:/sistemas/turno>} */
	var fs_turno = databaseManager.getFoundSet('sistemas','turno')		
	fs_turno.find()
	fs_turno.medico_id = doctor
	fs_turno.turno_dia = dia
	var cant1 = fs_turno.search()
	if(cant1 > 0)
	{
		return
	}
	
	/** @type {JSFoundSet<db:/sistemas/agenda_parametros>} */
	var fs_age_param = databaseManager.getFoundSet('sistemas','agenda_parametros')	
	fs_age_param.find()
	fs_age_param.medico_id = doctor
	var cant = fs_age_param.search()
	if(cant <= 0)
	{
		return
	}
	var myRec = fs_age_param.getRecord(1)
	
	vl_rango_turno = myRec.age_param_rango
	var cond = true
	var fec = null
	fs_turno.clear()
	//----------------------------------------------------------------
	var primer_dia = dia
	primer_dia.setHours(myRec.age_param_hora_inicial,myRec.age_param_minuto_inicial)
	var periodo = plugins.DateUtils.Period(0,0,0,0,myRec.age_param_rango)
	var vDateTime = plugins.DateUtils.DateTime(primer_dia);
	//----------------------------------------------------------------
	while(cond) 
	{
		fs_turno.newRecord()
		fec = new Date()
		fs_turno.turno_dia = vDateTime.date
		fec.setHours(vDateTime.hours)
		fec.setMinutes(vDateTime.minutes)
		fs_turno.turno_hora = fec
		fs_turno.turno_dia_estado = 0
		fs_turno.medico_id = doctor
		fs_turno.cal_turno_id = id
		databaseManager.saveData(fs_turno)
		
		vDateTime.add(periodo)
		if(vDateTime.hours >= myRec.age_param_hora_final &&  vDateTime.minutes >= myRec.age_param_minuto_final)
		{
			fs_turno.newRecord()
			fec = new Date()
			fs_turno.turno_dia = vDateTime.date
			fec.setHours(vDateTime.hours)
			fec.setMinutes(vDateTime.minutes)
			fs_turno.turno_hora = fec
			fs_turno.turno_dia_estado = 0
			fs_turno.medico_id = doctor
			fs_turno.cal_turno_id = id	
			cond = false			
			databaseManager.saveData(fs_turno)
		}
	}
	
}



/**
 *@param {Number} doctor
 *@param {Date} dia
 *
 * @properties={typeid:24,uuid:"E2EB16ED-B71C-4F8C-8DB8-CD38DD8147DA"}
 * @AllowToRunInFind
 */
function calcularCantTurnoXDia(doctor, dia) 
{

	var cantidad = 0
	if(dia == null || dia == 0)
	{
		return cantidad
	}
	/** @type {JSFoundSet<db:/sistemas/agenda_parametros>} */
	var fs_age_param = databaseManager.getFoundSet('sistemas','agenda_parametros')	
	fs_age_param.find()
	fs_age_param.medico_id = doctor
	var cant = fs_age_param.search()
	if(cant <= 0)
	{
		return cantidad
	}
	var myRec = fs_age_param.getRecord(1)
	
	vl_rango_turno = myRec.age_param_rango
	var primer_dia = dia
	primer_dia.setHours(myRec.age_param_hora_inicial,myRec.age_param_minuto_inicial)
	var periodo = plugins.DateUtils.Period(0,0,0,0,myRec.age_param_rango)
	var vDateTime = plugins.DateUtils.DateTime(primer_dia);
	//----------------------------------------------------------------
	while(true) 
	{
		cantidad++
		vDateTime.add(periodo)
		if(vDateTime.hours >= myRec.age_param_hora_final &&  vDateTime.minutes >= myRec.age_param_minuto_final)
		{
			cantidad++
			return cantidad
		}

	}
	return cantidad
}

