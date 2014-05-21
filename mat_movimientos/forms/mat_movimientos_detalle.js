/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"63BACD58-6CB4-4DB4-9A27-230C31182D3F"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	forms.mat_movimientos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F795844-C43D-4722-BCDC-0FFAA688D62E"}
 */
function onActionAnular(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea Borrar el Movimiento","atention",controller.getName(),"No",null,"Si","anularMovim",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"075E542A-D377-44D9-807C-6635B8C6BD64"}
 */
function anularMovim()
{
	foundset.mat_movimientos_to_mat_movimientos_det.deleteAllRecords()
	controller.deleteRecord()
	forms.mat_movimientos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB8CC65C-9B43-48F0-9E60-2E6206E9B80D"}
 */
function onActionGrabar(event) 
{
	var cod_barra = ''
		
	var cod_barra_SAM 			   = '000'
	var cod_barra_ENTE 			   = '0386'
	var cod_barra_disenio 		   = '1'
	var cod_barra_id_contribuyente = '03318011710000011285'
	var cod_barra_moneda 		   = '1'	
	var cod_barra_vto1			   = calcularFechaJuliana(mov_fec_vto1,mov_fec_vto1.getFullYear()) 
	var cod_barra_imp1			   = utils.numberFormat(mov_importe,'0000.00').substr(0,4)+utils.numberFormat(mov_importe,'0000.00').substr(5,2)
	var cod_barra_vto2			   = calcularFechaJuliana(mov_fec_vto2,mov_fec_vto2.getFullYear())
	var cod_barra_imp2			   = utils.numberFormat(mov_importe_2vto,'0000.00').substr(0,4)+utils.numberFormat(mov_importe_2vto,'0000.00').substr(5,2)
		cod_barra = cod_barra_SAM+ cod_barra_ENTE+cod_barra_disenio+cod_barra_id_contribuyente+cod_barra_moneda+cod_barra_vto1+cod_barra_imp1+cod_barra_vto2+cod_barra_imp2
	var cod_barra_digverif 		   = DigitoVerificadorModulo1(cod_barra)
		cod_barra = cod_barra+cod_barra_digverif
		
		
//	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
//	{
//			/**@type {String}*/
//	    var url = 'http://www.mbcestore.com.mx/generador_codigo_de_barras/codigo_de_barras.html?code='+cod_barra+'&style=421&type=I25&width=480&height=60&xres=1&font=2'
//
//	    mov_cod_barra =  plugins.http.getMediaData(url)
//	}
//	else
//	{
		/**@type {String}*/
	    //var url = 'http://www.mbcestore.com.mx/generador_codigo_de_barras/codigo_de_barras.html?code='+cod_barra+'&style=197&type=I25&width=900&height=60&xres=2&font=4'
	    var url = 'http://www.mbcestore.com.mx/generador_codigo_de_barras/codigo_de_barras.html?code='+cod_barra+'&style=453&type=I25&width=500&height=70&xres=1&font=3'
	
	    mov_cod_barra =  plugins.http.getMediaData(url)
//	}
//		// Creates a Code 3 of 9 (Code 39) linear barcode...
//		// Define the code you want to use
//		// IMPORTANT: not all types of barcodes can show alphanumeric characters
//		var code = cod_barra
//				// Set the calculation of a checksum
//		var checksum = false;
//				// Print the text right under the barcode
//		var drawtext = true;
//				// Create a Code 3 of 9 (Code 39) linear barcode...
//		//mov_cod_barra = plugins.it2be_barcode.Code3of9(code, checksum, drawtext)
//		mov_cod_barra = plugins.it2be_barcode.Code2of7(code,drawtext)
//	}		
	databaseManager.saveData(foundset)
	forms.mat_movimientos.controller.show()
	
	globals.mx_empresa_id
}

/**
 * TODO generated, please specify type and doc for the params
 * @param pcodigo
 *
 * @properties={typeid:24,uuid:"F5058B05-DA84-4884-B17E-0D3607F3F23C"}
 */
function DigitoVerificadorModulo1(pcodigo) 
{
	var p = 0
	var x = 1
	var total1 = 0
	for(var i=p;i<=48;i++)
	{
	//AVANZO DE A UN DIGITO DEL CODIGO DE LA BOLETA
	//LO MULTIPLICO POR EL VALOR DE LA BANDERA (1,3,5,7,9,3,5,7,9,3,5,...etc)
	var MTOTAL = x * utils.stringToNumber(pcodigo.substr(i,1))
	//VOY SUMANDO TODOS LOS PRODUCTOS DE LAS MULTIPLICACIONES

		total1 = total1 + MTOTAL
	//CAMBIO LA BANDERA

		if(x==1)
		{
			x=3
		}	
		else
		{
			if(x==3)
			{
				x=5
			}
			else
			{
				if(x==5)
				{
					x=7
				}
				else
				{
					if(x==7)
					{
						x=9
					}
					else
					{
						if(x==9)
						{
							x=3
						}
					}
				}
			}
		}
	}
	
	
	//AL TOTAL LO DIVIDO POR 2

	var verifica = total1 / 2

	//LE SACO LA PARTE ENTERA

	//verifica = Math.round(verifica)
	verifica = parseInt(verifica.toString())
	

	//Y OBTENGO EL RESTO DE LA DIVISION POR 10

	verifica = verifica%10

	return utils.numberFormat(verifica,'#')	
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
 * @properties={typeid:24,uuid:"2A1E1D39-D86F-4F98-87C4-133304683094"}
 */
function onDataChangeEstado(oldValue, newValue, event) 
{
	if(mov_estado == 1)
	{
		elements.mov_fecha_cobro.enabled = true
	}
	else
	{
		elements.mov_fecha_cobro.enabled = false
		mov_fecha_cobro = null
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7362B32F-467D-4628-B9F8-EE0990E2AD67"}
 */
function onActionImprimir(event) 
{
//	/** @type {JSFoundSet<db:/sistemas/mat_configuraciones>} */
//	var fs_conf = databaseManager.getFoundSet('sistemas','mat_configuraciones')	
//	fs_conf.loadAllRecords()
//	fs_conf.getRecord(1)
//		
//	forms.mat_boleta_de_pago.controller.loadRecords(mov_id)
//	
//	forms.mat_boleta_de_pago.vl_importe_vto1 = forms.mat_boleta_de_pago.mov_importe
//	forms.mat_boleta_de_pago.vl_importe_vto2 = forms.mat_boleta_de_pago.vl_importe_vto1+(forms.mat_boleta_de_pago.vl_importe_vto1*fs_conf.conf_interes_x_atraso)/100

	plugins.jasperPluginRMI.runReport('Sistemas','boleta_de_pago.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmov_id:mov_id})
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param lnk_fecha
 * @param {Number} lnk_anio_base
 *
 * @properties={typeid:24,uuid:"82D8C614-FE8E-43C1-88B2-24F1B1FAF5AF"}
 */
function calcularFechaJuliana(lnk_fecha, lnk_anio_base) {
	var num_days = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var year = lnk_fecha.getFullYear()
	var month = lnk_fecha.getMonth() + 1
	var day = lnk_fecha.getDate();

	if (year % 4 == 0) {
		num_days[1] = 29
	}

	var diaJuliano = 0
	var anioJuliano = 0
	for (var i=1; i <= 12; i++) {
		if (i == month) {
			diaJuliano = diaJuliano + day
			break
		} else {
			diaJuliano = diaJuliano + num_days[i -1]
		}
	}
	
	diaJuliano = utils.numberFormat(diaJuliano + ((year - lnk_anio_base) * 365),'000')
	anioJuliano = lnk_anio_base.toString().substr(3,1)
	return anioJuliano+diaJuliano
}