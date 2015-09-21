/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"82F06185-8F55-490F-93A2-09FC9D341A26"}
 */
function onActionAgregarConcepto(event) 
{
	forms.sm_frm_matriculados_conceptos_detalle.vl_titulo = "Nuevo"
	forms.sm_frm_matriculados_conceptos_detalle.vl_nuevo  = 1
	forms.sm_frm_matriculados_conceptos_detalle.vl_rel_id = rel_id
		
	var win = application.createWindow("mat_conceptos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_matriculados_conceptos_detalle);	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BCE4A1B0-2E2A-46ED-8CCB-FD8687683002"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_matriculados_conceptos_detalle.vl_titulo = "Modificar"
	forms.sm_frm_matriculados_conceptos_detalle.vl_nuevo  = 0
	forms.sm_frm_matriculados_conceptos_detalle.vl_rel_id = rel_id
		
	var win = application.createWindow("mat_conceptos", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_matriculados_conceptos_detalle);	
}


/**
 * @properties={typeid:24,uuid:"EB21A01D-0C5C-4539-952C-8B5FA215C818"}
 */
function onActionImprimir_Baja() 
{
	plugins.jasperPluginRMI.runReport('sistemas','mat_certi_baja.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmatriculado:forms.sm_frm_matriculados_tabpanel.mat_id})
}

/**
 * @properties={typeid:24,uuid:"0528AA90-CB3F-4ED2-8A72-C190055A0CE8"}
 */
function onActionImprimir_Etica() 
{
	plugins.jasperPluginRMI.runReport('sistemas','mat_certi_etica.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmatriculado:forms.sm_frm_matriculados_tabpanel.mat_id})
}

/**
 * @properties={typeid:24,uuid:"B7B69FD5-076F-4B45-BBB4-CE90B3598D61"}
 */
function onActionImprimir_LibreDeuda() 
{
	plugins.jasperPluginRMI.runReport('sistemas','mat_certi_libre_deuda.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmatriculado:forms.sm_frm_matriculados_tabpanel.mat_id})
}

/**
 * @properties={typeid:24,uuid:"5843FCB9-BD74-440B-9F87-18D0C6BC998A"}
 */
function onActionImprimir_CertMatricula() 
{
	plugins.jasperPluginRMI.runReport('sistemas','mat_certi_matricula.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmatriculado:forms.sm_frm_matriculados_tabpanel.mat_id})
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E525683E-1DBA-4BC9-B896-01A1409FBE80"}
 * @AllowToRunInFind
 */
function onActionImprimir(event) 
{
//	var nom_reporte = null
//	var varm_ente   = null
//	switch (sol_id) 
//	{
//		case 2:
//			nom_reporte = 'mat_certi_matricula.jasper'
//			varm_ente   = rel_observasiones 	
//		break;
//		case 3:
//			nom_reporte = 'mat_certi_etica.jasper'
//		break;
//		case 10:
//			nom_reporte = 'mat_certi_baja.jasper'
//		break;
//		case 12:
//			nom_reporte = 'mat_certi_libre_deuda.jasper'
//		break;
//		default:
//		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención","Este tipo de Solicitud no se imprime.","atention",controller.getName(),"Aceptar",null,null,null,null,null,null,null)
//			return
//		break
//	}
//	plugins.jasperPluginRMI.runReport('sistemas',nom_reporte ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmatriculado:mat_id, pente:varm_ente})

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





