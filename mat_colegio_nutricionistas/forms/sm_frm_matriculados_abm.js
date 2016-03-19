/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A03EFA8-3244-4C41-BA9B-AC720CA4083A",variableType:4}
 */
var vl_seguro_mp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4C733FF9-52B0-48FA-A95C-677E3551ED3E",variableType:4}
 */
var vl_cant_smp = null;

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"658AE1A5-6845-4DB7-A23F-7D73FF459E1C",variableType:-4}
 */
var vl_email_array = new Array;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0ECCD1AA-5822-4B78-AE04-22147BC40266",variableType:4}
 */
var vl_estado_web = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"32C78ED6-217D-4227-B8EE-869BE3137F05",variableType:4}
 */
var vl_solo_consejo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"96AC9648-2697-40F6-8A2E-A398046E9A4F",variableType:93}
 */
var vl_fec_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2D754A27-00FA-4554-90A3-0AAB2DB3E2DE",variableType:93}
 */
var vl_fec_ini = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7B5154D2-54AE-4EB9-A59C-BDF07206F210",variableType:4}
 */
var vl_tipo_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3C76C381-0DCE-4C75-AD28-E6BD81A714ED",variableType:4}
 */
var vl_estado_financiero = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FEC52D1F-04B5-44EC-934D-C609AF8EE091",variableType:4}
 */
var vl_cant_de_baja = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4E928519-975A-4AF6-BF19-F454F8F7A550",variableType:4}
 */
var vl_cant_pendientes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"666D6F5C-8965-420A-9058-4D5411985BD9",variableType:4}
 */
var vl_cant_activos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8F5FEB0A-43BE-4933-9F92-D5C9E41F9547",variableType:4}
 */
var vl_cant_web_regis = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CFB2E471-3440-4A5F-868B-21B3250B25E4",variableType:4}
 */
var vl_cant_inactivos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"16BB5741-E178-4D56-A68A-3203BD7344D9",variableType:4}
 */
var vl_estado = null
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61FE3B7B-97D2-4B65-A7B7-F66E7B535453",variableType:4}
 */
var vl_matriculado = null
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"235B8210-8CDF-49A8-9BA2-F8C6B2D689C4",variableType:4}
 */
var vl_documento = null

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35C2E4C7-BD63-4AFC-B1F3-6BF8C64F3A00"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7D06E01B-80F1-44FE-97C5-EBC0BFA5E403"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		//CalcularSMP()
		filtrar()
	}
	//plugins.window.getMenuBar().removeAllMenus()
	//plugins.window.setToolBarAreaVisible(false)	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7156CCDB-1EAD-4FD6-8A76-DFEB5E9E8BED"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"861E7797-87FA-4ECF-A012-75B03088668B"}
 */
function onActionNuevo(event) 
{
	forms.sm_frm_matriculados_tabpanel.vl_frm_anterior = controller.getName()
	forms.sm_frm_matriculados_tabpanel.vl_nuevo = 1
	forms.sm_frm_matriculados_tabpanel.controller.show() 
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"EC0C777D-191C-4CA2-816F-F71A35E083CA"}
 * @AllowToRunInFind
 */
function onActionRefrescar(event) 
{
	vl_documento 		 = null
	vl_estado 			 = null
	vl_matriculado 		 = null
	vl_estado_financiero = 0
	vl_tipo_fecha		 = null
	vl_solo_consejo		 = 0
	vl_estado_web		 = 0
	vl_seguro_mp		 = null
	controller.loadAllRecords()
	CalcularSMP()
	filtrar()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"57A47ECA-BD7B-4A47-93A5-51A7F97B7721"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_matriculados_tabpanel.vl_frm_anterior = controller.getName()
	forms.sm_frm_matriculados_tabpanel.vl_nuevo = 0
	forms.sm_frm_matriculados_tabpanel.controller.show() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E1F7AC68-1585-4A3B-9CE7-1CEA92D0759B"}
 */
function onActionCopiar(event) 
{
	forms.sm_frm_matriculados_tabpanel.vl_frm_anterior = controller.getName()
	forms.sm_frm_matriculados_tabpanel.vl_nuevo = 2
	forms.sm_frm_matriculados_tabpanel.controller.show() 
}

/**
 * @properties={typeid:24,uuid:"8225D3AB-AC12-40BF-B7D4-0E1BC8952225"}
 * @AllowToRunInFind
 */
function filtrar()
{
	controller.find()
	if(vl_matriculado!=null) mat_id = vl_matriculado
	if(vl_documento!=null) mat_dni = vl_documento
	if(vl_estado!=null)	mat_estado = vl_estado
	if(vl_solo_consejo!=null && vl_solo_consejo!=0) mat_consejo_id = [1,2,3,4,5]
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
	
	switch (vl_estado_web) 
	{
		case 1:
			mat_web_login = '!^= null'
		break;
		case 2:
			mat_web_login = '^= null'
		break;
	}	
	controller.search()
	
	vl_cant_activos    = 0
	vl_cant_inactivos  = 0
	vl_cant_pendientes = 0
	vl_cant_web_regis  = 0
	vl_cant_de_baja	   = 0
	vl_cant_smp		   = 0
	
	for (var i = 1; i <= databaseManager.getFoundSetCount(foundset); i++) 
	{
		/**@type {JSRecord}*/
		var record = foundset.getRecord(i)
		
		if(record.calc_smp==1)
		{
			vl_cant_smp ++
		}
		
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
}

/**
 * @properties={typeid:24,uuid:"D1DA07AB-0717-498F-BC59-279264AED174"}
 * @AllowToRunInFind
 */
function filtro_estado_financiero()
{
	controller.loadAllRecords()
	for (var i = 1; i <= databaseManager.getFoundSetCount(foundset); i++)
	{
		/**@type {JSRecord}*/
		var record = foundset.getRecord(i)
		
		switch (vl_estado_financiero) 
		{
			case 1:
				if(record.calc_semaforo=="media:///green_light.png")
				{
					foundset.omitRecord(i)
					i--
				}
				break;
			case 2:
				if(record.calc_semaforo=="media:///red_light.png")
				{
					foundset.omitRecord(i)
					i--
				}
			break;
			default:
			break;
		}
	}
	filtrar()
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2E473B4A-293B-4179-A5CD-BA3C560371D1"}
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
					  '<td width="100">Fecha Nacimiento</td>'+
					  '<td width="100">Lugar Nacimiento</td>'+
					  '<td width="100">Domicilio Legal</td>'+
					  '<td width="100">Domicilio Real</td>'+
					  '<td width="150">Teléfono Fijo</td>'+
					  '<td width="150">Teléfono Celular</td>'+
					  '<td width="200">Mail</td>'+
					  '<td width="100">Estado de Cuenta</td>'+
					  '<td width="100">Monto Deudor</td>'+
					  '<td width="100">Estado</td>'+
					  '<td width="100">Fecha Matriculación</td>'+
					  '<td width="100">Fecha Baja/Suspención</td>'+
					  '<td width="100">Fecha Rematriculación</td>'+
					  '<td width="100">SMP</td>'+
					  '<td width="100">Fecha Alta SMP</td>'+
					  '<td width="100">Habilitación</td>'+
					  '<td width="100">Fecha Vto. Habilitación</td>'+
					  '<td width="100">Cant.OS</td>'+
					  '</tr>' +
					  '</thead>' +
					  '<tbody>' 

	if(foundset.getSize() > 0)
	{
		for(var i=1; i<=foundset.getSize(); i++)
		{
			var myRecord = foundset.getRecord(i)
			//var temp_departamento = ""
			var temp_EDC		  = "NO DEBE"
			/**@type {Number}*/
			var temp_monto_deudor = CalcularDeuda(myRecord.mat_id)
			/**@type {Array}*/
			var temp_consultorios = BuscoConsultorioPrincipal(myRecord.mat_id)
			
			if(temp_monto_deudor>0)	temp_EDC = "DEBE"
			
			if(utils.hasRecords(myRecord,'mat_matriculados_to_localidades_real.localidades_to_departamentos'))
				{
					//temp_departamento = myRecord.mat_matriculados_to_localidades_real.localidades_to_departamentos.depar_descripcion
				}
			
				cuerpo = cuerpo + '<tr>' +
				'<td align="right">'  + myRecord.mat_nro_matricula + '</td>' +
				'<td align="left">'   + myRecord.mat_nombre + '</td>' +
				'<td align="left">'   + myRecord.mat_dni + '</td>' +
				'<td align="center">' + utils.dateFormat((myRecord.mat_fecha_nacimiento),'dd/MM/yyyy') + '</td>' +
				'<td align="left">'   + myRecord.mat_lugar_nacimiento + '</td>' +
				'<td align="left">'   + myRecord.mat_direccion_legal+ '</td>' +
				'<td align="left">'   + myRecord.mat_direccion_real+ '</td>' +
				'<td align="center">' + myRecord.mat_telefono_fijo+ '</td>'+
				'<td align="center">' + myRecord.mat_celular+ '</td>'+
				'<td align="center">' + myRecord.mat_e_mail + '</td>' +
				'<td align="center">' + temp_EDC + '</td>' +
				'<td align="right">' + utils.numberFormat(temp_monto_deudor,'#,##0.00') + '</td>' +
				'<td align="center">' + application.getValueListDisplayValue('mat_estado_matriculado',myRecord.mat_estado) + '</td>' +
				'<td align="center">' + utils.dateFormat((myRecord.mat_fecha_matriculacion),'dd/MM/yyyy') + '</td>' +
				'<td align="center">' + utils.dateFormat((myRecord.mat_fecha_baja),'dd/MM/yyyy') + '</td>' +
				'<td align="center">' + " " + '</td>' +
				'<td align="center">' + application.getValueListDisplayValue('lg_si_no',myRecord.calc_smp) + '</td>' +
				'<td align="center">' + utils.dateFormat((myRecord.calc_smp_inicio),'dd/MM/yyyy') + '</td>'+
				'<td align="center">' + temp_consultorios[0] + '</td>' +
				'<td align="center">' + temp_consultorios[1] + '</td>'+
				'<td align="center">' + myRecord.mat_matriculados_to_mat_rel_mat_obsoc.aggr_cant + '</td>'
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
 * @properties={typeid:24,uuid:"5FB488EE-ADE6-43AF-BCED-CD750C463F5C"}
 */
function onActionImprimir(event) 
{
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"74F2495E-6B71-44AD-A1C2-06120D8BECA9"}
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
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"28B52B43-4006-4218-9EF0-48CDB4AFC39C"}
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
 * Perform the element default action.
 * @properties={typeid:24,uuid:"6F40201B-BA36-4ECF-906E-F40DAA223296"}
 * @AllowToRunInFind
 */
function filtro_seguro_mp() 
{
	switch (vl_seguro_mp)
	{
		case 1:
			controller.loadAllRecords()
			filtrar()
		break;
		case 0:
			controller.loadAllRecords()
			for (var i = 1; i <= databaseManager.getFoundSetCount(foundset); i++)
			{
				/**@type {JSRecord}*/
				var record = foundset.getRecord(i)
				
				
				if (record.calc_smp == 1) 
				{
					foundset.omitRecord(i)
					i--
				}
			}
			filtrar()
		break;
		default:
			controller.loadAllRecords()
			filtrar()
		break;
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"A1E3B672-D2BF-4104-AABD-987305C861D6"}
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

/**
 * @AllowToRunInFind
 * @param {Number} p_mat_id
 * @properties={typeid:24,uuid:"22817335-68B8-493E-8044-68B362CFC4EF"}
 */
function CalcularDeuda(p_mat_id)
{
	/** @type {JSFoundSet<db:/sistemas/mat_movimientos>} */
	var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')	
		fs_mov.find()
		fs_mov.mat_id = p_mat_id
		fs_mov.mov_estado = 0
		if(fs_mov.search()>0)
		{
			return fs_mov.mov_importe 
		}
		else
		{
			return 0
		}
}


/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param p_mat_id
 *
 * @properties={typeid:24,uuid:"FE6D5AE9-01F7-4656-B7D5-B3140DC59461"}
 */
function BuscoConsultorioPrincipal(p_mat_id)
{
	/**@type {Array}*/
	var tmp_array = new Array
	/**@type {String}*/
	var tmp_estado="NO HABILITADO"
	/**@type {String}*/
	var tmp_fec_habilita=""
	
	/** @type {JSFoundSet<db:/sistemas/mat_consultorios>} */
	var fs_consultorios = databaseManager.getFoundSet('sistemas','mat_consultorios')	
		fs_consultorios.find()
		fs_consultorios.mat_id = p_mat_id
		fs_consultorios.consultorio_principal = 1
		if(fs_consultorios.search()>0)
		{
			if(fs_consultorios.consultorio_estado==1|fs_consultorios.consultorio_estado==2) 
			{
				tmp_estado = "HABILITADO"
				tmp_fec_habilita = utils.dateFormat((fs_consultorios.consultorio_vto),'dd/MM/yyyy')	
			}
		}
		
	tmp_array.push(tmp_estado,tmp_fec_habilita)	
	
	return tmp_array
}
