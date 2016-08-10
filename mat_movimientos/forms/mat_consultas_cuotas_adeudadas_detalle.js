/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8C440C95-DCE3-4F83-B6F9-5D4C1B44D7CC",variableType:4}
 */
var vl_mat_id = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"39897701-0D6D-40E9-ABA2-AE9276DA0279"}
 */
function onActionMail(event) 
{
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(mat_movimientos_to_mat_matriculados.mat_e_mail == null | mat_movimientos_to_mat_matriculados.mat_e_mail == "")
	{
		globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Atención', "El matriculado no tiene la dirección de correo cargada.", 'error', controller.getName(), 'Ok', ' ',null,null,null,null,null,null)
	}
	else
	{
		if (!expr.test(mat_movimientos_to_mat_matriculados.mat_e_mail))
	    {	
	    	globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Atención', "La dirección de correo " + mat_movimientos_to_mat_matriculados.mat_e_mail + " es incorrecta.", 'error', controller.getName(), 'Ok', ' ',null,null,null,null,null,null)
	    }
	    else
	    {
	    	scopes.globals.vg_destinatarios = mat_movimientos_to_mat_matriculados.mat_e_mail
	    }
	}
	
	scopes.globals.vg_asunto 		= scopes.globals.ag_empresavigente.emp_nombre +"- Suspención Matrícula." 
	scopes.globals.vg_cuerpo 		= 'Se informa que posee deuda por cuotas mensuales impagas. La misma corresponde a '+foundset.getSize()+' meses. A los 12 meses de deuda pasara a conformar el padrón de Matriculados suspendidos y deberá responder a lo estipulado por el articulo 34 del Estatuto, en caso de no regularizar su situacion previamente. Comuníquese con el Colegio.'
	//scopes.globals.vg_adjuntos 	= plugins.mail.createBinaryAttachment('BoletadePago.pdf',plugins.jasperPluginRMI.runReport('sistemas','boleta_de_pago.jasper', 'BoletadePago.pdf', plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, {pmov_id:mov_id}))
	
	globals.ventanaFormulario("lg_form_mail","Litoral Gestion",forms.lg_form_mail.controller.getName())
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"DD29018D-E538-41D6-BFCA-612328340F4A"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	forms[scopes.globals.vg_formulario_anterior].controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"801C97CA-9ECB-4A82-AA90-1DEF2AFF4F1F"}
 */
function onActionImprimir(event) 
{
	var matriculados = application.getValueListDisplayValue('matriculados',mat_id)
	
	plugins.jasperPluginRMI.runReport(foundset,'mat_consultas_cuotas_adeudadas.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmatriculado:matriculados})
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D05FADE5-3EAF-4631-BC6A-708E9F98C0B0"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.find()
	mat_id = vl_mat_id
//	mov_estado=[0,2]
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C63F11CD-4F5C-4454-B9D3-43B1C538F0DE"}
 */
function onActionEstado(event) 
{
	scopes.globals.ventanaSiNo('Esta seguro de cambiarlo a Susp.Art.34?','Si',null,controller.getName())
}

/**
 * @properties={typeid:24,uuid:"E0AB0753-1155-45BE-B296-650244ED4F1E"}
 */
function Si()
{
	mat_movimientos_to_mat_matriculados.mat_estado=4
	databaseManager.saveData(mat_movimientos_to_mat_matriculados)
}
