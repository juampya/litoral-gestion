/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B678C40-42FC-4F3C-B628-66FF802A028E"}
 */
function onActionAgregar(event) 
{
	controller.newRecord()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"23D08E87-86C3-438A-A784-7F49E942FD35"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea Borrar el Registro?",'atention',controller.getName(),"No",null,"Si","borrarRegistro",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"B3BE080A-7892-4420-9442-244D00B1A095"}
 */
function borrarRegistro()
{
	forms.mat_movimientos_nuevo_manual.vl_importe -= det_importe
	controller.deleteRecord()
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
 * @properties={typeid:24,uuid:"E36C8762-C09F-4BF8-8AA5-F7AC4E9D7710"}
 */
function onDataChangeImporte(oldValue, newValue, event) 
{
	forms.mat_movimientos_nuevo_manual.vl_importe += det_importe
	det_importe_original = det_importe
	return true
}
