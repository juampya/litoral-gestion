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
		filtrar()
	}
	plugins.window.getMenuBar().removeAllMenus()
	plugins.window.setToolBarAreaVisible(false)	
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
	controller.loadAllRecords()
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
	mat_id = vl_matriculado
	mat_dni = vl_documento
	mat_estado = vl_estado
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
					  '<td width="100">Nombre</td>'+
					  '<td width="100">Circunscripción</td>'+
					  '<td width="100">Estado</td>'+
					  '<td width="350">Teléfono</td>'+
					  '<td width="100">Mail</td>'+
					  '<td width="100">Dirección</td>'+
					  '<td width="100">Localidad</td>'+
					  '<td width="100">Departamento</td>'+
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
 * @properties={typeid:24,uuid:"5FB488EE-ADE6-43AF-BCED-CD750C463F5C"}
 */
function onActionImprimir(event) 
{
	
}
