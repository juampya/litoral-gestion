/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B120A049-A99A-44F4-A5C8-A1FFF59F3A30",variableType:4}
 */
var vl_hasta_cuota = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"02760C2A-8AC4-49EC-A478-E2BB7202B93D",variableType:4}
 */
var vl_desde_cuota = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C3E7D35A-AE38-4AB6-B1E9-2D623018B911",variableType:8}
 */
var vl_importe = null;

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D9C7D5A6-771F-4955-9403-9799A6394ADA"}
 */
function onDataChangeInmueble(oldValue, newValue, event)
{
	propietario_id = alqyser_contratos_to_alqyser_inmuebles.propietario_id
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B8FBD216-37BA-4A8C-9D2E-0539B27945D4"}
 */
function onActionAgregarGarantes(event) 
{
	alqyser_contratos_to_alqyser_contratos_rel_garantes.newRecord(false)
}

/**
 * @properties={typeid:24,uuid:"AC7F1F7B-9AA6-426C-8400-E085A9E5F010"}
 */
function simular()
{
	onActionSimular(true)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param psimulacion
 *
 * @properties={typeid:24,uuid:"DE98839C-B2CB-4CBA-844A-C6B91093DAA8"}
 */
function onActionSimular(psimulacion)
{
	if(contrato_fec_ini==null)
	{
		scopes.globals.ventanaAceptar("La Fecha de inicio no puede quedar vacía.",controller.getName())
		return
	}
	
	if(contrato_fec_fin==null)
	{
		scopes.globals.ventanaAceptar("La Fecha de inicio no puede quedar vacía.",controller.getName())
		return
	}
	
	//databaseManager.revertEditedRecords(forms.ays_frm_contratos_datos_cuotas.foundset)
	for (var i = vl_desde_cuota; i <= vl_hasta_cuota; i++) 
	{
		var tmp_existe = false
		
		if( forms.ays_frm_contratos_datos_cuotas.foundset.getSize()==0)
		{
//			var tmp_vto = plugins.DateUtils.addMonths(contrato_fec_ini,i-1)
//			tmp_vto.setDate(contrato_dia_vto_pago)
//				
//			forms.ays_frm_contratos_datos_cuotas.controller.newRecord(false)
//			forms.ays_frm_contratos_datos_cuotas.cuota_monto = vl_importe
//			forms.ays_frm_contratos_datos_cuotas.cuota_numero = i
//			forms.ays_frm_contratos_datos_cuotas.cuota_fec_vto = tmp_vto
//			forms.ays_frm_contratos_datos_cuotas.cuota_descuento = 0
//			forms.ays_frm_contratos_datos_cuotas.cuota_monto_pagado = 0
		}
		else
		{
			for (var j = 1; j <= forms.ays_frm_contratos_datos_cuotas.foundset.getSize(); j++)
			{
				tmp_existe = false
				var record = forms.ays_frm_contratos_datos_cuotas.foundset.getRecord(j);
					
				if(record.cuota_numero == i)
				{
					tmp_existe = true
					return
				}
			}
		}
		if(tmp_existe==false)
		{
			var tmp_vto = plugins.DateUtils.addMonths(contrato_fec_ini,i-1)
			tmp_vto.setDate(contrato_dia_vto_pago)
				
			forms.ays_frm_contratos_datos_cuotas.controller.newRecord(false)
			forms.ays_frm_contratos_datos_cuotas.cuota_monto = vl_importe
			forms.ays_frm_contratos_datos_cuotas.cuota_numero = i
			forms.ays_frm_contratos_datos_cuotas.cuota_fec_vto = tmp_vto
			forms.ays_frm_contratos_datos_cuotas.cuota_descuento = 0
			forms.ays_frm_contratos_datos_cuotas.cuota_monto_pagado = 0
			forms.ays_frm_contratos_datos_cuotas.emp_id = emp_id
		}
	}
}
