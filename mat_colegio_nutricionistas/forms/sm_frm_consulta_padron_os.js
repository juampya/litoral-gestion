/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"91A97D1A-2DF9-4359-A9DD-83BB75C81561",variableType:4}
 */
var vl_estado_financiero = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A04708F3-41B7-4AE4-8269-2329420397AF",variableType:4}
 */
var vl_cant_de_baja = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B8832536-D228-44BC-AE8B-4D299EB9957D",variableType:4}
 */
var vl_cant_pendientes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"63B6E3C7-6671-44F6-849F-DCA394338965",variableType:4}
 */
var vl_cant_activos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0EDA771E-154B-4DBB-A57B-4F6501A6A4E4",variableType:4}
 */
var vl_cant_web_regis = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ACDDD876-587D-455B-B125-3164E3871812",variableType:4}
 */
var vl_cant_inactivos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0E2FA4A3-8E0A-4B09-AA60-7A0B3D73355F",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD2DD7F6-0593-4B6F-B1AA-03D5B191D588",variableType:4}
 */
var vl_matriculado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"02A2605A-8722-4DFB-94F5-3E6098121F7E",variableType:4}
 */
var vl_documento = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BE869771-8999-49FC-94E4-DE71DB3A99E3"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1DE50F6D-51CB-456B-A8AB-C5EE23732FDE"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		filtrar()
	}
	plugins.window.getMenuBar().removeAllMenus()
	plugins.window.setToolBarAreaVisible(false)	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"0EE8A1BF-52CD-4B6F-B8F1-166DEE6606A8"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B24781BF-D5F4-4B6E-87E6-E8D04F5EE233"}
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
 * @properties={typeid:24,uuid:"4DC6B568-C42D-4D6F-8055-C9AF299961F1"}
 * @AllowToRunInFind
 */
function onActionRefrescar(event) 
{
	vl_documento 		 = null
	vl_estado 			 = null
	vl_matriculado 		 = null
	vl_estado_financiero = 0
	controller.loadAllRecords()
	filtrar()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"EA3C4083-C622-41B2-B9E8-E22EADFAF2F8"}
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
 * @properties={typeid:24,uuid:"C1BF8E84-C2AA-4A20-95F2-D4088D490067"}
 */
function onActionCopiar(event) 
{
	forms.sm_frm_matriculados_tabpanel.vl_frm_anterior = controller.getName()
	forms.sm_frm_matriculados_tabpanel.vl_nuevo = 2
	forms.sm_frm_matriculados_tabpanel.controller.show() 
}

/**
 * @properties={typeid:24,uuid:"3EC81A11-E7DA-40FD-8C2D-ED58D8036DFD"}
 * @AllowToRunInFind
 */
function filtrar()
{
	controller.find()
	mat_rel_mat_obsoc_to_mat_matriculados.mat_id = vl_matriculado
	mat_rel_mat_obsoc_to_mat_matriculados.mat_dni = vl_documento
	mat_rel_mat_obsoc_to_mat_matriculados.mat_estado = vl_estado
	controller.search()
	
	vl_cant_activos    = 0
	vl_cant_inactivos  = 0
	vl_cant_pendientes = 0
	vl_cant_web_regis  = 0
	vl_cant_de_baja	   = 0
	
	
	for (var i = 1; i <= databaseManager.getFoundSetCount(foundset); i++) 
	{
		/**@type {JSRecord}*/
		var record = foundset.getRecord(i)
		
		if(record.mat_rel_mat_obsoc_to_mat_matriculados.mat_estado == 1)
		{
			vl_cant_activos++ 
		}
		
		if(record.mat_rel_mat_obsoc_to_mat_matriculados.mat_web_login != null)
		{
			vl_cant_web_regis++ 
		}
		
		if(record.mat_rel_mat_obsoc_to_mat_matriculados.mat_estado == 0)
		{
			vl_cant_inactivos++ 
		}
		
		if(record.mat_rel_mat_obsoc_to_mat_matriculados.mat_estado == 2)
		{
			vl_cant_de_baja++ 
		}
		
		if(record.mat_rel_mat_obsoc_to_mat_matriculados.mat_estado == 3)
		{
			vl_cant_pendientes++ 
		}
	}	
}

/**
 * @properties={typeid:24,uuid:"5F4F432E-2F32-4DE9-8787-AC89A7186706"}
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
				if(record.mat_rel_mat_obsoc_to_mat_matriculados.calc_semaforo=="media:///green_light.png")
				{
					foundset.omitRecord(i)
					i--
				}
				break;
			case 2:
				if(record.mat_rel_mat_obsoc_to_mat_matriculados.calc_semaforo=="media:///red_light.png")
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
 * @properties={typeid:24,uuid:"0550572B-9DD6-460A-AEA8-FD7EBE6637C4"}
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
					  '<td width="100">Nombre</td>'+
					  '<td width="100">Circunscripción</td>'+
					  '<td width="100">Estado</td>'+
					  '<td width="350">Teléfono</td>'+
					  '<td width="100">Mail</td>'+
					  '<td width="100">Fecha Matriculación</td>'+
					  '<td width="100">Dirección</td>'+
					  '</tr>' +
					  '</thead>' +
					  '<tbody>' 

	if(foundset.getSize() > 0)
	{
		for(var i=1; i<=foundset.getSize(); i++)
		{
			var myRecord = foundset.getRecord(i)
				cuerpo = cuerpo + '<tr>' +
				'<td align="right">'  + myRecord.mat_rel_mat_obsoc_to_mat_matriculados.mat_nro_matricula + '</td>' +
				'<td align="left">'   + myRecord.mat_rel_mat_obsoc_to_mat_matriculados.mat_nombre + '</td>' +
				'<td align="center">' + application.getValueListDisplayValue('mat_circunscripcion',myRecord.mat_rel_mat_obsoc_to_mat_matriculados.mat_circunscripcion) + '</td>' +
				'<td align="center">' + application.getValueListDisplayValue('mat_estado_matriculado',myRecord.mat_rel_mat_obsoc_to_mat_matriculados.mat_estado) + '</td>' +
				'<td align="center">' + myRecord.mat_rel_mat_obsoc_to_mat_matriculados.mat_telefono_fijo+ '</td>'
				'<td align="center">' + mat_rel_mat_obsoc_to_mat_matriculados.mat_e_mail + '</td>' +
				'<td align="left">'   + mat_rel_mat_obsoc_to_mat_matriculados.mat_direccion_real+ '</td>' +
				'<td align="center">' + utils.dateFormat((myRecord.mat_rel_mat_obsoc_to_mat_matriculados.mat_fecha_matriculacion),'dd/MM/yyyy') + '</td>'
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
       if(success)
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
 * @properties={typeid:24,uuid:"78FBC3C5-5136-4736-8649-9705DFD0E3DA"}
 */
function onActionImprimir(event) 
{
	
}
