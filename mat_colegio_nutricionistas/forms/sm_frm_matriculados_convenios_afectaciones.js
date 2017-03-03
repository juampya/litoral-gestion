/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AA99119C-9B2A-40DC-9938-6257D18A844D"}
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
 * @properties={typeid:24,uuid:"82B32B1B-A609-47B0-94AC-389010C2357A"}
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
