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
	
	elements.img_mailbox.visible = false
		
	/** @type {JSFoundSet<db:/sistemas/mat_sugerencias>} */
	var fs_sugerencias = databaseManager.getFoundSet('sistemas','mat_sugerencias')
		fs_sugerencias.find()
		fs_sugerencias.sugerencia_estado = 0
		if(fs_sugerencias.search()>0)
		{
			elements.img_mailbox.visible = true
			elements.img_mailbox.toolTipText = "Existen sugerencias no leidas."
		}
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

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"44E1368C-A82D-4350-B1EB-FD0B94C85911"}
 */
function onActionSugerencias(event) 
{
	forms['sm_frm_consulta_sugerencias'].controller.show()
}
