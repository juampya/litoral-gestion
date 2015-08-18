/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3C593D53-2CF7-4206-BFD2-BBA19293EECB",variableType:4}
 */
var vl_reliquidacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"972E24F2-8EB9-4FCF-8206-34E1D3E2B999",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"01C3846C-C2C8-4071-9BB8-594B3937A13C",variableType:4}
 */
var vl_anio = null;

/**
 * @properties={typeid:24,uuid:"F86A4CD7-D94A-439C-A74F-D9400EAA9F3F"}
 */
function procesar(max, min,val)
{
    elements.progress.minimum = min // min value allowed
    elements.progress.maximum = max //max value allowed	
    var percentage =0
    elements.progress.value = val
    //application.sleep(10)//simulates time needed to perform a loop
    percentage = elements.progress.getPercentComplete()
    elements.progress.string = "Procesando "+val+" Registros. Completado "+parseInt((percentage*100).toString())+"%. "
    application.updateUI() //refresh user interface

	if(val == elements.progress.maximum)
	{
	  elements.progress.string = "Proceso Completado"
	  application.beep()//signal when ended
	  application.sleep(1000) // bar remains visible 1 more second before disappearing
	  elements.progress.visible= false
	  plugins.dialogs.showInfoDialog( '',  'Proceso Completado',  'OK')
	  application.getWindow("cancelarSaldo").hide()
	}
}

/**
 * TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"7F99F87B-1F29-48B3-8C6D-CFA793B263D5"}
 */
function inicializar()
{
	elements.progress.visible = true // show  progress bar
    elements.progress.orientation = 0 //(0=hor(default) 1=vertical)
    elements.progress.stringPainted = true // enables showing strings inside the progres bar
    elements.progress.string = "Comenzando Proceso..."
    elements.progress.value =0 // initialise value of the progres bar

}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @properties={typeid:24,uuid:"D58891B7-4453-4A2D-9978-4DE10CCB4EA1"}
 */
function cancelar_saldo() 
{
	var cantidad = databaseManager.getFoundSetCount(forms['saldosGlobales'].foundset)
	for(var i = 1;i<=forms['saldosGlobales'].foundset.getSize();i++)
	{
	
		var rec = forms['saldosGlobales'].foundset.getRecord(i)
		if(rec['chk'] == 1)
		{
			/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
			var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
			fs_mov.find()
			fs_mov.mat_id = rec['id']
			fs_mov.search()
			for(var j = 1;j<=fs_mov.getSize();j++)
			{
				var rec1 = fs_mov.getRecord(j)
				rec1.mov_estado = 1
				rec1.mov_fecha_cobro = application.getServerTimeStamp()
				databaseManager.saveData(rec1)
			}
		}
		
		procesar(cantidad, 0,i)
		
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D9F5E330-94D9-4959-BF73-C13BA79EE9C3"}
 */
function onShow(firstShow, event) 
{
	inicializar()
	cancelar_saldo() 
}
