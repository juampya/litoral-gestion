
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8DCF9B53-5589-4F49-AF15-FC22F59AD4B3"}
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
 * @properties={typeid:24,uuid:"96BE3D14-786D-4E87-971B-48F2234471EA"}
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
