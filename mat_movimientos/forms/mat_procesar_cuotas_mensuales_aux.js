/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E1B41B05-284A-4152-9AEB-453E4BA86F59",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB00D26C-C9AC-454C-A255-45ED430A68A3",variableType:4}
 */
var vl_anio = null;

/**
 * @properties={typeid:24,uuid:"8797A2C2-BCFC-496E-A3EA-1E409571E41B"}
 */
function progressBar()
{
	elements.progress.visible = true // show  progress bar
    elements.progress.orientation = 0 //(0=hor(default) 1=vertical)
    elements.progress.stringPainted = true // enables showing strings inside the progres bar
    elements.progress.string = "Starting script..."
    elements.progress.value =0 // initialise value of the progres bar
    elements.progress.minimum = 0 // min value allowed
    elements.progress.maximum = 300 //max value allowed

    var percentage =0
    for (var i=0 ; i<300 ; i++)
    {
       elements.progress.value = i
       //application.sleep(10)//simulates time needed to perform a loop
       percentage = elements.progress.getPercentComplete()
       elements.progress.string = "Looped through "+i+" records.Completed "+parseInt((percentage*100).toString())+"%. "
       application.updateUI() //refresh user interface
    }
    elements.progress.string = "Script Completed"
    application.beep()//signal when ended
    application.sleep(1000) // bar remains visible 1 more second before disappearing
    elements.progress.visible= false
    plugins.dialogs.showInfoDialog( '',  'Script completed',  'OK')
}

/**
 * @properties={typeid:24,uuid:"048A2BEB-4DF7-4185-83F1-776490EEA52E"}
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
	  application.getWindow("cuotaMensual").hide()
	}
}

/**
 * TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"E899A7FF-10A1-4042-9B65-F93BC084546B"}
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
 * @param matriculado
 *
 * @properties={typeid:24,uuid:"AFFF54ED-4B33-4F9B-BF45-A0CBF7893453"}
 */
function generar_cuotas_mensuales(mes, anio, matriculado) 
{
	/** @type {JSFoundSet<db:/sistemas/mat_configuraciones>} */
	var fs_conf = databaseManager.getFoundSet('sistemas','mat_configuraciones')	
		fs_conf.loadAllRecords()
		fs_conf.getRecord(1)
	
	/** @type {JSFoundSet<db:/sistemas/mat_matriculados>} */
	var fs_matriculados = databaseManager.getFoundSet('sistemas','mat_matriculados')
	if(matriculado == null)
	{
		//busca todos los matriculados q no tienen primer movimiento y q estan activos en mes y anio
		
		var qry = 		
		"SELECT * FROM mat_matriculados as a " +
		"where a.mat_estado = 1 and a.mat_id not in (select mat_id from mat_movimientos as b where b.mov_anio_emision = " + anio + " and b.mov_mes_emision =" + mes + " and b.mov_tipo_de_movimiento = 1) "
		
		/** @type {JSDataSet<id:number>}*/
		var ds = databaseManager.getDataSetByQuery('sistemas', qry, new Array(), -1);
		
		fs_matriculados.loadRecords(ds)

	}
	else
	{
		fs_matriculados.find()
		fs_matriculados.mat_id = matriculado
		fs_matriculados.mat_estado = 1
		fs_matriculados.search()		
	}

	var maximo = databaseManager.getFoundSetCount(fs_matriculados)
	
	if(maximo <= 0)
	{
		 application.getWindow("cuotaMensual").hide()
		globals.ventanaAceptar("No Existen Matriculados Activos o Todos los matriculados tienen generados movimientos de Alta para este mes.\n Verifique",controller.getName())
		return
	}
	
	//Por cada Matriculado Activo ---------------------------------------------------------------------
	for (var i = 1; i <= fs_matriculados.getSize(); i++) 
	{
		var rec = fs_matriculados.getRecord(i)

		//Graba Encabezado del movimiento-----------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos_aux>} */
		var fs_movim_aux = databaseManager.getFoundSet('sistemas','mat_movimientos_aux')
		fs_movim_aux.newRecord()
		fs_movim_aux.mat_id = rec.mat_id
		fs_movim_aux.mov_mes_emision = mes
		fs_movim_aux.mov_anio_emision = anio
		fs_movim_aux.mov_descripcion = "Cuota Mensual " + mes + "/" + anio
		fs_movim_aux.mov_estado = 0 //Deuda
		fs_movim_aux.mov_fecha_emision = new Date(anio, mes - 1, 15)
		fs_movim_aux.mov_fec_vto1 = new Date(anio, mes - 1, fs_conf.conf_venc_cuota_1_dia)
		fs_movim_aux.mov_fec_vto2 = new Date(anio, mes - 1, fs_conf.conf_venc_cuota_2_dia)
		fs_movim_aux.mov_recargo = fs_conf.conf_interes_x_atraso
		fs_movim_aux.mov_tipo_de_movimiento = 0 // Cuota mensual
		fs_movim_aux.tmp_id = globals["vg_nro_tmp"]
		fs_movim_aux.mov_grab_fec = application.getServerTimeStamp()
		fs_movim_aux.mov_grab_ope = globals.ag_usuariovigente.usu_id
		databaseManager.saveData(fs_movim_aux) 
		//fin Graba Encabezado del movimiento--------------------------------------------------------
		
		//Busca Los ingresos del matriculado-----------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_matriculado_rel_ingresos>} */
		var fs_rel_ing = databaseManager.getFoundSet('sistemas','mat_matriculado_rel_ingresos')
		fs_rel_ing.find()
		fs_rel_ing.mat_id = rec.mat_id
		fs_rel_ing.rel_estado = 1 //Activo para ese matriculado
		fs_rel_ing.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_estado = 1 //Activo en general
		fs_rel_ing.search()
		//fin Busca Los ingresos del matriculado-----------------------------------------------------------
				
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos_det_aux>} */
		var fs_detalle = null	
		var acumImporte = 0
		
		//Graba Detalle del Movimiento--------------------------------------------------------------------------------------------------------
		for (var j = 1; j <= fs_rel_ing.getSize(); j++) //Por cada ingreso asociado al matriculado
		{
			var rec1 = fs_rel_ing.getRecord(j)
			if(rec1.rel_aplica_vigencia == 1)// Si tiene una fecha de vigencia a respetar 
			{
				if(rec1.rel_fec_inicial != 0 && rec1.rel_fec_inicial!=null)
				{
					if(rec1.rel_fec_final != 0 && rec1.rel_fec_final!=null)
					{
						if(rec1.rel_fec_inicial.getFullYear() <= anio && anio <= rec1.rel_fec_final.getFullYear())
						{
							if(rec1.rel_fec_inicial.getMonth() + 1 <= mes && mes <= rec1.rel_fec_final.getMonth() + 1)
							{
								fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
								fs_detalle.newRecord()
								fs_detalle.ingr_id = rec1.ingr_id
								fs_detalle.mov_id = fs_movim_aux.mov_id
								fs_detalle.det_importe = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
								//fs_detalle.det_importe_original = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
								fs_detalle.det_importe_2vto = fs_detalle.det_importe+((fs_detalle.det_importe*fs_movim_aux.mov_recargo)/100)
								fs_detalle.tmp_id = globals["vg_nro_tmp"]
								databaseManager.saveData(fs_detalle) // Graba detalle del movimiento
								acumImporte += fs_detalle.det_importe
							}
						}
					}
					else
					{
						if(rec1.rel_fec_inicial.getFullYear() <= anio)
						{
							if(rec1.rel_fec_inicial.getMonth() + 1 <= mes)
							{
								fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
								fs_detalle.newRecord()
								fs_detalle.ingr_id = rec1.ingr_id
								fs_detalle.mov_id = fs_movim_aux.mov_id
								fs_detalle.det_importe = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
								//fs_detalle.det_importe_original = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
								fs_detalle.det_importe_2vto = fs_detalle.det_importe+((fs_detalle.det_importe*fs_movim_aux.mov_recargo)/100)
								fs_detalle.tmp_id = globals["vg_nro_tmp"]
								databaseManager.saveData(fs_detalle) // Graba detalle del movimiento
								acumImporte += fs_detalle.det_importe
							}
						}
					}
				}
			}
			else
			{
				fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
				fs_detalle.newRecord()
				fs_detalle.ingr_id = rec1.ingr_id
				fs_detalle.mov_id = fs_movim_aux.mov_id
				fs_detalle.det_importe = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
				//fs_detalle.det_importe_original = rec1.mat_matriculado_rel_ingresos_to_mat_ingresos.ingr_importe
				fs_detalle.det_importe_2vto = fs_detalle.det_importe+((fs_detalle.det_importe*fs_movim_aux.mov_recargo)/100)
				fs_detalle.tmp_id = globals["vg_nro_tmp"]
				databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
				acumImporte += fs_detalle.det_importe
			}
		}
		//Fin Graba Detalle del Movimiento--------------------------------------------------------------------------------------------------------
		
		//Busca cuotas con deuda-------------------------------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
		var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
		fs_mov.find()	
		fs_mov.mov_estado = 0
		fs_mov.mat_id = rec.mat_id
		fs_mov.search()
		
		var deuda = 0
		for(var k=1;k<=fs_mov.getSize();k++)
		{
			var rec2 = fs_mov.getRecord(k)
			if(rec2.mov_fecha_emision < fs_movim_aux.mov_fecha_emision)
			{	
				deuda += rec2.mov_importe
			}
		}
		if(deuda > 0)
		{
			fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
			fs_detalle.newRecord()
			fs_detalle.ingr_id = fs_conf.conf_cuota_impaga_ingr_id //Deuda Acumulada
			fs_detalle.mov_id = fs_movim_aux.mov_id
			fs_detalle.det_importe = deuda
			//fs_detalle.det_importe_original = deuda
			fs_detalle.det_importe_2vto = fs_detalle.det_importe+((fs_detalle.det_importe*fs_movim_aux.mov_recargo)/100)
			fs_detalle.tmp_id = globals["vg_nro_tmp"]
			databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
			acumImporte += fs_detalle.det_importe
			//Fin Busca cuotas con deuda-------------------------------------------------------------------------------
			
			//Calcula Interes sobre deuda-----------------------------------------------------------------
			var interes = deuda * fs_conf.conf_interes_cuota_impaga / 100
			
			fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
			fs_detalle.newRecord()
			fs_detalle.ingr_id = fs_conf.conf_interes_ingr_id //Interes
			fs_detalle.mov_id = fs_movim_aux.mov_id
			fs_detalle.det_importe = interes
			//fs_detalle.det_importe_original = interes
			fs_detalle.det_importe_2vto = fs_detalle.det_importe+((fs_detalle.det_importe*fs_movim_aux.mov_recargo)/100)
			fs_detalle.tmp_id = globals["vg_nro_tmp"]
			databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
			acumImporte += fs_detalle.det_importe		
			//Fin Calcula Interes sobre deuda-----------------------------------------------------------------
		}
		//Busca devoluciones-------------------------------------------------------------------------------
		/** @type {JSFoundSet<db:/sistemas/mat_resarcimientos>} */
		var fs_res = databaseManager.getFoundSet('sistemas','mat_resarcimientos')
		fs_res.find()	
		fs_res.res_anio_aplicacion = anio
		fs_res.res_mes_aplicacion = mes
		fs_res.mat_id = rec.mat_id
		fs_res.search()
		for(var g=1;g<=fs_res.getSize();g++)
		{
			var rec3 = fs_res.getRecord(g)
			fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
			fs_detalle.newRecord()
			fs_detalle.ingr_id = rec3.ingr_id
			fs_detalle.mov_id = fs_movim_aux.mov_id
			fs_detalle.det_importe = rec3.res_importe * -1
			//fs_detalle.det_importe_original = rec3.res_importe * -1
			fs_detalle.det_importe_2vto = (fs_detalle.det_importe+((fs_detalle.det_importe*fs_movim_aux.mov_recargo)/100))*(-1)
			fs_detalle.res_id = fs_res.res_id
			fs_detalle.tmp_id = globals["vg_nro_tmp"]
			databaseManager.saveData(fs_detalle)// Graba detalle del movimiento
			acumImporte += fs_detalle.det_importe			
		}
		//Fin Busca devoluciones-----------------------------------------------------------------
		
		//Regraba importe del movimiento-----------------------------------------------------
		fs_movim_aux.mov_importe = acumImporte
		fs_movim_aux.mov_importe_2vto = fs_movim_aux.mov_importe+((fs_movim_aux.mov_importe*fs_movim_aux.mov_recargo)/100)
		databaseManager.saveData(fs_movim_aux) // Graba importe del movimiento

		procesar(maximo,0,i)
	}
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"31016C49-D645-40A8-BB22-8E0878C2BEAC"}
 */
function onShow(firstShow, event) 
{
	inicializar()
	generar_cuotas_mensuales(vl_mes, vl_anio,null) 
}
