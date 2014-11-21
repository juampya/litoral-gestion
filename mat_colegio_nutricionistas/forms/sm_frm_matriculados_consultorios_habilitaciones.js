/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"646B1974-FBB7-4164-B225-A2B1A08556FA"}
 */
function onActionAgregarHabilitacion(event) 
{
	forms.sm_frm_matriculados_consultorios_habilitaciones_detalle.vl_titulo = "Nuevo"
	forms.sm_frm_matriculados_consultorios_habilitaciones_detalle.vl_nuevo  = 1
	forms.sm_frm_matriculados_consultorios_habilitaciones_detalle.vl_consultorio_id = consultorio_id
		
	var win = application.createWindow("mat_habilitaciones", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_matriculados_consultorios_habilitaciones_detalle);	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E84F809B-F51F-46CE-88F0-AAE58548CF64"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_matriculados_consultorios_habilitaciones_detalle.vl_titulo = "Modificar"
	forms.sm_frm_matriculados_consultorios_habilitaciones_detalle.vl_nuevo  = 0
	forms.sm_frm_matriculados_consultorios_habilitaciones_detalle.vl_rel_id = rel_id
		
	var win = application.createWindow("mat_habilitaciones", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_matriculados_consultorios_habilitaciones_detalle);	
}
