/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"63DFF0B4-C3B8-407F-9E95-72327BA431A6",variableType:4}
 */
var vl_rel_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A722047B-94C5-4144-8CD9-0F1DC7C183ED",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"77261BD8-BB5E-48D8-B462-881B83C53E85"}
 */
var vl_titulo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B6A95F8-3E9C-4ABA-A8E2-F779E7369412"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("mat_perfil").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"24869BE6-620D-4D1E-B6F6-574CAA942090"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords(foundset)
	application.getWindow("mat_perfil").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C4357BB-B284-49E5-A676-C1FCA64C354B"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{

	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
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
 * @properties={typeid:24,uuid:"05106D0C-BB4E-4C35-AA0A-A59F43AAF621"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords(foundset)
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C588CB35-E20E-4555-AA0C-B9B9FE776B7D"}
 */
function onActionBorrar(event) 
{
	globals.ventanaSiNo("Desea Borrar el Registro","borrarRegistro","",controller.getName())
}

/**
 * @properties={typeid:24,uuid:"3800F1B7-1E18-4B1D-B344-33AEBF30A0DF"}
 */
function borrarRegistro()
{
	controller.deleteRecord()
	application.getWindow("mat_perfil").hide()
}
