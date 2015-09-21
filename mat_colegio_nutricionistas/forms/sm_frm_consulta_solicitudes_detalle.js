/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"990DFBED-14E6-4F7A-9810-6E07A47693E1",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D5ED8A66-E256-4413-8890-2950D1B2B9EF"}
 */
var vl_titulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFEB07BE-23AB-4196-B463-7CE2ECBE676A"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"95E0E70D-3C0B-439B-9C6E-3896AE2E6C8B"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
	}
	
	elements.btn_nuevo_matriculado.enabled = false
	
	if(sol_id==1 && rel_estado ==1) //Si el tipo de solicitud es "Solicitud de MAtriculacion"  
	{
		elements.btn_nuevo_matriculado.enabled = true
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FD248301-71F6-4ED4-80B1-9D9C667F1002"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("consulta_solicitudes").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"27015DA7-A5EE-4DC3-97DB-55848E752932"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("consulta_solicitudes").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"A0E6DAC1-7E3F-4297-9393-0F472C489F2F"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E07E36A-56F4-49C7-AC2C-55668E569258"}
 */
function onActionConfirmaMatriculado(event) 
{
	if(utils.hasRecords(mat_rel_mat_sol_to_mat_matriculados))
	{	
		databaseManager.saveData(foundset)
		application.getWindow("consulta_solicitudes").hide()
		
		forms.sm_frm_matriculados_tabpanel.vl_frm_anterior = forms.sm_frm_consulta_solicitudes.controller.getName()
		forms.sm_frm_matriculados_tabpanel.vl_nuevo = 0
		forms.sm_frm_matriculados_tabpanel.controller.loadRecords(mat_id)
		forms.sm_frm_matriculados_tabpanel.controller.show()
	}
	else
	{
		globals.ventanaAceptar("No existe el id en Matriculdos",controller.getName())
	}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C68E966F-C6BA-4D52-9E04-58772B7A4C08"}
 */
function CambiaTipoSolicitud(oldValue, newValue, event) 
{
	elements.btn_nuevo_matriculado.enabled = false
	
	if(sol_id==1 && rel_estado==1) //Si el tipo de solicitud es "Solicitud de MAtriculacion" 
	{
		elements.btn_nuevo_matriculado.enabled = true
	}
	return true
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FA8805E1-52A5-453C-8FB2-4CE1FCD55FB6"}
 * @AllowToRunInFind
 */
function onActionImprimir(event) 
{
	var nom_reporte = null
	var varm_ente   = null
	var tmp_presidente = null
	var tmp_vicepresidente = null
	var tmp_secretario = null
	
	/** @type {JSFoundset<db:/sistemas/mat_matriculados>}*/
	var fs_matriculados = databaseManager.getFoundSet('Sistemas','mat_matriculados')
		fs_matriculados.find()
		fs_matriculados.mat_consejo_id = [1,2,3]
		fs_matriculados.search()
	
	for (var i = 1; i <= fs_matriculados.getSize(); i++) 
	{
		var record = fs_matriculados.getRecord(i)
		
		if(record.mat_matriculados_to_mat_consejo.consejo_utiliza_firma==1)
		{
			switch (record.mat_consejo_id) 
			{
				case 1:
					tmp_presidente = "Lic. "+record.mat_nombre
				break;
				case 2:
					tmp_vicepresidente = "Lic. "+record.mat_nombre
				break;
				case 3:
					tmp_secretario = "Lic. "+record.mat_nombre
				break;
			}
		}	
	}	

	
	switch (sol_id) 
	{
		case 2:
			nom_reporte = 'mat_certi_matricula.jasper'
			varm_ente   = rel_observasiones 	
		break;
		case 3:
			nom_reporte = 'mat_certi_etica.jasper'
			varm_ente   = rel_observasiones
		break;
		case 4:
			nom_reporte = 'mat_certi_baja.jasper'
			varm_ente   = rel_observasiones
		break;
		case 12:
			nom_reporte = 'mat_certi_libre_deuda.jasper'
			varm_ente   = rel_observasiones
		break;
	}
	plugins.jasperPluginRMI.runReport('sistemas',nom_reporte ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmatriculado:mat_id, pente:varm_ente, ppresidente:tmp_presidente, pvicepresidente:tmp_vicepresidente, psecretario:tmp_secretario, psolicitud_id:rel_id.toString()})
}

/**
 * @properties={typeid:24,uuid:"52595CFB-3209-4CC8-930E-F78CC592D649"}
 */
function onActionBorrar() 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro.", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"E28F523C-B29C-4944-A7D8-B9AC892AB4AB"}
 */
function borrarRegistro()
{
	controller.deleteRecord()
	application.getWindow("consulta_solicitudes").hide()
}
