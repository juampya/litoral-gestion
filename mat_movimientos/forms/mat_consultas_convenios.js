/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5FFB46FF-485D-4590-AAD1-D187BAF3DF53",variableType:4}
 */
var vl_convenio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DBEF7FD6-1DD6-4126-A7C7-19E7DC4336F2",variableType:4}
 */
var vl_matriculado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F70FFA14-0E51-44C3-9408-F5BB1C067C96",variableType:4}
 */
var vl_estado = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"A54F21CE-73DC-45B5-9360-3A1A0AA06B37"}
 */
function onActionVolver(event) 
{
	globals.CargarMenu()
	forms['mat_inicio'].controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"C17E3A30-0CCF-4CD1-B448-8521CF29B39C"}
 */
function filtrar()
{
	controller.find()
	mat_id = vl_matriculado
	if(vl_estado != null) rel_estado = vl_estado
	if(vl_convenio != null) convenio_id = vl_convenio
//	if(vl_tipo_fecha == 0)
//	{
//		mov_fecha_emision = utils.dateFormat(vl_fec_ini, 'yyyy-MM')+'-01 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM')+'-28 23:59:59|yyyy-MM-dd HH:mm:ss'
//	}
//	else
//	{
//		mov_fecha_cobro = utils.dateFormat(vl_fec_ini, 'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
//	}
	controller.search()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0B24DA4E-8A7F-4AEB-9410-EA82D6E4FDCD"}
 */
function onShow(firstShow, event)
{
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
	    plugins.busy.prepare();
	}
	
	if(firstShow)
	{
		vl_matriculado = null
		vl_estado 	   = null
		vl_convenio    = null
		filtrar()
	}
}
