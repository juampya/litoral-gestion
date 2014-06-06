
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E4748A20-A602-4026-B140-60B2048B6671",variableType:4}
 */
var vg_matriculado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"04E63DE3-924E-4B33-9EF5-B7C0FE2AC992",variableType:4}
 */
var vg_nro_tmp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96FEEDF5-E815-473F-BA01-0CFFBAAC79BE",variableType:4}
 */
var vg_mat_anio_final = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9E1FD14F-4B3F-47EF-ACAF-AC2AF1066D25",variableType:4}
 */
var vg_mat_anio_inicial = null;


/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param mes
 * @param anio
 * @param matriculado
 *
 * @properties={typeid:24,uuid:"D2F12542-7F5B-4E92-ABBD-92FCFD450FB8"}
 */
function generar_cuotas_mensuales(mes, anio, matriculado) 
{
	/** @type {JSFoundSet<db:/sistemas/mat_matriculados>} */
	var fs_matriculados = databaseManager.getFoundSet('sistemas','mat_matriculados')
	if(matriculado == null)
	{
		//busca todos los matriculados q no tienen primer movimiento y q estan activos en mes y anio
		
		var qry = 		
		"SELECT * FROM mat_matriculados as a " +
		"where a.mat_estado = 1 and a.mat_id not in (select mat_id from mat_movimientos as b where b.mov_anio_emision = " + anio + " and b.mov_mes_emision =" + mes + " and b.mov_tipo_de_movimiento = 1) "
		
		/** @type {JSDataSet<id:number>}*/
		var ds = databaseManager.getDataSetByQuery('sistemas', qry, new Array(), -1);
		
		fs_matriculados.loadRecords(ds)

	}
	else
	{
		fs_matriculados.find()
		fs_matriculados.mat_id = matriculado
		fs_matriculados.mat_estado = 1
		fs_matriculados.search()		
	}
	
	//Por cada Matriculado Activo ---------------------------------------------------------------------
	for (var i = 1; i <= fs_matriculados.getSize(); i++) 
	{
		var rec = fs_matriculados.getRecord(i)

		//Graba Encabezado del movimiento-----------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos_aux>} */
		var fs_movim_aux = databaseManager.getFoundSet('sistemas','mat_movimientos_aux')
		fs_movim_aux.newRecord()
		fs_movim_aux.mat_id = rec.mat_id
		fs_movim_aux.mov_mes_emision = mes
		fs_movim_aux.mov_anio_emision = anio
		fs_movim_aux.mov_descripcion = "Cuota Mensual " + mes + "/" + anio
		fs_movim_aux.mov_estado = 0 //Deuda
		fs_movim_aux.mov_fecha_emision = new Date(anio, mes - 1, 15)
		fs_movim_aux.mov_tipo_de_movimiento = 0 // Cuota mensual
		fs_movim_aux.tmp_id = globals.vg_nro_tmp
		fs_movim_aux.mov_grab_fec = application.getServerTimeStamp()
		fs_movim_aux.mov_grab_ope = globals.ag_usuariovigente.usu_id
		databaseManager.saveData(fs_movim_aux) 
		//fin Graba Encabezado del movimiento--------------------------------------------------------
		
		//Busca Los ingresos del matriculado-----------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_matriculado_rel_ingresos>} */
		var fs_rel_ing = databaseManager.getFoundSet('sistemas','mat_matriculado_rel_ingresos')
		fs_rel_ing.find()
		fs_rel_ing.mat_id = rec.mat_id
		fs_rel_ing.rel_estado = 1 //Activo para ese matriculado
		fs_rel_ing.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_estado = 1 //Activo en general
		fs_rel_ing.search()
		//fin Busca Los ingresos del matriculado-----------------------------------------------------------
				
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos_det_aux>} */
		var fs_detalle = null	
		var acumImporte = 0
		
		//Graba Detalle del Movimiento--------------------------------------------------------------------------------------------------------
		for (var j = 1; j <= fs_rel_ing.getSize(); j++) //Por cada ingreso asociado al matriculado
		{
			var rec1 = fs_rel_ing.getRecord(j)
			if(rec1.rel_aplica_vigencia == 1)// Si tiene una fecha de vigencia a respetar 
			{
				if(fs_rel_ing.rel_fec_inicial.getFullYear() <= anio && anio <= fs_rel_ing.rel_fec_final.getFullYear())
				{
					if(fs_rel_ing.rel_fec_inicial.getMonth() <= mes && mes <= fs_rel_ing.rel_fec_final.getMonth())
					{
						fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
						fs_detalle.newRecord()
						fs_detalle.ingr_id = rec1.ingr_id
						fs_detalle.mov_id = fs_movim_aux.mov_id
						fs_detalle.det_importe = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
						fs_detalle.det_importe_original = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
						fs_detalle.tmp_id = globals.vg_nro_tmp
						databaseManager.saveData(fs_detalle) // Graba detalle del movimiento
						acumImporte += fs_detalle.det_importe
					}
				}
			}
			else
			{
				fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
				fs_detalle.newRecord()
				fs_detalle.ingr_id = rec1.ingr_id
				fs_detalle.mov_id = fs_movim_aux.mov_id
				fs_detalle.det_importe = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
				fs_detalle.det_importe_original = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
				fs_detalle.tmp_id = globals.vg_nro_tmp
				databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
				acumImporte += fs_detalle.det_importe
			}
		}
		//Fin Graba Detalle del Movimiento--------------------------------------------------------------------------------------------------------
		
		//Busca cuotas con deuda-------------------------------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
		var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
		fs_mov.find()	
		fs_mov.mov_estado = 0
		fs_mov.mat_id = rec.mat_id
		fs_mov.search()
		
		var deuda = 0
		for(var k=1;k<=fs_mov.getSize();k++)
		{
			var rec2 = fs_mov.getRecord(k)
			if(rec2.mov_fecha_emision < fs_movim_aux.mov_fecha_emision)
			{	
				deuda += rec2.mov_importe
			}
		}
		if(deuda > 0)
		{
			/** @type {JSFoundSet<db:/sistemas/mat_configuraciones>} */
			var fs_conf = databaseManager.getFoundSet('sistemas','mat_configuraciones')	
			fs_conf.loadAllRecords()
			fs_conf.getRecord(1)
			
			fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
			fs_detalle.newRecord()
			fs_detalle.ingr_id = fs_conf.conf_cuota_impaga_ingr_id //Deuda Acumulada
			fs_detalle.mov_id = fs_movim_aux.mov_id
			fs_detalle.det_importe = deuda
			fs_detalle.det_importe_original = deuda
			fs_detalle.tmp_id = globals.vg_nro_tmp
			databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
			acumImporte += fs_detalle.det_importe
			//Fin Busca cuotas con deuda-------------------------------------------------------------------------------
			
			//Calcula Interes sobre deuda-----------------------------------------------------------------
			var interes = deuda * fs_conf.conf_interes_cuota_impaga / 100
			
			fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
			fs_detalle.newRecord()
			fs_detalle.ingr_id = fs_conf.conf_interes_ingr_id //Interes
			fs_detalle.mov_id = fs_movim_aux.mov_id
			fs_detalle.det_importe = interes
			fs_detalle.det_importe_original = interes
			fs_detalle.tmp_id = globals.vg_nro_tmp
			databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
			acumImporte += fs_detalle.det_importe		
			//Fin Calcula Interes sobre deuda-----------------------------------------------------------------
		}
		//Busca devoluciones-------------------------------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_resarcimientos>} */
		var fs_res = databaseManager.getFoundSet('sistemas','mat_resarcimientos')
		fs_res.find()	
		fs_res.res_anio_aplicacion = anio
		fs_res.res_mes_aplicacion = mes
		fs_res.mat_id = rec.mat_id
		fs_res.search()
		for(var g=1;g<=fs_res.getSize();g++)
		{
			var rec3 = fs_res.getRecord(g)
			fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
			fs_detalle.newRecord()
			fs_detalle.ingr_id = rec3.ingr_id
			fs_detalle.mov_id = fs_movim_aux.mov_id
			fs_detalle.det_importe = rec3.res_importe * -1
			fs_detalle.det_importe_original = rec3.res_importe * -1
			fs_detalle.res_id = fs_res.res_id
			fs_detalle.tmp_id = globals.vg_nro_tmp
			databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
			acumImporte += fs_detalle.det_importe			
		}
		//Fin Busca devoluciones-----------------------------------------------------------------
		
		//Regraba importe del movimiento-----------------------------------------------------
		fs_movim_aux.mov_importe = acumImporte
		databaseManager.saveData(fs_movim_aux) // Graba importe del movimiento
		
	}
	
}









/**
 * TODO generated, please specify type and doc for the params
 * @param nombre
 * @param titulo
 * @param formulario
 *
 * @properties={typeid:24,uuid:"AC77E7D4-C3F9-4E07-9BC9-7F7A97B04172"}
 */
function ventanaFormulario(nombre,titulo,formulario) 
{
	var win1 = application.createWindow(nombre, JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= titulo;
	win1.show(forms[formulario]);
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param mes
 * @param anio
 * @param mat
 * @param tipo
 * @param estado
 *
 * @properties={typeid:24,uuid:"8DDD1D9A-81BF-441E-BF72-EFB3C57E27D7"}
 */
function existeMovimiento(mes, anio, mat, tipo, estado) 
{
	/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
	var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
	fs_mov.find()
	fs_mov.mov_anio_emision = anio
	fs_mov.mov_mes_emision = mes
	fs_mov.mat_id = mat
	fs_mov.mov_tipo_de_movimiento = tipo
	fs_mov.mov_estado = estado
	var cant = fs_mov.search()
	if(cant > 0)
	{
		return true
	}
	return false
}


/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param mes
 * @param anio
 * @param matriculado
 *
 * @properties={typeid:24,uuid:"C6077471-A73E-4C9C-9DE9-05EA1AEBDAAA"}
 */
function generar_cuotas_mensuales_confirmadas(mes, anio, matriculado) 
{
	/** @type {JSFoundSet<db:/sistemas/mat_matriculados>} */
	var fs_matriculados = databaseManager.getFoundSet('sistemas','mat_matriculados')
	if(matriculado == null)
	{
		//busca todos los matriculados q no tienen primer movimiento y q estan activos en mes y anio
		
		var qry = 		
		"SELECT * FROM mat_matriculados as a " +
		"where a.mat_estado = 1 and a.mat_id not in (select mat_id from mat_movimientos as b where b.mov_anio_emision = " + anio + " and b.mov_mes_emision =" + mes + " and b.mov_tipo_de_movimiento = 1) "
		
		/** @type {JSDataSet<id:number>}*/
		var ds = databaseManager.getDataSetByQuery('sistemas', qry, new Array(), -1);
		
		fs_matriculados.loadRecords(ds)

	}
	else
	{
		fs_matriculados.find()
		fs_matriculados.mat_id = matriculado
		fs_matriculados.mat_estado = 1
		fs_matriculados.search()		
	}
	
	//Por cada Matriculado Activo ---------------------------------------------------------------------
	for (var i = 1; i <= fs_matriculados.getSize(); i++) 
	{
		var rec = fs_matriculados.getRecord(i)

		//Graba Encabezado del movimiento-----------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
		var fs_movim_aux = databaseManager.getFoundSet('sistemas','mat_movimientos')
		fs_movim_aux.newRecord()
		fs_movim_aux.mat_id = rec.mat_id
		fs_movim_aux.mov_mes_emision = mes
		fs_movim_aux.mov_anio_emision = anio
		fs_movim_aux.mov_descripcion = "Cuota Mensual " + mes + "/" + anio
		fs_movim_aux.mov_estado = 0 //Deuda
		fs_movim_aux.mov_fecha_emision = new Date(anio, mes - 1, 15)
		fs_movim_aux.mov_tipo_de_movimiento = 0 // Cuota mensual
		fs_movim_aux.mov_grab_fec = application.getServerTimeStamp()
		fs_movim_aux.mov_grab_ope = globals.ag_usuariovigente.usu_id
		databaseManager.saveData(fs_movim_aux) 
		//fin Graba Encabezado del movimiento--------------------------------------------------------
		
		//Busca Los ingresos del matriculado-----------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_matriculado_rel_ingresos>} */
		var fs_rel_ing = databaseManager.getFoundSet('sistemas','mat_matriculado_rel_ingresos')
		fs_rel_ing.find()
		fs_rel_ing.mat_id = rec.mat_id
		fs_rel_ing.rel_estado = 1 //Activo para ese matriculado
		fs_rel_ing.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_estado = 1 //Activo en general
		fs_rel_ing.search()
		//fin Busca Los ingresos del matriculado-----------------------------------------------------------
				
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos_det>} */
		var fs_detalle = null	
		var acumImporte = 0
		
		//Graba Detalle del Movimiento--------------------------------------------------------------------------------------------------------
		for (var j = 1; j <= fs_rel_ing.getSize(); j++) //Por cada ingreso asociado al matriculado
		{
			var rec1 = fs_rel_ing.getRecord(j)
			if(rec1.rel_aplica_vigencia == 1)// Si tiene una fecha de vigencia a respetar 
			{
				if(fs_rel_ing.rel_fec_inicial.getFullYear() <= anio && anio <= fs_rel_ing.rel_fec_final.getFullYear())
				{
					if(fs_rel_ing.rel_fec_inicial.getMonth() <= mes && mes <= fs_rel_ing.rel_fec_final.getMonth())
					{
						fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det')
						fs_detalle.newRecord()
						fs_detalle.ingr_id = rec1.ingr_id
						fs_detalle.mov_id = fs_movim_aux.mov_id
						fs_detalle.det_importe = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
						fs_detalle.det_importe_original = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
						databaseManager.saveData(fs_detalle) // Graba detalle del movimiento
						acumImporte += fs_detalle.det_importe
					}
				}
			}
			else
			{
				fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det')
				fs_detalle.newRecord()
				fs_detalle.ingr_id = rec1.ingr_id
				fs_detalle.mov_id = fs_movim_aux.mov_id
				fs_detalle.det_importe = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
				fs_detalle.det_importe_original = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
				databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
				acumImporte += fs_detalle.det_importe
			}
		}
		//Fin Graba Detalle del Movimiento--------------------------------------------------------------------------------------------------------
		
		//Busca cuotas con deuda-------------------------------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
		var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
		fs_mov.find()	
		fs_mov.mov_estado = 0
		fs_mov.mat_id = rec.mat_id
		fs_mov.search()
		
		var deuda = 0
		for(var k=1;k<=fs_mov.getSize();k++)
		{
			var rec2 = fs_mov.getRecord(k)
			if(rec2.mov_fecha_emision < fs_movim_aux.mov_fecha_emision)
			{	
				deuda += rec2.mov_importe
			}
		}
		if(deuda > 0)
		{
			/** @type {JSFoundSet<db:/sistemas/mat_configuraciones>} */
			var fs_conf = databaseManager.getFoundSet('sistemas','mat_configuraciones')	
			fs_conf.loadAllRecords()
			fs_conf.getRecord(1)
			
			fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det')
			fs_detalle.newRecord()
			fs_detalle.ingr_id = fs_conf.conf_cuota_impaga_ingr_id //Deuda Acumulada
			fs_detalle.mov_id = fs_movim_aux.mov_id
			fs_detalle.det_importe = deuda
			fs_detalle.det_importe_original = deuda
			databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
			acumImporte += fs_detalle.det_importe
			//Fin Busca cuotas con deuda-------------------------------------------------------------------------------
			
			//Calcula Interes sobre deuda-----------------------------------------------------------------
			var interes = deuda * fs_conf.conf_interes_cuota_impaga / 100
			
			fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det')
			fs_detalle.newRecord()
			fs_detalle.ingr_id = fs_conf.conf_interes_ingr_id //Interes
			fs_detalle.mov_id = fs_movim_aux.mov_id
			fs_detalle.det_importe = interes
			fs_detalle.det_importe_original = interes
			databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
			acumImporte += fs_detalle.det_importe		
			//Fin Calcula Interes sobre deuda-----------------------------------------------------------------
		}
		//Busca devoluciones-------------------------------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_resarcimientos>} */
		var fs_res = databaseManager.getFoundSet('sistemas','mat_resarcimientos')
		fs_res.find()	
		fs_res.res_anio_aplicacion = anio
		fs_res.res_mes_aplicacion = mes
		fs_res.mat_id = rec.mat_id
		fs_res.search()
		for(var g=1;g<=fs_res.getSize();g++)
		{
			var rec3 = fs_res.getRecord(g)
			fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det')
			fs_detalle.newRecord()
			fs_detalle.ingr_id = rec3.ingr_id
			fs_detalle.mov_id = fs_movim_aux.mov_id
			fs_detalle.det_importe = rec3.res_importe * -1
			fs_detalle.det_importe_original = rec3.res_importe * -1
			fs_detalle.res_id = fs_res.res_id
			databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
			acumImporte += fs_detalle.det_importe			
		}
		//Fin Busca devoluciones-----------------------------------------------------------------
		
		//Regraba importe del movimiento-----------------------------------------------------
		fs_movim_aux.mov_importe = acumImporte
		databaseManager.saveData(fs_movim_aux) // Graba importe del movimiento
		
	}
	
}


/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param matriculado
 * @param mes
 * @param anio
 *
 * @properties={typeid:24,uuid:"B05EB393-DFC0-4BAC-B903-1FEA7AACB5C2"}
 */
function grabarPrimerMovimiento(matriculado, mes, anio)
{
	/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
	var fs_movim = databaseManager.getFoundSet('sistemas','mat_movimientos')
	fs_movim.newRecord()
	fs_movim.emp_id = scopes.globals.mx_empresa_id
	fs_movim.mat_id = matriculado
	fs_movim.mov_mes_emision = mes
	fs_movim.mov_anio_emision = anio
	fs_movim.mov_descripcion = "Cuota Mensual " + mes + "/" + anio
	fs_movim.mov_estado = 1 //Pagado
	fs_movim.mov_fecha_emision = new Date(anio, mes - 1, 15)
	fs_movim.mov_tipo_de_movimiento = 1 // Primer Movimiento
	fs_movim.mov_fec_vto1 = new Date(anio, mes - 1, fs_movim.mat_movimientos_to_mat_configuraciones.conf_venc_cuota_1_dia)
	fs_movim.mov_fec_vto2 = new Date(anio, mes - 1, fs_movim.mat_movimientos_to_mat_configuraciones.conf_venc_cuota_2_dia)
	
	databaseManager.saveData(fs_movim)	
	
	/** @type {JSFoundSet<db:/sistemas/mat_ingresos>} */
	var fs_ingr = databaseManager.getFoundSet('sistemas','mat_ingresos')
	fs_ingr.find()
	fs_ingr.ingr_primer_movimiento = 1
	fs_ingr.search()
	var acumImporte = 0
	for (var i= 1; i <= fs_ingr.getSize(); i++) 
	{
		var rec = fs_ingr.getRecord(i)
		
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos_det>} */
		var fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det')
		fs_detalle.newRecord()
		fs_detalle.ingr_id = rec.ingr_id
		fs_detalle.mov_id = fs_movim.mov_id
		fs_detalle.det_importe = rec.ingr_importe
		fs_detalle.det_importe_original = rec.ingr_importe
		databaseManager.saveData(fs_detalle) // Graba detalle del movimiento
		acumImporte += fs_detalle.det_importe		
	}
	fs_movim.mov_importe = acumImporte
	fs_movim.mov_importe_2vto = fs_movim.mov_importe+(fs_movim.mov_importe*fs_movim.mat_movimientos_to_mat_configuraciones.conf_interes_x_atraso)/100
	
	databaseManager.saveData(fs_movim) // Graba importe del movimiento
}



/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param matriculado
 *
 * @properties={typeid:24,uuid:"567B41E7-DF8B-4936-AC80-EA743C66D15B"}
 */
function asociaIngresosPorDefecto(matriculado)
{
	/** @type {JSFoundSet<db:/sistemas/mat_ingresos>} */
	var fs_ingr = databaseManager.getFoundSet('sistemas','mat_ingresos')
	fs_ingr.find()
	fs_ingr.ingr_tipo_asignacion = 0
	fs_ingr.search()
	for (var i= 1; i <= fs_ingr.getSize(); i++) 
	{
		var rec = fs_ingr.getRecord(i)
		/** @type {JSFoundSet<db:/sistemas/mat_matriculado_rel_ingresos>} */
		var fs_rel_ing = databaseManager.getFoundSet('sistemas','mat_matriculado_rel_ingresos')
		fs_rel_ing.newRecord()
		fs_rel_ing.mat_id = matriculado
		fs_rel_ing.ingr_id = rec.ingr_id
		fs_rel_ing.rel_aplica_vigencia = 0
		fs_rel_ing.rel_estado = 1
		databaseManager.saveData(fs_rel_ing)
	}
}



/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param ingreso_id
 * @param fec_ini
 * @param fec_fin
 * @param vigencia
 *
 * @properties={typeid:24,uuid:"241EA455-990F-4C17-BF04-A715DCC49BD6"}
 */
function asignarIngresosATodos(ingreso_id,fec_ini,fec_fin,vigencia) 
{
	/** @type {JSFoundSet<db:/sistemas/mat_matriculados>} */
	var fs_mat = databaseManager.getFoundSet('sistemas','mat_matriculados')
	fs_mat.find()
	fs_mat.mat_estado = 1
	fs_mat.search()
	for (var i= 1; i <= fs_mat.getSize(); i++) 
	{
		var rec = fs_mat.getRecord(i)
		/** @type {JSFoundSet<db:/sistemas/mat_matriculado_rel_ingresos>} */
		var fs_rel_ing = databaseManager.getFoundSet('sistemas','mat_matriculado_rel_ingresos')
		fs_rel_ing.newRecord()
		fs_rel_ing.mat_id = rec.mat_id
		fs_rel_ing.ingr_id = ingreso_id
		fs_rel_ing.rel_fec_inicial = fec_ini
		fs_rel_ing.rel_fec_final = fec_fin
		fs_rel_ing.rel_aplica_vigencia = vigencia
		fs_rel_ing.rel_estado = 1
		databaseManager.saveData(fs_rel_ing)		
	}
	
}


/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param ingreso_id
 *
 * @properties={typeid:24,uuid:"97DA4E4A-1B2F-4AA4-9DC4-13B0CD559BB1"}
 */
function desasignarIngresosATodos(ingreso_id)
{
	/** @type {JSFoundSet<db:/sistemas/mat_matriculado_rel_ingresos>} */
	var fs_rel_ing = databaseManager.getFoundSet('sistemas','mat_matriculado_rel_ingresos')
	fs_rel_ing.find()
	fs_rel_ing.ingr_id = ingreso_id
	fs_rel_ing.search()	
	fs_rel_ing.deleteAllRecords()
}


/**
 * @properties={typeid:24,uuid:"63C7598A-606A-443C-8F2C-268F284FD69F"}
 */
function ventanaSiNo(mensaje,metodoSi,MetodoNo,formulario) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion",mensaje,"atention",formulario,"No",MetodoNo,"Si",metodoSi,null,null,null,null)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param mensaje
 * @param formulario
 *
 * @properties={typeid:24,uuid:"102BDEC8-8F61-47A7-93EF-3795B8E9A17E"}
 */
function ventanaAceptar(mensaje,formulario) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención",mensaje,"atention",formulario,"Aceptar","",null,null,null,null,null,null)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param lnk_fecha
 * @param lnk_anio_base
 *
 * @properties={typeid:24,uuid:"1D4B3038-99E2-4C4C-AFF6-A8A67417E1CD"}
 */
function calcularFechaJuliana(lnk_fecha, lnk_anio_base) {
	var num_days = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var year = lnk_fecha.getFullYear()
	var month = lnk_fecha.getMonth() + 1
	var day = lnk_fecha.getDate();

	if (year % 4 == 0) {
		num_days[1] = 29
	}

	var diaJuliano = 0
	var anioJuliano = 0
	for (var i=1; i <= 12; i++) {
		if (i == month) {
			diaJuliano = diaJuliano + day
			break
		} else {
			diaJuliano = diaJuliano + num_days[i -1]
		}
	}
	
	diaJuliano = utils.numberFormat(diaJuliano + ((year - lnk_anio_base) * 365),'000')
	anioJuliano = lnk_anio_base.toString().substr(3,1)
	return anioJuliano+diaJuliano
}

/**
 * TODO generated, please specify type and doc for the params
 * @param pcodigo
 *
 * @properties={typeid:24,uuid:"D6EB4F07-5115-41AB-AF05-9633621CDFD9"}
 */
function DigitoVerificadorModulo1(pcodigo) 
{
	var p = 0
	var x = 1
	var total1 = 0
	for(var i=p;i<=48;i++)
	{
	//AVANZO DE A UN DIGITO DEL CODIGO DE LA BOLETA
	//LO MULTIPLICO POR EL VALOR DE LA BANDERA (1,3,5,7,9,3,5,7,9,3,5,...etc)
	var MTOTAL = x * utils.stringToNumber(pcodigo.substr(i,1))
	//VOY SUMANDO TODOS LOS PRODUCTOS DE LAS MULTIPLICACIONES

		total1 = total1 + MTOTAL
	//CAMBIO LA BANDERA

		if(x==1)
		{
			x=3
		}	
		else
		{
			if(x==3)
			{
				x=5
			}
			else
			{
				if(x==5)
				{
					x=7
				}
				else
				{
					if(x==7)
					{
						x=9
					}
					else
					{
						if(x==9)
						{
							x=3
						}
					}
				}
			}
		}
	}
	
	//AL TOTAL LO DIVIDO POR 2
	var verifica = total1 / 2

	//LE SACO LA PARTE ENTERA
	verifica = parseInt(verifica.toString())
	
	//Y OBTENGO EL RESTO DE LA DIVISION POR 10
	verifica = verifica%10

	return utils.numberFormat(verifica,'#')	
}