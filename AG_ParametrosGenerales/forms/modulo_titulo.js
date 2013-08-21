

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"418D2126-CF01-48D0-B198-3DD61202B7A6"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.find()
	modulo_id = globals.mx_modulo_id
	controller.search()
}
