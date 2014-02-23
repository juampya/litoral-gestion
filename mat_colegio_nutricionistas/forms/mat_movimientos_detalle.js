
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"99A4F7EC-1597-44E4-B95A-11F188ECE347"}
 */
function onActionVolver(event) 
{
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