/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"07DD8F9B-5A2E-4A11-AB0D-306B9762D6AC",variableType:-4}
 */
var vl_array_movi_pen = null;

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"AC104D56-ACEA-4054-9BCC-312BD5696BC2",variableType:-4}
 */
var vl_concepto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4E822249-3203-4B39-9458-E3B31A41992E",variableType:8}
 */
var vl_importe_con_recargo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FCC4FF5B-FFAF-4D70-A1C6-41F098CAEDD1",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FD897AAE-FDB2-4584-9C25-31139CDEE127",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E58A6A28-94A5-4982-8968-2165E5CC25CF",variableType:4}
 */
var vl_cuotas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AD3F2165-89DF-442D-A1BC-86FAFBD75639",variableType:8}
 */
var vl_recargo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C9D89311-EE96-4273-8859-5DCEDCCB0F15",variableType:4}
 */
var vl_convenio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1C55292C-75CD-4414-906A-72DF8670B4BC"}
 */
var vl_observacion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"8CDAFAC8-BE3C-4029-9A88-E289F6194065",variableType:93}
 */
var vl_fec_vto = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B23F55DC-CAFE-495F-AA58-F3D9D8675BE4"}
 */
var vl_descripcion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DBD2A628-9CFF-4374-91FA-9D598BA0D594",variableType:4}
 */
var vl_matriculado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8D2DD9A5-E12A-4192-8229-994D779C64A4",variableType:8}
 */
var vl_importe = 0.0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86D49F2B-3152-4A6D-907C-E43286745859"}
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
 * @properties={typeid:24,uuid:"2E01B14B-658C-4344-892B-16A50DD24198"}
 */
function onActionGrabar(event) 
{
	if (vl_importe==0 | vl_importe==null | vl_importe<0)
	{
		scopes.globals.ventanaAceptar("El matriculado no tiene deuda. No puede generar un convenio.",controller.getName())
		return
	}
	
	if (vl_recargo==0 | vl_recargo==null | vl_recargo<0)
	{
		scopes.globals.ventanaAceptar("El convenio no tiene porcentaje de recargo.",controller.getName())
		return
	}

	if (vl_cuotas==0 | vl_cuotas==null | vl_cuotas<0)
	{
		scopes.globals.ventanaAceptar("El convenio no tiene cuotas.",controller.getName())
		return
	}
	
	if (vl_matriculado==0 | vl_matriculado==null)
	{
		scopes.globals.ventanaAceptar("El código de Matriculado no puede quedar vacío.",controller.getName())
		return
	}
	
	if (vl_convenio==0 | vl_convenio==null)
	{
		scopes.globals.ventanaAceptar("El código de Convenio no puede quedar vacío.",controller.getName())
		return
	}
	
	if(vl_fec_vto==null)
	{
		scopes.globals.ventanaAceptar("La Fecha de la primera cuota no pueden quedar vacía.",controller.getName())
		return
	}
	
	onActionSimular(false)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ECB7E8C2-50C5-4A75-AB38-773CE4CDA15E"}
 */
function onShow(firstShow, event) 
{
	vl_observacion 		   = null
	vl_anio 			   = forms.mat_movimientos_nuevo.vl_anio
	vl_mes 				   = forms.mat_movimientos_nuevo.vl_mes
	vl_matriculado 		   = forms.mat_movimientos_nuevo.vl_matriculado
	vl_convenio 		   = null
	vl_concepto 		   = null
	vl_fec_vto  		   = null
	vl_cuotas   		   = null
	vl_recargo     		   = null
	vl_descripcion 		   = null
	vl_array_movi_pen	   = new Array()
	vl_importe  		   = DeudaMatriculado()
	vl_importe_con_recargo = 0
	
	
	forms.mat_movimientos_nuevo_convenio_simulacion.foundset.clear()
}

/**
 * @AllowToRunInFind
 * @return {Number}
 * @properties={typeid:24,uuid:"AB48B184-4250-446B-B3A5-15476F87B60B"}
 */
function DeudaMatriculado()
{
	vl_array_movi_pen = new Array()
	
	//Busca cuotas con deuda-------------------------------------------------------------------------------
	/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
	var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
	fs_mov.find()	
	fs_mov.mov_estado = 0
	fs_mov.mat_id = vl_matriculado
	fs_mov.search()
	
	var deuda = 0
	for(var k=1;k<=fs_mov.getSize();k++)
	{
		var rec2 = fs_mov.getRecord(k)
		//if(rec2.mov_fecha_emision < fs_movim_aux.mov_fecha_emision)
		//{	
			deuda += rec2.mov_importe
			vl_array_movi_pen.push(rec2.mov_id)
			//}
	}
	return deuda
}

/**
 * Perform the element default action.
 *
 * @param {Boolean} psimulacion
 *
 * @properties={typeid:24,uuid:"C8E2CE9E-7DA0-4BB7-A96D-2EB7B32FF7A8"}
 */
function onActionSimular(psimulacion)
{
	if(vl_fec_vto==null)
	{
		scopes.globals.ventanaAceptar("La Fecha de la primera cuota no pueden quedar vacía.",controller.getName())
		return
	}
	
	databaseManager.revertEditedRecords(forms.mat_movimientos_nuevo_convenio_simulacion.foundset)

	/**@type {Number}*/
	var tmp_importe = vl_importe_con_recargo/vl_cuotas
		tmp_importe = utils.stringToNumber(tmp_importe.toFixed(2),'.')
	/**@type {Number}*/
	var tmp_total = 0.00
	
	for (var i = 1; i <= vl_cuotas; i++) 
	{
		tmp_total = tmp_total+tmp_importe
		
		if(i==vl_cuotas)
		{
			if(tmp_total!=vl_importe_con_recargo)
			{
				tmp_importe = Math.abs(vl_importe_con_recargo - tmp_total)+tmp_importe
			}
		}
		
		forms.mat_movimientos_nuevo_convenio_simulacion.controller.newRecord(false)
		forms.mat_movimientos_nuevo_convenio_simulacion.mov_cuota		  	   = i
		forms.mat_movimientos_nuevo_convenio_simulacion.mov_descripcion   	   = vl_descripcion+" - CUOTA "+i+" de "+vl_cuotas 
		forms.mat_movimientos_nuevo_convenio_simulacion.mov_fec_vto1 	  	   = plugins.DateUtils.addMonths(vl_fec_vto,i-1)
		forms.mat_movimientos_nuevo_convenio_simulacion.mov_fec_vto2	  	   = plugins.DateUtils.addMonths(vl_fec_vto,i-1)
		forms.mat_movimientos_nuevo_convenio_simulacion.mov_importe 	  	   = tmp_importe
		forms.mat_movimientos_nuevo_convenio_simulacion.mov_importe_2vto  	   = tmp_importe
		forms.mat_movimientos_nuevo_convenio_simulacion.mov_fecha_emision 	   = application.getServerTimeStamp()
		forms.mat_movimientos_nuevo_convenio_simulacion.mov_anio_emision  	   = plugins.DateUtils.addMonths(vl_fec_vto,i-1).getFullYear()
		forms.mat_movimientos_nuevo_convenio_simulacion.mov_mes_emision   	   = plugins.DateUtils.addMonths(vl_fec_vto,i-1).getMonth() + 1
		forms.mat_movimientos_nuevo_convenio_simulacion.mov_tipo_de_movimiento = 3
		forms.mat_movimientos_nuevo_convenio_simulacion.mat_id 				   = vl_matriculado
		forms.mat_movimientos_nuevo_convenio_simulacion.emp_id				   = scopes.globals.mx_empresa_id

		if(psimulacion==false)
		{
			if(i==1)
			{
				//Grabo relacion entre el convenio y el matriculado.
				/** @type {JSFoundSet<db:/sistemas/mat_rel_mat_conv>} */
				var fs_mat_conv = databaseManager.getFoundSet('sistemas','mat_rel_mat_conv')	
					fs_mat_conv.newRecord(false)
					fs_mat_conv.convenio_id		  = vl_convenio
					fs_mat_conv.emp_id			  = scopes.globals.mx_empresa_id
					fs_mat_conv.mat_id			  = vl_matriculado
					fs_mat_conv.rel_estado 		  = 1
					fs_mat_conv.rel_observaciones = vl_observacion
					databaseManager.saveData(fs_mat_conv)
					
				//Grabo relacion entre el convenio y las boletas afectadas.
			
				/** @type {JSFoundSet<db:/sistemas/mat_rel_conv_movi>} */
				var fs_conv_movi = databaseManager.getFoundSet('sistemas','mat_rel_conv_movi')
				
				for (var j = 0; j < vl_array_movi_pen.length; j++)
				{
					fs_conv_movi.newRecord(false)
					fs_conv_movi.rel_mat_conv_id = fs_mat_conv.rel_id
					fs_conv_movi.mov_id = vl_array_movi_pen[j]
					databaseManager.saveData(fs_conv_movi)
					
					//Cambio estado de la boleta afectada a "NO PAGADA EN TERMINO"-------------------------------------------------------------------------------
					/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
					var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
						fs_mov.loadRecords(vl_array_movi_pen[j])
						fs_mov.mov_estado = 2
						databaseManager.saveData(fs_mov)	
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
			var cod_barra_id_contribuyente = utils.numberFormat(vl_matriculado,'00000')
			var cod_barra_mov_id		   = utils.numberFormat(forms.mat_movimientos_nuevo_convenio_simulacion.mov_id,'000000000000000')
			var cod_barra_moneda 		   = '1'	
			var cod_barra_vto1			   = scopes.globals.calcularFechaJuliana(forms.mat_movimientos_nuevo_convenio_simulacion.mov_fec_vto1,forms.mat_movimientos_nuevo_convenio_simulacion.mov_fec_vto1.getFullYear()) 
			var cod_barra_imp1			   = utils.numberFormat(forms.mat_movimientos_nuevo_convenio_simulacion.mov_importe,'0000.00').substr(0,4)+utils.numberFormat(forms.mat_movimientos_nuevo_convenio_simulacion.mov_importe,'0000.00').substr(5,2)
			var cod_barra_vto2			   = scopes.globals.calcularFechaJuliana(forms.mat_movimientos_nuevo_convenio_simulacion.mov_fec_vto2,forms.mat_movimientos_nuevo_convenio_simulacion.mov_fec_vto2.getFullYear())
			var cod_barra_imp2			   = utils.numberFormat(forms.mat_movimientos_nuevo_convenio_simulacion.mov_importe_2vto,'0000.00').substr(0,4)+utils.numberFormat(forms.mat_movimientos_nuevo_convenio_simulacion.mov_importe_2vto,'0000.00').substr(5,2)
				cod_barra = cod_barra_SAM+cod_barra_ENTE+cod_barra_disenio+cod_barra_id_contribuyente+cod_barra_mov_id+cod_barra_moneda+cod_barra_vto1+cod_barra_imp1+cod_barra_vto2+cod_barra_imp2
			var cod_barra_digverif 		   = scopes.globals.DigitoVerificadorModulo1(cod_barra)
				cod_barra = cod_barra+cod_barra_digverif
				
			/**@type {String}*/
		    var url = 'https://www.mbcestore.com.mx/generador_codigo_de_barras/codigo_de_barras.html?code='+cod_barra+'&style=453&type=I25&width=500&height=70&xres=1&font=3'
			
		    forms.mat_movimientos_nuevo_convenio_simulacion.mov_cod_barra =  plugins.http.getMediaData(url)
			forms.mat_movimientos_nuevo_convenio_simulacion.rel_id_mat_conv = fs_mat_conv.rel_id
			
				/** @type {JSFoundSet<db:/sistemas/mat_movimientos_det>} */
			var fs_mov_det = databaseManager.getFoundSet('sistemas','mat_movimientos_det')	
				fs_mov_det.newRecord()
				fs_mov_det.mov_id = forms.mat_movimientos_nuevo_convenio_simulacion.mov_id
				fs_mov_det.det_importe = forms.mat_movimientos_nuevo_convenio_simulacion.mov_importe
				fs_mov_det.det_importe_2vto = forms.mat_movimientos_nuevo_convenio_simulacion.mov_importe
				fs_mov_det.det_observacion = vl_descripcion+" - CUOTA "+i+" de "+vl_cuotas 
				fs_mov_det.ingr_id = vl_concepto
			databaseManager.saveData()
			forms.mat_movimientos.controller.show()
		}
	}
}

/**
 * @properties={typeid:24,uuid:"C10DD417-6EAE-4AA8-A764-3548C6AA4B29"}
 */
function simular()
{
	onActionSimular(true)
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"4FDDD306-4E37-458D-9F37-80E6274EAD1B"}
 */
function onDataChangeConvenio(oldValue, newValue, event) 
{
	/** @type {JSFoundSet<db:/sistemas/mat_convenios>} */
	var fs_convenios = databaseManager.getFoundSet('sistemas','mat_convenios')	
		
	if (fs_convenios.loadRecords(newValue))
	{
		vl_cuotas = fs_convenios.convenio_cuotas
		vl_recargo = fs_convenios.convenio_interes
		vl_descripcion = fs_convenios.convenio_descripcion
		vl_concepto = fs_convenios.ingr_id
		vl_importe_con_recargo = vl_importe+((vl_importe*vl_recargo)/100)
		vl_importe_con_recargo = utils.stringToNumber(vl_importe_con_recargo.toFixed(2),'.') 
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C9D11E9C-7814-457E-90F4-669050C93C73"}
 */
function onActionDeudas(event) 
{
	// TODO Auto-generated method stub
	var win = application.createWindow("mat_duedas", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= 'Litoral Gestion';
	win.show(forms.mat_movimientos_nuevo_convenio_afectaciones);	
}
