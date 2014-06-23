/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"659D443F-D223-450D-94A0-695FDBBE4175"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	forms.mat_rendiciones.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"145CDBC9-912B-44E7-82DD-DC855FA08B9F"}
 */
function onActionAnular(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea Borrar el Movimiento","atention",controller.getName(),"No",null,"Si","anularMovim",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"9DF2C110-247B-43A9-8D2E-EE4079405682"}
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
 * @properties={typeid:24,uuid:"8A8856B7-256F-4ED4-8EDD-D296612BCCE7"}
 */
function onActionGrabar(event) 
{
	var cod_barra = ''
		
	var cod_barra_SAM 			   = '000'
	var cod_barra_ENTE 			   = '0386'
	var cod_barra_disenio 		   = '1'
	var cod_barra_id_contribuyente = '03318011710000011285'
	var cod_barra_moneda 		   = '1'	
	var cod_barra_vto1			   = scopes.globals.calcularFechaJuliana(mov_fec_vto1,mov_fec_vto1.getFullYear()) 
	var cod_barra_imp1			   = utils.numberFormat(mov_importe,'0000.00').substr(0,4)+utils.numberFormat(mov_importe,'0000.00').substr(5,2)
	var cod_barra_vto2			   = scopes.globals.calcularFechaJuliana(mov_fec_vto2,mov_fec_vto2.getFullYear())
	var cod_barra_imp2			   = utils.numberFormat(mov_importe_2vto,'0000.00').substr(0,4)+utils.numberFormat(mov_importe_2vto,'0000.00').substr(5,2)
		cod_barra = cod_barra_SAM+ cod_barra_ENTE+cod_barra_disenio+cod_barra_id_contribuyente+cod_barra_moneda+cod_barra_vto1+cod_barra_imp1+cod_barra_vto2+cod_barra_imp2
	var cod_barra_digverif 		   = scopes.globals.DigitoVerificadorModulo1(cod_barra)
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
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"60808CCB-EC6F-48F6-8E96-18B176CC9FA7"}
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
 * @properties={typeid:24,uuid:"3240DB72-DF91-4B42-AB3B-D0F6AB9CA866"}
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
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E8B178E2-BE23-4298-AC8A-5E9E0CED437B"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	return true
}
