/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07B04D87-0184-471C-B516-3B5FE5395539"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7B7643AC-74BE-4625-AD43-0B5E0561500C"}
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
 * @properties={typeid:24,uuid:"9A95C803-443E-41E4-AA11-F50AFA85825C"}
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
 * @properties={typeid:24,uuid:"867F7D4F-18B5-4C8B-8E28-B3FBCFF8ED98"}
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
 * @properties={typeid:24,uuid:"74996D1A-83CC-4601-A6AB-75BDBE4089CD"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB62290F-8EBC-41E2-95BF-68A53874C647"}
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
 * @properties={typeid:24,uuid:"2931756A-C807-4610-AEDB-3B787D1A5C3C"}
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
 * @properties={typeid:24,uuid:"4423D037-CC5D-412C-9ECC-E2354C9020F2"}
 */
function onActionBorrar(event) 
{
	var nombre = utils.stringTrim(documentacion_id.toString())+"-"+utils.stringTrim(documentacion_descripcion)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Tipo de Documentación: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"D2D9A299-9A1D-4863-A8F1-105C430BB88F"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}
