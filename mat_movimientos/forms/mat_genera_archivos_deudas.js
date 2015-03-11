/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B8DE3B3D-9AFE-4688-A1A6-819C2F7571C3"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"75FFA677-2178-4EF5-B311-7E992A07058F",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"28D48F63-7200-4C00-8EC4-B47122E4A4A6",variableType:4}
 */
var vl_cant_reg = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"64249062-EF45-4657-8C10-51BB9A64A5E9",variableType:93}
 */
var vl_fec_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BFB02B53-9C95-47BA-A8D1-90D5EAD19E38",variableType:93}
 */
var vl_fec_ini = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E46705E7-E840-4618-AECB-289632152051"}
 */
var vl_archivo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1534E960-679E-48BB-BBDC-DA9DE8C130C2",variableType:4}
 */
var vl_medio_cobro = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"13E8FFBB-8D98-445E-8DC2-9D1CF90C5EEF"}
 * @AllowToRunInFind
 */
function onActionGenerarArchivo(event) 
{
	var temp_fecha = null
	
	switch (vl_fec_ini.getMonth())
	{
		case 9:
			temp_fecha = "A"
		break;
		case 10:
			temp_fecha = "B"
		break;
		case 11:
			temp_fecha = "C"
		break;
		default:
			temp_fecha = utils.numberFormat(vl_fec_ini.getMonth()+1,'#')
		break;
	}
	var name_file = 'P1160'+temp_fecha+vl_fec_ini.getDate()+'.txt'

	/** @type {plugins.file.JSFile}*/
	//var file = plugins.file.convertToJSFile('C://Archivos de Rendicion//Link//REFRESH//'+name_file);
	var file = plugins.file.convertToJSFile('C://LG//'+name_file);
	if (file.exists())
	{
		file.deleteFile()
		file.createNewFile()
	}	
	else
	{
		file.createNewFile()
	}
		
	/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
	var fs_movimientos = databaseManager.getFoundSet('sistemas','mat_movimientos')
		fs_movimientos.find()
		fs_movimientos.mov_estado = 0
		fs_movimientos.mov_tipo_de_movimiento = 0
		fs_movimientos.search()
		
	/**@type {Number} */	
	var cant_reg = 	databaseManager.getFoundSetCount(fs_movimientos)
	/**@type {String} */
	var temp_ident_reg = "HRFACTURACION" 
	/**@type {String} */
	var temp_cod_ente = "116" 
	/**@type {String} */
	var temp_fec_proceso = utils.dateFormat(application.getServerTimeStamp(),'yyMMdd')
	/**@type {String} */
	var temp_lote = '00001'
	/**@type {String} */
	var temp_filler = utils.stringFormat("%1$98s", new Array (' '))
	/**@type {String} */
	var temp_reg_inicial= null
		temp_reg_inicial = temp_ident_reg+temp_cod_ente+temp_fec_proceso+temp_lote+temp_filler+"\n"
	
	var temp_id_deuda 	 = null
	var temp_id_concepto = null
	var temp_id_usuario	 = null
	var temp_vto1_fec	 = null
	var temp_vto1_imp	 = null
	var temp_vto2_fec	 = null
	var temp_vto2_imp	 = null
	var temp_vto3_fec	 = null
	var temp_vto3_imp 	 = null
	var temp_discrecional= null
	var temp_daflag	 	 = null
	var temp_daperiodo	 = null
	var temp_damascara	 = null
	var temp_reg_detalle = null
	
	temp_ident_reg = "TRFACTURACION"
	var temp_cant_registros = utils.numberFormat(cant_reg+2,'00000000')
	var temp_total_vto1 = 0
	var temp_total_vto2 = 0
	var temp_total_vto3 = "000000000000000000"
	temp_filler = utils.stringFormat("%1$50s", new Array (' '))
	var temp_reg_final = null
	
	for (var i = 1; i <= cant_reg; i++) 
	{
		var rec_mov_det = fs_movimientos.getRecord(i)
		
		temp_id_deuda 	 = utils.numberFormat(rec_mov_det.mov_id,'00000')
		temp_id_concepto = "002"
		temp_id_usuario  = utils.numberFormat(rec_mov_det.mat_id,'0000000')
		
		temp_vto1_fec	 = utils.dateFormat(rec_mov_det.mov_fec_vto1,'yyMMdd') 
		temp_vto1_imp	 = utils.numberFormat(rec_mov_det.mov_importe,'0000000000.00')	 
		temp_vto1_imp 	 = temp_vto1_imp.substr(0,10)+temp_vto1_imp.substr(11,12)
		
		temp_vto2_fec	 = utils.dateFormat(rec_mov_det.mov_fec_vto1,'yyMMdd')
		temp_vto2_imp    = utils.numberFormat(rec_mov_det.mov_importe_2vto,'0000000000.00')	 
		temp_vto2_imp 	 = temp_vto2_imp.substr(0,10)+temp_vto2_imp.substr(11,12)
		
		temp_vto3_fec	 = "000000"
		temp_vto3_imp 	 = "000000000000"
		
		temp_discrecional = utils.stringFormat("%1$50s", new Array (' '))
		temp_daflag = "N"
		temp_daperiodo = "00"
		temp_damascara = utils.stringFormat("%1$3s", new Array (' '))
		
		temp_reg_detalle = temp_reg_detalle+temp_id_deuda + temp_id_concepto + temp_id_usuario + 
						   temp_vto1_fec + temp_vto1_imp + temp_vto2_fec + temp_vto2_imp + temp_vto3_fec + temp_vto3_imp +
						   temp_discrecional + temp_daflag + temp_daperiodo + temp_damascara + '\n'
		
		temp_total_vto1 = temp_total_vto1+rec_mov_det.mov_importe
		temp_total_vto2 = temp_total_vto2+rec_mov_det.mov_importe_2vto
	}
	
	var temp_total_vto1_str = utils.numberFormat(temp_total_vto1,'0000000000000000.00')	 
		temp_total_vto1_str = temp_total_vto1_str.substr(0,16)+temp_total_vto1_str.substr(17,18)
		
	var temp_total_vto2_str = utils.numberFormat(temp_total_vto2,'0000000000000000.00')	 
		temp_total_vto2_str = temp_total_vto2_str.substr(0,16)+temp_total_vto2_str.substr(17,18)	
		
	temp_reg_final = temp_ident_reg+temp_cant_registros+temp_total_vto1_str+temp_total_vto2_str+temp_total_vto3+temp_filler
	
	var textData = temp_reg_inicial + temp_reg_detalle + temp_reg_final
	var success = plugins.file.writeTXTFile(file, textData);
		
	if (!success) 
	{
		application.output('No se puede escribir el archivo')
	}
	else
	{
		application.output('el archivo se genero correctamente')
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E06B297-D41F-4CE4-B0CA-F8CB56CDE743"}
 */
function onShow(firstShow, event) 
{
	SetearVariables()
}


/**
 * @properties={typeid:24,uuid:"D87EBE49-2993-487B-A0DB-3181D6D2EE8F"}
 */
function SetearVariables()
{
	foundset.clear()
	elements.btn_generar.enabled = false
	vl_archivo     = null
	vl_cant_reg    = 0
	vl_fec_fin     = null
	vl_fec_ini     = null
	vl_medio_cobro = null
	vl_total	   = 0
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
 * @properties={typeid:24,uuid:"E2516BD4-6D9F-4E7F-A29C-C5D2BF695428"}
 * @AllowToRunInFind
 */
function onDataChangeMedioCobro(oldValue, newValue, event) 
{
	if(vl_medio_cobro!=null && vl_fec_ini!=null)
	{
		elements.btn_generar.enabled = true
		controller.find()
		mov_estado = 0
		mov_tipo_de_movimiento = 0
		mov_fecha_emision = utils.dateFormat(vl_fec_ini, 'yyyy-MM')+'-01 00:00:00 ... '+utils.dateFormat(vl_fec_ini, 'yyyy-MM')+'-28 23:59:59|yyyy-MM-dd HH:mm:ss'
		controller.search()
	}
	return true
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"64820BD6-7E6C-4CFE-B7A3-6DE891F4CBDE"}
 */
function onActionVolver(event) 
{
	globals.CargarMenu()
	forms['mat_inicio'].controller.show()
}