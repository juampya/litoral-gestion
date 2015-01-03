
/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"659E221F-C7E3-4936-80FB-929C8F653248"}
 */
function onDataChangeBanco(oldValue, newValue, event) 
{
	scopes.globals.vg_foa_banco = banco_id
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"63C635D2-239D-4320-B3A6-E329B846C89F"}
 */
function onDataChangeCUIT(oldValue, newValue, event) 
{
	if(scopes.globals.ValidarCuit(newValue))
	{
		return true
	}
	else
	{
		scopes.globals.ventanaAceptar("CUIT inválido. Por favor verifíquelo.",controller.getName())
		return false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8947A7EC-0097-4FB6-969D-FCE9058B665A"}
 */
function onActionAgregar_Sucursal(event) 
{
	if(banco_id!=null && banco_id!=0)
	{
		forms.mat_bancos_sucursales_abm.controller.newRecord(false)
		forms.mat_bancos_sucursales_abm.emp_id = scopes.globals.mx_empresa_id
		forms.mat_bancos_sucursales_abm.banco_id = banco_id
		
		var win = application.createWindow("bancos_sucursales", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.mat_bancos_sucursales_abm);
	}
	else
	{
		scopes.globals.ventanaAceptar('Debe seleccionar un Banco.',controller.getName())
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D3CE473-4660-4DA0-AD59-D3DDA0D3278C"}
 */
function onShow(firstShow, event) 
{
	// TODO Auto-generated method stub
}
