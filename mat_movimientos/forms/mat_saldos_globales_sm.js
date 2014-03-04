/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"80C1E305-8B21-41EA-B99A-FBDCBCF40C1D",variableType:4}
 */
var vl_tilde = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"054EF438-3A0B-4869-B76D-F35214926AA5",variableType:8}
 */
var vl_total_saldo = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"948B3FEC-1FB4-4894-9CD6-B833D6C547FF",variableType:4}
 */
var vl_cantidad = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0676F0EF-7D56-4A10-BDDB-90FEEBAB8B81"}
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
 * @properties={typeid:24,uuid:"6049B060-D2DD-4EF9-B12E-FD3A8303F31A"}
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
 * @properties={typeid:24,uuid:"881465C9-927E-448A-B460-3BF98D602C3A"}
 */
function onActionPagar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', 'Desea Cancelar los Saldos Seleccionados??', 'question', controller.getName(), 'No', '', 'Si', 'cancelarSaldo', null, null, null, null) 

}

/**
 * @properties={typeid:24,uuid:"8ADB64FD-28A4-42FD-A41D-D12F8250B15B"}
 * @AllowToRunInFind
 */
function cancelarSaldo()
{	
	globals.ventanaFormulario("cancelarSaldo","Litoral Gestion",forms.mat_procesar_cancelar_saldo.controller.getName())
	forms.mat_saldos_globales.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A3AC388B-F497-4CBE-883A-5FE5F7609E99"}
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
 * @properties={typeid:24,uuid:"8DF8DD9E-C0FF-4DD8-BCDF-710E283E63F9"}
 */
function filtrar()
{
	forms.mat_saldos_globales.controller.show()
}
