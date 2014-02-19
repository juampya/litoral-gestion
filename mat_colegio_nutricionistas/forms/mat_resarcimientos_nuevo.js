
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BDA67E9C-8680-4B73-B040-68B87B8A3ED8"}
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
 * @properties={typeid:24,uuid:"5641F025-B2B6-44F0-AF10-CEEDD1C270DB"}
 */
function onActionGrabar(event) 
{
	if(validaDatos())
	{
		res_fecha_aplicacion = new Date(res_anio_aplicacion, res_mes_aplicacion - 1, 15)
		res_fecha_emision = application.getServerTimeStamp()
		databaseManager.saveData(foundset)
		forms.mat_resarcimientos_abm.controller.show()	
	}
	else
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', globals.vg_mensaje_de_error, 'info', controller.getName(), 'Aceptar',null,null,null, null, null, null, null) 
	}
	

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1ABF194A-F98F-41F6-9EC4-5C5316C15FBB"}
 */
function onShow(firstShow, event) 
{
	controller.newRecord()
}

/**
 * @properties={typeid:24,uuid:"D1AD8B24-21D6-4F2B-9C99-89D874BE25C7"}
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


