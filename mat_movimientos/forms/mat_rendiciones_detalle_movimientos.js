/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"AC50880A-B1D6-4597-812C-A3FBB3CD58BC"}
 */
function onActionDetalle(event) 
{
	scopes.globals.vg_formulario_anterior = forms.mat_rendiciones_detalle.controller.getName()
	forms.mat_movimientos_detalle.controller.loadRecords(mov_id)
	forms.mat_movimientos_detalle.controller.show()
}
