/**
 * @properties={typeid:24,uuid:"83E77414-8F9E-4350-BB16-8ABD33E11A69"}
 */
function onSolutionOpen() {
	globals.InicializaParametros() //Esta en id_parametrosGenerales

    globals.mx_modulo_nombre = application.getSolutionName() //Nombre que tiene en el administrator.
    globals.mx_modulo_nivel = 0 // Siempre cero.	
    globals.mx_modulo_id = 3
	globals.mx_modulo_inicio = ag_solucionvigente.modulo_form_start
	
	scopes.globals.CargarMenu()
}

/**
 *
 * @properties={typeid:24,uuid:"0CA51AEA-780A-4FAC-B0C5-8480AE0B1F7E"}
 */
function InicializaArgento(){
    globals.cargarMetodoInicioIntegra()
}
