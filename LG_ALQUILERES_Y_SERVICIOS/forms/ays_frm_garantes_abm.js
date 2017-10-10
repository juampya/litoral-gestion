/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"19FA08CD-BA98-46BB-AA76-A50D91F01C73"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F5DFE952-3C80-4A92-B18F-7FC566AC9F4B"}
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
 * @properties={typeid:24,uuid:"A94DBD1B-C5B1-4EB3-9675-00937E2671C3"}
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
 * @properties={typeid:24,uuid:"56ACBAA3-B27F-465F-9E15-6CCC02E0DB63"}
 */
function onActionNuevo(event) 
{
	forms.ays_frm_garantes_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_garantes_nuevo.vl_nuevo = 1
	forms.ays_frm_garantes_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2F65F8BE-8BC4-4317-B3E0-8D40033E7A40"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D6E607E8-B3A3-4976-A2DD-25E1A0F81D43"}
 */
function onActionDetalle(event) 
{
	forms.ays_frm_garantes_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_garantes_nuevo.vl_nuevo = 0
	forms.ays_frm_garantes_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3DE3871A-DF06-4694-A96B-3B2D3B900A6C"}
 */
function onActionCopiar(event) 
{
	forms.ays_frm_garantes_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_garantes_nuevo.vl_nuevo = 2
	forms.ays_frm_garantes_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA0C6B55-F4BE-4CA5-99A6-0FF6999139A0"}
 */
function onActionBorrar(event) 
{
	var nombre = utils.stringTrim(garante_id.toString())+"-"+utils.stringTrim(garante_nombre)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Garante: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"FF0C750C-7ED7-407E-8BA3-212FAC9EEBFA"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}
