
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"42BE4124-56F8-427B-9389-210B14A7F691"}
 */
function onShow(firstShow, event) 
{
	controller.newRecord()
	ingr_estado = 1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B3583152-CB20-48C6-87FF-792547D8A300"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	forms.mat_ingresos_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B694DDB3-44C3-406E-B1BF-C61DE8B7CAA8"}
 */
function onActionGrabar(event) 
{
	
	if(validaDatos())
	{
		databaseManager.saveData(foundset)
		forms.mat_ingresos_abm.controller.show()
	}
	else
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', globals.vg_mensaje_de_error, 'info', controller.getName(), 'Aceptar',null,null,null, null, null, null, null) 
	}	

}

/**
 * @properties={typeid:24,uuid:"F06CF5A9-089A-44CC-90BA-B5F6BB050119"}
 */
function validaDatos()
{
	if(ingr_nombre == null || ingr_nombre.length == 0)
	{
		globals.vg_mensaje_de_error = "Debe Especificar Un Nombre"
			return false
	}
	if(ingr_importe == null || ingr_importe == 0)
	{
		globals.vg_mensaje_de_error = "Debe Especificar Un Importe"
			return false
	}
	if(ingr_tipo_asignacion == null)
	{
		globals.vg_mensaje_de_error = "Debe especificar el tipo de asignacion"
			return false
	}

	return true
	
}

