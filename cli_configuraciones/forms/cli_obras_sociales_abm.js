/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3488E07A-1D84-4138-86F7-B71487E8AC2B",variableType:4}
 */
var vl_abm = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F3FB868-DF58-40D7-80B5-33E25851F563"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	forms.cli_obras_sociales.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BB20B32-D6E8-467A-8CDC-4EF8A3B6AD83"}
 */
function onShow(firstShow, event) 
{
	if(vl_abm == 1)
	{
		controller.newRecord()
		elements.btnBorrar.visible 	= false
		elements.btnWeb.visible 	= false
	}else
	{
		elements.btnBorrar.visible 	= true
		elements.btnWeb.visible 	= true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"436486A9-B606-4529-A105-45C2B90F46AE"}
 */
function onActionGrabarObra(event) 
{
	if (vl_abm == 1)
	{
		if (obsoc_nombre == null)
		{
			scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Datos Incompletos','Debe completar el nombre de la Obra Social.','warning',controller.getName(),'OK',null,null,null,null,null,null,null)
			elements.obsoc_nombre.requestFocus(true)
			return
		}
	}
	
	emp_id = scopes.globals.mx_empresa_id
	databaseManager.saveData()
	forms.cli_obras_sociales.controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"898ECAD7-4D82-445C-9B99-8D7B52509B89"}
 */
function onActionBorrarObra(event) 
{
	var nombre   = obsoc_nombre
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar la Obra Social '+ nombre +'?','question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"ADEBF0AB-F227-47FC-92DE-4F919A71B39F"}
 */
function Borrar()
{
	controller.deleteRecord()
	forms.cli_obras_sociales.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6BA2327E-9232-41CD-9525-108E1F47ACEA"}
 */
function onActionAbrirWeb(event) 
{
	if(obsoc_web) 
	{
		var url = obsoc_web

		//not empty - check for http
		if(url.indexOf('http://') < 0) url = 'http://' + url

		application.showURL( url, '_blank')
	}
}
