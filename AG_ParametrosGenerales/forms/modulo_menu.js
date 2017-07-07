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
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
	{
		elements.btn_menu1.visible  = true
		elements.btn_menu2.visible  = true
		elements.btn_menu3.visible  = true
		elements.btn_menu4.visible  = true
		elements.btn_menu5.visible  = true
		elements.btn_menu6.visible  = true
		elements.btn_menu7.visible  = true
		scopes.globals.vg_fs_menu=scopes.globals.CargarMenuWeb()
	}
	else
	{
		elements.btn_menu1.visible  = false
		elements.btn_menu2.visible  = false
		elements.btn_menu3.visible  = false
		elements.btn_menu4.visible  = false
		elements.btn_menu5.visible  = false
		elements.btn_menu6.visible  = false
		elements.btn_menu7.visible  = false
		scopes.globals.CargarMenu()
	}
}
