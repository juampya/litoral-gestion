/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"577E558D-75AE-4F75-8969-04E97C4BB228",variableType:93}
 */
var vl_fec_ini = null
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"30308CF6-81CC-4285-8CE8-B200AD0DB3CB",variableType:93}
 */
var vl_fec_fin = null

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A49A84DC-9B37-424D-A6FD-695C40675169",variableType:4}
 */
var vl_tipo_fecha = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"571EB6A9-7BCC-4F65-BF79-F371AD485569",variableType:4}
 */
var vl_matriculado = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"582074E0-CD3A-4592-A394-FB15C9DA0FAF",variableType:4}
 */
var vl_estado = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A7FFDCA9-06E1-4840-B853-A324F5AE392E",variableType:4}
 */
var vl_tipo_movim = 0

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A2F56B0B-95CC-459D-B16A-5B36AAF13B14"}
 */
function onActionVolver(event) 
{
	forms['mat_inicio'].controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"3FD8B2BC-CEB5-437D-8A07-CD80982E6D26"}
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
 * @properties={typeid:24,uuid:"41217E91-B824-4D39-8E55-C6D138328E37"}
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
 * @properties={typeid:24,uuid:"EA3F8954-F3CB-4F28-BC2F-83282CA701C7"}
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
 * @properties={typeid:24,uuid:"F1D01322-C950-445A-8BCF-29188BB79F0B"}
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
