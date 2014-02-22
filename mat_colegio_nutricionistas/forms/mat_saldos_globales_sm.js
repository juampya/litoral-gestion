
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE4982E0-5E7A-4A9D-BE06-0FD66468FA9A"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms["mat_inicio"].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6675B4FD-53CF-4AA0-A58A-F117F4590F19"}
 */
function onActionDetalle(event) 
{
	forms.mat_saldos_globales_movimientos.vl_matriculado_id = forms["saldosGlobales"].id
	forms.mat_saldos_globales_movimientos.controller.show()

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47B991DA-9F33-4E6E-9BBC-F5F5DE260FF7"}
 */
function onActionPagar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', 'Desea Cancelar los Saldos Seleccionados??', 'question', controller.getName(), 'No', '', 'Si', 'cancelarSaldo', null, null, null, null) 

}

/**
 * @properties={typeid:24,uuid:"D609221F-FEBF-45C9-86E2-C5F1CC2504D5"}
 * @AllowToRunInFind
 */
function cancelarSaldo()
{	
	for(var i = 1;i<=forms['saldosGlobales'].foundset.getSize();i++)
	{
	
		var rec = forms['saldosGlobales'].foundset.getRecord(i)
		if(rec['chk'] == 1)
		{
			/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
			var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
			fs_mov.find()
			fs_mov.mat_id = rec['id']
			fs_mov.search()
			for(var j = 1;j<=fs_mov.getSize();j++)
			{
				var rec1 = fs_mov.getRecord(j)
				rec1.mov_estado = 1
				rec1.mov_fecha_cobro = application.getServerTimeStamp()
				databaseManager.saveData(rec1)
			}
			
		}
		
	}
	forms.mat_saldos_globales.controller.show()
}
