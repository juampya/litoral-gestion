/**
/* @type {JSFile} 
 *
 * @properties={typeid:35,uuid:"D078E37C-0A98-4A97-80CB-C6FC0653DE88",variableType:-4}
 */
var vl_archivo = null;

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
	application.getWindow("nuevarendicion").hide()
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
	vl_archivo = null
	controller.newRecord(false)
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
	databaseManager.saveData()
	application.getWindow("nuevarendicion").hide()
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
	vl_archivo = plugins.file.showFileOpenDialog()
	if(vl_archivo!=null)
	{
		//
	    // Use BufferedReader so we don't have to read the whole file into memory
	    //
	    var _oFR = new Packages.java.io.FileInputStream(vl_archivo),
	        _oIR = new Packages.java.io.InputStreamReader(_oFR, "UTF8"),
	        _oBR = new Packages.java.io.BufferedReader(_oIR),
	        _sLine = "dummy",
	        _nReadLine = 0;
	    
	    // using a database transaction (might/will) speed things up
	    databaseManager.startTransaction();
	    
	    try {
	        while (_sLine) {
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
							
						}
						
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
		            	if (utils.stringMiddle(_sLine,1,7)=="TRAILER") 
			            {
			            	
			            }
		            }	
		        }
	        }
	        // Save any unsaved data
	       // databaseManager.saveData();
	    
	        //
	        //do NOT forget this close! to prevent memory leaks
	        //
	        _oBR.close();
	        
	        // Close the database transaction
	        databaseManager.commitTransaction();
	    
	    } catch (_oErr) {
	        _oBR.close();
	        application.output("ERROR: " + vl_archivo.getName() + " at row " + _nReadLine, LOGGINGLEVEL.ERROR);
	        application.output("ERROR: " + _oErr, LOGGINGLEVEL.ERROR);
	        databaseManager.rollbackTransaction();
	        return; // stop process
	    }
	    
	    //
	    // garbage collection
	    //
	    _oFR = null;
	    _oIR = null;
	    _oBR = null;
	}
}


