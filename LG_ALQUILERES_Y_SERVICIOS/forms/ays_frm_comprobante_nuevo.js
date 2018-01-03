/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D52FD2E7-C653-495A-9044-39CA26EC0925",variableType:4}
 */
var vl_facte_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1C1AD71C-BD44-4D65-84B4-6E76BA3A13BB",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E6CFED71-407A-4F53-9E92-AC25D767AA46",variableType:4}
 */
var vl_cantidad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4294FF51-0788-4E41-820E-133C5408BF86",variableType:8}
 */
var vl_importe_alquiler = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ABC1B348-E7A6-4107-8BA8-97A05FFDC2B9",variableType:4}
 */
var vl_contrato_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D93438F7-8881-4E9D-8483-E47840CD608D",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"90C563AA-22EF-4A9B-BA5D-07C93E26884D",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AB8435E9-80B0-438A-9054-404CC8DBDB66"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FD2DD648-E58A-48B6-90FB-A3B5D33B6211",variableType:4}
 */
var vl_numero = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"940E99B4-1C5E-442F-9109-A5ABD8D9F780",variableType:4}
 */
var vl_ptovta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BAA494BC-4098-4CA5-82B7-D3C02798B9A0"}
 */
var vl_letra = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C84A25C3-3114-41C6-A9FE-9C73D8C51195"}
 */
function onActionVolver(event) 
{
	databaseManager.revertEditedRecords()
	forms[vl_frm_anterior].controller.show()
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5DB17D54-3B38-4783-BBA8-1DBFA5110C4A"}
 */
function onActionGrabar(event)
{
	if(facte_cliente_id==null | facte_cliente_id=="")
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El campo cliente no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(facte_fecha==null | facte_fecha==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El campo fecha no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(facte_talonario==null | facte_talonario==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El campo talonario no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(vl_numero==null | vl_numero==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El número del comprobante no puede quedar vacío.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(vl_total==null | vl_total==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','El total del comprobante no puede ser cero.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	if(vl_cantidad==null | vl_cantidad==0)
	{
		scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Litoral Software','No existen items para facturar.','warning',controller.getName(),'Aceptar',null,null,null,null,null,null,null)
		return
	}
	
	vl_numero = scopes.globals.BuscaProximoNro(facte_talonario,1)
	facte_numero = vl_letra+utils.numberFormat(vl_ptovta,'0000')+utils.numberFormat(vl_numero,'00000000')+'00'
	facte_tot_total = vl_total
	facte_tot_sb	= vl_total
	
	databaseManager.saveData()
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
 * @properties={typeid:24,uuid:"BFE613A9-28C0-43DE-971C-AEB3895B9F9F"}
 */
function CambiaTalonario(oldValue, newValue, event) 
{
	vl_letra = vc_fact_enc_to_vc_talonarios.talonario_tipo_comp
	vl_ptovta = vc_fact_enc_to_vc_talonarios.talonario_suc_comp
	vl_numero = vc_fact_enc_to_vc_talonarios.talonario_actual_nro
	
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7881CC0-D357-406F-BFB6-42C71FDB4065"}
 */
function onShow(firstShow, event)
{
	if(vl_nuevo==1)
	{
		vl_letra  = null
		vl_numero = null
		vl_ptovta = null
		controller.newRecord()
		facte_cliente_id = vl_cliente
		facte_fecha = application.getServerTimeStamp()
		emp_id = scopes.globals.mx_empresa_id
		BuscoConceptos()
	}
	else
	{
		controller.loadRecords(vl_facte_id)
		vl_letra = utils.stringLeft(facte_numero,1)
		vl_ptovta = utils.stringMiddle(facte_numero,2,4)
		vl_numero = utils.stringMiddle(facte_numero,6,8)
		CalculaTotales()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E8EFEC9-41AD-4636-9D3C-750FDA18A240"}
 */
function AgregarItem(event) 
{
	vc_fact_enc_to_vc_fact_items.newRecord(false)
	vc_fact_enc_to_vc_fact_items.emp_id = scopes.globals.mx_empresa_id
}


/**
 * @properties={typeid:24,uuid:"640C857C-40EC-4242-A13D-F8C18E347557"}
 * @AllowToRunInFind
 */
function BuscoConceptos()
{
	/** @type {JSFoundSet<db:/sistemas/alqyser_contratos_conceptos>} */
	var fs_conceptos = databaseManager.getFoundSet('sistemas','alqyser_contratos_conceptos')
		fs_conceptos.find()
		fs_conceptos.contrato_id = vl_contrato_id
		fs_conceptos.search()
		
	for (var i = 1; i <= fs_conceptos.getSize(); i++) 
	{
		var record = fs_conceptos.getRecord(i);
		
		vc_fact_enc_to_vc_fact_items.newRecord(false)
		vc_fact_enc_to_vc_fact_items.facti_cantidad = 1
		vc_fact_enc_to_vc_fact_items.facti_codigo = record.concepto_id
		vc_fact_enc_to_vc_fact_items.facti_descripcion = record.alqyser_contratos_conceptos_to_alqyser_conceptos.concepto_descripcion
		if(record.concepto_id==1)
		{
			vc_fact_enc_to_vc_fact_items.facti_precio_vta=vl_importe_alquiler
			vc_fact_enc_to_vc_fact_items.facti_precio_costo=vl_importe_alquiler
		}
		else
		{
			vc_fact_enc_to_vc_fact_items.facti_precio_vta=0
			vc_fact_enc_to_vc_fact_items.facti_precio_costo=0
		}	
		vc_fact_enc_to_vc_fact_items.facti_total =vc_fact_enc_to_vc_fact_items.facti_cantidad*vc_fact_enc_to_vc_fact_items.facti_precio_vta 
	}
	
	CalculaTotales()
}

/**
 * @properties={typeid:24,uuid:"CA7F4205-7674-486C-94D6-1F97A1C6597E"}
 */
function CalculaTotales()
{
	vl_total=0
	vl_cantidad= vc_fact_enc_to_vc_fact_items.getSize()
	for (var i = 1; i <= vc_fact_enc_to_vc_fact_items.getSize(); i++) 
	{
		var record = vc_fact_enc_to_vc_fact_items.getRecord(i);
		vl_total=vl_total+record.facti_total
	} 
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C1236946-0B87-4C02-AB2D-96D0D1DB0CA4"}
 */
function onActionImprimir(event) 
{
	plugins.jasperPluginRMI.runReport('sistemas','factura.jasper' ,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pfacte_id:facte_id})
}
