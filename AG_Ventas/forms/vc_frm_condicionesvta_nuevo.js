/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CF6D523B-B43F-474B-8979-F5E3A6DE5009"}
 */
var vl_cuotas_o_dias = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D42C07D8-7EBB-4BFA-9871-7FDECD62359C"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0269D5BB-A091-4562-8608-8AF888A248AF",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"948BC430-5A0F-44AA-AB10-BFC3E3BC67DF"}
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
 * @properties={typeid:24,uuid:"5BEA3B1F-F8C3-426F-A6DD-D33B291E53A9"}
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
 * @properties={typeid:24,uuid:"147BB3FC-7E5E-44CA-9E50-619A663698D6"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
		suc_id=1
		condivta_descuento=0
		condivta_recargo=0
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
	
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"1102A6C6-8742-43F7-9CDB-BE81753518FB"}
 */
function onDataChange(oldValue, newValue, event) 
{
	if(condivta_tipo_vto==1)
	{
		vl_cuotas_o_dias = "Cantidad de CUOTAS: "
		elements.condivta_dia_vto.enabled=true
		elements.condivta_dia_vto.bgcolor='#f0f0f0'
		elements.condivta_salta_mes.enabled=true
		elements.condivta_salta_mes.bgcolor='#f0f0f0'	
		if(vl_nuevo==1)
		{
			condivta_dia_vto = 10
			condivta_salta_mes = 20
		}
	}
	else
	{
		vl_cuotas_o_dias = "Cantidad de DIAS: "
		elements.condivta_dia_vto.enabled=false
		elements.condivta_dia_vto.bgcolor='#c0c0c0'
		elements.condivta_salta_mes.enabled=false
		elements.condivta_salta_mes.bgcolor='#c0c0c0'
	}
	return true
}
