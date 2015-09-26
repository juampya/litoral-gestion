/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F561069C-03F4-4240-B379-BE3016658B8A",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"15F7BA61-43E1-44E6-B2E6-CB5BE7987005"}
 */
var vl_paciente = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B2084517-5019-4251-B7EC-C5E8E7741B58"}
 */
function onActionSelecciona(event) 
{
	forms.cli_visitas_nuevo.paciente_id = paciente_id
	forms.cli_visitas_nuevo.onDataChangePaciente(null,paciente_id,event)
	application.getWindow("empleados").hide()
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"66F20A58-C48D-4708-9879-243B5D39949E"}
 * @AllowToRunInFind
 */
function onDataChange(oldValue, newValue, event) 
{
	controller.find()
	if(vl_cliente!=null) cliente_id = vl_cliente
	if(vl_paciente!=null) paciente_nombre = "%"+vl_paciente+"%" 
	controller.search()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C5FAE07D-5F8F-4D8B-B88E-D7D849C59BDA"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	controller.find()
	if(vl_cliente!=null) cliente_id = vl_cliente
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"53C44A7D-F36C-44B0-BA46-02729D13086C"}
 */
function onActionVolver(event)
{
	application.getWindow("empleados").hide()
}
