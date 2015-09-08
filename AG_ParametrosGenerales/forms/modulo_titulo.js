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

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F354BB38-D630-4804-BA6C-ECF374BCB715"}
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
