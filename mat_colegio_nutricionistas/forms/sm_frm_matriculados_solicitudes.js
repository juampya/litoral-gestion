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
