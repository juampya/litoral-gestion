/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AEFB6152-C1CF-4883-88F4-7762CF375996",variableType:93}
 */
var vl_fec_ini = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AC90043F-4AC2-4574-ABA0-1DFD51BC9BDD",variableType:93}
 */
var vl_fec_fin = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"478FB5E6-1F74-4CFA-AAEE-C99B63D556BB",variableType:4}
 */
var vl_tipo_fecha = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0486C4ED-FE5B-4898-972B-FB558871096F",variableType:4}
 */
var vl_matriculado = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3D09ABED-06DA-4874-BC84-97C114BBF095",variableType:4}
 */
var vl_estado = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F72B1B5-3D9F-493D-BF5F-E722E9B5745F",variableType:4}
 */
var vl_tipo_movim = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"189C1944-AE3D-4F21-934A-F20FBCBD3516"}
 */
function onActionVolver(event) 
{
	globals.CargarMenu()
	forms['mat_inicio'].controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"FB42A121-B6B0-48C9-A5D1-8A0763C914C0"}
 */
function filtrar()
{
	controller.find()
	mat_id = vl_matriculado
	if(vl_estado != null && vl_estado != 3)
	{mov_estado = vl_estado}
	if(vl_tipo_movim != null && vl_tipo_movim != 3)
	{mov_tipo_de_movimiento = vl_tipo_movim}
	if(vl_tipo_fecha == 0)
	{
		mov_fecha_emision = utils.dateFormat(vl_fec_ini, 'yyyy-MM')+'-01 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM')+'-28 23:59:59|yyyy-MM-dd HH:mm:ss'
	}
	else
	{
		mov_fecha_cobro = utils.dateFormat(vl_fec_ini, 'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fec_fin, 'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
	}
	controller.search()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"770B6B2E-0DC3-44BB-B261-72E91BBDD571"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		vl_matriculado = null
		vl_estado = 3
		vl_tipo_movim = 3
		vl_tipo_fecha = 0
		vl_fec_ini = application.getServerTimeStamp()
		vl_fec_fin = application.getServerTimeStamp()
		filtrar()
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61F0CDBF-46EF-4560-ACD4-C8847CDF9C4A"}
 */
function onActionDetalle(event) 
{
	forms.mat_movimientos_detalle.controller.show()
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
 * @properties={typeid:24,uuid:"389A8F45-F3C3-490B-A3A0-A9D2EDFC56CA"}
 */
function onDataChangeTipoFecha(oldValue, newValue, event) 
{
	
	if(vl_tipo_fecha == 1)
	{
		elements.vl_fec_ini.format = "dd-MM-yyyy"
		elements.vl_fec_fin.format = "dd-MM-yyyy"	
	}
	else
	{
		elements.vl_fec_ini.format = "MM-yyyy"
		elements.vl_fec_fin.format = "MM-yyyy"	
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E99BD59-DC8C-433B-B152-A6FFC348B4A4"}
 */
function onActionNuevo(event) 
{
	globals.ventanaFormulario("nuevoMovim","Litoral Gestion",forms.mat_movimientos_nuevo.controller.getName())
}


/**
 * @properties={typeid:24,uuid:"469AFF18-396D-41CC-828C-C0D2D6F1F161"}
 */
function crearFormularioConceptos() 
{
	var args = new Array()
	args.push(utils.dateFormat(vl_fec_ini, 'yyyy'))
	args.push(utils.dateFormat(vl_fec_fin, 'yyyy'))
	args.push(utils.dateFormat(vl_fec_ini, 'MM'))
	args.push(utils.dateFormat(vl_fec_fin, 'MM'))
	
	var qry='select c.mov_anio_emision as anio, '+
			'		c.mov_mes_emision as mes, '+
			'		a.ingr_id as cod, '+
			'		b.ingr_nombre as concepto, '+
			'	    count(*) as cantidad, '+
			'	    sum(a.det_importe) as total '+
			'from mat_movimientos_det as a '+
			'inner join mat_movimientos as c on a.mov_id = c.mov_id '+
			'inner join mat_ingresos as b on a.ingr_id = b.ingr_id '+
			'where c.mov_anio_emision between ? and ? '+
			'and c.mov_mes_emision between ? and ? '+
			'group by c.mov_mes_emision,c.mov_anio_emision,a.ingr_id' 

	/** @type {JSDataSet<anio:Number, mes:Number, cod:Number, concepto:number, cantidad:number, total:text>}*/
	var ds = databaseManager.getDataSetByQuery('sistemas', qry, args, -1);

	
	var success = history.removeForm("totConceptos")
	if(success) {solutionModel.removeForm("totConceptos")}
	
 	var uri = ds.createDataSource('_tmp_totConceptos', [JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER]);
	
	var myForm = solutionModel.newForm('totConceptos', uri, null, true, 800, 600);
	myForm.extendsForm = 'mat_movimientos_x_conceptos_sm'
	myForm.navigator = SM_DEFAULTS.NONE
	myForm.styleClass = 'table'
	myForm.styleName = 'id_style'

	var sg_mes = myForm.newTextField('mes', 20, 200, 40, 20)
	sg_mes.editable = false
	sg_mes.horizontalAlignment = SM_ALIGNMENT.CENTER
	sg_mes.titleText = 'Mes'	
	sg_mes.anchors = SM_ANCHOR.ALL
	sg_mes.styleClass = 'table_field'	
	sg_mes.format = "00"
	
	var sg_anio = myForm.newTextField('anio', 25, 200, 60, 20)
	sg_anio.editable = false
	sg_anio.horizontalAlignment = SM_ALIGNMENT.CENTER
	sg_anio.titleText = 'Año'	
	sg_anio.anchors = SM_ANCHOR.ALL
	sg_anio.styleClass = 'table_field'
	sg_anio.format = "0000"
		
	var sg_cod = myForm.newTextField('cod', 30, 200, 60, 20)
	sg_cod.editable = false
	sg_cod.horizontalAlignment = SM_ALIGNMENT.CENTER
	sg_cod.titleText = 'Cód.'	
	sg_cod.anchors = SM_ANCHOR.ALL
	sg_cod.styleClass = 'table_field'
		
	var sg_concepto = myForm.newTextField('concepto', 35, 200, 200, 20)
	sg_concepto.editable = false
	sg_concepto.horizontalAlignment = SM_ALIGNMENT.LEFT
	sg_concepto.titleText = 'Concepto'	
	sg_concepto.anchors = SM_ANCHOR.ALL
	sg_concepto.styleClass = 'table_field'	
	
	var sg_cantidad = myForm.newTextField('cantidad', 40, 200, 60, 20)
	sg_cantidad.editable = false
	sg_cantidad.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_cantidad.titleText = 'Cantidad'	
	sg_cantidad.anchors = SM_ANCHOR.ALL
	sg_cantidad.styleClass = 'table_field'
	
	var sg_total = myForm.newTextField('total', 50, 200, 100, 20)
	sg_total.editable = false
	sg_total.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_total.titleText = 'Total $'
	sg_total.anchors = SM_ANCHOR.ALL
	sg_total.styleClass = 'table_field'	
	sg_total.format = "#,###.00"	
	
//	var tmp_total_pendiente 	= 0
//	var tmp_total_cobrado 		= 0
//	var tmp_total				= 0
//	for(var i=1; i<=ds.getMaxRowIndex();i++){
//		ds.rowIndex = i
//		tmp_total_pendiente 	+= ds.pendiente
//		tmp_total_cobrado 		+= ds.cobrado
//		tmp_total 				+= ds.total
//	}
	
//	forms['matriculados']['vl_cantidad']	=ds.getMaxRowIndex()
//	forms['matriculados']['vl_total']		=tmp_total
//	forms['matriculados']['vl_pendiente']	=tmp_total_pendiente
//	forms['matriculados']['vl_cobrado']	=tmp_total_cobrado
		
	forms['totConceptos'].controller.show()
}