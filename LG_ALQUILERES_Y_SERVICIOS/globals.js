
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"82BEFAAF-6767-43A0-99D3-5DB6BE5F3327"}
 */
function onSolutionOpen(arg, queryParams)
{
	plugins.DateUtils.register( "Litoral Software", "Ym13NcZOW8jx6WSqs1ap68svHE6Jaiu9I/LfY9Dn20t3FW7CFR7gdSAuqRvTMgq/" )
	globals.InicializaParametros() //Esta en id_parametrosGenerales

    globals.mx_modulo_nombre = application.getSolutionName() //Nombre que tiene en el administrator.
    globals.mx_modulo_nivel = 0 // Siempre cero.	
    globals.mx_modulo_id = 15 
    globals.mx_modulo_inicio = scopes.globals.ag_solucionvigente.modulo_form_start

	//	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
//	{
//		scopes.globals.vg_fs_menu=scopes.globals.CargarMenuWeb()
//	}
//	else
//	{
//		scopes.globals.CargarMenu()
//	}
}
