/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FB0B050D-6B02-4599-B0B0-8CE9CB87AA7B"}
 */
function onActionBorrar(event) 
{
	var nombre = utils.stringTrim(alqyser_contratos_rel_garantes_to_alqyser_garantes.garante_nombre)+" del contrato ID "+(contrato_id)
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar el Contrato: '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"E468F562-9F6F-4856-96AB-6BFA35EBC7CC"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89FF6F87-579C-44EA-A340-5C2D277FF904"}
 */
function GeneraComprobante(event)
{
	if(facte_id==0)
	{
		forms.ays_frm_comprobante_nuevo.vl_frm_anterior = forms.ays_frm_contratos_datos.controller.getName()
		forms.ays_frm_comprobante_nuevo.vl_cliente = forms.ays_frm_contratos_datos.inquilino_id
		forms.ays_frm_comprobante_nuevo.vl_contrato_id = forms.ays_frm_contratos_datos.contrato_id
		forms.ays_frm_comprobante_nuevo.vl_nuevo = 1
		forms.ays_frm_comprobante_nuevo.vl_importe_alquiler = cuota_monto
		forms.ays_frm_comprobante_nuevo.controller.show()
	}
	else
	{
		forms.ays_frm_comprobante_nuevo.vl_frm_anterior = forms.ays_frm_contratos_datos.controller.getName()
		forms.ays_frm_comprobante_nuevo.vl_facte_id = facte_id
		forms.ays_frm_comprobante_nuevo.vl_nuevo = 0
		forms.ays_frm_comprobante_nuevo.controller.show()
	}
}
