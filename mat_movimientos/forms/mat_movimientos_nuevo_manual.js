/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EBD29C0C-F7D9-463B-91B2-C192F199F330",variableType:8}
 */
var vl_importe = 0.0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DADF8BD8-CA4E-40DD-9127-111ABB126E7B"}
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
 * @properties={typeid:24,uuid:"8B3EA105-8B17-4315-A4DE-6B5B6EC52E36"}
 */
function onActionGrabar(event) 
{
	mov_fecha_emision = new Date(mov_anio_emision,mov_mes_emision - 1,15)
	mov_importe = vl_importe
	mov_grab_fec = application.getServerTimeStamp()
	mov_grab_ope = globals.ag_usuariovigente.usu_id
	if(mov_tipo_de_movimiento == 2)
	{
		if(mov_estado != 1)
		{mov_estado = 1}
		if(mov_fecha_cobro == null)
		{mov_fecha_cobro = application.getServerTimeStamp()}
	}	
	databaseManager.saveData()
	forms.mat_movimientos.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF8A6E88-995C-481E-A88E-AB7BF0354B28"}
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

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"98DD2570-A127-4B29-8BAD-88C825194BAE"}
 */
function onDataChangeTipo(oldValue, newValue, event) 
{
	if(mov_tipo_de_movimiento == 2)
	{
		mov_estado = 1
		mov_fecha_cobro = application.getServerTimeStamp()
	}
	else
	{
		mov_estado = 0
		mov_fecha_cobro = null
	}
	return true
}
