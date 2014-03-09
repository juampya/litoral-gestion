/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"63BACD58-6CB4-4DB4-9A27-230C31182D3F"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	forms.mat_movimientos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F795844-C43D-4722-BCDC-0FFAA688D62E"}
 */
function onActionAnular(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea Borrar el Movimiento","atention",controller.getName(),"No",null,"Si","anularMovim",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"075E542A-D377-44D9-807C-6635B8C6BD64"}
 */
function anularMovim()
{
	foundset.mat_movimientos_to_mat_movimientos_det.deleteAllRecords()
	controller.deleteRecord()
	forms.mat_movimientos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB8CC65C-9B43-48F0-9E60-2E6206E9B80D"}
 */
function onActionGrabar(event) 
{
	databaseManager.saveData(foundset)
	forms.mat_movimientos.controller.show()
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
 * @properties={typeid:24,uuid:"2A1E1D39-D86F-4F98-87C4-133304683094"}
 */
function onDataChangeEstado(oldValue, newValue, event) 
{
	if(mov_estado == 1)
	{
		elements.mov_fecha_cobro.enabled = true
	}
	else
	{
		elements.mov_fecha_cobro.enabled = false
		mov_fecha_cobro = null
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7362B32F-467D-4628-B9F8-EE0990E2AD67"}
 */
function onActionImprimir(event) 
{
	forms.mat_boleta_de_pago.controller.loadRecords(mov_id)
	forms.mat_boleta_de_pago.vl_importe_vto1 = forms.mat_boleta_de_pago.mov_importe
	forms.mat_boleta_de_pago.vl_importe_vto2 = forms.mat_boleta_de_pago.vl_importe_vto1+(forms.mat_boleta_de_pago.vl_importe_vto1*15)/100
	forms.mat_boleta_de_pago.controller.showPrintPreview()
	
}
