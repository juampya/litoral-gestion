
/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"FF1FD631-6CE4-468C-AD39-485EBCD68C82"}
 */
function onSolutionOpen()
{
	plugins.DateUtils.register( "Litoral Software", "Ym13NcZOW8jx6WSqs1ap68svHE6Jaiu9I/LfY9Dn20t3FW7CFR7gdSAuqRvTMgq/" )
	globals.InicializaParametros() //Esta en id_parametrosGenerales

    globals.mx_modulo_nombre = application.getSolutionName() //Nombre que tiene en el administrator.
    globals.mx_modulo_nivel = 0 // Siempre cero.	
    globals.mx_modulo_id = 13
	globals.mx_modulo_inicio = ag_solucionvigente.modulo_form_start
	
	scopes.globals.CargarMenu()
}
