/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4BB2BCD1-4CA8-4EA7-A826-6BB6C76AB848",variableType:4}
 */
var vl_doctor = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2CCA58A-838B-4B3A-8176-8FCFA3FE5ADD"}
 */
function onActionVolver(event) 
{
	forms.cli_agenda_config_param.controller.show()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3C8353DA-40B0-493A-B805-AFC868C0C30F"}
 */
function onActionDetalle(event) 
{
	forms.cli_agenda_no_laborable_dato_med.vl_accion = 1
	var win = application.createWindow("age_fechas_no_laborables_med", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= 'Fechas No Laborables.';
	win.show(forms.cli_agenda_no_laborable_dato_med);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"37E0243E-D794-48E3-B9F8-9FF8D470A24E"}
 */
function onActionNuevo(event) 
{
	forms.cli_agenda_no_laborable_dato_med.vl_accion = 0
	var win = application.createWindow("age_fechas_no_laborables_med", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= 'Fechas No Laborables.';
	win.show(forms.cli_agenda_no_laborable_dato_med);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F380DBD-DB1C-44AE-BB15-0274B5563164"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	vl_doctor = forms.cli_agenda_config_param.medico_id
	controller.find()
	medico_id = forms.cli_agenda_config_param.medico_id
	controller.search()
}
