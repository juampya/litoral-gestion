
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"07601AC9-8B2A-405B-B7DE-8F2A3D43A075"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"56A08112-0861-42A2-B408-866C7D5FD7B3"}
 * @AllowToRunInFind
 */
function borrarRegistro()
{
	/** @type {JSFoundSet<db:/sistemas/mat_movimientos_det>} */
	var fs_detalle = databaseManager.getFoundSet('sistemas','mat_movimientos_det')
	fs_detalle.find()
	fs_detalle.ingr_id = ingr_id
	var cant = fs_detalle.search()
	if(cant == 0)
	{
		mat_ingresos_to_mat_matriculado_rel_ingresos.deleteAllRecords()
		mat_ingresos_to_mat_resarcimientos.deleteAllRecords()
		controller.deleteRecord()
		forms.mat_ingresos_abm.controller.show()
	}
	else
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "El Registro no se puede Borrar.\n Existen movimientos asociados al mismo", 'info', controller.getName(), 'Aceptar',null,null,null, null, null, null, null) 
		
	}
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"39051DF4-F715-4283-A91D-65801902269E"}
 */
function onActionAsignar(event) 
{
	forms.mat_ingresos_asignar_global.vl_ingreso = ingr_id
	var win1 = application.createWindow("asignacion", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Asignacion global';
	win1.show(forms.mat_ingresos_asignar_global);
}
