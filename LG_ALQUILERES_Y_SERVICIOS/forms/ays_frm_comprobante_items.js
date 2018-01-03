/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"66259139-6843-4F5C-85E9-BD382143956F"}
 */
function onActionBorrar(event) 
{
	var tmp_nombre = '\nConcepto: '+utils.stringTrim(facti_descripcion)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar este Items?'+tmp_nombre,'question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"D5262C97-C202-4AB5-81F4-2ED304C3F55D"}
 */
function Borrar()
{
//	eliminado=1
//	eliminado_fecha=application.getServerTimeStamp()
//	eliminado_usu_id = scopes.globals.mx_usuario_id
//	
//	databaseManager.saveData()
//	databaseManager.refreshRecordFromDatabase(foundset,-1)

	controller.deleteRecord()
	forms.ays_frm_comprobante_nuevo.CalculaTotales()
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
 * @properties={typeid:24,uuid:"3BDDBC8E-5D3F-4376-86DC-148A95D7EDA3"}
 */
function onDataChange(oldValue, newValue, event) 
{
	facti_total = facti_cantidad*newValue
	forms.ays_frm_comprobante_nuevo.CalculaTotales()
	return true
}
