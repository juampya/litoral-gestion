/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"DB77DDCF-C70E-407C-BFF0-1130BFA5518D"}
 */
function Cancelar(event) 
{
	application.getWindow('lg_form_mail').hide();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"30BFAA41-F1FE-4ECF-B22B-3C75560F90DC"}
 */
function onShow(firstShow, event) 
{

}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C8BEA539-0F24-467C-A4BD-3A00167166FF"}
 */
function onHide(event) 
{
	scopes.globals.vg_destinatarios = null
	scopes.globals.vg_cc		    = null
	scopes.globals.vg_cco		    = null
	scopes.globals.vg_asunto 		= null
	scopes.globals.vg_cuerpo 		= null
	scopes.globals.vg_adjuntos 		= null
	return true
}

/**
 * Perform the element default action.
 *
 * @param pfuncion_codigo
 *
 * @properties={typeid:24,uuid:"B325146B-3A4C-4DA1-A1D6-530B457A874E"}
 * @AllowToRunInFind
 */
function Enviar(pfuncion_codigo) 
{
	var smpt 		  = 'mail.smtp.host=' + scopes.globals.ag_empresavigente.emp_smtp_host
	var smtp_port 	  = 'mail.smtp.port=' + scopes.globals.ag_empresavigente.emp_smtp_port
	var smtp_auth 	  = 'mail.smtp.auth=' + scopes.globals.ag_empresavigente.emp_smtp_auth
	var smtp_user 	  = 'mail.smtp.username=' + scopes.globals.ag_empresavigente.emp_smtp_username
	var smtp_pasw 	  = 'mail.smtp.password=' + scopes.globals.ag_empresavigente.emp_smtp_password
	var smtp_starttls = 'mail.smtp.starttls.enable=' + scopes.globals.ag_empresavigente.emp_smtp_starttls
	var smtp_from     = 'mail.smtp.from=' + scopes.globals.ag_empresavigente.emp_mail2
	var authorization = new Array(smpt, smtp_port,smtp_auth,smtp_user,smtp_pasw,smtp_starttls,smtp_from)
	
	if(scopes.globals.vg_destinatarios == null || scopes.globals.vg_destinatarios.length == 0)
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención","Debe poner al menos un destinatario.","atention",controller.getName(),"Aceptar",null,null,null,null,null,null,null)
		return
	}

	if(scopes.globals.vg_asunto == null || scopes.globals.vg_asunto.length == 0)
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención","El asunto no puede quedar vacio.","atention",controller.getName(),"Aceptar",null,null,null,null,null,null,null)
		return
	}
	
	var success = plugins.mail.sendMail(scopes.globals.vg_destinatarios, scopes.globals.ag_empresavigente.emp_mail2, scopes.globals.vg_asunto,scopes.globals.vg_cuerpo, scopes.globals.vg_cc, scopes.globals.vg_cco, scopes.globals.vg_adjuntos, authorization)
	if (!success) 
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención","El envio falló","atention",controller.getName(),"Aceptar",null,null,null,null,null,null,null)
		return
	}
	else
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención","Envio satisfactorio","atention",controller.getName(),"Aceptar",null,null,null,null,null,null,null)
	}
	//scopes.globals.enviarEmailPorFunciones(pfuncion_codigo,scopes.globals.vg_asunto,scopes.globals.vg_cuerpo)
}
