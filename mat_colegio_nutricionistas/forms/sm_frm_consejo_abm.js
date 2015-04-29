/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C997A0AA-D554-40B7-ABB0-E8002810D1FA"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"77E7A1DA-AF5A-4C7C-8233-55292BDCECDD",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AD910A83-5B4C-46C5-9BAD-B7D72887A76D"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA2C15BD-D117-4D7D-97CA-A39A59F5B786"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("localidades").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AA12E934-89E1-4F71-BFFA-D5FB16D8EB7C"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("localidades").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5E468FA1-8B9D-477E-B8FD-2D03BE27E731"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
	}
	
	if(vl_nuevo==2)
	{	
		controller.duplicateRecord(false)
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B4457DAE-984A-4FB4-9D3E-957B5CFEC15B"}
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
 * @properties={typeid:24,uuid:"D44CFFFF-D15E-4308-8D9E-B0A8FDFF07BF"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro.", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"626B5418-B749-476A-90CC-609B6881177F"}
 */
function borrarRegistro()
{
	controller.deleteRecord()
	application.getWindow("localidades").hide()
}
