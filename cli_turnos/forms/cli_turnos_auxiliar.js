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
		databaseManager.saveData(fs_turno)
		crearDetalleDia(fs_turno.turno_id, id,dia) 
		
		
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
			cond = false
			databaseManager.saveData(fs_turno)
			crearDetalleDia(fs_turno.turno_id, id,dia)			
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

/**
 * @properties={typeid:24,uuid:"BD27152E-82BE-4D7A-B1D7-81151974C977"}
 * @AllowToRunInFind
 */
function calcularTurnosOcupados(dia, id,idDia) 
{
	var cant = 0
	/** @type {JSFoundSet<db:/sistemas/cli_turno_calendario_dia>} */
	var fs_tur = databaseManager.getFoundSet('sistemas','cli_turno_calendario_dia')
	fs_tur.find()
	fs_tur.cli_turno_id = id
	fs_tur.cli_turno_dia_id = idDia
	fs_tur.search()
	for(var i=1;i<=fs_tur.getSize();i++)
	{
		var reg = fs_tur.getRecord(i)
		if(reg.cli_turno_calendario_dia_to_turno.turno_dia_estado != 0)
		{
			cant++
		}
	}
	return cant
}

/**
 * @properties={typeid:24,uuid:"54867ABE-DCB8-4F1D-A842-26D9C2753702"}
 */
function calcularTurnosLibres(doctor, dia,mes,anio, id,idDia) 
{
	var fecha = new Date(anio,mes,dia)
	var txd = calcularCantTurnoXDia(doctor,fecha)
	var to = calcularTurnosOcupados(dia,id,idDia)
	return (txd - to)
}

/**
 * @param {Number} turno
 * @param {Number} id
 * @param {Date} dia 
 * @properties={typeid:24,uuid:"FF9B89F3-8C8C-4122-A25F-5747E2D544D9"}
 */
function crearDetalleDia(turno, id,dia) 
{
	/**@type {String}*/
	var idString = new String(id) + new String(dia.getDate())
	var nuevoId = new Number(idString)
	/** @type {JSFoundSet<db:/sistemas/cli_turno_calendario_dia>} */
	var fs_cal_dia = databaseManager.getFoundSet('sistemas','cli_turno_calendario_dia')
	fs_cal_dia.newRecord()
	fs_cal_dia.cli_turno_dia_id = nuevoId
	fs_cal_dia.cli_turno_dia_turno = turno
	fs_cal_dia.cli_turno_id = id
	fs_cal_dia.turno_id = turno
	fs_cal_dia.empresa_id = 1
	fs_cal_dia.cli_turno_dia_fecha = dia
	databaseManager.saveData(fs_cal_dia)
	actualizarIdDia(id,dia, nuevoId)
}

/**
 * @param {Number} id
 * @param {Date} dia
 * @param {Number} nuevoId  
 * @properties={typeid:24,uuid:"CD6A0AFE-9357-4158-9E46-298E5211F54F"}
 */
function actualizarIdDia(id,dia, nuevoId) 
{

	var campo = 'cal_turno_id_' + dia.getDate()
	/** @type {JSFoundSet<db:/sistemas/cli_turno_calendario>} */
	var fs_cal = databaseManager.getFoundSet('sistemas','cli_turno_calendario')	
	fs_cal.loadRecords(id)
	fs_cal[campo] = nuevoId
	databaseManager.saveData(fs_cal)
}
