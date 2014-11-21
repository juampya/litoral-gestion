/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1A54AADD-FE39-48C9-8E08-C3181633EC66"}
 */
function onActionAgregarConsultorio(event) 
{
	forms.sm_frm_matriculados_consultorios_detalle.vl_titulo = "Nuevo"
	forms.sm_frm_matriculados_consultorios_detalle.vl_nuevo  = 1
	forms.sm_frm_matriculados_consultorios_detalle.vl_consultorio_id = consultorio_id
		
	var win = application.createWindow("mat_consultorios", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_matriculados_consultorios_detalle);	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16EB1F58-60DD-4DCB-81BE-A7A0DA623C55"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_matriculados_consultorios_detalle.vl_titulo = "Modificar"
	forms.sm_frm_matriculados_consultorios_detalle.vl_nuevo  = 0
	forms.sm_frm_matriculados_consultorios_detalle.vl_consultorio_id = consultorio_id
		
	var win = application.createWindow("mat_consultorios", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_matriculados_consultorios_detalle);	
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D8FA0C43-5FA2-4698-93AA-7FFF72192821"}
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