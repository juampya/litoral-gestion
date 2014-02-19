
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8210911B-BD93-4153-B55F-93B04C567597"}
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
 * @properties={typeid:24,uuid:"55CCA076-8B0E-44C9-97D5-AF285C29759D"}
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
 * @properties={typeid:24,uuid:"BD68DA0C-E546-4D72-95E7-3754498E6DC9"}
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

/**
 * @properties={typeid:24,uuid:"DED69879-8F66-4929-BD5A-6128F150E336"}
 */
function asignarATodos()
{
	//TODO q se pueda asignar a todos los matriculados
}