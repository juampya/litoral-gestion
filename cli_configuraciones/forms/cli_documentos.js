/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"340B4241-11ED-4BC3-A03B-7D1E4F9AFA2F"}
 */
function onActionVolverInicio(event) {
	forms.cli_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"93F82DCB-3FB0-4C90-B6D9-581F915C96F5"}
 */
function onActionNuevoDocumento(event) {
	forms.cli_documentos_abm.vl_abm = 1
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
    win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
    win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
    win.resizable = false
    win.title= 'Nuevo Documento';
    win.show(forms.cli_documentos_abm);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"078D7788-E808-4818-8E2B-D2B379A7CA09"}
 */
function onActionDetalle(event) {
	forms.cli_documentos_abm.vl_abm = 0
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
    win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
    win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
    win.resizable = false
    win.title= 'Detalle Documento';
    win.show(forms.cli_documentos_abm);
}
