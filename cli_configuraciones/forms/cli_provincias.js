/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9FFB4C1B-742E-4EA1-BA10-F5AD5B2A5C07"}
 */
function onActionVolver(event) {
	forms.cli_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2510D8B1-CF28-4C70-B574-F21B9CB98E46"}
 */
function onActionNuevaProvincia(event) {
	forms.cli_provincias_abm.vl_abm = 1
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
    win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
    win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
    win.resizable = false
    win.title= 'Provincia';
    win.show(forms.cli_provincias_abm);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C5FFCBF9-AA6B-47FB-8A70-10E7A9C5D3A7"}
 */
function onActionVerProvincia(event) {
	forms.cli_provincias_abm.vl_abm = 0
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
    win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
    win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
    win.resizable = false
    win.title= 'Provincia';
    win.show(forms.cli_provincias_abm);
}
