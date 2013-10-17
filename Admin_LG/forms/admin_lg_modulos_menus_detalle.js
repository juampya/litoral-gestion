
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E310C21-0F8F-483D-BE03-22307DB47878"}
 */
function onActionGrabar(event) 
{
	databaseManager.saveData(foundset.modulos_to_menus.getSelectedRecord())
	application.getWindow().hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CEB5B7CC-AFD4-43E0-AA34-F4E23FB5AF2A"}
 */
function onActionCancelar(event) 
{	
	foundset.modulos_to_menus.getSelectedRecord().revertChanges()
	application.getWindow().hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"13A6CEE3-C5C9-435E-AA69-69B512A870B1"}
 */
function onHide(event) 
{
	foundset.modulos_to_menus.getSelectedRecord().revertChanges()
	return true
}