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
	forms[scopes.globals.vg_formulario_anterior].controller.show()
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
	forms[scopes.globals.vg_formulario_anterior].controller.show()
	//forms.mat_movimientos.controller.show()
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
	/** @type {JSFoundSet<db:/sistemas/mat_configuraciones>} */
	var fs_conf = databaseManager.getFoundSet('sistemas','mat_configuraciones')	
		fs_conf.loadAllRecords()
		fs_conf.getRecord(1)	
	
	databaseManager.saveData()
	
	// Generación del codigo de barras.
	var cod_barra = ''
	var cod_barra_SAM 			   = utils.numberFormat(utils.stringToNumber(fs_conf.conf_cod_barra_sam),'000') //'000'
	var cod_barra_ENTE 			   = utils.numberFormat(utils.stringToNumber(fs_conf.conf_cod_barra_ente),'0000')//'0386'
	var cod_barra_disenio 		   = utils.numberFormat(utils.stringToNumber(fs_conf.conf_cod_barra_diseño),'0') //'1'
	var cod_barra_id_contribuyente = utils.numberFormat(mat_id,'00000')
	var cod_barra_mov_id		   = utils.numberFormat(mov_id,'000000000000000')
	var cod_barra_moneda 		   = '1'	
	var cod_barra_vto1			   = scopes.globals.calcularFechaJuliana(mov_fec_vto1,mov_fec_vto1.getFullYear()) 
	var cod_barra_imp1			   = utils.numberFormat(mov_importe,'0000.00').substr(0,4)+utils.numberFormat(mov_importe,'0000.00').substr(5,2)
	var cod_barra_vto2			   = scopes.globals.calcularFechaJuliana(mov_fec_vto2,mov_fec_vto2.getFullYear())
	var cod_barra_imp2			   = utils.numberFormat(mov_importe_2vto,'0000.00').substr(0,4)+utils.numberFormat(mov_importe_2vto,'0000.00').substr(5,2)
		cod_barra = cod_barra_SAM+cod_barra_ENTE+cod_barra_disenio+cod_barra_id_contribuyente+cod_barra_mov_id+cod_barra_moneda+cod_barra_vto1+cod_barra_imp1+cod_barra_vto2+cod_barra_imp2
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
	databaseManager.saveData()
	forms.mat_movimientos.controller.show()
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
		
		if(mov_estado == 9)
		{
			elements.btn_imprimir.enabled = false
			elements.btn_mail.enabled = false
		}
		else
		{
			elements.btn_imprimir.enabled = true
			elements.btn_mail.enabled = true
		}
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
	//plugins.mail.createBinaryAttachment('Convenio de Precios.pdf',plugins.jasperPluginRMI.runReport(foundset,'precios_convenios_cliente.jasper', 'Convenio.pdf', plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, null))
	plugins.jasperPluginRMI.runReport('Sistemas','boleta_de_pago.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pmov_id:mov_id})
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89872644-FD3F-4189-A885-E8D82ED765E3"}
 */
function onActionMail(event) 
{
	scopes.globals.vg_destinatarios = mat_movimientos_to_mat_matriculados.mat_e_mail
	scopes.globals.vg_asunto 		= scopes.globals.ag_empresavigente.emp_nombre +"- Boleta de Pago." 
	scopes.globals.vg_cuerpo 		= null
	scopes.globals.vg_adjuntos 		= plugins.mail.createBinaryAttachment('BoletadePago.pdf',plugins.jasperPluginRMI.runReport('sistemas','boleta_de_pago.jasper', 'BoletadePago.pdf', plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, {pmov_id:mov_id}))
	
	globals.ventanaFormulario("lg_form_mail","Litoral Gestion",forms.lg_form_mail.controller.getName())
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BBAD4A1D-620D-49DB-B7E5-5C4BDE167430"}
 */
function onShow(firstShow, event)
{
	if(mov_estado == 9)
	{
		elements.btn_imprimir.enabled = false
		elements.btn_mail.enabled = false
	}
	else
	{
		elements.btn_imprimir.enabled = true
		elements.btn_mail.enabled = true
	}
}
