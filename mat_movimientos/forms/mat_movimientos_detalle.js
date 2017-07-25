/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"32AC7FE4-2D27-4F45-857B-323771374898",variableType:4}
 */
var vl_viejo_nro_boleta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"909FD180-CE2C-49BD-A220-927E5F49A2B1",variableType:4}
 */
var vl_nuevo_nro_boleta = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"63BACD58-6CB4-4DB4-9A27-230C31182D3F"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
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
	var tmp_descripcion=mov_id.toString()+' - '+mat_movimientos_to_mat_matriculados.mat_nombre
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea Borrar el Movimiento: "+tmp_descripcion,"atention",controller.getName(),"No",null,"Si","BorrarMovim",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"88428DE1-82B4-45EF-AD74-A8E5BCC00221"}
 */
function BorrarMovim()
{
	for (var i = 1; i <= mat_movimientos_to_mat_movimientos_det.getSize(); i++) 
	{
		var record = mat_movimientos_to_mat_movimientos_det.getRecord(i);
		
		record.eliminado = 1
		record.eliminado_usu_id = scopes.globals.mx_usuario_id
		record.eliminado_fecha  = application.getServerTimeStamp()
		databaseManager.saveData(record)
	}

	databaseManager.refreshRecordFromDatabase(mat_movimientos_to_mat_movimientos_det,-1)
	
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	forms[scopes.globals.vg_formulario_anterior].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB8CC65C-9B43-48F0-9E60-2E6206E9B80D"}
 * @AllowToRunInFind
 */
function onActionGrabar(event) 
{
	if(mov_id != vl_viejo_nro_boleta && vl_nuevo_nro_boleta!=null)
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","El número de boleta fue modificado.\nNúmero anterior: "+vl_viejo_nro_boleta+"\nNúmero nuevo: "+vl_nuevo_nro_boleta+"\nDesea grabar?","atention",controller.getName(),"No","onActionVolver","Si",null,null,null,null,null)
		
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
		var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
			fs_mov.find()
			fs_mov.mov_id = vl_nuevo_nro_boleta
			if(fs_mov.search()>0)		
			{
				globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","El número de boleta "+vl_nuevo_nro_boleta+" ya existe.","atention",controller.getName(),"OK","onActionVolver",null,null,null,null,null,null)
				return
			}
		
		/** @type {JSFoundSet<db:/sistemas/mat_movimientos_det>} */
		var fs_mov_det = databaseManager.getFoundSet('sistemas','mat_movimientos_det')
			fs_mov_det.find()
			fs_mov_det.mov_id = vl_viejo_nro_boleta
			fs_mov_det.search()
			for (var k = 1; k <= fs_mov_det.getSize(); k++) 
			{
				var record1 = fs_mov_det.getRecord(k);
				record1.mov_id = vl_nuevo_nro_boleta
			}
			databaseManager.saveData()
	}
	
	/**@type {Number}*/
	var tmp_importe = 0
	/**@type {Number}*/
	var tmp_importe_2vto = 0
	
	/** @type {JSFoundSet<db:/sistemas/mat_configuraciones>} */
	var fs_conf = databaseManager.getFoundSet('sistemas','mat_configuraciones')	
		fs_conf.loadAllRecords()
		fs_conf.getRecord(1)	
	
	for (var i = 1; i <= mat_movimientos_to_mat_movimientos_det.getSize(); i++) 
	{
		var record = mat_movimientos_to_mat_movimientos_det.getRecord(i);
		tmp_importe = tmp_importe+record.det_importe
		tmp_importe_2vto = tmp_importe_2vto+record.det_importe_2vto
	}
	mov_importe = tmp_importe
	mov_importe_2vto = tmp_importe_2vto
	
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
	    var url = 'https://www.mbcestore.com.mx/generador_codigo_de_barras/codigo_de_barras.html?code='+cod_barra+'&style=453&type=I25&width=500&height=70&xres=1&font=3'
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
	vl_nuevo_nro_boleta = null
	vl_viejo_nro_boleta = mov_id
	
	forms.mat_movimientos_detalle_conceptos.elements.btn_agregar.enabled = false
	forms.mat_movimientos_detalle_conceptos.elements.btn_borrar.enabled = false
	forms.mat_movimientos_detalle_conceptos.elements.ingr_id.editable = false
	forms.mat_movimientos_detalle_conceptos.elements.det_importe.editable = false
	
	if(mov_estado == 9)
	{
		elements.mov_fec_vto1.enabled = false
		elements.mov_fec_vto2.enabled = false
		elements.btn_imprimir.enabled = false
		elements.btn_mail.enabled = false
	}
	else
	{
		if(mov_estado == 0)
		{
			if(scopes.globals.ag_usuariovigente.usu_nivel_acceso==99)
			{
				forms.mat_movimientos_detalle_conceptos.elements.btn_agregar.enabled = true
				forms.mat_movimientos_detalle_conceptos.elements.btn_borrar.enabled = true
				forms.mat_movimientos_detalle_conceptos.elements.ingr_id.editable = true
				forms.mat_movimientos_detalle_conceptos.elements.det_importe.editable = true
			}
		}
		elements.mov_fec_vto1.enabled = true
		elements.mov_fec_vto2.enabled = true
		elements.btn_imprimir.enabled = true
		elements.btn_mail.enabled = true
	}
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
 * @properties={typeid:24,uuid:"3B7239FD-E580-4154-B102-BE534BDE0FB2"}
 */
function onDataChange(oldValue, newValue, event)
{
	vl_nuevo_nro_boleta = newValue
	vl_viejo_nro_boleta = oldValue
	return true
}
