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
	
	var success = plugins.mail.sendMail(scopes.globals.vg_destinatarios, ag_empresavigente.emp_mail2, scopes.globals.vg_asunto, scopes.globals.vg_cuerpo, null, null, scopes.globals.vg_adjuntos, 'mail.litoral-software.com.ar')
	//ag_empresavigente.emp_smtphost
	if (!success) 
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención","El envio falló","atention",controller.getName(),"Aceptar",null,null,null,null,null,null,null)
		return
	}
	//scopes.globals.enviarEmailPorFunciones(pfuncion_codigo,scopes.globals.vg_asunto,scopes.globals.vg_cuerpo)
}
