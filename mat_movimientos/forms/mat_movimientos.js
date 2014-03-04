/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AEFB6152-C1CF-4883-88F4-7762CF375996",variableType:93}
 */
var vl_fec_ini = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AC90043F-4AC2-4574-ABA0-1DFD51BC9BDD",variableType:93}
 */
var vl_fec_fin = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"478FB5E6-1F74-4CFA-AAEE-C99B63D556BB",variableType:4}
 */
var vl_tipo_fecha = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0486C4ED-FE5B-4898-972B-FB558871096F",variableType:4}
 */
var vl_matriculado = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3D09ABED-06DA-4874-BC84-97C114BBF095",variableType:4}
 */
var vl_estado = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F72B1B5-3D9F-493D-BF5F-E722E9B5745F",variableType:4}
 */
var vl_tipo_movim = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"189C1944-AE3D-4F21-934A-F20FBCBD3516"}
 */
function onActionVolver(event) 
{
	globals.CargarMenu()
	forms['mat_inicio'].controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"FB42A121-B6B0-48C9-A5D1-8A0763C914C0"}
 */
function filtrar()
{
	controller.find()
	mat_id = vl_matriculado
	if(vl_estado != null && vl_estado != 3)
	{mov_estado = vl_estado}
	if(vl_tipo_movim != null && vl_tipo_movim != 3)
	{mov_tipo_de_movimiento = vl_tipo_movim}
	if(vl_tipo_fecha == 0)
	{
		mov_fecha_emision = utils.dateFormat(vl_fec_ini, 'yyyy-MM')+'-01 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM')+'-28 23:59:59|yyyy-MM-dd HH:mm:ss'
	}
	else
	{
		mov_fecha_cobro = utils.dateFormat(vl_fec_ini, 'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
	}
	controller.search()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"770B6B2E-0DC3-44BB-B261-72E91BBDD571"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		vl_matriculado = null
		vl_estado = 3
		vl_tipo_movim = 3
		vl_tipo_fecha = 0
		vl_fec_ini = application.getServerTimeStamp()
		vl_fec_fin = application.getServerTimeStamp()
		filtrar()
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61F0CDBF-46EF-4560-ACD4-C8847CDF9C4A"}
 */
function onActionDetalle(event) 
{
	forms.mat_movimientos_detalle.controller.show()
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
 * @properties={typeid:24,uuid:"389A8F45-F3C3-490B-A3A0-A9D2EDFC56CA"}
 */
function onDataChangeTipoFecha(oldValue, newValue, event) 
{
	
	if(vl_tipo_fecha == 1)
	{
		elements.vl_fec_ini.format = "dd-MM-yyyy"
		elements.vl_fec_fin.format = "dd-MM-yyyy"	
	}
	else
	{
		elements.vl_fec_ini.format = "MM-yyyy"
		elements.vl_fec_fin.format = "MM-yyyy"	
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E99BD59-DC8C-433B-B152-A6FFC348B4A4"}
 */
function onActionNuevo(event) 
{
	globals.ventanaFormulario("nuevoMovim","Litoral Gestion",forms.mat_movimientos_nuevo.controller.getName())
}
