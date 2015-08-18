/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"9B84B16D-FEBC-4892-BC7B-D467A4577BA4",variableType:-4}
 */
var vl_email_array = new Array;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F9647F49-633A-4773-8E9C-AB18ED6C0A07",variableType:4}
 */
var vl_cant_cuotas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"22EFF2A3-0C91-4544-826F-545A456F7D5B",variableType:4}
 */
var vl_solo_consejo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3C083C63-A6BC-4AAF-832E-AA861D94A32D",variableType:93}
 */
var vl_fec_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"4BB3F74D-44FA-4249-910E-BBE68287DC53",variableType:93}
 */
var vl_fec_ini = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E9889BCD-4A70-410F-B1A7-91B053B33076",variableType:4}
 */
var vl_tipo_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9C49C80F-B4DE-4139-AE8D-CBF1C421E6F9",variableType:4}
 */
var vl_estado_financiero = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"965C7311-1B5B-478D-90BF-2E3C7C565B19",variableType:4}
 */
var vl_cant_de_baja = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"79DA566F-4697-4FB4-9224-97916E6BF321",variableType:4}
 */
var vl_cant_pendientes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8F1DED5E-6FD9-480D-8FC7-2C8DF5786F2E",variableType:4}
 */
var vl_cant_activos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5A7D69DE-88E4-4F90-8827-889C0A9BE320",variableType:4}
 */
var vl_cant_web_regis = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"444F8D88-BC91-41C6-9B12-53F3503E22CE",variableType:4}
 */
var vl_cant_inactivos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"707D5F55-EBBF-489D-9E47-6F35DA834670",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"089135E9-0885-4723-9287-A9BB14E3E7E4",variableType:4}
 */
var vl_matriculado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0FE32700-9562-4A0B-AF80-14685F062E1D",variableType:4}
 */
var vl_documento = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"560E7898-89CD-4C3C-ACF4-1E3C8ED09C03"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"9D8E6163-9273-4F42-8DD5-84DD64EE441F"}
 */
function onShow(firstShow, event) 
{
	plugins.window.getMenuBar().removeAllMenus()
	plugins.window.setToolBarAreaVisible(false)	
	
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
	    plugins.busy.prepare();
	}
	
	if(firstShow)
	{
		vl_documento 		 = null
		vl_estado 			 = 1
		vl_matriculado 		 = null
		vl_estado_financiero = 0
		vl_tipo_fecha		 = null
		vl_solo_consejo		 = 0
		vl_cant_cuotas		 = null
		vl_email_array		 = new Array
		onActionFiltro()
	}
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"383A77D2-5499-4BBD-B554-E41DA32B379D"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}


/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"DE9AFF0A-999A-4FAD-BBBB-50B71AAF382F"}
 * @AllowToRunInFind
 */
function onActionRefrescar(event) 
{
	vl_documento 		 = null
	vl_estado 			 = 1
	vl_matriculado 		 = null
	vl_estado_financiero = 0
	vl_tipo_fecha		 = null
	vl_solo_consejo		 = 0
	vl_cant_cuotas		 = null
	vl_email_array		 = new Array
	onActionFiltro()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C6D32E7B-DEDC-40E0-B0EE-2CC761EE1FF6"}
 */
function onActionDetalle(event) 
{
	scopes.globals.vg_formulario_anterior = controller.getName()
	forms.mat_consultas_cuotas_adeudadas_detalle.vl_mat_id = mat_id
	forms.mat_consultas_cuotas_adeudadas_detalle.controller.show()
}

/**
 * @properties={typeid:24,uuid:"25CB0DD7-606D-4E42-978F-541CBEFA3622"}
 */
function onActionFiltro() 
{
	var params = {
		processFunction: filtrar,
		message: 'Calculando deuda... espere un momento por favor.',
		opacity: 0.5,
		paneColor: '#000000',
		showCancelButton: false,
		cancelButtonText: 'Stop!'
	};
	plugins.busy.block(params);
}

/**
 * @properties={typeid:24,uuid:"095244F5-E1A8-473E-A4D0-D09C44DC1CCE"}
 * @AllowToRunInFind
 */
function filtrar()
{
	application.updateUI()
	
	controller.loadAllRecords()
	controller.find()
	if(vl_matriculado!=null) mat_id = vl_matriculado
	if(vl_documento!=null) mat_dni = vl_documento
	if(vl_estado!=null) mat_estado = vl_estado
	switch (vl_tipo_fecha) 
	{
		case 0:
			mat_fecha_matriculacion = utils.dateFormat(vl_fec_ini, 'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
		break;
		case 1:
			mat_fecha_graduacion = utils.dateFormat(vl_fec_ini, 'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
		break;
		case 2:
			mat_fecha_baja = utils.dateFormat(vl_fec_ini, 'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
		break;
	}
	if(vl_solo_consejo!=null && vl_solo_consejo!=0) mat_consejo_id = [1,2,3,4,5]
	controller.search()
	
	vl_cant_activos    = 0
	vl_cant_inactivos  = 0
	vl_cant_pendientes = 0
	vl_cant_web_regis  = 0
	vl_cant_de_baja	   = 0
	
	/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
	var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')

	for (var i = 1; i <= databaseManager.getFoundSetCount(foundset); i++) 
	{
		/**@type {Number}*/
		var tmp_cant = 0

		/**@type {JSRecord}*/
		var record = foundset.getRecord(i)
			
		fs_mov.find()
		fs_mov.mat_id = record.mat_id
		fs_mov.search()
		fs_mov.sort('mov_anio_emision desc,mov_mes_emision desc')
		
		for(var j = 1;j<=databaseManager.getFoundSetCount(fs_mov);j++)
		{
			/**@type {JSRecord}*/
			var rec1 = fs_mov.getRecord(j)
			
			switch (rec1.mov_estado)
			{
				case 0:
					tmp_cant++
				break;
				case 2:
					tmp_cant++
				break;
				case 1:
					j = databaseManager.getFoundSetCount(fs_mov)+1
				break;
			}
		}
		
		record.calc_cuotas_adeud = tmp_cant
		record.calc_mail_chek = 0
		databaseManager.saveData(record)
		
//		if(vl_cant_cuotas!=null)
//		{
//			if(record.calc_cuotas_adeud!=vl_cant_cuotas)
//			{
//				foundset.omitRecord(i)
//				i--
//				continue
//			}
//		}
		
		if(record.mat_estado == 1)
		{
			vl_cant_activos++ 
		}
		
		if(record.mat_web_login != null)
		{
			vl_cant_web_regis++ 
		}
		
		if(record.mat_estado == 0)
		{
			vl_cant_inactivos++ 
		}
		
		if(record.mat_estado == 2)
		{
			vl_cant_de_baja++ 
		}
		
		if(record.mat_estado == 3)
		{
			vl_cant_pendientes++ 
		}
	}
	
	controller.find()
	if(vl_matriculado!=null) mat_id = vl_matriculado
	if(vl_documento!=null) mat_dni = vl_documento
	if(vl_estado!=null) mat_estado = vl_estado
	switch (vl_tipo_fecha) 
	{
		case 0:
			mat_fecha_matriculacion = utils.dateFormat(vl_fec_ini, 'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
		break;
		case 1:
			mat_fecha_graduacion = utils.dateFormat(vl_fec_ini, 'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
		break;
		case 2:
			mat_fecha_baja = utils.dateFormat(vl_fec_ini, 'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
		break;
	}
	if(vl_cant_cuotas!=null) calc_cuotas_adeud = vl_cant_cuotas
	controller.search()
	
	plugins.busy.unblock()
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2FB5E65-FDA4-4FFD-9FC6-8B21DA0B49C4"}
 */
function onActionExportarExcel(event) 
{
	var cuerpo = '<html>'
	cuerpo = cuerpo + 
	
					//ENCABEZADO DE LA TABLA
					  '<table>' + 
	                  '<thead>' +
	                  '<tr>'+
					  '<td width="100">Nº Matrícula</td>'+
					  '<td width="300">Nombre</td>'+
					  '<td width="150">Circunscripción</td>'+
					  '<td width="100">Estado</td>'+
					  '<td width="150">Teléfono</td>'+
					  '<td width="200">Mail</td>'+
					  '<td width="300">Dirección</td>'+
					  '<td width="300">Localidad</td>'+
					  '<td width="200">Departamento</td>'+
					  '<td width="100">Fecha Matriculación</td>'+
					  '<td width="100">Fecha de Baja</td>'+
					  '</tr>' +
					  '</thead>' +
					  '<tbody>' 

	if(foundset.getSize() > 0)
	{
		for(var i=1; i<=foundset.getSize(); i++)
		{
			var myRecord = foundset.getRecord(i)
			var temp_departamento = ""
			if(utils.hasRecords(myRecord,'mat_matriculados_to_localidades_real.localidades_to_departamentos'))
				{
					temp_departamento = myRecord.mat_matriculados_to_localidades_real.localidades_to_departamentos.depar_descripcion
				}
			
				cuerpo = cuerpo + '<tr>' +
				'<td align="right">'  + myRecord.mat_nro_matricula + '</td>' +
				'<td align="left">'   + myRecord.mat_nombre + '</td>' +
				'<td align="center">' + application.getValueListDisplayValue('mat_circunscripcion',myRecord.mat_circunscripcion) + '</td>' +
				'<td align="center">' + application.getValueListDisplayValue('mat_estado_matriculado',myRecord.mat_estado) + '</td>' +
				'<td align="center">' + myRecord.mat_telefono_fijo+ '</td>'+
				'<td align="center">' + myRecord.mat_e_mail + '</td>' +
				'<td align="left">'   + myRecord.mat_direccion_real+ '</td>' +
				'<td align="left">'   + application.getValueListDisplayValue('localidades',myRecord.mat_codigo_postal_real)+ '</td>' +
				'<td align="left">'   + temp_departamento + '</td>' +
				'<td align="center">' + utils.dateFormat((myRecord.mat_fecha_matriculacion),'dd/MM/yyyy') + '</td>' +
				'<td align="center">' + utils.dateFormat((myRecord.mat_fecha_baja),'dd/MM/yyyy') + '</td>'
		}
		cuerpo = cuerpo + '</tbody></table></html>'
	}
	
	/**@type {String} */
	var fileName = 'PadronMatriculados.xls'
	if(application.getApplicationType()==APPLICATION_TYPES.SMART_CLIENT){
		fileName = plugins.file.showFileSaveDialog('PadronMatriculados.xls')
	}

	    
	if(fileName)
    {
       var success = plugins.file.writeTXTFile(fileName, cuerpo)	 
       if(success && application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT)
       {
       		globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'Exportación Satisfactoria', 'info', controller.getName(), 'Ok', ' ',null,null,null,null,null,null)
	   
			if(utils.stringPatternCount(application.getOSName(), 'Windows') == 1)
            {
              application.executeProgramInBackground( 'rundll32', ['url.dll,FileProtocolHandler', fileName.getAbsolutePath()]);
            }
            else
            {
	            if(utils.stringPatternCount(application.getOSName(), 'FreeBSD') == 1 || utils.stringPatternCount(application.getOSName(), 'Linux') == 1)
	            {
	              application.executeProgramInBackground('mozilla', [fileName.getAbsolutePath()]);
	            }
				else
				{
					if(utils.stringPatternCount(application.getOSName(), 'Mac') == 1)
					{
						 application.executeProgramInBackground('open', [fileName.getAbsolutePath()]);
					}
	            }
            }
	   
       } 
       else
       {
       		globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Información', 'Exportación Cancelada por el usuario', 'info', controller.getName(), 'Ok', ' ',null,null,null,null,null,null)
       }
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FD7D4C7C-AE71-485D-8399-7EF208E8FA80"}
 */
function onActionImprimir(event) 
{
	
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B2DB51D6-D23E-4D8C-8C3A-6C91807E0D5B"}
 */
function onActionMail(event) 
{
	if(vl_email_array.length == 0)
	{
		globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Atención', "No hay ningún matriculado seleccionado.", 'info', controller.getName(), 'Ok', ' ',null,null,null,null,null,null)
		return
	}
	
	if(vl_email_array.length > 1)
	{
		scopes.globals.vg_cco = vl_email_array.join(",")	
	}
	
	
	scopes.globals.vg_destinatarios = vl_email_array[0]
	scopes.globals.vg_asunto 		= scopes.globals.ag_empresavigente.emp_nombre +"- Suspención Matrícula." 
	scopes.globals.vg_cuerpo 		= null
	//scopes.globals.vg_adjuntos 	= plugins.mail.createBinaryAttachment('BoletadePago.pdf',plugins.jasperPluginRMI.runReport('sistemas','boleta_de_pago.jasper', 'BoletadePago.pdf', plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, {pmov_id:mov_id}))
	
	globals.ventanaFormulario("lg_form_mail","Litoral Gestion",forms.lg_form_mail.controller.getName())
}
/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"C36801DC-84EB-49C3-AA6A-ECB1F70EFFA2"}
 */
function onDataChangeMail(oldValue, newValue, event) 
{
	if(calc_mail_chek == 1)
	{
		var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(mat_e_mail == null | mat_e_mail == "")
		{
			globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Atención', "El matriculado no tiene la dirección de correo cargada.", 'error', controller.getName(), 'Ok', ' ',null,null,null,null,null,null)
			calc_mail_chek = oldValue
		}
		else
		{
			if (!expr.test(mat_e_mail))
		    {	
		    	globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Atención', "La dirección de correo " + mat_e_mail + " es incorrecta.", 'error', controller.getName(), 'Ok', ' ',null,null,null,null,null,null)
				calc_mail_chek = oldValue
		    }
		    else
		    {
		    	vl_email_array.push(mat_e_mail)
		    }
		}
	}
	else
	{
		vl_email_array.splice(vl_email_array.indexOf(mat_e_mail),1)
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"17595349-D0D7-4E02-A7EF-672EE043D9D6"}
 */
function onActionEstado(event) 
{
	if(vl_email_array.length > 0)
	{
		for(var i=1; i<=foundset.getSize(); i++)
		{
			var myRecord = foundset.getRecord(i)
			if(myRecord.calc_mail_chek == 1)
			{
				myRecord.mat_estado=4
			}
		}
		
		if(databaseManager.hasRecordChanges(foundset))
		{
			scopes.globals.ventanaSiNo('Esta seguro de cambiarlos a Susp.Art.34?','Si','No',controller.getName())
		}
		
	}
	else
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Atención', "No hay ningún matriculado seleccionado.", 'info', controller.getName(), 'Ok', ' ',null,null,null,null,null,null)
	}
}

/**
 * @properties={typeid:24,uuid:"8ECB260E-912A-4A03-9C0B-3443ACE3DB50"}
 */
function Si()
{
	databaseManager.saveData(foundset)
}

/**
 * @properties={typeid:24,uuid:"7DA85D22-C10D-4C1D-9415-03196B690BC2"}
 */
function No()
{
	databaseManager.revertEditedRecords(foundset)
}
