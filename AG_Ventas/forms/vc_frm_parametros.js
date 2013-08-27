/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8090DFB1-0F3E-4057-8E8E-5D1EFEAD9083"}
 */
var vl_frm_anterior = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"AE1ECCF9-861D-4ADF-B84C-38CD213CAB98"}
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
 * @properties={typeid:24,uuid:"A1B820FF-62B0-4BF8-830C-63809186A506"}
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
 * @properties={typeid:24,uuid:"5E6B7BE2-EDB5-41DD-B563-92E62C2AD75C"}
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
 * @properties={typeid:24,uuid:"1D7401FC-AE66-42E0-B174-99D3D4EAD8A4"}
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
 * @properties={typeid:24,uuid:"C7D67ABF-6174-404C-96DB-DEF551018049"}
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
