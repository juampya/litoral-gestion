/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"659D443F-D223-450D-94A0-695FDBBE4175"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords(foundset)
	forms.mat_rendiciones.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"145CDBC9-912B-44E7-82DD-DC855FA08B9F"}
 */
function onActionAnular(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea Borrar el Movimiento","atention",controller.getName(),"No",null,"Si","anularMovim",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"9DF2C110-247B-43A9-8D2E-EE4079405682"}
 */
function anularMovim()
{
	controller.deleteRecord()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A8856B7-256F-4ED4-8EDD-D296612BCCE7"}
 */
function onActionGrabar(event) 
{
	
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
 * @properties={typeid:24,uuid:"60808CCB-EC6F-48F6-8E96-18B176CC9FA7"}
 */
function onDataChangeEstado(oldValue, newValue, event) 
{
//	if(mov_estado == 1)
//	{
//		elements.mov_fecha_cobro.enabled = true
//	}
//	else
//	{
//		elements.mov_fecha_cobro.enabled = false
//		mov_fecha_cobro = null
//	}
	return true
}