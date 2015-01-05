/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B8B520DB-7DD4-4C51-A722-DBED46BDC8C9",variableType:4}
 */
var vl_departamento = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C5B3A3CA-EE8D-4F03-A490-18B789ACA033",variableType:4}
 */
var vl_localidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E76CC67-3946-4E4C-8001-3F969A9044EF"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0E3AB682-0EB8-41D9-8CDC-A3D58948349C",variableType:4}
 */
var vl_matriculado = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"6EF4D5C8-434C-46D3-B41A-718F88D0FD9D"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms[vl_frm_anterior].controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"49F243C8-4089-49F2-9684-EFFA63767237"}
 */
function onActionNuevo(event) 
{
	
}

/**
 * @properties={typeid:24,uuid:"B6E38EA1-40CA-4528-8AF6-58CA3AC1082B"}
 * @AllowToRunInFind
 */
function Filtrar()
{
	controller.find()
	if(vl_matriculado!=null) mat_id = vl_matriculado
	if(vl_localidad!=null)localidad_id = vl_localidad
	if(vl_departamento!=null) mat_consultorios_to_localidades.depar_id = vl_departamento
	controller.search()
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"331E7957-6E03-47A5-B6BA-E940CAB12980"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		vl_departamento = null
		vl_localidad 	= null
		vl_matriculado 	= null
	}
	
	Filtrar()
}

/**
 * @properties={typeid:24,uuid:"A12A5AD2-96D5-42CF-B2EC-1E41CD208532"}
 */
function Refrescar()
{
	vl_departamento = null
	vl_localidad 	= null
	vl_matriculado 	= null
	
	Filtrar()
}