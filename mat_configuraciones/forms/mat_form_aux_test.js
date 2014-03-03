/**
 * @properties={typeid:24,uuid:"EFDFC535-3DF5-4428-A3B2-A04990E6A882"}
 */
function carga1000Matriculados()
{
	/** @type {JSFoundSet<db:/sistemas/mat_matriculados>} */
	var fs_mat = databaseManager.getFoundSet('sistemas','mat_matriculados')

	for(var i = 1;i<=1000;i++)
	{
		fs_mat.newRecord()
		fs_mat.mat_nombre = "Matriculado " + i
		fs_mat.mat_nro_matricula = i
		fs_mat.mat_estado = 1
		databaseManager.saveData(fs_mat)
		asociaIngresosPorDefectoTest(fs_mat.mat_id)
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


