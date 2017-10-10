/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"85565247-2428-41D2-9241-7F191BC8E4EE"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A1AEC0B5-1114-4E71-BF2B-C08A11F48659"}
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
 * @properties={typeid:24,uuid:"704E48EE-4DBA-47A6-9C2C-840DC4074EB7"}
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
 * @properties={typeid:24,uuid:"85144D6A-932A-4ED5-BC9C-2E0735BFB640"}
 */
function onActionNuevo(event) 
{
	forms.ays_frm_inmuebles_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_inmuebles_nuevo.vl_nuevo = 1
	forms.ays_frm_inmuebles_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2AC8EB91-FB83-4617-8C83-B5E29D5A8F3A"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D97D54D-F50E-4A5B-A0FE-5DC693823A75"}
 */
function onActionDetalle(event) 
{
	forms.ays_frm_inmuebles_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_inmuebles_nuevo.vl_nuevo = 0
	forms.ays_frm_inmuebles_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"949F0B5F-8BF8-469A-86F8-66AED5C2D935"}
 */
function onActionCopiar(event) 
{
	forms.ays_frm_inmuebles_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_inmuebles_nuevo.vl_nuevo = 2
	forms.ays_frm_inmuebles_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1C06C145-C240-49CF-8BBA-25B4FF090AB1"}
 */
function onActionBorrar(event) 
{
	var nombre = utils.stringTrim(inmueble_id.toString())+"-"+utils.stringTrim(inmueble_calle)+" "+utils.stringTrim(inmueble_nro)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Inmueble: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"7B1BA933-6CDA-4E67-A7B5-4E530ECD849A"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}
