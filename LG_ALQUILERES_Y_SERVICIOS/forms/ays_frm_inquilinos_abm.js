/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BAE3B494-08D6-4678-BF00-69771DD49F2A"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B4F6F27E-C66D-4652-A255-333E311B69CE"}
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
 * @properties={typeid:24,uuid:"5F913658-DA70-489C-AE09-D398A26327E9"}
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
 * @properties={typeid:24,uuid:"092D4E62-1037-45F9-B644-AF510CEC4863"}
 */
function onActionNuevo(event) 
{
	forms.ays_frm_inquilinos_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_inquilinos_nuevo.vl_nuevo = 1
	forms.ays_frm_inquilinos_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EF35266A-C114-4C34-BEC4-761154DE9897"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A7A0EED1-6688-4121-9006-72DE6B303554"}
 */
function onActionDetalle(event) 
{
	forms.ays_frm_inquilinos_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_inquilinos_nuevo.vl_nuevo = 0
	forms.ays_frm_inquilinos_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96C1EC32-09CC-4ADC-B8EC-6CED9D05B9DF"}
 */
function onActionCopiar(event) 
{
	forms.ays_frm_inquilinos_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_inquilinos_nuevo.vl_nuevo = 2
	forms.ays_frm_inquilinos_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2C751A8C-00E1-48A5-A81C-B5C1DE737B54"}
 */
function onActionBorrar(event) 
{
	var nombre = utils.stringTrim(inquilino_id.toString())+"-"+utils.stringTrim(inquilino_nombre)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Inquilino: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"04520F55-C6A3-40E6-92DF-C2F50590295C"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}