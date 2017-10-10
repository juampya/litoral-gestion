/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5C053803-D009-486C-B1B8-BD1348E7CAA0"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"81F73F6C-5179-43A2-B3EB-E10E7F659200"}
 */
function onShow(firstShow, event) 
{
	plugins.window.getMenuBar().removeAllMenus()
	plugins.window.setToolBarAreaVisible(false)	
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1220D99B-9D33-4B18-9B9F-7D90A86CEF20"}
 */
function onActionVolver(event) 
{
	globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0A2E9531-01DA-4AAD-986F-91FEB784A428"}
 */
function onActionNuevo(event) 
{
	forms.ays_frm_tipos_inmueble_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_tipos_inmueble_nuevo.vl_nuevo = 1
	forms.ays_frm_tipos_inmueble_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D9C4BAB-6B41-46FC-B08E-F06E1074E479"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A7BCD60B-CAE8-4464-9670-E0FB36B24496"}
 */
function onActionDetalle(event) 
{
	forms.ays_frm_tipos_inmueble_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_tipos_inmueble_nuevo.vl_nuevo = 0
	forms.ays_frm_tipos_inmueble_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7284266F-8E16-4546-8B20-FFF43262B3DD"}
 */
function onActionCopiar(event) 
{
	forms.ays_frm_tipos_inmueble_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_tipos_inmueble_nuevo.vl_nuevo = 2
	forms.ays_frm_tipos_inmueble_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9BB94BF9-72BE-4D01-8F02-02DF7FFE072F"}
 */
function onActionBorrar(event) 
{
	var nombre = utils.stringTrim(tipo_id.toString())+"-"+utils.stringTrim(tipo_descripcion)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Tipo: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"53326CC0-3AE1-4FE2-8F71-BD005E68252F"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}
