/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FDFF483D-8B8B-40A7-8290-9EE41316631E"}
 */
var vl_frm_anterior = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7CDEC058-F652-4DE8-B225-6DB4D1EAF650",variableType:93}
 */
var vl_fec_ini = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"97BA3801-9158-44F9-8B58-08EC7E0285A3",variableType:93}
 */
var vl_fec_fin = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ADC256E0-462B-4118-805C-5539F4EF9EC4",variableType:4}
 */
var vl_tipo_fecha = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E79F779E-B297-4D1E-AB3B-23B19E479C7F",variableType:4}
 */
var vl_medio_cobro = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"529D14A2-11AA-47F2-808E-E4DC82ABDDAC",variableType:4}
 */
var vl_estado = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"05DBA6EE-C670-447F-8B27-321B96FAC8E0",variableType:4}
 */
var vl_tipo_movim = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"69AE7F1A-EB57-464F-8185-590159405827"}
 */
function onActionVolver(event) 
{
	globals.CargarMenu()
	forms['mat_inicio'].controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"63DD2499-698C-40E1-8015-7EDAE976F55C"}
 */
function filtrar()
{
	controller.find()
	if(vl_medio_cobro!=null) medios_cobro_id = vl_medio_cobro
	if(vl_estado != null && vl_estado != 3) ren_estado = vl_estado
	//ren_fecha_cobro = utils.dateFormat(vl_fec_ini, 'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
	controller.search()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E1EFF84-7947-43CB-AE4C-279ACA11A2D4"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		vl_medio_cobro = null
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
 * @properties={typeid:24,uuid:"5A8D1E9D-0E6B-4763-BA18-D2138B440675"}
 */
function onActionDetalle(event) 
{
	forms.mat_rendiciones_detalle.controller.show()
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
 * @properties={typeid:24,uuid:"B294CFEF-8E27-4766-B91B-5DFE5B713275"}
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
 * @properties={typeid:24,uuid:"939F7C36-D67F-4A8B-822F-DC460C2797F1"}
 */
function onActionNuevo(event) 
{
	globals.ventanaFormulario("nuevarendicion","Litoral Gestion",forms.mat_rendiciones_nueva.controller.getName())
}


