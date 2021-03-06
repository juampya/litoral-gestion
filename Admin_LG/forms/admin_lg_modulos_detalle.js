/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"760CD38F-343C-43F9-8142-98155FF47795",variableType:4}
 */
var vl_nuevo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E4A4579-0756-4656-BC25-A40E297BFFD1"}
 */
function onActionGrabar(event) 
{
	databaseManager.saveData()
	scopes.globals.AbrirGenerico(forms.admin_lg_modulos.controller.getName())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4297F569-9700-4532-B25C-5313CA7F5C47"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.admin_lg_modulos.controller.getName())
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E413DA6-41E0-4A3C-82AF-96C1A7B1C849"}
 */
function onShow(firstShow, event) 
{
	globals.vg_auditoria_pk = modulo_id
	globals.vg_auditoria_tabla = new Array('modulos')
	globals.vg_auditoria_campo = null
	
	if(vl_nuevo==1)
	{
		controller.newRecord(false)
		empresa_id = scopes.globals.mx_empresa_id
	}
	
	elements.tabs.dividerLocation = 0.50
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"25291282-B072-4DE5-8D4B-3F56BB664260"}
 */
function onActionAgregarMenu(event) 
{
	modulos_to_menus.newRecord(false)
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.title= 'Crea Menu - Litoral Gestion';
		win.show(forms.admin_lg_modulos_menus_detalle);
}
