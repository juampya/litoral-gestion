
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"18B6AED2-7D34-4BDD-8D1D-F79782BFA11B"}
 */
function onActionDetalle(event) 
{
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.title= 'Crea Menu - Litoral Gestion';
		win.show(forms.admin_lg_modulos_menus_detalle);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ED6E455D-C503-4969-8A00-7B7DCE5E6571"}
 */
function onActionBorrar(event) 
{
	menus_to_accesos.deleteAllRecords()
	controller.deleteRecord()
}
