/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F196DA6C-D0FB-40A0-8434-9F57740B6A29"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5DC415E4-061D-490B-88E7-2929D5B8399A",variableType:4}
 */

var vl_nuevo = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B78B73C0-98A6-4A39-A8C7-AFEF1A294AE4"}
 */
function onShow(firstShow, event) 
{
	//Variables para archivos Adjuntos//
	scopes.globals.vg_archivo_funcion_codigo = 152
	scopes.globals.vg_archivo_tabla_id		 = contrato_id
	
	//Variables para Auditoría//
	scopes.globals.vg_auditoria_pk    = contrato_id
	scopes.globals.vg_auditoria_tabla = new Array(controller.getDataSource())
	scopes.globals.vg_auditoria_campo = null
	
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		//emp_id= scopes.globals.mx_empresa_id
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD095B2C-6470-4B3D-A45A-845F4B07B63C"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D7429EF-E5C5-42B0-8384-4E7C8EC066D8"}
 */
function onActionNuevo(event) 
{
//	forms.ays_frm_inmuebles_nuevo.vl_frm_anterior = controller.getName()
//	forms.ays_frm_inmuebles_nuevo.vl_nuevo = 1
//	forms.ays_frm_inmuebles_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0789EA76-81E7-4A09-A58E-F5589A2BC1F9"}
 */
function onActionRefrescar(event) {
	// TODO Auto-generated method stub
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"535071BD-5DC9-48A8-BB5D-DF5168AE679F"}
 */
function onActionDetalle(event) 
{
//	forms.ays_frm_inmuebles_nuevo.vl_frm_anterior = controller.getName()
//	forms.ays_frm_inmuebles_nuevo.vl_nuevo = 0
//	forms.ays_frm_inmuebles_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D0BF9AF-61CA-48F1-8208-32B41CACDCF7"}
 */
function onActionCopiar(event) 
{
//	forms.ays_frm_inmuebles_nuevo.vl_frm_anterior = controller.getName()
//	forms.ays_frm_inmuebles_nuevo.vl_nuevo = 2
//	forms.ays_frm_inmuebles_nuevo.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E16764D6-926A-4DA8-8C8C-D0A3881DEAEA"}
 */
function onActionBorrar(event) 
{
	var nombre = utils.stringTrim(contrato_id.toString())+"-"+utils.stringTrim(contrato_numero)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Contrato: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"13479AFD-A269-4B69-BBAE-713D636FCA48"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F38FB243-0043-4C9D-A9AC-1FBCF8615CF3"}
 */
function onActionGrabar(event) {
	// TODO Auto-generated method stub
}
