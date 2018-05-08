/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"85C5B2BF-A0A8-43F7-AF38-F33217BA8C50"}
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
		application.exit()
	}
	
	//security.logout('LitoralGestion','InicializaArgento')
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C31F0E73-BC00-42B7-B3E3-8EA0114206EE"}
 */
function onActionModulos(event) 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.admin_lg_modulos.controller.getName())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6734AED2-737F-4DC8-91F3-7660E2BDE874"}
 */
function onActionEmpresas(event) 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.admin_lg_empresas.controller.getName())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"77213BA3-B710-42A1-B0AB-3EE6EA255751"}
 */
function onActionUsuarios(event) 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.admin_lg_usuarios.controller.getName())
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5D6D9B92-98B9-4004-B934-FB3B1D4520E0"}
 */
function onActionFunciones(event) 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.admin_lg_funciones.controller.getName())
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"1A49C1C7-08BD-47D7-A961-B49092F59649"}
 */
function onActionMensajes(event) 
{
	databaseManager.revertEditedRecords()
	scopes.globals.AbrirGenerico(forms.admin_lg_mensajes.controller.getName())
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD3BBF31-4D63-4BB2-9102-5EA00122CCDB"}
 */
function onShow(firstShow, event)
{
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
	{
		elements.tabs_1.removeAllTabs()
		elements.tabs_1.addTab(forms.modulo_menu.controller.getName())
	}
	else
	{
		elements.tabs_1.removeAllTabs()
		scopes.globals.CargarMenu()
	}
}
