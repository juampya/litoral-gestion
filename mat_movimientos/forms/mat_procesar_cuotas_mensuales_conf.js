/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ABC36E5F-CB45-49B7-B63C-66A3F67682E0",variableType:4}
 */
var vl_reliquidacion = null
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"15B98D9A-7537-4119-BA84-572F6D2D749D",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"30295F69-21B5-43B5-AB94-F5C79B70180E",variableType:4}
 */
var vl_anio = null;


/**
 * @properties={typeid:24,uuid:"015637EA-49BF-49D3-8D3E-874941B8512B"}
 */
function procesar(max, min,val)
{
    elements.progress.minimum = min // min value allowed
    elements.progress.maximum = max //max value allowed	
    var percentage =0
    elements.progress.value = val
    //application.sleep(10)//simulates time needed to perform a loop
    percentage = elements.progress.getPercentComplete()
    elements.progress.string = "Procesando "+val+" Registros. Completado "+parseInt((percentage*100).toString())+"%. "
    application.updateUI() //refresh user interface

	if(val == elements.progress.maximum)
	{
	  elements.progress.string = "Proceso Completado"
	  application.beep()//signal when ended
	  application.sleep(1000) // bar remains visible 1 more second before disappearing
	  elements.progress.visible= false
	  plugins.dialogs.showInfoDialog( '',  'Proceso Completado',  'OK')
	  application.getWindow("confirmarCuotas").hide()
	}
}

/**
 * TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"80FD63BB-3830-4E8E-8B5A-4DD64F85566E"}
 */
function inicializar()
{
	elements.progress.visible = true // show  progress bar
    elements.progress.orientation = 0 //(0=hor(default) 1=vertical)
    elements.progress.stringPainted = true // enables showing strings inside the progres bar
    elements.progress.string = "Comenzando Proceso..."
    elements.progress.value =0 // initialise value of the progres bar
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param mes
 * @param anio
 * @param reliquidacion
 * @properties={typeid:24,uuid:"970CC61E-3F23-4C06-A907-332F6AE500BA"}
 */
function confirmar_cuotas_mensuales(mes, anio, reliquidacion) 
{
	/** @type {JSFoundset<db:/sistemas/mat_movimientos_aux>}*/
	var fs_movim_aux = forms.mat_liquidacion_resumen.foundset
	
	if(reliquidacion == 1)
	{
		/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
		var fs_movim = databaseManager.getFoundSet('sistemas','mat_movimientos')
		fs_movim.find()
		fs_movim.mov_anio_emision = vl_anio
		fs_movim.mov_mes_emision = vl_mes	
		fs_movim.mov_estado = 0
		var cant = fs_movim.search()
		if(cant > 0)
		{
			fs_movim.mat_movimientos_to_mat_movimientos_det.deleteAllRecords()
			fs_movim.deleteAllRecords()
		}
	}
	var cantidad = databaseManager.getFoundSetCount(fs_movim_aux)
	for (var i = 1; i <= fs_movim_aux.getSize(); i++) 
	{
		var rec = fs_movim_aux.getRecord(i)
		/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
		var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
		fs_mov.newRecord()
		fs_mov.emp_id 				  = scopes.globals.mx_empresa_id
		fs_mov.mov_anio_emision 	  = rec.mov_anio_emision
		fs_mov.mov_descripcion 		  = rec.mov_descripcion
		fs_mov.mov_estado 			  = rec.mov_estado
		fs_mov.mov_fecha_cobro 		  = rec.mov_fecha_cobro
		fs_mov.mov_fecha_emision 	  = rec.mov_fecha_emision
		fs_mov.mov_fec_vto1 		  = rec.mov_fec_vto1
		fs_mov.mov_fec_vto2 		  = rec.mov_fec_vto2
		fs_mov.mat_id 				  = rec.mat_id
		fs_mov.mov_importe 			  = rec.mov_importe
		fs_mov.mov_importe_2vto 	  = rec.mov_importe_2vto
		fs_mov.mov_recargo 			  = rec.mov_recargo
		fs_mov.mov_mes_emision 		  = rec.mov_mes_emision
		fs_mov.mov_tipo_de_movimiento = rec.mov_tipo_de_movimiento
		fs_mov.mov_grab_fec 		  = rec.mov_grab_fec
		fs_mov.mov_grab_ope 		  = rec.mov_grab_ope
		databaseManager.saveData(fs_mov)
		for(var j = 1; j <= rec.mat_movimientos_aux_to_mat_movimientos_det_aux.getSize(); j++) 
		{
			var rec1 = rec.mat_movimientos_aux_to_mat_movimientos_det_aux.getRecord(j)
			/** @type {JSFoundset<db:/sistemas/mat_movimientos_det>}*/
			var fs_det = databaseManager.getFoundSet('sistemas','mat_movimientos_det')
			fs_det.newRecord()
			fs_det.det_importe 			= rec1.det_importe
			fs_det.det_importe_original = rec1.det_importe_original
			fs_det.ingr_id 				= rec1.ingr_id
			fs_det.mov_id 				= fs_mov.mov_id
			fs_det.res_id 				= rec1.res_id
			databaseManager.saveData(fs_det)
		}
		procesar(cantidad,0,i)
	}
	fs_movim_aux.mat_movimientos_aux_to_mat_movimientos_det_aux.deleteAllRecords()
	fs_movim_aux.deleteAllRecords()
	forms.mat_liquidacion.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6281FF1B-1A52-493A-B1F1-D71CFEBECF27"}
 */
function onShow(firstShow, event) 
{
	inicializar()
	confirmar_cuotas_mensuales(vl_mes, vl_anio,vl_reliquidacion) 
}
