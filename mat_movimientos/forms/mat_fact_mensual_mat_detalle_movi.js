/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"9962F347-397F-439D-9A36-7EE7A7A4BE57"}
 */
function onActionDetalle(event) 
{	
	//forms.mat_fact_factura.vl_frm_anterior = controller.getName()
	forms.mat_fact_factura.vl_nuevo = 0
	forms.mat_fact_factura.controller.loadRecords(fact_det_id)
	
	var win = application.createWindow("caja", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.mat_fact_factura)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"602A78B5-FFBB-4EE4-8075-78E393DC1862"}
 */
function onActionAgregar(event) 
{
	//forms.mat_fact_factura.vl_frm_anterior = controller.getName()
	forms.mat_fact_factura.vl_nuevo = 1
	
	var win = application.createWindow("caja", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.mat_fact_factura);	
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"420F4757-575F-4793-A9AA-159DA5A5C4EA"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(scopes.globals.mx_usuario_id,"Litoral Software","Desea borrar el Registro??","atention",controller.getName(),"No",null,"Si","borrarRegistro",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"EF98F0C4-0D8A-4E1F-AE51-1357A5D70DA5"}
 */
function borrarRegistro()
{
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()
}