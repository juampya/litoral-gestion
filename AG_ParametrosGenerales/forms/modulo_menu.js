/**
 * @properties={typeid:35,uuid:"8C556D12-A5CB-4F1C-82F3-9F0E754E9B7D",variableType:-4}
 */
var fs_submenu = null;

/**
 * @properties={typeid:24,uuid:"B5557953-40A3-46D3-8BE2-FCCDCC92C006"}
 */
function Salir()
{
	if(application.isInDeveloper())
	{
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
		{
			databaseManager.revertEditedRecords()
			var solucion = application.getSolutionName()
			security.logout(solucion)
		}
		else
		{
			application.exit()
		}
		
	}
	else
	{
		application.exit()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C495184B-4613-424A-8D4E-27F6678F6E4C"}
 * @AllowToRunInFind
 */
function onActionMenu(event) 
{	
//	if (vl_btn_n1_anterior != null) {
//		elements[vl_btn_n1_anterior].bgcolor = '#0080ff'
//	}
//	elements[event.getElementName()].bgcolor = '#ff8000'
//	vl_btn_n1_anterior = event.getElementName()
//	
//	elements[event.getElementName()].bgcolor = '#80ff80'
		
	elements.btn_menu1.getLocationX()
	/**@type {Number} */
	var vl_btn = event.getElementName().substr(8,1)
	scopes.globals.CargarSubMenuWeb(vl_btn,elements[event.getElementName()].getLocationX(),elements[event.getElementName()].getLocationY()+20) 
	
	///**@type {JSFoundSet<db:/Sistemas/menus>} */ 
	//scopes.globals.vg_fs_submenu = scopes.globals.CargarSubMenuWeb(vl_btn) 
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7644CCDB-A984-4001-A35D-19E0DC74F86A"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	/** @type {JSFoundSet<db:/sistemas/mat_matriculados>} */
	var fs_matriculados = databaseManager.getFoundSet('sistemas','mat_matriculados')	
	
	/** @type {JSFoundSet<db:/sistemas/mat_matriculado_rel_ingresos>} */
	var fs_smp = databaseManager.getFoundSet('sistemas','mat_matriculado_rel_ingresos')	
			
	for (var i = 1; i <= databaseManager.getFoundSetCount(fs_matriculados); i++) 
	{
		/**@type {JSRecord}*/
		var record = fs_matriculados.getRecord(i)
		
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
