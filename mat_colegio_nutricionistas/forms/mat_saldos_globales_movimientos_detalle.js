/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"09F12299-1637-4746-86F4-B3C82FF56500",variableType:4}
 */
var vl_anio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F731C37D-713D-41C7-88D2-7A95DB463BD9",variableType:4}
 */
var vl_mes = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"86234ED6-DEC0-446B-9A66-F3F856E0A8A2",variableType:4}
 */
var vl_matriculado_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7128B1B1-2182-4825-83C4-C89331313C97",variableType:4}
 */
var vl_mov_id = null

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C39CCA3B-D43C-48C8-A004-837B6E5189AF"}
 */
function onActionVolver(event) 
{
	forms.mat_saldos_globales_movimientos.controller.show()
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FCB197AF-748D-446C-AAB7-2A3401C93DBF"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.find()
	mov_id = vl_mov_id
	controller.search()
}
