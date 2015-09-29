/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5D23B50F-8BB2-42B0-94D1-4E5938401353",variableType:4}
 */
var vl_modulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3358BBEC-4D7F-4A4E-BD1A-D9AE4EF6C8C8",variableType:4}
 */
var vl_tipo = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9FEEA69A-31D8-4B3D-804B-85B94BA984FF"}
 */
function onActionDetalle(event) 
{
	forms.admin_lg_funciones_detalle.vl_nuevo = 0
	forms.admin_lg_funciones_detalle.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7DE4D2FC-D406-43E5-A038-86033074E247"}
 */
function onActionVolver(event) 
{
	forms.admin_lg_inicio.controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"BBB77821-EF44-4F3E-9632-920AAA1690EE"}
 */
function onActionAgregar(event) 
{
	forms.admin_lg_funciones_detalle.vl_nuevo = 1
	forms.admin_lg_funciones_detalle.controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"E5F571EE-2487-4ACE-8426-ED46B71EB515"}
 */
function Filtrar() 
{
	controller.find()
	if(vl_tipo!=null) func_tipo = vl_tipo
	if(vl_modulo!=null) modulo_id = vl_modulo
	controller.search()
}