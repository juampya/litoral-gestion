/**
 * @properties={typeid:24,uuid:"EFDFC535-3DF5-4428-A3B2-A04990E6A882"}
 */
function carga1000Matriculados()
{
	/** @type {JSFoundSet<db:/sistemas/mat_matriculados>} */
	var fs_mat = databaseManager.getFoundSet('sistemas','mat_matriculados')

	for(var i = 1;i<=10;i++)
	{
		fs_mat.newRecord()
		fs_mat.mat_nombre = "Matriculado " + i
		fs_mat.mat_nro_matricula = i
		fs_mat.mat_estado = 1
		databaseManager.saveData(fs_mat)
		asociaIngresosPorDefectoTest(fs_mat.mat_id)
		grabarPrimerMovimientoTest(fs_mat.mat_id,1,2014)
	}
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param matriculado
 *
 * @properties={typeid:24,uuid:"EF1DBBB4-A7E6-43A5-8F3E-FEC4347B9715"}
 */
function asociaIngresosPorDefectoTest(matriculado)
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
 * @param matriculado
 * @param mes
 * @param anio
 *
 * @properties={typeid:24,uuid:"6BC65CCD-5CA7-4BA6-814D-E83F2182DD99"}
 */
function grabarPrimerMovimientoTest(matriculado, mes, anio)
{
	/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
	var fs_movim = databaseManager.getFoundSet('sistemas','mat_movimientos')
	fs_movim.newRecord()
	fs_movim.mat_id = matriculado
	fs_movim.mov_mes_emision = mes
	fs_movim.mov_anio_emision = anio
	fs_movim.mov_descripcion = "Cuota Mensual " + mes + "/" + anio
	fs_movim.mov_estado = 1 //Pagado
	fs_movim.mov_fecha_emision = new Date(anio, mes - 1, 15)
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
		//fs_detalle.det_importe_original = rec.ingr_importe
		databaseManager.saveData(fs_detalle) // Graba detalle del movimiento
		acumImporte += fs_detalle.det_importe		
	}
	fs_movim.mov_importe = acumImporte
	databaseManager.saveData(fs_movim) // Graba importe del movimiento
}


