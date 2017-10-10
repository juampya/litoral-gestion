/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B5C310FC-60BB-445C-AD55-E64B4FD0D441"}
 */
var vl_frm_anterior = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A569E9BA-228A-495A-BF07-2E9995DD62AF"}
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
 * @properties={typeid:24,uuid:"905D40F6-88F4-4091-97CD-B0A5F5D7934C"}
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
 * @properties={typeid:24,uuid:"291E9D2A-391C-4009-8254-816EF46D9B02"}
 */
function onActionNuevo(event) 
{
	forms.ays_frm_conceptos_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_conceptos_nuevo.vl_nuevo = 1
	forms.ays_frm_conceptos_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2606CC17-431B-47FA-8FFB-3211C038C11C"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F31618B2-8767-4A68-A98E-7E05DCC73680"}
 */
function onActionDetalle(event) 
{
	forms.ays_frm_conceptos_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_conceptos_nuevo.vl_nuevo = 0
	forms.ays_frm_conceptos_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1649F502-4C23-4ED3-B970-C3EB8F6C99FE"}
 */
function onActionCopiar(event) 
{
	forms.ays_frm_conceptos_nuevo.vl_frm_anterior = controller.getName()
	forms.ays_frm_conceptos_nuevo.vl_nuevo = 2
	forms.ays_frm_conceptos_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"721D1BAB-581A-4E9D-8D73-B3FDE69CA212"}
 */
function onActionBorrar(event) 
{
	var nombre = utils.stringTrim(concepto_id.toString())+"-"+utils.stringTrim(concepto_descripcion)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Concepto: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"B03F4662-7218-49AB-8171-0BAEB2DC78A3"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}
