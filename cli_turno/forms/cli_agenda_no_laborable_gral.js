/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F921F0DF-9841-491E-A5EB-8C6B2F681567"}
 */
function onActionVolver(event) 
{
	forms.cli_agenda.controller.show()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"80EF783A-23DA-48D2-AE03-755A60F24CEF"}
 */
function onActionDetalle(event) 
{
	forms.cli_agenda_no_laborable_dato_gral.vl_accion = 1
	var win = application.createWindow("age_fechas_no_laborables_gral", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= 'Fechas No Laborables.';
	win.show(forms.cli_agenda_no_laborable_dato_gral);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"70368967-511C-421F-8D5A-DC24DC009D4B"}
 */
function onActionNuevo(event) 
{
	forms.cli_agenda_no_laborable_dato_gral.vl_accion = 0
	var win = application.createWindow("age_fechas_no_laborables_gral", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= 'Fechas No Laborables.';
	win.show(forms.cli_agenda_no_laborable_dato_gral);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"51132E2A-06CA-4258-8ADE-5FB027B42BE9"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.find()
	excep_tipo = '1||4'
	controller.search()
}
