/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9BFF1BBE-796E-4B3E-A667-271629B9785E"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.find()
	modulo_id = globals.mx_modulo_id
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F6668578-63BB-40FF-8903-C409BDC10460"}
 */
function onActionSalir(event) 
{
	if(application.isInDeveloper())
	{
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
		{
			databaseManager.revertEditedRecords()
			var solucion = application.getSolutionName()
			security.logout(solucion)
		}
		else
		{
			application.exit()
		}
	}
	else
	{
		application.closeSolution('LitoralGestion','InicializaArgento')
		//application.exit()
	}
}
