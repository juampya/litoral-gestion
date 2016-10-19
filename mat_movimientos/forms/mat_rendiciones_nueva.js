/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9F3C23DA-8CB4-4446-BDF8-26E250023269",variableType:4}
 */
var vl_matriculados_inexistentes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D58178BD-F81B-496A-A555-F4E7D253C362",variableType:4}
 */
var vl_boletas_inexistentes = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DE9B256A-79DD-4960-9CDA-CC6E401B1CC2"}
 */
var vl_html = null;

/**
/* @type {JSFile[]} 
 *
 * @properties={typeid:35,uuid:"D078E37C-0A98-4A97-80CB-C6FC0653DE88",variableType:-4}
 */
var vl_archivo = null;

/**
/* @type {JSFoundSet} 
 *
 * @properties={typeid:35,uuid:"6BBD1D11-FA09-43C1-9832-BF39CFC174F4",variableType:-4}
 */
var vl_founset = null

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"203A6FA2-C2A8-4BB6-BF2D-AE4D2B0EAFC3"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords(foundset)
	forms.mat_rendiciones.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F793A22D-C9D2-4BF3-A782-B14CA1A958B4"}
 */
function onShow(firstShow, event) 
{
	elements.tabs.visible 		   	   	= false
	elements.vl_html.visible 	   	   	= false
	elements.vl_html_label.visible 	   	= false
	elements.vl_archivo.enabled	   	   	= false
	elements.btn_busca_archivo.enabled 	= false
	elements.ren_fecha_captura.enabled  = false
	elements.ren_fecha_proceso.enabled  = false
	elements.ren_nro_lote.enabled 		= false

	vl_archivo 					 = null
	vl_html 					 = null
	vl_boletas_inexistentes 	 = 0
	vl_matriculados_inexistentes = 0
	
	controller.newRecord(false)
	emp_id = scopes.globals.mx_empresa_id
	
	elements.btn_grabar.enabled = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F056075-3AE8-4359-9C8C-FE548F6B6963"}
 */
function onActionGrabar(event) 
{
	if(mat_rendiciones_to_vc_medios_de_cobro.medios_cobro_debauto==0)
	{
		if(vl_archivo !=null)
		{
			switch (medios_cobro_id) //Controlo que el archivo corresponda al medio de cobro seleccionado. 
			{
				case 1:
					if(utils.stringLeft(vl_archivo.getName(),8) != "330ENTES") //NUEVO BCO SANTA FE
					{
						scopes.globals.ventanaAceptar("Este archivo no corresponde a ese medio de cobro.",controller.getName())
						vl_html = null
						return
					}
					else
					{
						ProcesarNuevoBcoSantaFe()
					}
						
				break;
				case 2:
					if(utils.stringLeft(vl_archivo.getName(),4) != "0116") //RED LINK
					{
						scopes.globals.ventanaAceptar("Este archivo no corresponde a ese medio de cobro.",controller.getName())
						return
					}
					else
					{
						ProcesarRedLink()
					}
				break;
				case 3:
					if(utils.stringLeft(vl_archivo.getName(),2) != "RP") //RapiPago
					{
						scopes.globals.ventanaAceptar("Este archivo no corresponde a ese medio de cobro.",controller.getName())
						vl_html = null
						return
					}
					else
					{
						ProcesarRapiPago()
					}
				break;
				
				default:
					scopes.globals.ventanaAceptar("Este archivo no corresponde con ningun medio de cobro existente.",controller.getName())
					return
				break;
			}
			
			//ren_estado = 1
			//databaseManager.saveData()
			//application.getWindow("nuevarendicion").hide()
			forms.mat_rendiciones.controller.show()
		}
		else
		{
			scopes.globals.ventanaAceptar("No seleccionó un archivo.",controller.getName())
		}
	}
	else
	{
		ProcesarDebitoAutomatico()
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"AB1ED38C-2B26-4516-8506-963740C14763"}
 */
function onHide(event)
{
	databaseManager.revertEditedRecords(foundset)
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3FA0233D-7EF7-4732-86C5-4D94BE5565C9"}
 * @AllowToRunInFind
 */
function onActionBuscar(event) 
{
	vl_boletas_inexistentes = 0
	vl_matriculados_inexistentes = 0

	if(mat_rendiciones_to_vc_medios_de_cobro.medios_cobro_debauto==0)
	{
		vl_boletas_inexistentes = 0
		vl_matriculados_inexistentes = 0
		vl_archivo = plugins.file.showFileOpenDialog()
		
		if(vl_archivo!=null)
		{
			switch (medios_cobro_id) //Controlo que el archivo corresponda al medio de cobro seleccionado. 
			{
				case 1:
					if(utils.stringLeft(vl_archivo.getName(),8) != "330ENTES") //NUEVO BCO SANTA FE
					{
						scopes.globals.ventanaAceptar("Este archivo no corresponde a ese medio de cobro.",controller.getName())
						elements.btn_grabar.enabled=false
						vl_html = null
						return
					}
					else
					{		
						GeneraNuevoBcoSantaFeHTML()
						//ProcesarNuevoBcoSantaFe()
					}
						
				break;
				case 2:
					if(utils.stringLeft(vl_archivo.getName(),4) != "0116") //RED LINK
					{
						scopes.globals.ventanaAceptar("Este archivo no corresponde a ese medio de cobro.",controller.getName())
						elements.btn_grabar.enabled=false
						return
					}
					else
					{
						ProcesarRedLink()
					}
				break;
				case 3:
					if(utils.stringLeft(vl_archivo.getName(),2) != "RP") //RapiPago
					{
						scopes.globals.ventanaAceptar("Este archivo no corresponde a ese medio de cobro.",controller.getName())
						elements.btn_grabar.enabled=false
						vl_html = null
						return
					}
					else
					{
						GeneraRapiPagoHTML()
						//ProcesarRapiPago()
					}
				break;
				
				default:
					scopes.globals.ventanaAceptar("Este archivo no corresponde con ningun medio de cobro existente.",controller.getName())
					return
				break;
			}
		}
	}	
	else
	{
		
	}
}

/**
 * @properties={typeid:24,uuid:"83F150BC-7870-4AB8-A17E-1CA5993641F3"}
 * @AllowToRunInFind
 */
function ProcesarNuevoBcoSantaFe()
{
	/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
	var fs_movimientos = databaseManager.getFoundSet('sistemas','mat_movimientos')
		fs_movimientos.loadAllRecords()
	/** @type {JSFoundset<db:/sistemas/mat_rendiciones_errores>}*/
	var fs_rendiciones_errores = databaseManager.getFoundSet('sistemas','mat_rendiciones_errores')
	/** @type {JSFoundset<db:/sistemas/mat_matriculados>}*/
	var fs_matriculados = databaseManager.getFoundSet('sistemas','mat_matriculados')
	
	elements.btn_grabar.enabled=true
	
	//
    // Use BufferedReader so we don't have to read the whole file into memory
    //
    var _oFR = new Packages.java.io.FileInputStream(vl_archivo),
        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
        _oBR = new Packages.java.io.BufferedReader(_oIR),
        _sLine = "dummy",
        _nReadLine = 0;
    
    // using a database transaction (might/will) speed things up
    //databaseManager.startTransaction();
    
   // try {
        while (_sLine) 
        {
            _sLine = _oBR.readLine();
            _nReadLine++;
    
            if(_nReadLine==1)
            {
            	if (utils.stringMiddle(_sLine,1,6)=="HEADER") 
	            {
	                // Put your processing code here
	            	var captura_anio = utils.stringToNumber(utils.stringMiddle(_sLine,10,4))
					var captura_mes  = utils.stringToNumber(utils.stringMiddle(_sLine,14,2))-1
					var captura_dia  = utils.stringToNumber(utils.stringMiddle(_sLine,16,2))
					
					var proceso_anio = utils.stringToNumber(utils.stringMiddle(_sLine,18,4))
					var proceso_mes  = utils.stringToNumber(utils.stringMiddle(_sLine,22,2))-1
					var proceso_dia  = utils.stringToNumber(utils.stringMiddle(_sLine,24,2))
					
					ren_fecha_captura= new Date(captura_anio,captura_mes,captura_dia)
					ren_fecha_proceso= new Date(proceso_anio,proceso_mes,proceso_dia)
					ren_nro_lote = utils.stringMiddle(_sLine,26,5)
					
					/** @type {JSFoundset<db:/sistemas/mat_rendiciones>}*/
					var fs_rendiciones = databaseManager.getFoundSet('sistemas','mat_rendiciones')
					fs_rendiciones.find()
					fs_rendiciones.ren_nro_lote = ren_nro_lote
					var cant = fs_rendiciones.search()
					if(cant>0)
					{
						scopes.globals.ventanaAceptar("Este Lote ya fue Procesado el día: "+ utils.dateFormat(fs_rendiciones.ren_fec_crea,"dd/MM/yyyy"),controller.getName())
						return
					}
					else
					{
						ren_estado = 1
						databaseManager.saveData(foundset)
					}
	            }
	            else
	            {
	            	scopes.globals.ventanaAceptar("Error en el archivo. La primera linea no comienza correctamente.\nPor favor corrobore que el archivo sea el correcto.",controller.getName())
					elements.btn_grabar.enabled = false
					return
	            }
            }
            else
            {
            	if (utils.stringMiddle(_sLine,1,7)=="TRAILER") 
	            {
	            	ren_cant_registros=utils.stringToNumber(utils.stringMiddle(_sLine,8,8))
					ren_importe_total =utils.stringToNumber(utils.stringMiddle(_sLine,16,11))+(utils.stringToNumber(utils.stringMiddle(_sLine,27,2))/100)
	            }
	            else
	            {
	            	if (utils.stringMiddle(_sLine,1,5)=="DATOS") 
		            {
		            	/**@type {Number}*/
		            	var boleta_id = utils.stringToNumber(utils.stringMiddle(_sLine,178,15))
						/**@type {Number}*/
						var cod_mat = utils.stringToNumber(utils.stringMiddle(_sLine,173,5))
						/**@type {String}*/
						var nombre_mat = 'Matriculado inexistente en el sistema.'
						
		            	fs_movimientos.find()
						fs_movimientos.mov_id = boleta_id
						fs_movimientos.search()
						
						var cant_mov = fs_movimientos.getSize()
						
						if(cant_mov==1)
						{
							/**@type {JSRecord}*/
							var record_mov = fs_movimientos.getRecord(1)
//							/**@type {Number}*/
//							var cod_mat = utils.stringToNumber(utils.stringMiddle(_sLine,173,5))
							
							if(record_mov.ren_id !=null && record_mov.ren_id !=0)
							{
								fs_rendiciones_errores.newRecord()
								fs_rendiciones_errores.emp_id = scopes.globals.mx_empresa_id
								fs_rendiciones_errores.ren_id = ren_id
								fs_rendiciones_errores.ren_error_codigo = 1
								fs_rendiciones_errores.ren_error_observacion = "Rendición Nº: "+record_mov.ren_id+"\nFecha de Pago: "+utils.dateFormat(record_mov.mov_fecha_cobro,"dd/MM/yyyy")
							}
							else
							{
								if(record_mov.mat_id != cod_mat)
								{
									fs_matriculados.find()
									fs_matriculados.mat_id = cod_mat
									fs_matriculados.search()
									
									//var nombre_mat = 'Matriculado inexistente en el sistema.'
									if(fs_matriculados.getSize()>0)
									{
										nombre_mat=fs_matriculados.mat_nombre
									}
									
									fs_rendiciones_errores.newRecord()
									fs_rendiciones_errores.emp_id = scopes.globals.mx_empresa_id
									fs_rendiciones_errores.ren_id = ren_id
									fs_rendiciones_errores.ren_error_codigo = 3
									fs_rendiciones_errores.ren_error_observacion = "La boleta pagada no corresponde al matriculado en el sistema:\nBoleta en el sistema: "+fs_movimientos.mat_movimientos_to_mat_matriculados.mat_nombre+"\nBoleta pagada: "+nombre_mat 
								}
								else
								{
									var mov_cobro_anio = utils.stringToNumber('20'+utils.stringMiddle(_sLine,225,2))
									var mov_cobro_mes  = utils.stringToNumber(utils.stringMiddle(_sLine,227,2))-1
									var mov_cobro_dia  = utils.stringToNumber(utils.stringMiddle(_sLine,229,2))
									
									record_mov.mov_fecha_cobro = new Date(mov_cobro_anio,mov_cobro_mes,mov_cobro_dia)
									record_mov.mov_importe_cobrado = utils.stringToNumber(utils.stringMiddle(_sLine,78,9))+(utils.stringToNumber(utils.stringMiddle(_sLine,87,2))/100)
									record_mov.mov_estado = 1
									record_mov.ren_id = ren_id
									databaseManager.saveData(record_mov)
									
									for (var i = 1; i <= record_mov.mat_movimientos_to_mat_movimientos_det.getSize(); i++) 
									{
										var rec_detalle = record_mov.mat_movimientos_to_mat_movimientos_det.getRecord(i)
											
										if(record_mov.mov_importe_cobrado!=record_mov.mov_importe)
										{	
											rec_detalle.det_importe_cobrado=rec_detalle.det_importe_2vto
										}
										else
										{
											rec_detalle.det_importe_cobrado=rec_detalle.det_importe
										}
										databaseManager.saveData(rec_detalle)
									}
								}
							}	
						}
						else
						{
							fs_matriculados.find()
							fs_matriculados.mat_id = cod_mat
							fs_matriculados.search()

							if(fs_matriculados.getSize()>0)
							{
								nombre_mat=fs_matriculados.mat_nombre
							}
							
							fs_rendiciones_errores.newRecord()
							fs_rendiciones_errores.emp_id = scopes.globals.mx_empresa_id
							fs_rendiciones_errores.ren_id = ren_id
							fs_rendiciones_errores.ren_error_codigo = 3
							fs_rendiciones_errores.ren_error_observacion = "No existe ese número de boleta de pago en el sistema: "+utils.stringToNumber(utils.stringMiddle(_sLine,178,15)) + " para el Matriculado "+nombre_mat
						}
		            }
	            }	
	        }
        }
        // Save any unsaved data
       databaseManager.saveData();
    
        //
        //do NOT forget this close! to prevent memory leaks
        //
        _oBR.close();
        
        // Close the database transaction
        //databaseManager.commitTransaction();
    
//    } catch (_oErr) {
//        _oBR.close();
//        application.output("ERROR: " + vl_archivo.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
//        application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
//        databaseManager.rollbackTransaction();
//        return; // stop process
//    }
    
    //
    // garbage collection
    //
    _oFR = null;
    _oIR = null;
    _oBR = null;
}

/**
 * @properties={typeid:24,uuid:"CA484315-B894-42AE-84C4-AB9A81C83C45"}
 */
function ProcesarRedLink()
{
	
}

/**
 * @properties={typeid:24,uuid:"CA46E715-C27D-4A77-9461-EDD8531E3F52"}
 * @AllowToRunInFind
 */
function ProcesarRapiPago()
{
	/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
	var fs_movimientos = databaseManager.getFoundSet('sistemas','mat_movimientos')
		fs_movimientos.loadAllRecords()
	/** @type {JSFoundset<db:/sistemas/mat_rendiciones_errores>}*/
	var fs_rendiciones_errores = databaseManager.getFoundSet('sistemas','mat_rendiciones_errores')
	/** @type {JSFoundset<db:/sistemas/mat_matriculados>}*/
	var fs_matriculados = databaseManager.getFoundSet('sistemas','mat_matriculados')
	
	//
    // Use BufferedReader so we don't have to read the whole file into memory
    //
    var _oFR = new Packages.java.io.FileInputStream(vl_archivo),
        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
        _oBR = new Packages.java.io.BufferedReader(_oIR),
        _sLine = "dummy",
        _nReadLine = 0;
    
        while (_sLine) 
        {
            _sLine = _oBR.readLine();
            _nReadLine++;
    
            if(_nReadLine==1)
            {
            	if (utils.stringLeft(_sLine,26)=="00000000COLEG DE DIETISTAS") //Primer registro - HEADER 
	            {
	            	var captura_anio = utils.stringToNumber(utils.stringMiddle(_sLine,29,4))
					var captura_mes  = utils.stringToNumber(utils.stringMiddle(_sLine,33,2))-1
					var captura_dia  = utils.stringToNumber(utils.stringMiddle(_sLine,35,2))
					
					ren_fecha_captura= new Date(captura_anio,captura_mes,captura_dia)
					ren_nro_lote = utils.stringMiddle(vl_archivo.getName(),3,6)
					
					/** @type {JSFoundset<db:/sistemas/mat_rendiciones>}*/
					var fs_rendiciones = databaseManager.getFoundSet('sistemas','mat_rendiciones')
					fs_rendiciones.find()
					fs_rendiciones.ren_nro_lote = ren_nro_lote
					var cant = fs_rendiciones.search()
					if(cant>0)
					{
						scopes.globals.ventanaAceptar("Este Lote ya fue Procesado el día: "+ utils.dateFormat(fs_rendiciones.ren_fec_crea,"dd/MM/yyyy"),controller.getName())
						return
					}
					else
					{
						ren_estado = 1
						databaseManager.saveData(foundset)
					}
	            }
	            else
	            {
	            	scopes.globals.ventanaAceptar("Error en el archivo. La primera linea no comienza correctamente.\nPor favor corrobore que el archivo sea el correcto.",controller.getName())
					elements.btn_grabar.enabled = false
					return
	            }
            }
            else
            {
            	if (utils.stringLeft(_sLine,8)=="99999999") //Ultimo registro - TRAILER
	            {
	            	ren_cant_registros=utils.stringToNumber(utils.stringMiddle(_sLine,9,8))
					ren_importe_total =utils.stringToNumber(utils.stringMiddle(_sLine,17,16))+(utils.stringToNumber(utils.stringMiddle(_sLine,33,2))/100)
	            }
	            else
	            {
	            	//Resgitros detalle de cobro
	            	var vl_mat_id 		  = utils.stringToNumber(utils.stringMiddle(_sLine,32,5))
					var vl_mov_id 		  = utils.stringToNumber(utils.stringMiddle(_sLine,37,15))
					var vl_fec_cobro_anio = utils.stringToNumber(utils.stringLeft(_sLine,4))
					var vl_fec_cobro_mes  = utils.stringToNumber(utils.stringMiddle(_sLine,5,2))-1
					var vl_fec_cobro_dia  = utils.stringToNumber(utils.stringMiddle(_sLine,7,2))
					var vl_fec_cobro 	  = new Date(vl_fec_cobro_anio,vl_fec_cobro_mes,vl_fec_cobro_dia)
					var vl_importe_cobro  = utils.stringToNumber(utils.stringMiddle(_sLine,9,13))+(utils.stringToNumber(utils.stringMiddle(_sLine,22,2))/100)
	            	var nombre_mat 		  = 'Matriculado inexistente en el sistema.'
					
					fs_movimientos.find()
					fs_movimientos.mov_id = vl_mov_id
					fs_movimientos.search()
					
					var cant_mov = fs_movimientos.getSize()
					
					if(cant_mov==1)
					{
						/**@type {JSRecord}*/
						var record_mov = fs_movimientos.getRecord(1)
						/**@type {Number}*/
						var cod_mat = vl_mat_id
						
						if(record_mov.ren_id !=null && record_mov.ren_id !=0)
						{
							fs_rendiciones_errores.newRecord()
							fs_rendiciones_errores.emp_id = scopes.globals.mx_empresa_id
							fs_rendiciones_errores.ren_id = ren_id
							fs_rendiciones_errores.ren_error_codigo = 1
							fs_rendiciones_errores.ren_error_observacion = "Rendición Nº: "+record_mov.ren_id+"\nFecha de Pago: "+utils.dateFormat(record_mov.mov_fecha_cobro,"dd/MM/yyyy")
						}
						else
						{
							if(record_mov.mat_id != cod_mat)
							{
								fs_matriculados.find()
								fs_matriculados.mat_id = cod_mat
								fs_matriculados.search()
								
								//var nombre_mat = 'Matriculado inexistente en el sistema.'
								if(fs_matriculados.getSize()>0)
								{
									nombre_mat=fs_matriculados.mat_nombre
								}
								
								fs_rendiciones_errores.newRecord()
								fs_rendiciones_errores.emp_id = scopes.globals.mx_empresa_id
								fs_rendiciones_errores.ren_id = ren_id
								fs_rendiciones_errores.ren_error_codigo = 3
								fs_rendiciones_errores.ren_error_observacion = "La boleta pagada no corresponde al matriculado en el sistema:\nBoleta en el sistema: "+fs_movimientos.mat_movimientos_to_mat_matriculados.mat_nombre+"\nBoleta pagada: "+nombre_mat 
							}
							else
							{
								record_mov.mov_fecha_cobro = vl_fec_cobro
								record_mov.mov_importe_cobrado = vl_importe_cobro
								record_mov.mov_estado = 1
								record_mov.ren_id = ren_id
								databaseManager.saveData(record_mov)
								
								for (var i = 1; i <= record_mov.mat_movimientos_to_mat_movimientos_det.getSize(); i++) 
								{
									var rec_detalle = record_mov.mat_movimientos_to_mat_movimientos_det.getRecord(i)
										
									if(record_mov.mov_importe_cobrado!=record_mov.mov_importe)
									{	
										rec_detalle.det_importe_cobrado=rec_detalle.det_importe_2vto
									}
									else
									{
										rec_detalle.det_importe_cobrado=rec_detalle.det_importe
									}
									databaseManager.saveData(rec_detalle)
								}
							}
						}	
					}
					else
					{
						fs_matriculados.find()
						fs_matriculados.mat_id = vl_mat_id
						fs_matriculados.search()

						if(fs_matriculados.getSize()>0)
						{
							nombre_mat=fs_matriculados.mat_nombre
						}
						
						fs_rendiciones_errores.newRecord()
						fs_rendiciones_errores.emp_id = scopes.globals.mx_empresa_id
						fs_rendiciones_errores.ren_id = ren_id
						fs_rendiciones_errores.ren_error_codigo = 3
						fs_rendiciones_errores.ren_error_observacion = "No existe ese número de boleta de pago en el sistema: "+utils.stringToNumber(utils.stringMiddle(_sLine,178,15)) + " para el Matriculado "+nombre_mat
					}
	            }
            }	
       }     
					
       // Save any unsaved data
       databaseManager.saveData();
    
       //
       //do NOT forget this close! to prevent memory leaks
       //
        _oBR.close();
        
    //
    // garbage collection
    //
    _oFR = null;
    _oIR = null;
    _oBR = null;

}

/**
 * @properties={typeid:24,uuid:"CAF8D2FC-4530-41E9-84A9-856909250D0A"}
 * @AllowToRunInFind
 */
function GeneraRapiPagoHTML()
{
	/** @type {JSFoundset<db:/sistemas/mat_matriculados>}*/
	var fs_matriculados = databaseManager.getFoundSet('sistemas','mat_matriculados')
	/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
	var fs_movimientos = databaseManager.getFoundSet('sistemas','mat_movimientos')
	
	 // Use BufferedReader so we don't have to read the whole file into memory
    //
    var _oFR = new Packages.java.io.FileInputStream(vl_archivo),
        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
        _oBR = new Packages.java.io.BufferedReader(_oIR),
        _sLine = "dummy";
        //_nReadLine = 0;
    
	var cuerpo = '<table border="1" cellspacing="0">' +
			 	'<thead style="background-color: #FFDEAD;">' +
				'    <tr><td align="center" width="100"><B>Fec.Cobro</b></td>'+
				'    	 <td align="center" width="160"><B>Boleta de Pago</b></td>'+
				'    	 <td align="center" width="300"><B>Matriculado</b></td>'+
				'    	 <td align="center" width="120"><B>Importe Cobrado</b></td>'+
				'    	 <td align="center" width="120"><B>Importe Original</b></td>'+
				'	    </tr>' +
				'</thead>' +
				'<tbody>'
				
	while (_sLine) 
	{
		_sLine = _oBR.readLine();
		//_nReadLine++;
		   
		if(_sLine!=null)
		{
			if (utils.stringLeft(_sLine,26)=="00000000COLEG DE DIETISTAS") //Primer registro - HEADER 
            {
            	var captura_anio = utils.stringToNumber(utils.stringMiddle(_sLine,29,4))
				var captura_mes  = utils.stringToNumber(utils.stringMiddle(_sLine,33,2))-1
				var captura_dia  = utils.stringToNumber(utils.stringMiddle(_sLine,35,2))
				
				ren_fecha_captura= new Date(captura_anio,captura_mes,captura_dia)
            	ren_fecha_proceso= new Date(captura_anio,captura_mes,captura_dia)
				ren_nro_lote = utils.stringMiddle(vl_archivo.getName(),3,6)
            }
            
            if (utils.stringLeft(_sLine,8)=="99999999") //Ultimo registro - TRAILER
            {
            	ren_cant_registros=utils.stringToNumber(utils.stringMiddle(_sLine,9,8))
				ren_importe_total =utils.stringToNumber(utils.stringMiddle(_sLine,17,16))+(utils.stringToNumber(utils.stringMiddle(_sLine,33,2))/100)
            }
        
            if (utils.stringLeft(_sLine,26)!="00000000COLEG DE DIETISTAS" && utils.stringLeft(_sLine,8)!="99999999") //Solo registros DETALLE 
	       	{
				var color 				= '#ffffbf'
				var vl_mat_id 		    = utils.stringToNumber(utils.stringMiddle(_sLine,32,5))
				var vl_mov_id 		    = utils.stringToNumber(utils.stringMiddle(_sLine,37,15))
				var vl_fec_cobro_anio   = utils.stringToNumber(utils.stringLeft(_sLine,4))
				var vl_fec_cobro_mes    = utils.stringToNumber(utils.stringMiddle(_sLine,5,2))-1
				var vl_fec_cobro_dia    = utils.stringToNumber(utils.stringMiddle(_sLine,7,2))
				var vl_fec_cobro 	    = utils.dateFormat(new Date(vl_fec_cobro_anio,vl_fec_cobro_mes,vl_fec_cobro_dia),'dd/MM/yyyy')
				var vl_importe_original = utils.numberFormat(utils.stringToNumber(utils.stringMiddle(_sLine,57,4))+(utils.stringToNumber(utils.stringMiddle(_sLine,61,2))/100),'#,##0.00')
				var vl_importe_cobro    = utils.numberFormat(utils.stringToNumber(utils.stringMiddle(_sLine,9,13))+(utils.stringToNumber(utils.stringMiddle(_sLine,22,2))/100),'#,##0.00')
	
				fs_matriculados.find()
				fs_matriculados.mat_id = vl_mat_id
				fs_matriculados.search()
				
				fs_movimientos.find()
				fs_movimientos.mov_id = vl_mov_id
				fs_movimientos.search()
						
				if(fs_movimientos.getSize()==0)
				{
					elements.btn_grabar.enabled = false
					color = '#ff0000'
					vl_boletas_inexistentes++
				}
				
				/**@type {String}*/
				var nombre_mat = 'Matriculado inexistente en el sistema.'
				if(fs_matriculados.getSize()>0)
				{
					nombre_mat=fs_matriculados.mat_nombre
				}
				else
				{
					elements.btn_grabar.enabled = false
					color = '#ff0000'
					vl_matriculados_inexistentes++ 	
				}
				
				
				cuerpo = cuerpo + '<tr style="background-color:' + color + ';">' +
									 '<td align="center">' + vl_fec_cobro + '</td>' +
									 '<td align="center">' + vl_mov_id+ '</td>' +
									 '<td align="left">'   + nombre_mat +'</td>' +
									 '<td align="right">'   + vl_importe_cobro +'</td>' +
									 '<td align="right">'   + vl_importe_original +'</td>' +
								  '</tr>'
	       	}
		}
	}

	vl_html = '<html>'+cuerpo+'</html>'
	
	_oBR.close();
	_oFR = null;
	_oIR = null;
	_oBR = null;
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"A987DB0E-A0A0-438A-944B-6F9972738A97"}
 */
function GeneraNuevoBcoSantaFeHTML()
{
	/** @type {JSFoundset<db:/sistemas/mat_matriculados>}*/
	var fs_matriculados = databaseManager.getFoundSet('sistemas','mat_matriculados')
	/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
	var fs_movimientos = databaseManager.getFoundSet('sistemas','mat_movimientos')
	
	 // Use BufferedReader so we don't have to read the whole file into memory
    //
    var _oFR = new Packages.java.io.FileInputStream(vl_archivo),
        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
        _oBR = new Packages.java.io.BufferedReader(_oIR),
        _sLine = "dummy";
    
	var cuerpo = '<table border="1" cellspacing="0">' +
			 	'<thead style="background-color: #FFDEAD;">' +
				'    <tr><td align="center" width="100"><B>Fec.Cobro</b></td>'+
				'    	 <td align="center" width="160"><B>Boleta de Pago</b></td>'+
				'    	 <td align="center" width="300"><B>Matriculado</b></td>'+
				'    	 <td align="center" width="120"><B>Importe Cobrado</b></td>'+
				'    	 <td align="center" width="120"><B>Importe Original</b></td>'+
				'	    </tr>' +
				'</thead>' +
				'<tbody>'
				
	while (_sLine) 
	{
		_sLine = _oBR.readLine();
		   
		if(_sLine!=null)
		{
			if (utils.stringMiddle(_sLine,1,6)=="HEADER") 
            {
                // Put your processing code here
            	var captura_anio = utils.stringToNumber(utils.stringMiddle(_sLine,10,4))
				var captura_mes  = utils.stringToNumber(utils.stringMiddle(_sLine,14,2))-1
				var captura_dia  = utils.stringToNumber(utils.stringMiddle(_sLine,16,2))
				
				var proceso_anio = utils.stringToNumber(utils.stringMiddle(_sLine,18,4))
				var proceso_mes  = utils.stringToNumber(utils.stringMiddle(_sLine,22,2))-1
				var proceso_dia  = utils.stringToNumber(utils.stringMiddle(_sLine,24,2))
				
				ren_fecha_captura= new Date(captura_anio,captura_mes,captura_dia)
				ren_fecha_proceso= new Date(proceso_anio,proceso_mes,proceso_dia)
				ren_nro_lote = utils.stringMiddle(_sLine,26,5)
            }
            
            if (utils.stringMiddle(_sLine,1,7)=="TRAILER") 
            {
            	ren_cant_registros=utils.stringToNumber(utils.stringMiddle(_sLine,8,8))
				ren_importe_total =utils.stringToNumber(utils.stringMiddle(_sLine,16,11))+(utils.stringToNumber(utils.stringMiddle(_sLine,27,2))/100)
            }
        
            if (utils.stringMiddle(_sLine,1,5)=="DATOS")  //Solo registros DETALLE 
	       	{
				var color				= '#ffffbf'
				var vl_mat_id 		    = utils.stringToNumber(utils.stringMiddle(_sLine,173,5))
				var vl_mov_id 		    = utils.stringToNumber(utils.stringMiddle(_sLine,178,15))
				var vl_fec_cobro_anio   = utils.stringToNumber('20'+utils.stringMiddle(_sLine,225,2))
				var vl_fec_cobro_mes    = utils.stringToNumber(utils.stringMiddle(_sLine,227,2))-1
				var vl_fec_cobro_dia    = utils.stringToNumber(utils.stringMiddle(_sLine,229,2))
				var vl_fec_cobro 	    = utils.dateFormat(new Date(vl_fec_cobro_anio,vl_fec_cobro_mes,vl_fec_cobro_dia),'dd/MM/yyyy')
				var vl_importe_original = utils.numberFormat(utils.stringToNumber(utils.stringMiddle(_sLine,198,4))+(utils.stringToNumber(utils.stringMiddle(_sLine,202,2))/100),'#,##0.00')
				var vl_importe_cobro    = utils.numberFormat(utils.stringToNumber(utils.stringMiddle(_sLine,78,9))+(utils.stringToNumber(utils.stringMiddle(_sLine,87,2))/100),'#,##0.00')
				
				fs_matriculados.find()
				fs_matriculados.mat_id = vl_mat_id
				fs_matriculados.search()
				
				fs_movimientos.find()
				fs_movimientos.mov_id = vl_mov_id
				fs_movimientos.search()
						
				if(fs_movimientos.getSize()==0)
				{		
					elements.btn_grabar.enabled = false
					color = '#ff0000'
					vl_boletas_inexistentes++ 	
				}
				
				/**@type {String}*/
				var nombre_mat = 'Matriculado inexistente en el sistema.'
					
				if(fs_matriculados.getSize()>0)
				{
					nombre_mat=fs_matriculados.mat_nombre
				}
				else
				{
					elements.btn_grabar.enabled = false
					color = '#ff0000'
					vl_matriculados_inexistentes++
				}
				
				cuerpo = cuerpo + '<tr style="background-color:' + color + ';">' +
									 '<td align="center">'  + vl_fec_cobro + '</td>' +
									 '<td align="center">'  + vl_mov_id+ '</td>' +
									 '<td align="left">'    + nombre_mat +'</td>' +
									 '<td align="right">'   + vl_importe_cobro +'</td>' +
									 '<td align="right">'   + vl_importe_original +'</td>' +
								  '</tr>'
	       	}
		}
	}
	
	//elements.btn_grabar.enabled=true
	vl_html = '<html>'+cuerpo+'</html>'
	
	_oBR.close();
	_oFR = null;
	_oIR = null;
	_oBR = null;
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"A753DEDE-431A-4A09-8C2B-7C9BB877B121"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	forms.mat_rendiciones.controller.show()
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
 * @properties={typeid:24,uuid:"EA61CAE4-12DF-4C5B-80FF-3800B7341FC9"}
 */
function onDataChange(oldValue, newValue, event) 
{
	if(mat_rendiciones_to_vc_medios_de_cobro.medios_cobro_debauto==0)
	{
		elements.tabs.visible 		   	   = false
		elements.vl_html.visible 	   	   = true
		elements.vl_html_label.visible 	   = true
		elements.vl_archivo.enabled	   	   = true
		elements.btn_busca_archivo.enabled = true
		elements.ren_fecha_captura.enabled = false
		elements.ren_fecha_proceso.enabled = false
		elements.ren_nro_lote.enabled 		= false
	}
	else
	{
		elements.tabs.visible 		   	   = true
		elements.vl_html.visible 	   	   = false
		elements.vl_html_label.visible 	   = false
		elements.vl_archivo.enabled	   	   = false
		elements.btn_busca_archivo.enabled = false
		elements.ren_fecha_captura.enabled = true
		elements.ren_fecha_proceso.enabled = true
		elements.ren_nro_lote.enabled 		= true
	}
	return true
}

/**
 * @properties={typeid:24,uuid:"D9F9B6D3-436B-4663-829D-4A7D5628BF2B"}
 */
function ProcesarDebitoAutomatico()
{
	if(ren_cant_registros > 0)
	{	
		ren_estado = 1
		databaseManager.saveData(foundset)
		
		for (var i = 1; i <= databaseManager.getFoundSetCount(forms.mat_rendiciones_nueva_detalle.foundset); i++) 
		{
			var record = forms.mat_rendiciones_nueva_detalle.foundset.getRecord(i);
			
			if (record.calc_selecciona==1)
			{
				record.ren_id = ren_id
				record.mov_estado = 1
				databaseManager.saveData(record)
			}
		}
		forms.mat_rendiciones.controller.show()
	}
	else
	{
		scopes.globals.ventanaAceptar("No seleccionó boletas para cancelar.",controller.getName())
		
	}
}

