/**
 * @AllowToRunInFind
 * @param {Number} pdepar_id
 * @properties={typeid:24,uuid:"45D06C1A-281B-40BE-A688-60486D3DFAE5"}
 */
function filtroLocalidadReal(pdepar_id)
{
	controller.find()
	mat_estado = 1
	mat_matriculados_to_localidades_real.depar_id = pdepar_id
	controller.search()
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param pdepar_id
 *
 * @properties={typeid:24,uuid:"6C242EBB-E6C1-4724-94DB-355BE680BECA"}
 */
function filtroLocalidadProfesional(pdepar_id)
{
	controller.find()
	mat_estado = 1
	mat_matriculados_to_localidades_profesional.depar_id = pdepar_id
	controller.search()
}