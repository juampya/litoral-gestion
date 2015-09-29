/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F39435EC-BEC4-4063-AB05-9594F685904B"}
 */
var vl_prueba = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2871C35-EA84-4BB6-A22E-EA90BE5FBA68"}
 */
function onActionPruebaConfig(event)
{
	databaseManager.saveData(foundset)
	vl_prueba = null
		
	var smpt 		  = 'mail.smtp.host=' + scopes.globals.ag_empresavigente.emp_smtp_host
	var smtp_port 	  = 'mail.smtp.port=' + scopes.globals.ag_empresavigente.emp_smtp_port
	var smtp_auth 	  = 'mail.smtp.auth=' + scopes.globals.ag_empresavigente.emp_smtp_auth
	var smtp_user 	  = 'mail.smtp.username=' + scopes.globals.ag_empresavigente.emp_smtp_username
	var smtp_pasw 	  = 'mail.smtp.password=' + scopes.globals.ag_empresavigente.emp_smtp_password
	var smtp_starttls = 'mail.smtp.starttls.enable=' + scopes.globals.ag_empresavigente.emp_smtp_starttls
	var smtp_from     = 'mail.smtp.from=' + scopes.globals.ag_empresavigente.emp_mail2
	var authorization = new Array(smpt, smtp_port,smtp_auth,smtp_user,smtp_pasw,smtp_starttls,smtp_from)
	
	var success = plugins.mail.sendMail(scopes.globals.ag_empresavigente.emp_mail2, scopes.globals.ag_empresavigente.emp_mail2, "Prueba de Configuracion", "", null, null, null,authorization)

	if (!success) 
	{
		vl_prueba = "Configuración incorrecta. No pudo completarse la prueba."
	}
	else
	{
		vl_prueba = "Configuración correcta. Prueba completa!!!!"
	}
}
