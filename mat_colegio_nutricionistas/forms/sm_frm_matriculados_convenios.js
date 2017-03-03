/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F0384BCE-6F47-43AF-8A6E-EB302A5D0E11"}
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
 * @properties={typeid:24,uuid:"0174F8B9-084E-496A-A551-D9CB5F0AE398"}
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
 * @properties={typeid:24,uuid:"5B8ECA95-DAE7-4678-BB03-D9D22A4185A1"}
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
