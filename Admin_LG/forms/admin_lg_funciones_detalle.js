/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"14C1F463-3176-4049-84C0-A6BDF6B2ACBF",variableType:4}
 */
var vl_nuevo = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"40993B2F-0A2F-4E86-AB55-08F43F7A727B"}
 */
function onActionGrabar(event) 
{
	emp_id = 1
	databaseManager.saveData()
	forms.admin_lg_funciones.controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"75FBEC4A-753A-4947-AE1E-4B5E584A04C9"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	forms.admin_lg_funciones.controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"9B20184A-52D4-4C4A-A497-9D31F13F7ACD"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{
		controller.newRecord(false)
	}
	
	globals.vg_auditoria_pk = func_id
	globals.vg_auditoria_tabla = new Array('lg_funciones')
	globals.vg_auditoria_campo = null
}
