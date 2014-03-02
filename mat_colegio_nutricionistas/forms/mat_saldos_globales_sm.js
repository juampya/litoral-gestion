/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E8B12018-3A6C-40E3-93FA-9EC41B25443D",variableType:4}
 */
var vl_tilde = 0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4C385256-DFC3-4CD2-9CB0-589972A729B3",variableType:8}
 */
var vl_total_saldo = 0.0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DD4B461F-837D-436B-9974-91416446BDEB",variableType:4}
 */
var vl_cantidad = 0
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

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"469579A0-9611-431D-BA84-9BDC79150ACC"}
 */
function onActionTildar(event) 
{
	var proximo = 0
	for(var i = 1;i<=forms['saldosGlobales'].foundset.getSize();i++)
	{
	
		var rec = forms['saldosGlobales'].foundset.getRecord(i)
		if(vl_tilde == 0)
		{
			proximo = 1
			rec['chk'] = 1
		}
		else
		{
			proximo = 0
			rec['chk'] = 0			
		}
		
	}
	vl_tilde = proximo
}

/**
 * @properties={typeid:24,uuid:"BD752CBF-633C-4BD2-AE1A-05E25ABD46BC"}
 */
function filtrar()
{
	forms.mat_saldos_globales.controller.show()
}
