/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"159BEE21-C896-41D3-B499-F828882D915F"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F4CB726-D625-4660-8431-AC0CB40F7E44",variableType:8}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A83B68E-0C83-4406-84A8-67435CDB9CA4"}
 */
var vl_frm_anterior = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"86890A9F-2F65-4EDE-BB68-010517AD17BD"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("prestacion").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"51787027-B024-41C5-AEBF-34FF8953A102"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("prestacion").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"3A43945C-7336-4A9A-BE9E-F0F11A433A61"}
 */
function onShow(firstShow, event) 
{
	forms.cli_maestro_prestaciones_items.elements.btn_agregar.enabled = true
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id = scopes.globals.mx_empresa_id
		forms.cli_maestro_prestaciones_items.elements.btn_agregar.enabled = false
	}
	
	if(vl_nuevo==2)
	{	
		controller.duplicateRecord(false)
		emp_id = scopes.globals.mx_empresa_id
		forms.cli_maestro_prestaciones_items.elements.btn_agregar.enabled = false
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"916BE6A9-2329-4028-90B3-2980EA473003"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}
