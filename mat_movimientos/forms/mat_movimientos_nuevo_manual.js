/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EBD29C0C-F7D9-463B-91B2-C192F199F330",variableType:8}
 */
var vl_importe = 0.0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DADF8BD8-CA4E-40DD-9127-111ABB126E7B"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	forms.mat_movimientos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B3EA105-8B17-4315-A4DE-6B5B6EC52E36"}
 */
function onActionGrabar(event) 
{
	if(mov_fec_vto1!=null && mov_fec_vto2!=null)
	{
		mov_fecha_emision = new Date(mov_anio_emision,mov_mes_emision - 1,15)
		mov_importe = vl_importe
		mov_grab_fec = application.getServerTimeStamp()
		mov_grab_ope = globals.ag_usuariovigente.usu_id
		//mov_fec_vto1 = new Date(mov_anio_emision, mov_mes_emision - 1, mat_movimientos_to_mat_configuraciones.conf_venc_cuota_1_dia)
		//mov_fec_vto2 = new Date(mov_anio_emision, mov_mes_emision - 1, mat_movimientos_to_mat_configuraciones.conf_venc_cuota_2_dia)
		//mov_importe_2vto = mov_importe+(mov_importe*mat_movimientos_to_mat_configuraciones.conf_interes_x_atraso)/100
		if(mov_tipo_de_movimiento == 1)
		{
			if(mov_estado != 1)
			{
				mov_estado = 1
			}
			if(mov_fecha_cobro == null)
			{
				mov_fecha_cobro = application.getServerTimeStamp()
			}
		}	
		
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
			
		/**@type {String}*/
	    var url = 'https://www.mbcestore.com.mx/generador_codigo_de_barras/codigo_de_barras.html?code='+cod_barra+'&style=453&type=I25&width=500&height=70&xres=1&font=3'
		
	    mov_cod_barra =  plugins.http.getMediaData(url)
		databaseManager.saveData()
		forms.mat_movimientos.controller.show()
	}
	else
	{
		scopes.globals.ventanaAceptar("Las Fechas de vencimientos no pueden quedar vacías.",controller.getName())
		return
	}
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF8A6E88-995C-481E-A88E-AB7BF0354B28"}
 */
function onShow(firstShow, event) 
{
	controller.newRecord()
	mov_anio_emision = forms.mat_movimientos_nuevo.vl_anio
	mov_mes_emision = forms.mat_movimientos_nuevo.vl_mes
	mov_tipo_de_movimiento = forms.mat_movimientos_nuevo.vl_tipo_movim
	mov_estado = 0
	mat_id = forms.mat_movimientos_nuevo.vl_matriculado
	emp_id = scopes.globals.mx_empresa_id
	vl_importe = 0
	mov_observacion = mat_movimientos_to_mat_configuraciones.conf_observaciones_boletas
	
	mov_fec_vto1 = null
	mov_fec_vto2 = null
	//mov_importe_2vto = mov_importe+(mov_importe*mat_movimientos_to_mat_configuraciones.conf_interes_x_atraso)/100
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
 * @properties={typeid:24,uuid:"98DD2570-A127-4B29-8BAD-88C825194BAE"}
 */
function onDataChangeTipo(oldValue, newValue, event) 
{
	if(mov_tipo_de_movimiento == 1)
	{
		mov_estado = 1
		mov_fecha_cobro = application.getServerTimeStamp()
	}
	else
	{
		mov_estado = 0
		mov_fecha_cobro = null
	}
	return true
}
