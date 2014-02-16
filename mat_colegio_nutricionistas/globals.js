/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"34929AC2-D19B-4D74-B06F-ADEA7B13590D",variableType:4}
 */
var vg_nro_tmp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EDF1CA9C-6FB7-4E5B-9F37-ACA2408F0B1C",variableType:4}
 */
var vg_mat_anio_final = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6B638C4E-9476-437E-ADCA-62692B83B2BA",variableType:4}
 */
var vg_mat_anio_inicial = null;

/**
 * @AllowToRunInFind
 * @param mes
 * @param anio
 * @param matriculado
 *
 * @properties={typeid:24,uuid:"45F73FB7-4525-4DA4-9F55-CABCBE88C8CA"}
 */
function generar_cuotas_mensuales(mes, anio, matriculado) 
{
	/** @type {JSFoundSet<db:/sistemas/mat_matriculados>} */
	var fs_matriculados = databaseManager.getFoundSet('sistemas','mat_matriculados')
	if(matriculado == null)
	{
		fs_matriculados.find()
		fs_matriculados.mat_estado = 1 //Busca todos los matriculados activos
		fs_matriculados.search()
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
		databaseManager.saveData(fs_movim_aux) 
		//fin Graba Encabezado del movimiento--------------------------------------------------------
		
		//Busca Los ingresos del matriculado-----------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_matriculado_rel_ingresos>} */
		var fs_rel_ing = databaseManager.getFoundSet('sistemas','mat_matriculado_rel_ingresos')
		fs_rel_ing.find()
		fs_rel_ing.mat_id = rec.mat_id
		fs_rel_ing.rel_estado = 0 //Activo para ese matriculado
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
			deuda += rec2.mov_importe
		}
		if(deuda > 0)
		{
			fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
			fs_detalle.newRecord()
			fs_detalle.ingr_id = 999 //Deuda Acumulada
			fs_detalle.mov_id = fs_movim_aux.mov_id
			fs_detalle.det_importe = deuda
			fs_detalle.det_importe_original = deuda
			fs_detalle.tmp_id = globals.vg_nro_tmp
			databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
			acumImporte += fs_detalle.det_importe
			//Fin Busca cuotas con deuda-------------------------------------------------------------------------------
			
			//Calcula Interes sobre deuda-----------------------------------------------------------------
			/** @type {JSFoundSet<db:/sistemas/mat_configuraciones>} */
			var fs_conf = databaseManager.getFoundSet('sistemas','mat_configuraciones')	
			fs_conf.loadAllRecords()
			fs_conf.getRecord(1)
			var interes = deuda * fs_conf.conf_interes_cuota_impaga / 100
			
			fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
			fs_detalle.newRecord()
			fs_detalle.ingr_id = 998 //Interes
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
 * @AllowToRunInFind
 * @param matriculado
 * @param mes
 * @param anio
 *
 * @properties={typeid:24,uuid:"399B87DD-F621-4102-8934-25D85BC57B27"}
 */
function grabarPrimerMovimiento(matriculado, mes, anio)
{
	/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
	var fs_movim = databaseManager.getFoundSet('sistemas','mat_movimientos')
	fs_movim.newRecord()
	fs_movim.mat_id = matriculado
	fs_movim.mov_mes_emision = mes
	fs_movim.mov_anio_emision = anio
	fs_movim.mov_descripcion = "Cuota Mensual " + mes + "/" + anio
	fs_movim.mov_estado = 1 //Pagado
	fs_movim.mov_fecha_emision = application.getServerTimeStamp()
	fs_movim.mov_tipo_de_movimiento = 1 // Primer Movimiento
	
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
	databaseManager.saveData(fs_movim) // Graba importe del movimiento
}


/**
 * @AllowToRunInFind
 * @param matriculado
 *
 * @properties={typeid:24,uuid:"01A30C36-A7DE-47E2-9DC6-0802B0D63CE0"}
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
		fs_rel_ing.rel_estado = 0
		databaseManager.saveData(fs_rel_ing)
	}
}
