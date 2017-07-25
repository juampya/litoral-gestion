/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"09D8D06F-0024-4F15-A9F3-1D3541375946",variableType:4}
 */
var vl_rel_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FEB550B4-FB0B-4289-9FE1-3EF020B68B2B",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AFF4BAFB-DF1E-40A6-85AB-AE1478D2FC93"}
 */
var vl_titulo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"22BF1241-8F0D-4661-846D-6F7FB65BDE87"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("mat_conceptos").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B3E69CAF-F809-4BEE-8642-190BAA1DD536"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords(foundset)
	application.getWindow("mat_conceptos").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9B57DCC1-5D75-4110-843C-06DD2628FAB1"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{

	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		rel_descuento = 0
		rel_estado = 1
		mat_id = forms.sm_frm_matriculados_tabpanel.mat_id
		elements.btn_borrar.visible = false
	}
	else
	{
		controller.find()
		rel_id=vl_rel_id
		controller.search()
		elements.btn_borrar.visible = true		
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3EBE0A6F-2814-4265-9E4C-FB1FCCAB0824"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords(foundset)
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"86BDE0D6-668B-4E27-BC6C-066D9867BABB"}
 */
function onDataChange_AplicaVigencia(oldValue, newValue, event) 
{
	if(newValue==1)
	{
		elements.rel_fec_inicial.enabled = true
		elements.rel_fec_inicial.bgcolor = '#c0c0c0'
		elements.rel_fec_final.enabled = true
		elements.rel_fec_final.bgcolor = '#c0c0c0'
		
	}
	else
	{
		elements.rel_fec_inicial.enabled = false
		elements.rel_fec_inicial.bgcolor = '#ffffff'
		elements.rel_fec_final.enabled = false
		elements.rel_fec_final.bgcolor = '#ffffff'
	}
	
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"182AD21C-4108-4E81-A185-B8C0FBBC2D97"}
 */
function onActionBorrar(event) 
{
	globals.ventanaSiNo("Desea Borrar el Registro","borrarRegistro","",controller.getName())
}


/**
 * @properties={typeid:24,uuid:"635227F9-657E-4372-85EB-E64A7634F112"}
 */
function borrarRegistro()
{
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()
	application.getWindow("mat_conceptos").hide()
}