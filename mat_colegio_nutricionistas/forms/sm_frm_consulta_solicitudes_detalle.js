/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"990DFBED-14E6-4F7A-9810-6E07A47693E1",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D5ED8A66-E256-4413-8890-2950D1B2B9EF"}
 */
var vl_titulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFEB07BE-23AB-4196-B463-7CE2ECBE676A"}
 */
var vl_frm_anterior = null;

/**
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"95E0E70D-3C0B-439B-9C6E-3896AE2E6C8B"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
	}
	
	elements.btn_nuevo_matriculado.enabled = false
	
	if(sol_id==1 && rel_estado ==1) //Si el tipo de solicitud es "Solicitud de MAtriculacion"  
	{
		elements.btn_nuevo_matriculado.enabled = true
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FD248301-71F6-4ED4-80B1-9D9C667F1002"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("consulta_solicitudes").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"27015DA7-A5EE-4DC3-97DB-55848E752932"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	application.getWindow("consulta_solicitudes").hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"A0E6DAC1-7E3F-4297-9393-0F472C489F2F"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E07E36A-56F4-49C7-AC2C-55668E569258"}
 */
function onActionConfirmaMatriculado(event) 
{
	if(utils.hasRecords(mat_rel_mat_sol_to_mat_matriculados))
	{	
		databaseManager.saveData(foundset)
		application.getWindow("consulta_solicitudes").hide()
		
		forms.sm_frm_matriculados_tabpanel.vl_frm_anterior = forms.sm_frm_consulta_solicitudes.controller.getName()
		forms.sm_frm_matriculados_tabpanel.vl_nuevo = 0
		forms.sm_frm_matriculados_tabpanel.controller.loadRecords(mat_id)
		forms.sm_frm_matriculados_tabpanel.controller.show()
	}
	else
	{
		globals.ventanaAceptar("No existe el id en Matriculdos",controller.getName())
	}
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
 * @properties={typeid:24,uuid:"C68E966F-C6BA-4D52-9E04-58772B7A4C08"}
 */
function CambiaTipoSolicitud(oldValue, newValue, event) 
{
	elements.btn_nuevo_matriculado.enabled = false
	
	if(sol_id==1 && rel_estado==1) //Si el tipo de solicitud es "Solicitud de MAtriculacion" 
	{
		elements.btn_nuevo_matriculado.enabled = true
	}
	return true
}


/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"FA8805E1-52A5-453C-8FB2-4CE1FCD55FB6"}
 */
function onActionImprimir(event) 
{
	var nom_reporte = null
	
	switch (sol_id) 
	{
		case 1:
		break;
		case 2:
		break;
		case 3:
		break;
		case 4:
			nom_reporte = 'mat_certi_baja.jasper'
		break;
		case 5:
		break;
		case 6:
		break;
		case 7:
		break;
		case 8:
		break;
		case 9:
		break;
		case 10:
		break;
		case 11:
		break;
		default:
		break;
	}
	plugins.jasperPluginRMI.runReport('Sistemas',nom_reporte ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{psol_id:sol_id})
}