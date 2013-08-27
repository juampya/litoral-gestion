/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B6ECCD82-3F17-4815-86E3-3927019DE6C0"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9E4C521C-3548-4846-85C6-887BEF739868",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5DC85330-FBAC-4CA6-8841-83D257AADC12"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"305FDD2E-A3B6-4394-A063-AC912E13636A"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D9775760-15B9-4903-BAF7-BE6C686B23E1"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
		suc_id=1
		cliente_estado = 1
		cliente_bonificacion = 0
		cliente_limite_credito = 0
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
	
}
