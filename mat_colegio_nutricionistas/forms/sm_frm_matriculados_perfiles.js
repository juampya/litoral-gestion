/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88F4F213-BC81-4C3E-812B-D35F8723ED71"}
 */
function onActionAgregarConcepto(event) 
{
	forms.sm_frm_matriculados_perfiles_detalle.vl_titulo = "Nuevo"
	forms.sm_frm_matriculados_perfiles_detalle.vl_nuevo  = 1
	forms.sm_frm_matriculados_perfiles_detalle.vl_rel_id = rel_id
		
	var win = application.createWindow("mat_perfil", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_matriculados_perfiles_detalle);	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"60DC4AFA-43C0-4088-8503-CC0E4ACA296B"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_matriculados_perfiles_detalle.vl_titulo = "Modificar"
	forms.sm_frm_matriculados_perfiles_detalle.vl_nuevo  = 0
	forms.sm_frm_matriculados_perfiles_detalle.vl_rel_id = rel_id
		
	var win = application.createWindow("mat_perfil", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_matriculados_perfiles_detalle);	
}
