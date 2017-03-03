/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EB81A94C-FF59-4BCA-B560-8F57630A73F3"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"15CF29C7-8966-47CB-B8A8-D8A7526245C4",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"45F009A2-F3C5-42C8-9C8E-7C2B17252EA1"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"690B1DFA-9AF6-43B2-B464-EB8A08E3D676"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("posgrados").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4772170B-A367-4944-9506-8FE1E0ABD219"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("posgrados").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61835D98-EC68-4D64-A1C9-EFD260C276AB"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id = scopes.globals.mx_empresa_id
	}
	
	if(vl_nuevo==2)
	{	
		controller.duplicateRecord(false)
		emp_id = scopes.globals.mx_empresa_id
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"0497A362-E815-4689-8A58-0EA07494AC7F"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"CADC8F86-B36C-4BD3-AE06-66016CA95B1F"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro.", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"8CA3387D-EA59-499E-9587-725864182CDE"}
 */
function borrarRegistro()
{
	controller.deleteRecord()
	application.getWindow("posgrados").hide()
}
