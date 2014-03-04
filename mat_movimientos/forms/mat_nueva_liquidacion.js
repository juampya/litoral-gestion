/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2AE28BD8-45F3-43C2-B7CE-94F410335060",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3A83B472-0290-433D-BD92-A8CD67C8D4B5",variableType:4}
 */
var vl_mes = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F796E245-B1DF-414B-A214-CC06B014B75C"}
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
 * @properties={typeid:24,uuid:"07410B6D-E1B1-4BCE-9FA1-CB85C40BFDA3"}
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
 * @properties={typeid:24,uuid:"BA561EA0-B944-4F0D-B1E9-F34B100DA3FF"}
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
 * @properties={typeid:24,uuid:"65C1AE6D-2DDC-4547-AD5B-656E9F47E89E"}
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
 * @properties={typeid:24,uuid:"6478F97C-9728-466D-A5D8-85098B8FF167"}
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
 * @properties={typeid:24,uuid:"AEED850D-9629-4993-8185-165DDA4257EC"}
 */
function generarCuotas()
{
	application.getWindow("generarLiquidacion").hide()	
	forms.mat_procesar_cuotas_mensuales_aux.vl_anio = vl_anio
	forms.mat_procesar_cuotas_mensuales_aux.vl_mes = vl_mes	
	globals.ventanaFormulario("cuotaMensual","Litoral Gestion",forms.mat_procesar_cuotas_mensuales_aux.controller.getName())
	forms.mat_liquidacion_resumen.vl_anio = vl_anio
	forms.mat_liquidacion_resumen.vl_mes = vl_mes	
	forms.mat_liquidacion_resumen.controller.show()
}
