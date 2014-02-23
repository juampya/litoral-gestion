
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"99A4F7EC-1597-44E4-B95A-11F188ECE347"}
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
 * @properties={typeid:24,uuid:"ADE569DB-FC56-415B-9FA6-6FCFA8708639"}
 */
function onActionAnular(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea Borrar el Movimiento","atention",controller.getName(),"No",null,"Si","anularMovim",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"CBE4632A-1CAC-49A0-98D3-7854956F6907"}
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
 * @properties={typeid:24,uuid:"363FF588-41B6-4A5B-95C9-6F332244B97F"}
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
 * @properties={typeid:24,uuid:"99040980-9327-4C3A-85BA-188B1696CF3B"}
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
