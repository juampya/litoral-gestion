/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7C8664A2-E214-45D0-AFC0-0D150529A425"}
 */
var vl_tipo_comp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E768C996-3FCD-4839-9C61-45C801356B2C",variableType:4}
 */
var vl_suc_comp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D50D08FE-D716-462C-81B4-00CFEA7D420E",variableType:4}
 */
var vl_nro_comp = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EA4A747A-ADDC-4975-959F-E521F3D5E5D5"}
 */
var vl_cod_comp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3248F306-4849-4BBF-8233-8D16AD0EE461",variableType:4}
 */
var vl_deposito_id_destino = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3FAF3093-F1E2-4B08-AC95-651B02CC0EC2",variableType:4}
 */
var vl_deposito_id_origen = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"62CECB66-8A20-4E64-9079-26F0F8E9B3CE",variableType:4}
 */
var vl_talonario_id = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E8CEFDE6-8974-48AD-B05C-3E4C04D8B5BF",variableType:93}
 */
var vl_fecha_emision = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"56D42464-D0F4-4DA0-9502-2D4BB7EB9A09"}
 */
var vl_detalle = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4D6812AF-0B71-4CC9-A655-B3E97A4224A3"}
 */
var vl_frm_anterior = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B8CC7E7F-AABE-4D13-9309-75DFA40D9B68"}
 */
var vl_tipo_movimiento = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A1AA2437-5E1A-46BB-AC40-6CE0FEDBF775"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	scopes.globals.SacarMenu()
	/** @type {JSFoundset<db:/Sistemas/menus>}*/
	var fs_menus = databaseManager.getFoundSet('Sistemas','menus')	
		fs_menus.find()
		fs_menus.menu_id = scopes.globals.vg_sp_tipo_movimiento
		fs_menus.search()
		
	vl_tipo_movimiento = fs_menus.menu_titulo	
	
	elements.lbl_vl_deposito_id_destino.enabled = true
	elements.lbl_vl_deposito_id_destino.bgcolor = '#f0f0f0'
	elements.lbl_vl_deposito_id_origen.enabled = true
	elements.lbl_vl_deposito_id_origen.bgcolor = '#f0f0f0'
		
	switch (scopes.globals.vg_sp_tipo_movimiento) 
	{
		case 115:
			elements.lbl_vl_deposito_id_destino.enabled = false
			elements.lbl_vl_deposito_id_destino.bgcolor = '#c0c0c0'
			break;
		case 116:
			elements.lbl_vl_deposito_id_origen.enabled = false
			elements.lbl_vl_deposito_id_origen.bgcolor = '#c0c0c0'
		break;
	}
	
	vl_cod_comp = null
	vl_deposito_id_destino = null
	vl_deposito_id_origen = null
	vl_detalle = null
	vl_fecha_emision = new Date
	vl_nro_comp = null
	vl_suc_comp = null
	vl_talonario_id = null
	vl_tipo_comp = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"20828142-8740-4D16-9275-B7A28AB4F09C"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"029EDD4F-7B98-4F37-A6DA-A12A80F65179"}
 */
function onActionAceptar(event) {
	// TODO Auto-generated method stub
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
 * @properties={typeid:24,uuid:"627DE572-EA98-4E07-A98C-ABABF8227CA8"}
 * @AllowToRunInFind
 */
function onDataChange(oldValue, newValue, event) 
{
	/** @type {JSFoundset<db:/Sistemas/vc_talonarios>}*/
	var fs_talonarios = databaseManager.getFoundSet('Sistemas','vc_talonarios')	
		fs_talonarios.find()
		fs_talonarios.talonario_id = vl_talonario_id
		if(fs_talonarios.search()>0)
		{
			vl_cod_comp = fs_talonarios.talonario_cod_comp
			vl_suc_comp = fs_talonarios.talonario_suc_comp
			vl_tipo_comp= fs_talonarios.talonario_tipo_comp 
			vl_nro_comp = fs_talonarios.talonario_actual_nro
		}

	return true
}
