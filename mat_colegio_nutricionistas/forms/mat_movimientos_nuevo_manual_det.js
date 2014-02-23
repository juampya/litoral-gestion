
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E2957E3-8381-4971-BD91-334F40BF97C8"}
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
 * @properties={typeid:24,uuid:"CAAA5F46-C53B-4D1E-A335-0351AAE29E1F"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea Borrar el Registro?",'atention',controller.getName(),"No",null,"Si","borrarRegistro",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"7751FD21-C648-4527-AF43-18DE0790185B"}
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
 * @properties={typeid:24,uuid:"5080428F-60E9-4F6D-99EB-AFC34418A997"}
 */
function onDataChangeImporte(oldValue, newValue, event) 
{
	forms.mat_movimientos_nuevo_manual.vl_importe += det_importe
	det_importe_original = det_importe
	return true
}
