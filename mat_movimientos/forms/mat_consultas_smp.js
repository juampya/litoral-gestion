/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2CE8390D-F6FC-45AC-9B46-1CB818191E26",variableType:4}
 */
var vl_seguro_mp = null;

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"F27CA445-2CD8-4017-AA39-813AE355D791",variableType:-4}
 */
var vl_email_array = new Array;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"62734C13-E227-40F0-83EB-566FBF7C5FC0",variableType:4}
 */
var vl_cant_cuotas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9D3E5FB3-658B-4D5C-8C20-640DC92BAFBF",variableType:4}
 */
var vl_solo_consejo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"68D8E308-7F8F-4894-8B14-376CFCFC98B7",variableType:93}
 */
var vl_fec_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"285427B5-D355-4202-B4F8-CA8AB5718295",variableType:93}
 */
var vl_fec_ini = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DBD3D183-3561-46CB-ABB5-A410037D2FBB",variableType:4}
 */
var vl_tipo_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"68E063D2-2C7A-4785-89CC-E1930BAED747",variableType:4}
 */
var vl_estado_financiero = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"53A21AE8-E5A7-41A6-9060-EE0F6978A47A",variableType:4}
 */
var vl_cant_de_baja = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5384FD4F-FB2B-4731-97D3-EDB7221FA115",variableType:4}
 */
var vl_cant_pendientes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A526582-D14C-42B2-9D30-B7BE44BD822F",variableType:4}
 */
var vl_cant_activos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"866363C8-AD7A-4970-BCE9-E0EA027EA907",variableType:4}
 */
var vl_cant_web_regis = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D9863BFC-81AF-43D4-A5CB-B5B2701C4BE0",variableType:4}
 */
var vl_cant_inactivos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3A92BD67-ED85-44B6-8018-412F77F185FC",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4CBB50DA-DA80-4762-8CAA-ABA77CC8309F",variableType:4}
 */
var vl_matriculado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A7CBC6B-C903-4E87-9441-FCCCA8B18643",variableType:4}
 */
var vl_documento = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"93CC8CBF-8522-4108-9256-4318598A4662"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"F377B833-472F-46B1-AD42-28167141149B"}
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
		vl_seguro_mp		 = 1
		CalcularSMP()
		onActionFiltro()
	}
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B0CB175A-80AD-4171-8930-C89D1DC949E8"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"AC878493-B938-4BB3-B58C-3BB185EA5C48"}
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
	vl_seguro_mp		 = 1
	CalcularSMP()
	onActionFiltro()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"8ABF8ACC-DD1E-4464-A016-8EA5D7E9BC47"}
 */
function onActionDetalle(event) 
{
	scopes.globals.vg_formulario_anterior = controller.getName()
	forms.mat_consultas_cuotas_adeudadas_detalle.vl_mat_id = mat_id
	forms.mat_consultas_cuotas_adeudadas_detalle.controller.show()
}

/**
 * @properties={typeid:24,uuid:"F0FD3738-A962-4D5A-9B51-B966F9BEDC51"}
 */
function onActionFiltro() 
{
	var params = {
		processFunction: filtrar,
		message: 'Procesando datos... espere un momento por favor.',
		opacity: 0.5,
		paneColor: '#000000',
		showCancelButton: false,
		cancelButtonText: 'Stop!'
	};
	plugins.busy.block(params);
}

/**
 * @properties={typeid:24,uuid:"F9C83F6F-8943-403D-808C-9900C93C1D9C"}
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
	if(vl_seguro_mp!=null) calc_smp = vl_seguro_mp
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
	if(vl_seguro_mp!=null) calc_smp = vl_seguro_mp
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
 * @properties={typeid:24,uuid:"01DDCF45-6B04-48F1-AB14-AFFDA5D799A2"}
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
					  '<td width="100">DNI</td>'+					  
					  '<td width="200">Mail</td>'+
					  '<td width="100">Fecha de Inicio</td>'+
					  '</tr>' +
					  '</thead>' +
					  '<tbody>' 

	if(foundset.getSize() > 0)
	{
		for(var i=1; i<=foundset.getSize(); i++)
		{
			var myRecord = foundset.getRecord(i)
			cuerpo = cuerpo + '<tr>' +
			'<td align="right">'  + myRecord.mat_nro_matricula + '</td>' +
			'<td align="left">'   + myRecord.mat_nombre + '</td>' +
			'<td align="center">' + myRecord.mat_dni + '</td>' +
			'<td align="center">' + myRecord.mat_e_mail + '</td>' +
			'<td align="center">' + utils.dateFormat((myRecord.calc_smp_inicio),'dd/MM/yyyy') + '</td>'
		}
		cuerpo = cuerpo + '</tbody></table></html>'
	}
	else
	{
		scopes.globals.ventanaAceptar("No existen datos para exportar.",controller.getName())
		return
	}
	
	/**@type {String} */
	var fileName = 'PadronSeguroMalaPraxis.xls'
	if(application.getApplicationType()==APPLICATION_TYPES.SMART_CLIENT){
		fileName = plugins.file.showFileSaveDialog('PadronSeguroMalaPraxis.xls')
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
 * @properties={typeid:24,uuid:"5D1CE1EC-347A-40AC-95DA-8327D4C26D8B"}
 */
function onActionImprimir(event) 
{
	if(vl_seguro_mp==null)
	{
		plugins.jasperPluginRMI.runReport("sistemas",'mat_padron_seguro_mp.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pseguro:1})
	}
	else
	{
		plugins.jasperPluginRMI.runReport("sistemas",'mat_padron_seguro_mp.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pseguro:vl_seguro_mp})
	}

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"F1F267F3-277F-4E42-B9C8-CB02C3594979"}
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
	scopes.globals.vg_asunto 		= scopes.globals.ag_empresavigente.emp_nombre +"- Aviso Seguro de Mala Praxis." 
	scopes.globals.vg_cuerpo 		= null
	//scopes.globals.vg_adjuntos 	= plugins.mail.createBinaryAttachment('BoletadePago.pdf',plugins.jasperPluginRMI.runReport('sistemas','boleta_de_pago.jasper', 'BoletadePago.pdf', plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, {pmov_id:mov_id}))
	
	globals.ventanaFormulario("lg_form_mail","Litoral Gestion",forms.lg_form_mail.controller.getName())
}

/**
 * Handle changed data.
 *
 * @properties={typeid:24,uuid:"ED2ADBDD-9A80-4FF3-ADC3-44A2F21CB943"}
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
 * @properties={typeid:24,uuid:"555C894F-49F9-4F4E-83B5-09B932B95651"}
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
 * @properties={typeid:24,uuid:"BF4BD382-2686-4FE2-BD31-984608414854"}
 */
function Si()
{
	databaseManager.saveData(foundset)
}

/**
 * @properties={typeid:24,uuid:"92409486-6F2A-4D37-95E1-14FDD22163A0"}
 */
function No()
{
	databaseManager.revertEditedRecords(foundset)
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"7A41AC93-362D-4551-A884-97C6CCCD0C1B"}
 */
function CalcularSMP()
{
	/** @type {JSFoundSet<db:/sistemas/mat_matriculado_rel_ingresos>} */
	var fs_smp = databaseManager.getFoundSet('sistemas','mat_matriculado_rel_ingresos')	
		
	for (var i = 1; i <= databaseManager.getFoundSetCount(foundset); i++) 
	{
		/**@type {JSRecord}*/
		var record = foundset.getRecord(i)
		
		fs_smp.find()
		fs_smp.ingr_id = 2
		fs_smp.rel_estado = 1
		fs_smp.mat_id = record.mat_id
		if(fs_smp.search()>0)
		{
			record.calc_smp = 1
			record.calc_smp_inicio = fs_smp.rel_fec_inicial
			databaseManager.saveData(record)
		}
	}
}