/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4ACC71B9-6643-4519-8EFB-AE974616C9E0",variableType:4}
 */
var vl_consultorio_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5F639724-842F-439A-A4C5-6BB408B9DC21",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"552AED30-3C07-4105-B7C0-F64F852F56A0"}
 */
var vl_titulo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"20860EBC-D768-4ED7-AAB4-DD21B196B2B1"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("mat_consultorios").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"118D3197-A203-4B2C-A53A-870466E5E9FD"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords(foundset)
	application.getWindow("mat_consultorios").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D947131F-6CB9-4F8A-B9FD-88E5D1B7230B"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		mat_id = forms.sm_frm_matriculados_tabpanel.mat_id
		emp_id = scopes.globals.mx_empresa_id
		elements.btn_borrar.visible = false
	}
	else
	{
		controller.find()
		consultorio_id=vl_consultorio_id
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
 * @properties={typeid:24,uuid:"7CFA3C02-9FA8-4C58-9EC1-60716D030667"}
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
 * @properties={typeid:24,uuid:"80A894ED-D14F-459A-B3BF-AE2D27958758"}
 */
function onActionBorrar(event) 
{
	globals.ventanaSiNo("Desea Borrar el Registro","borrarRegistro","",controller.getName())
}

/**
 * @properties={typeid:24,uuid:"0A268A0F-2480-437E-AA09-4153DA92718C"}
 */
function borrarRegistro()
{
	controller.deleteRecord()
	application.getWindow("mat_consultorios").hide()
}
