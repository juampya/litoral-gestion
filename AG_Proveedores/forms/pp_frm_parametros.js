/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"19358D42-A851-4687-AAD3-50D1672022C2"}
 */
var vl_frm_anterior = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"21A51673-293A-4DB1-B148-1934609DDC76"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"CFB3D064-23B6-49E0-9F87-7111A77FD934"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"6D7CCF84-78B1-4257-9BF9-2AF16F9512C7"}
 */
function onShow(firstShow, event) 
{
	plugins.window.getMenuBar().removeAllMenus()
	plugins.window.setToolBarAreaVisible(false)
	if(controller.getMaxRecordIndex()==0)
	{
		controller.newRecord(false)
		databaseManager.saveData(foundset)
	}
	onDataChangeDescargaStock(null,null,null)
	onDataChangeMetodoCobra(null,null,null)
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A2893AE3-C5A8-4C4B-964C-F73BBA88C03C"}
 */
function onDataChangeDescargaStock(oldValue, newValue, event) 
{
	if(vc_mx_pv_rstk==1)
	{
		elements.vc_mx_pv_fstk.enabled = false
	}
	else
	{
		elements.vc_mx_pv_fstk.enabled = true
	}
	
	if(vc_mx_pv_fstk==1)
	{
		elements.vc_mx_pv_rstk.enabled = false
	}
	else
	{
		elements.vc_mx_pv_rstk.enabled = true
	}
	
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"1C7FA6BC-0E2D-4DC8-9C58-C017599C89CA"}
 */
function onDataChangeMetodoCobra(oldValue, newValue, event) 
{
	if(vc_mx_pv_cn==1)
	{
		elements.vc_mx_pv_cp.enabled = false
	}
	else
	{
		elements.vc_mx_pv_cp.enabled = true
	}
	
	if(vc_mx_pv_cp==1)
	{
		elements.vc_mx_pv_cn.enabled = false
	}
	else
	{
		elements.vc_mx_pv_cn.enabled = true
	}
}
