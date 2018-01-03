/**
 * @properties={typeid:24,uuid:"09A3D616-DC4F-4C25-A0EB-9C6EF750B3D1"}
 */
function onSolutionOpen() 
{
	plugins.DateUtils.register( "Litoral Software", "Ym13NcZOW8jx6WSqs1ap68svHE6Jaiu9I/LfY9Dn20t3FW7CFR7gdSAuqRvTMgq/" )
	scopes.globals.InicializaParametros() //Esta en id_parametrosGenerales
	
	databaseManager.removeTableFilterParam('sistemas','filtroempresa')
	
	databaseManager.setAutoSave(false)
    scopes.globals.mx_modulo_nombre = application.getSolutionName() //Nombre que tiene en el administrator.
    scopes.globals.mx_modulo_nivel = 0 // Siempre cero.	
    scopes.globals.mx_modulo_id = 1
    scopes.globals.mx_modulo_inicio = ag_solucionvigente.modulo_form_start
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
	{
		
	}
}