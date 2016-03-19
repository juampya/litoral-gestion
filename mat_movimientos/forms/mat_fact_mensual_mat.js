/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3B42182F-1D7E-4055-B087-8643733FEC8C"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3991D0F2-B4DD-4434-8956-83E13F15D1DB",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E1238AD5-1EFB-4C46-A2E4-3DE9C5962A62",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3EE930EF-06AA-4992-902E-9A4E78F2FE37",variableType:4}
 */
var vl_obra_social = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CD67C54B-4027-419A-A7F6-5E4CC36E3260",variableType:8}
 */
var vl_total = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75F74CE7-97F0-4164-9800-6F4562D1860D"}
 */
function onActionVolver(event) 
{
	globals.CargarMenu()
	forms['mat_inicio'].controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"10FDA76E-B4CF-48ED-A3FB-87A4856333E8"}
 */
function filtrar()
{
	vl_total = 0
	
	controller.find()
	if(vl_obra_social!=null) obsoc_id = vl_obra_social
	if(vl_mes!=null) fact_mes = vl_mes
	if(vl_anio!=null) fact_anio = vl_anio
	controller.search()
	
	for (var i = 1; i <= foundset.getSize(); i++)
	{
		var record = foundset.getRecord(i);
		if(utils.hasRecords(mat_fact_mensual_to_mat_fact_mensual_detalle))
		{
			vl_total = vl_total + record.mat_fact_mensual_to_mat_fact_mensual_detalle.aggr_imp_total
		}
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"11183BDB-B547-4A0B-BFC9-9252C5429538"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		vl_obra_social = null
		vl_mes  = application.getServerTimeStamp().getMonth()+1
		vl_anio = application.getServerTimeStamp().getFullYear()
		filtrar()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2AAEFE0B-080B-49CE-BABD-5A7C453E2786"}
 */
function onActionDetalle(event) 
{
	forms.mat_fact_mensual_mat_detalle.vl_nuevo = 0
	forms.mat_fact_mensual_mat_detalle.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CAE59906-6389-4C64-8CC2-A054B7784E51"}
 */
function onActionNuevo(event) 
{
	forms.mat_fact_mensual_mat_detalle.vl_nuevo = 1
	forms.mat_fact_mensual_mat_detalle.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E1F7556-9122-4302-9873-5040373F3316"}
 */
function onActionRefrescar(event) 
{
	vl_obra_social = null
	vl_mes  = application.getServerTimeStamp().getMonth()+1
	vl_anio = application.getServerTimeStamp().getFullYear()
	filtrar()
}
