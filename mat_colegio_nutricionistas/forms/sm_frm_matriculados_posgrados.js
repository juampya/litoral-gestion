/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"615CB3F7-60DA-428D-BDB9-55BAC1E7CFFA"}
 */
function onActionAgregarConcepto(event) 
{
	forms.sm_frm_matriculados_posgrados_detalle.vl_titulo = "Nuevo"
	forms.sm_frm_matriculados_posgrados_detalle.vl_nuevo  = 1
	forms.sm_frm_matriculados_posgrados_detalle.vl_rel_id = rel_id
		
	var win = application.createWindow("mat_posgrados", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_matriculados_posgrados_detalle);	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8894E0CB-C3AE-4BCF-A29A-ECB66B0D187B"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_matriculados_posgrados_detalle.vl_titulo = "Modificar"
	forms.sm_frm_matriculados_posgrados_detalle.vl_nuevo  = 0
	forms.sm_frm_matriculados_posgrados_detalle.vl_rel_id = rel_id
		
	var win = application.createWindow("mat_posgrados", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_matriculados_posgrados_detalle);	
}
