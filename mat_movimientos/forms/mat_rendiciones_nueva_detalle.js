/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"52691F6F-2F28-4D46-95F9-2456E6A9FEAC",variableType:93}
 */
var vl_fecha_del_debito = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D45DEBF3-0257-4E35-B027-C76B67B8A698",variableType:4}
 */
var vl_selecciona = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"957AFA50-5A2E-4348-BDC8-6CDCAF7BF725"}
 */
function onActionDetalle(event) 
{
	scopes.globals.vg_formulario_anterior = forms.mat_rendiciones_detalle.controller.getName()
	forms.mat_movimientos_detalle.controller.loadRecords(mov_id)
	forms.mat_movimientos_detalle.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1B54FDA9-211B-4D62-8CCE-B4ADC954401F"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event)
{
	vl_selecciona = 0
	vl_fecha_del_debito = application.getServerTimeStamp()
	elements.btn_selectodo.imageURL ="media:///16x16/check_box.png"
		
	controller.find()
	mov_estado = 0
	mat_movimientos_to_mat_matriculados.mat_debito_automatico=1
	controller.search()
	
	for (var i = 1; i <= databaseManager.getFoundSetCount(foundset); i++) 
	{
		var record = foundset.getRecord(i);
		record.calc_selecciona = 0
		record.mov_fecha_cobro = null
		record.mov_importe_cobrado = null
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1FB0083F-2DC1-4904-97AF-D4BE646B6388"}
 */
function onAction(event) 
{
	forms.mat_rendiciones_nueva.ren_cant_registros = 0
	forms.mat_rendiciones_nueva.ren_importe_total  = 0
	
	if(vl_selecciona==0)
	{
		vl_selecciona=1
		elements.btn_selectodo.imageURL ="media:///16x16/cancel.png"
	}
	else
	{
		vl_selecciona=0
		elements.btn_selectodo.imageURL ="media:///16x16/check_box.png"
	}

	for (var i = 1; i <= databaseManager.getFoundSetCount(foundset); i++) 
	{
		var record = foundset.getRecord(i);
			record.calc_selecciona = vl_selecciona
		
		if(vl_selecciona==0)
		{
			//forms.mat_rendiciones_nueva.ren_cant_registros--
			//forms.mat_rendiciones_nueva.ren_importe_total = forms.mat_rendiciones_nueva.ren_importe_total -record.mov_importe
			record.mov_fecha_cobro = null
			record.mov_importe_cobrado = null
		}
		else
		{
			record.mov_fecha_cobro = vl_fecha_del_debito
			record.mov_importe_cobrado = record.mov_importe
			forms.mat_rendiciones_nueva.ren_cant_registros++
			forms.mat_rendiciones_nueva.ren_importe_total = forms.mat_rendiciones_nueva.ren_importe_total +record.mov_importe
		}
	}
//	forms.mat_rendiciones_nueva.ren_cant_registros = ag_cantidad
//	forms.mat_rendiciones_nueva.ren_fecha_captura  = application.getServerTimeStamp()
//	forms.mat_rendiciones_nueva.ren_fecha_proceso  = vl_fecha_del_debito
//	forms.mat_rendiciones_nueva.ren_importe_total  = ag_importe
//	forms.mat_rendiciones_nueva.ren_nro_lote	   = 1
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
 * @properties={typeid:24,uuid:"72FBD3EA-6688-4AB5-9102-5F08D4694F30"}
 */
function onDataChangeSelecciona(oldValue, newValue, event)
{
	if(calc_selecciona==0)
	{
		mov_fecha_cobro = null
		mov_importe_cobrado = null
		forms.mat_rendiciones_nueva.ren_cant_registros--
		forms.mat_rendiciones_nueva.ren_importe_total = forms.mat_rendiciones_nueva.ren_importe_total -mov_importe
	}
	else
	{
		mov_fecha_cobro = vl_fecha_del_debito
		mov_importe_cobrado = mov_importe
		forms.mat_rendiciones_nueva.ren_cant_registros++
		forms.mat_rendiciones_nueva.ren_importe_total = forms.mat_rendiciones_nueva.ren_importe_total +mov_importe
	}
	return true
}
