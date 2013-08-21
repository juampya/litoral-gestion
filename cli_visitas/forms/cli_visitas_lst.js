/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"17607A9D-7711-4132-BEAF-34EF8E884785",variableType:4}
 */
var vl_medico = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"38AE8B6C-2077-41CC-8DC5-5CBA521120BD",variableType:4}
 */
var vl_paciente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5EEE1E2C-4926-4918-A8C3-2968634C36F1",variableType:4}
 */
var vl_empresa = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"03C39324-C259-4DC5-8461-7B6EBE4B7193",variableType:93}
 */
var vl_fecha_final = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"407B4DAF-BFF5-4544-BE08-861936004EC6",variableType:93}
 */
var vl_fecha_incio = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A700C171-416B-4EF6-9977-C634CE134765"}
 */
function onActionNuevo(event) 
{
	forms.cli_visitas_nuevo.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"39A69B2F-A302-4C17-9146-29FE66A5F6AF"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms['clinica_inicio_clinica'].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"92A7E269-52D0-4322-90A9-4A8F57941C4B"}
 */
function onActionDetalle(event) 
{
	forms.cli_visitas_detalle.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"57A3F2C5-6660-49C2-916C-95F65C6E8C3A"}
 */
function onShow(firstShow, event) 
{
	scopes.globals.SacarMenu()
	
	if(firstShow)
	{
		scopes.globals.vl_empresa = null
		vl_paciente = null
		vl_medico = null
		vl_fecha_incio = application.getServerTimeStamp()
		vl_fecha_final = application.getServerTimeStamp()
		filtrar()
	}


}

/**
 * @properties={typeid:24,uuid:"523A30AA-E512-451F-844E-061ABDE4B630"}
 * @AllowToRunInFind
 */
function filtrar()
{
	if(scopes.globals.vl_empresa == null)
	{
		vl_paciente = null
	}
	controller.find()
	cliente_id = scopes.globals.vl_empresa
	visita_fecha = utils.dateFormat(vl_fecha_incio,'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_final,'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	paciente_id = vl_paciente
	medico_id =	vl_medico
	controller.search()
}
