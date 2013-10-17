/**
 * @properties={typeid:24,uuid:"1ECB17DD-8167-4621-81F8-C9A364645F9A"}
 */
function onSolutionOpen() 
{	
	globals.InicializaParametros() //Esta en id_parametrosGenerales

    globals.mx_modulo_nombre = application.getSolutionName() //Nombre que tiene en el administrator.
    globals.mx_modulo_nivel = 0 // Siempre cero.	
    globals.mx_modulo_id = 1
	globals.mx_modulo_inicio = ag_solucionvigente.modulo_form_start
	
	scopes.globals.CargarMenu()
}


/**
 * @properties={typeid:24,uuid:"7DDF5E38-7E08-4EA4-B0BA-F04198FB918B"}
 */
function InicializaArgento(){
    //globals.cargarMetodoInicioIntegra()
}