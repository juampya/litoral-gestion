/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"04B1FBBC-407F-4D9B-8AC9-8581D0F3D237",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"79A1E188-C3CE-4DE6-8B6C-2EA691A0D3B5",variableType:4}
 */
var vl_mes = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"25EBA0EC-073D-4A32-9981-A4596601B720"}
 * @AllowToRunInFind
 */
function onActionLiquidar(event) 
{
	globals.vg_nro_tmp = globals.tmpRandomNumber()
	
	/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
	var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
	fs_mov.find()
	fs_mov.mov_mes_emision = vl_mes
	fs_mov.mov_anio_emision = vl_anio
	fs_mov.mov_tipo_de_movimiento = 0
	var cant = fs_mov.search()
	
	if(cant > 0)
	{
		forms.mat_liquidacion_resumen.vl_es_reliquidacion = 1
		reliquidar()
	}
	else
	{
		forms.mat_liquidacion_resumen.vl_es_reliquidacion = 0
		generarCuotas()
		
	}	

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8E6FF4C-3B7B-4334-9948-4CE5F23E0088"}
 */
function onActionVolver(event) 
{
	application.getWindow("generarLiquidacion").hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7F6270F2-03DD-4A73-82EE-D2E2A32CF29D"}
 */
function onHide(event) 
{
	application.getWindow("generarLiquidacion").hide()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4D1F526D-6428-40EA-8E7C-E4B9DD2246B5"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		vl_anio = application.getServerTimeStamp().getFullYear()
		vl_mes = application.getServerTimeStamp().getMonth() + 1
	}

}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"A9EB6F00-AE9E-45C6-B14C-E36C4769C235"}
 */
function reliquidar()
{
	//Buscamos si de la liquidacion ya generada hay alguna cuota cobrada.
	/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
	var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
	fs_mov.find()
	fs_mov.mov_mes_emision = vl_mes
	fs_mov.mov_anio_emision = vl_anio
	fs_mov.mov_estado = 1
	fs_mov.mov_tipo_de_movimiento = 0
	if(fs_mov.search()!=0)
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', 'En el período que desea reliquidar ya se cobraron cuotas, no se puede reliquidar!', 'info', controller.getName(), 'Aceptar',null,null,null, null, null, null, null) 
	}
	else
	{	
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', 'Ya se liquidaron las cuotas del periodo seleccionado, desea continuar???', 'question', controller.getName(), 'No', '', 'Si', 'generarCuotas', null, null, null, null) 
	}
}

/**
 * @properties={typeid:24,uuid:"D7BDCF2A-7912-4CFF-94FA-288794678543"}
 */
function generarCuotas()
{
	globals.generar_cuotas_mensuales(vl_mes,vl_anio,null)
	application.getWindow("generarLiquidacion").hide()
	forms.mat_liquidacion_resumen.vl_anio = vl_anio
	forms.mat_liquidacion_resumen.vl_mes = vl_mes	
	forms.mat_liquidacion_resumen.controller.show()
}
