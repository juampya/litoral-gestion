/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"35310206-DB14-4804-BB34-6696076CE2FA",variableType:4}
 */
var vl_rel_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"158D0EAC-C7A1-44A8-A0E2-97538D3786AE",variableType:4}
 */
var vl_consultorio_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"970AC132-B36F-4377-BE79-6B6EDBA90C54",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0F2596A6-2DF1-4AC5-BDA6-94ADBAE2DF7E"}
 */
var vl_titulo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0010A331-FC7D-4C10-8E8A-0EAA94EAA478"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("mat_habilitaciones").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2CCB3EB-CA93-46AE-9BB7-E77B25CDE750"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords(foundset)
	application.getWindow("mat_habilitaciones").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FCE8AB49-1E53-4BC6-A442-7D25E0E9FD28"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		mat_id = forms.sm_frm_matriculados_tabpanel.mat_id
		emp_id = scopes.globals.mx_empresa_id
		consultorio_id = vl_consultorio_id
		rel_estado = 1
		elements.btn_borrar.visible = false
	}
	else
	{
		controller.find()
		rel_id=vl_rel_id
		controller.search()
		elements.btn_borrar.visible = true		
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C650BDE4-861F-4763-9855-AF90DA3BB4E9"}
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
 * @properties={typeid:24,uuid:"5EA86686-6DDA-4C23-9B6D-3365F92D664B"}
 */
function onActionBorrar(event) 
{
	globals.ventanaSiNo("Desea Borrar el Registro","borrarRegistro","",controller.getName())
}

/**
 * @properties={typeid:24,uuid:"2128916F-F216-4BFB-A0AA-2003D15B0A76"}
 */
function borrarRegistro()
{
	controller.deleteRecord()
	application.getWindow("mat_habilitaciones").hide()
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"DA32068F-1B45-4269-AD91-5C10A60E1EFD"}
 */
function onDataChange(oldValue, newValue, event) 
{
	rel_fec_vencimiento = plugins.DateUtils.addYears(rel_fec_habilitacion,scopes.globals.mat_configuraciones_to_mat_configuraciones.conf_dura_habi_consultorio)
	return true
}
