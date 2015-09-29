/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"83649151-DF50-4F47-9023-6420B4408336",variableType:4}
 */
var vl_nuevo = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"28E10020-322E-4B65-896E-A34B26FE498F"}
 */
function onActionGrabar(event) 
{
	emp_id = 1
	databaseManager.saveData()
	forms.admin_lg_empresas.controller.show()
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"3D49CB45-DD22-46DB-9329-59E2047A366D"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	forms.admin_lg_empresas.controller.show()
}


/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"171B7C66-8F55-411D-A32E-E99C224C6FCD"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{
		controller.newRecord(false)
	}
	
	//Variables para adjuntos.
	scopes.globals.vg_archivo_funcion_codigo = 1 //Codigo de adjuntos de comprobantes de proveedores.
	scopes.globals.vg_archivo_tabla_id = emp_id //ID sobre la que se agrega el adjunto.
	
	scopes.globals.vg_auditoria_pk = emp_id
	scopes.globals.vg_auditoria_tabla = new Array('empresas')
	scopes.globals.vg_auditoria_campo = null
	
	forms.admin_lg_empresas_detalle_configuracion.vl_prueba = null
}