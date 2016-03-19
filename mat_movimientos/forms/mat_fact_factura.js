/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"03351A1B-102F-417F-A208-6068BAA55B4C"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"49D86615-105E-4E1F-B1C2-CBFF4D530B80",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"428E3D6F-C702-41FC-97B7-0444138F15E6"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3698AC2D-CAD7-4567-94EC-5E2233BB8EA2"}
 * @AllowToRunInFind
 */
function onActionAceptar(event) 
{
	if(fact_det_factura_fecha==null)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','Falta fecha de Factura.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(fact_det_importe==null |fact_det_importe==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','Falta importe de Factura.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(fact_det_factura==null)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','Falta número de Factura.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(mat_id==null)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','Falta profesional.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	
	/** @type {JSFoundset<db:/sistemas/mat_rel_mat_obsoc>}*/
	var fs_mat_obsoc = databaseManager.getFoundSet('sistemas','mat_rel_mat_obsoc')
	fs_mat_obsoc.find()
	fs_mat_obsoc.mat_id = mat_id
	fs_mat_obsoc.obsoc_id = forms.mat_fact_mensual_mat_detalle.obsoc_id
	if(fs_mat_obsoc.search()>0)
	{	
		databaseManager.saveData(foundset)
		application.getWindow("caja").hide()
	}
	else
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El profesional no está inscripo en la Obra Social.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"43A06CA6-70BA-4F48-B7EC-740C373C9900"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords(foundset)
	application.getWindow("caja").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CEDE9F49-8393-4509-BC96-129B12F1671A"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		fact_id = forms.mat_fact_mensual_mat_detalle.fact_id
		//emp_id = scopes.globals.mx_empresa_id
	}
	else
	{
		if(forms.mat_fact_mensual_mat_detalle.fact_estado == 0)
		{
			elements.btn_grabar.enabled = true 
		}
		else
		{
			elements.btn_grabar.enabled = false
		}
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"F95626BE-76A9-47D3-ABEA-AF143A97C50C"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords(foundset)
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EFC52429-CEF1-4B75-8D2F-165CA64D1FF6"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atencion","Desea borrar el Registro??","atention",controller.getName(),"No",null,"Si","borrarRegistro",null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"5DF33183-3972-45E1-AC54-6EE1E0EECBD4"}
 */
function borrarRegistro()
{
	controller.deleteRecord()
	application.getWindow("caja").hide()
	//forms.sm_frm_caja.filtrar()
}
