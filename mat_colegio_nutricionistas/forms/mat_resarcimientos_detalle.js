/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86A93DC6-4FD0-4F6C-B933-E31B887F4D7C"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	forms.mat_resarcimientos_abm.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"534DAD7B-DAAE-498A-889F-E0B459EE8366"}
 */
function onActionGrabar(event) 
{
	if(validaDatos())
	{
		res_fecha_aplicacion = new Date(res_anio_aplicacion, res_mes_aplicacion - 1, 15)
		databaseManager.saveData(foundset)
		forms.mat_resarcimientos_abm.controller.show()	
	}
	else
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', globals.vg_mensaje_de_error, 'info', controller.getName(), 'Aceptar',null,null,null, null, null, null, null) 
	}
	

}

/**
 * @properties={typeid:24,uuid:"2D4DD472-C64C-41E2-B459-1E873F59A2CF"}
 */
function validaDatos()
{
	if(mat_id == null || mat_id == 0)
	{
		globals.vg_mensaje_de_error = "Debe Especificar Un Matriculado"
			return false
	}
	if(ingr_id == null || ingr_id == 0)
	{
		globals.vg_mensaje_de_error = "Debe Especificar Un Concepto"
			return false
	}
	if(mat_resarcimientos_to_mat_matriculados.mat_estado == 0)
	{
		globals.vg_mensaje_de_error = "El matriculado esta Inactivo"
			return false
	}
	if(mat_resarcimientos_to_mat_ingresos.ingr_estado == 0)
	{
		globals.vg_mensaje_de_error = "El concepto esta Inactivo"
			return false
	}
	return true
	
}

/**
 * @properties={typeid:24,uuid:"5CDCBAA8-DB7D-4759-9091-277D425FD2E0"}
 */
function asignarATodos() 
{
	//TODO q un resarcimiento se pueda asignar a todos los matriculados
}
