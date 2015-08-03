/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"FF87897C-EECA-45DC-B578-3CAD370344EA",variableType:93}
 */
var vl_vto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"53F3CC21-21BA-4873-B336-2274F8C86C5D",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B8B520DB-7DD4-4C51-A722-DBED46BDC8C9",variableType:4}
 */
var vl_departamento = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C5B3A3CA-EE8D-4F03-A490-18B789ACA033",variableType:4}
 */
var vl_localidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E76CC67-3946-4E4C-8001-3F969A9044EF"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0E3AB682-0EB8-41D9-8CDC-A3D58948349C",variableType:4}
 */
var vl_matriculado = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"6EF4D5C8-434C-46D3-B41A-718F88D0FD9D"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"49F243C8-4089-49F2-9684-EFFA63767237"}
 */
function onActionNuevo(event) 
{
	
}

/**
 * @properties={typeid:24,uuid:"B6E38EA1-40CA-4528-8AF6-58CA3AC1082B"}
 * @AllowToRunInFind
 */
function Filtrar()
{
	controller.loadAllRecords()
	controller.find()
	if(vl_matriculado!=null) mat_id = vl_matriculado
	if(vl_localidad!=null) localidad_id = vl_localidad
	if(vl_estado!=null) consultorio_estado = vl_estado
	if(vl_departamento!=null) mat_consultorios_to_localidades.depar_id = vl_departamento
	if(vl_vto!=null) consultorio_vto  = utils.dateFormat(vl_vto, 'yyyy-MM')+'-01 00:00:00 ... '+utils.dateFormat(vl_vto, 'yyyy-MM')+'-28 23:59:59|yyyy-MM-dd HH:mm:ss'
	controller.search()
	
	//filtro_estado()
	//filtro_vto()
//	for (var i = 1; i <= databaseManager.getFoundSetCount(foundset) ; i++) 
//	{
//		var record = foundset.getRecord(i)
//		
//		if(utils.hasRecords(record,'mat_consultorios_to_mat_rel_mat_consu'))
//		{
//			record.mat_consultorios_to_mat_rel_mat_consu.find()
//			record.mat_consultorios_to_mat_rel_mat_consu.rel_estado = 1
//			record.mat_consultorios_to_mat_rel_mat_consu.search()
//			
//			if(record.mat_consultorios_to_mat_rel_mat_consu.getSize()==1)
//			{
//				record.calc_estado  = 1
//				record.calc_fec_vto = record.mat_consultorios_to_mat_rel_mat_consu.rel_fec_vencimiento 
//			}
//		}	
//	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"3DA81BEE-3B94-401A-A897-DC6FF6C47103"}
 */
function filtro_estado()
{
	//controller.loadAllRecords()
	for (var i = 1; i <= databaseManager.getFoundSetCount(foundset); i++)
	{
		/**@type {JSRecord}*/
		var record = foundset.getRecord(i)
		
		switch (vl_estado) 
		{
			case 0:
				if(record.calc_estado==1 || record.calc_estado==2)
				{
					foundset.omitRecord(i)
					i--
				}	
			break;
			case 1:
				if(record.calc_estado==0 || record.calc_estado==2)
				{
					foundset.omitRecord(i)
					i--
				}
			break;
			case 2:
			if(record.calc_estado==0 || record.calc_estado==1)
			{
				foundset.omitRecord(i)
				i--
			}
			break;
		}
	}
	//Filtrar()
}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"B6EFB5BA-422A-4EEB-9790-F0047F081ACC"}
 */
function filtro_vto()
{
	//controller.loadAllRecords()
	for (var i = 1; i <= databaseManager.getFoundSetCount(foundset); i++)
	{
		/**@type {JSRecord}*/
		var record = foundset.getRecord(i)

		if(vl_vto!=null)
		{
			if(utils.dateFormat(record.calc_fec_vto, 'yyyy-MM')!=utils.dateFormat(vl_vto, 'yyyy-MM'))
			{
				foundset.omitRecord(i)
				i--
			}
		}	
	}
	//Filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"331E7957-6E03-47A5-B6BA-E940CAB12980"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
	    plugins.busy.prepare();
	}

	if(firstShow)
	{
		vl_departamento = null
		vl_localidad 	= null
		vl_matriculado 	= null
		vl_estado		= null
		vl_vto			= null
		
		var params = {
			processFunction: ActualizarEstados,
			message: 'Actualizando estados... espere un momento por favor.',
			opacity: 0.5,
			paneColor: '#000000',
			showCancelButton: false,
			cancelButtonText: 'Stop!'
		};
		plugins.busy.block(params);
	}	
	
	Filtrar()
}

/**
 * @properties={typeid:24,uuid:"A12A5AD2-96D5-42CF-B2EC-1E41CD208532"}
 * @AllowToRunInFind
 */
function Refrescar()
{
	onShow(true,null)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CE6A25B2-8C32-455B-A083-6B91DB54E8CD"}
 */
function onActionExportarExcel(event) 
{
	var cuerpo = '<html>'
	cuerpo = cuerpo + 
					//ENCABEZADO DE LA TABLA
					  '<table>' + 
	                  '<thead>' +
	                  '<tr>'+
					  '<td width="60">ID</td>'+
					  '<td width="200">Descripción</td>'+
					  '<td width="200">Domicilio</td>'+
					  '<td width="200">Localidad</td>'+
					  '<td width="200">Departamento</td>'+
					  '<td width="180">Provincia</td>'+
					  '<td width="100">Estado</td>'+
					  '<td width="100">Fecha Vto.</td>'+
					  '<td width="350">Matriculado</td>'+
					  '</tr>' +
					  '</thead>' +
					  '<tbody>' 

	if(foundset.getSize() > 0)
	{
		for(var i=1; i<=foundset.getSize(); i++)
		{
			var myRecord = foundset.getRecord(i)
				cuerpo = cuerpo + '<tr>' +
				'<td align="right">'  + myRecord.consultorio_id + '</td>' +
				'<td align="left">'   + myRecord.consultorio_nombre + '</td>' +
				'<td align="left">'   + myRecord.consultorio_domicilio + '</td>' +
				'<td align="left">'   + application.getValueListDisplayValue('localidades',myRecord.localidad_id) + '</td>' +
				'<td align="left">'   + myRecord.mat_consultorios_to_localidades.localidades_to_departamentos.depar_descripcion + '</td>' +
				'<td align="left">'   + myRecord.mat_consultorios_to_localidades.localidades_to_departamentos.departamentos_to_provincias.provincia_nombre+ '</td>'+
				'<td align="center">' + application.getValueListDisplayValue('consultorios_estados',myRecord.consultorio_estado) + '</td>' +
				'<td align="center">' + utils.dateFormat((myRecord.consultorio_vto),'dd/MM/yyyy')+ '</td>' +
				'<td align="left">'   + application.getValueListDisplayValue('matriculados',myRecord.mat_id) + '</td>'
		}
		cuerpo = cuerpo + '</tbody></table></html>'
	}
	
	/**@type {String} */
	var fileName = 'PadronConsultorios.xls'
	if(application.getApplicationType()==APPLICATION_TYPES.SMART_CLIENT){
		fileName = plugins.file.showFileSaveDialog('PadronConsultorios.xls')
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
 * @properties={typeid:24,uuid:"04501E7E-B571-420D-B489-39CB8EB05A28"}
 */
function onActionImprimir(event) 
{
	var tmp_fecha_vto	  = "No tiene en cuenta."
	var tmp_matriculados  = "Todos."
	var tmp_estado		  = "Todos."
	var tmp_localidad 	  = "Todas."
	var tmp_departamento  = "Todos."	
		
	if(vl_vto != null)
	{
		tmp_fecha_vto = utils.dateFormat(vl_vto, 'MM-yyyy')
	}
	
	if(vl_matriculado!=null)
	{
		tmp_matriculados = application.getValueListDisplayValue('matriculados',vl_matriculado)
	}
	
	if(vl_estado!=null)
	{
		tmp_estado = application.getValueListDisplayValue('consultorios_estados',vl_estado)
	}
	
	if(vl_localidad!=null)
	{
		tmp_localidad = application.getValueListDisplayValue('localidades',vl_localidad)
	}
	
	if(vl_departamento!=null)
	{
		tmp_departamento = application.getValueListDisplayValue('departamentos',vl_departamento)
	}
	
	plugins.jasperPluginRMI.runReport(foundset,'mat_consultorios.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pfechavto:tmp_fecha_vto, plocalidad:tmp_localidad, pdepartamento:tmp_departamento, pmatriculado:tmp_matriculados, pestado:tmp_estado})
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2D47BA6-FF6F-420B-B56A-1227AC01CAA0"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_consultorios_detalle.vl_frm_anterior = controller.getName()
	forms.sm_frm_consultorios_detalle.controller.show()
}


/**
 * @properties={typeid:24,uuid:"742B4892-364A-4C22-BCD5-E764A1558A7F"}
 * @AllowToRunInFind
 */
function ActualizarEstados()
{
	application.updateUI()
	
	for (var i = 1; i <= databaseManager.getFoundSetCount(foundset); i++)
	{
		/**@type {JSRecord}*/
		var record = foundset.getRecord(i)
		
		if(utils.hasRecords(record.mat_consultorios_to_mat_rel_mat_consu))
		{
			record.mat_consultorios_to_mat_rel_mat_consu.find()
			record.mat_consultorios_to_mat_rel_mat_consu.rel_estado = [0,1,2,3]
			record.mat_consultorios_to_mat_rel_mat_consu.search()
			record.mat_consultorios_to_mat_rel_mat_consu.sort('rel_fec_vencimiento desc')
			
			if(record.mat_consultorios_to_mat_rel_mat_consu.getSize()==1)
			{
				if(utils.dateFormat(record.mat_consultorios_to_mat_rel_mat_consu.rel_fec_vencimiento, 'yyyy-MM-dd')<utils.dateFormat(application.getServerTimeStamp(), 'yyyy-MM-dd'))
				{
					record.mat_consultorios_to_mat_rel_mat_consu.rel_estado = 3 //vencido
					record.consultorio_estado = 3 //vencido
				}
				else
				{
					record.consultorio_estado = record.mat_consultorios_to_mat_rel_mat_consu.rel_estado
					record.consultorio_vto = record.mat_consultorios_to_mat_rel_mat_consu.rel_fec_vencimiento
				}
			}
			else
			{
				if(record.mat_consultorios_to_mat_rel_mat_consu.getSize()>1)
				{
					if(utils.dateFormat(record.mat_consultorios_to_mat_rel_mat_consu.getRecord(1).rel_fec_vencimiento, 'yyyy-MM-dd')<utils.dateFormat(application.getServerTimeStamp(), 'yyyy-MM-dd'))
					{
						record.mat_consultorios_to_mat_rel_mat_consu.getRecord(1).rel_estado = 3 //vencido
						record.consultorio_estado = 3 //vencido
					}
					else
					{
						record.consultorio_estado = 2
						record.consultorio_vto = record.mat_consultorios_to_mat_rel_mat_consu.getRecord(1).rel_fec_vencimiento
					}
				}
				else
				{
					record.consultorio_estado = 0
				}
			}
		}	
		else
		{
			record.consultorio_estado = 0
		}
		
		databaseManager.saveData(record)
	}
	plugins.busy.unblock();
}
/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"C7E577C8-5FA3-44EF-BF01-450EA1D49341"}
 */
function onRender(event) 
{
	/** @type {JSFoundSet<db:/sistemas/mat_consultorios>} */
	var record = event.getRecord()
	if(record)
	{
		var rec_estado = record.consultorio_estado
	
		event.getRenderable().fgcolor = '#000000';
		
		if(rec_estado == 3)
		{
			event.getRenderable().bgcolor = '#ff0000'
		}
		
		if(rec_estado == 0)
		{
			event.getRenderable().bgcolor = '#c0c0c0'
		}
		
	}	
}
