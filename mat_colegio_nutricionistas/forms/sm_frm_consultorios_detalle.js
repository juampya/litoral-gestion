/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA83F8A4-A363-44D1-BAA7-1C019971ED92"}
 */
var vl_frm_anterior = null;


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"0B73BDA7-DE69-44C5-9335-798DBA15290E"}
 */
function onActionVolver(event) 
{	
	forms[vl_frm_anterior].controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"93E82675-4EA5-4FA5-A86F-B2F4424A6C9A"}
 */
function onActionNuevo(event) 
{
	
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B3040C13-5772-4B0B-B115-52755385F662"}
 */
function onShow(firstShow, event) 
{
	mat_consultorios_to_mat_rel_mat_consu.loadRecords()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E1BF4360-AFC7-4E3E-9C3A-E32AC5A9D2E6"}
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
				'<td align="center">' + application.getValueListDisplayValue('consultorios_estados',myRecord.calc_estado) + '</td>' +
				'<td align="center">' + utils.dateFormat((myRecord.calc_fec_vto),'dd/MM/yyyy')+ '</td>' +
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
 * @properties={typeid:24,uuid:"D8A0CBC8-1BD8-4701-8766-9204A377FA60"}
 */
function onActionImprimir(event) 
{
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8D51DB2E-5FAD-42C6-AD96-3BDCC1455A9D"}
 */
function onActionDetalle(event) {
	// TODO Auto-generated method stub
}
