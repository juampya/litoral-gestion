/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"861F2223-8E51-4209-A159-A1FEAC786A54",variableType:8}
 */
var vl_importe = 0.0
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4337D989-F049-4CFA-BD68-0A32FD112FCB"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	forms.mat_movimientos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8A48761-CF48-44E7-BA64-05D75A3C0CE1"}
 */
function onActionGrabar(event) 
{
	mov_fecha_emision = new Date(mov_anio_emision,mov_mes_emision - 1,15)
	mov_importe = vl_importe
	mov_grab_fec = application.getServerTimeStamp()
	mov_grab_ope = globals.ag_usuariovigente.usu_id
	databaseManager.saveData()
	forms.mat_movimientos.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6824AC1F-3BA6-4764-A432-EFB69A2CD380"}
 */
function onShow(firstShow, event) 
{
	controller.newRecord()
	mov_anio_emision = forms.mat_movimientos_nuevo.vl_anio
	mov_mes_emision = forms.mat_movimientos_nuevo.vl_mes
	mov_tipo_de_movimiento = forms.mat_movimientos_nuevo.vl_tipo_movim
	mov_estado = 0
	mat_id = forms.mat_movimientos_nuevo.vl_matriculado
	vl_importe = 0
	
}
