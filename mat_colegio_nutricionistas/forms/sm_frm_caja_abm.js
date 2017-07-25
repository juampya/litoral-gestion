/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"670777DC-11C0-4D02-B208-7E7343286260"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"428A4881-3CCC-4C98-A05C-11A7057F1820",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"62D811F0-7657-4EF0-89BA-A408E1F9598B"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"62C588BE-E099-4567-A17F-D3BC9B80F697"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("caja").hide()
	forms.sm_frm_caja.filtrar()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7721B990-B14B-41C5-A485-EC201491E6E0"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("caja").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"29CE68D2-C968-4AE6-8CFE-8F1A9402D586"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id = scopes.globals.mx_empresa_id
		caja_tipo=0
	}
	
	if(vl_nuevo==2)
	{	
		controller.newRecord(false)
		emp_id = scopes.globals.mx_empresa_id
		caja_tipo=1
	}
	elements.btn_delete.visible = false
	elements.caja_tipo.enabled = false
	if(vl_nuevo==0)
	{
		elements.btn_delete.visible = true
		elements.caja_tipo.enabled = true
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"5CFB2E3B-5DAF-4401-9356-65A8099671A8"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2C7FF9FA-45B5-4901-A63F-638CE3B438D5"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea borrar el Registro??","atention",controller.getName(),"No",null,"Si","borrarRegistro",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"9DF9B035-A36A-48E6-99B4-E99D68FDC85F"}
 */
function borrarRegistro()
{
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()
	application.getWindow("caja").hide()
	forms.sm_frm_caja.filtrar()
}
