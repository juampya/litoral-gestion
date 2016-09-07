/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"45F298DA-78F6-41F7-B506-60568F517BF5"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"773FD0B0-0343-4FB4-BBA6-F16FF992A1FB",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CF4DD016-DE96-45AA-B4E5-59DD66B2D3D8"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"328D8B60-B780-4F29-A7D5-0AF97CAE98FD"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5F0DE123-1647-40E7-8027-A25CE6F5D403"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id= scopes.globals.mx_empresa_id
		provee_estado = 1
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E86C593F-6CD5-44E5-B672-56D691F8E8D8"}
 */
function onActionBorrar(event)
{
	var nombre = provee_nombre
	
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el cliente: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"6046DCB9-DBB6-472E-9DED-A93F066DCFA6"}
 */
function Borrar()
{
	controller.deleteRecord()
	forms.pp_frm_prov_abm.controller.show()
}
