/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D128B671-6CBD-40A4-BE51-39B11367E984"}
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
 * @properties={typeid:24,uuid:"BB537B51-FCC9-4C6C-AD09-CA34626072CF"}
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
 * @properties={typeid:24,uuid:"CFA7E0A5-0D2C-4477-96A7-5578746D1172"}
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
