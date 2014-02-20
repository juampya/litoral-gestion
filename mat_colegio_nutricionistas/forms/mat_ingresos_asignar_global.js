/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A02EF58-DD2E-45F8-9630-5432CBE2E10B",variableType:4}
 */
var vl_ingreso = 0

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BFDD7F3D-E1BC-4978-BF0F-48A5F210AB47",variableType:93}
 */
var vl_fec_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"B20F59A3-8037-4633-97DD-0DB4977E549F",variableType:93}
 */
var vl_fec_ini = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BDE705A1-8D8D-4492-B978-1131026D07E7",variableType:4}
 */
var vl_aplica_vigencia = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"752CA357-B6CA-43FD-9FE7-289B77FB5B3F"}
 */
function onActionVolver(event) 
{
	vl_aplica_vigencia = null
	vl_fec_ini = null
	vl_fec_ini = null
	application.getWindow("asignacion").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1FE8625C-BD27-4567-A0DA-444B6436BA6B"}
 */
function onActionAsignar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Mensaje', "Desea asignar el concepto de todos los Matriculados??", 'info', controller.getName(), 'No',null,"Si","asignar", null, null, null, null)
	
}

/**
 * @properties={typeid:24,uuid:"C89D8F60-AAF8-40DF-8C38-9733E7D2A18E"}
 */
function asignar()
{
	if(vl_aplica_vigencia == 1)
	{
		if(vl_fec_ini == 0 || vl_fec_ini ==null || vl_fec_fin == 0 || vl_fec_fin == null)
		{
			globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Mensaje', "Faltan especificar fechas de vigencia", 'info', controller.getName(), 'Aceptar',null,null,null, null, null, null, null)	
		}
		else
		{
			globals.asignarIngresosATodos(vl_ingreso,vl_fec_ini,vl_fec_fin,vl_aplica_vigencia)
			globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Mensaje', "Asignacion Global Finalizada", 'info', controller.getName(), 'Aceptar',null,null,null, null, null, null, null)
			application.getWindow("asignacion").hide()
		}
	}
	else
	{
		globals.asignarIngresosATodos(vl_ingreso,vl_fec_ini,vl_fec_fin,vl_aplica_vigencia)
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Mensaje', "Asignacion Global Finalizada", 'info', controller.getName(), 'Aceptar',null,null,null, null, null, null, null)
		application.getWindow("asignacion").hide()
	}	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"446A59A8-551F-4953-B013-E84DBBF6B1FB"}
 */
function onShow(firstShow, event) 
{
	vl_aplica_vigencia = 0
	vl_fec_ini = null
	vl_fec_fin = null
	elements.vl_fec_ini.enabled = false
	elements.vl_fec_fin.enabled = false
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"20AB28FA-90B4-4E9A-A35A-B844B3C2F739"}
 */
function onDataChangeVigencia(oldValue, newValue, event) 
{
	if(vl_aplica_vigencia == 1)
	{
		vl_fec_ini = application.getServerTimeStamp()
		vl_fec_fin = application.getServerTimeStamp()
		elements.vl_fec_ini.enabled = true
		elements.vl_fec_fin.enabled = true		
	}
	else
	{
		vl_fec_ini = null
		vl_fec_fin = null	
		elements.vl_fec_ini.enabled = false
		elements.vl_fec_fin.enabled = false			
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E402E76-3C35-4AD1-83A0-4A8B37B90085"}
 */
function onActionDesasignar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Mensaje', "Desea desvincular el concepto de todos los Matriculados??", 'info', controller.getName(), 'No',null,"Si","desasignar", null, null, null, null)
}

/**
 * @properties={typeid:24,uuid:"9090D38A-175A-4442-97CB-D4537BBD494C"}
 */
function desasignar()
{
	globals.desasignarIngresosATodos(vl_ingreso)
	application.getWindow("asignacion").hide()
}
