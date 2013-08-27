/**
 * @properties={typeid:24,uuid:"F5221ED0-1183-466F-AA6D-73A49AE07FB4"}
 * @AllowToRunInFind
 */
function onSolutionOpen() {
	globals.InicializaParametros() //Esta en id_parametrosGenerales

    globals.mx_modulo_nombre = application.getSolutionName() //Nombre que tiene en el administrator.
    globals.mx_modulo_nivel = 0 // Siempre cero.	
    globals.mx_modulo_id = 5 
	globals.mx_modulo_inicio = ag_solucionvigente.modulo_form_start
	
	scopes.globals.CargarMenu()
}

/**
 * @properties={typeid:24,uuid:"ECFC3D78-F6EE-461E-BFD9-658173FF1A57"}
 */
function InicializaArgento(){
    globals.cargarMetodoInicioIntegra()
}
