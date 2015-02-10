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


