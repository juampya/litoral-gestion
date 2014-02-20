/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A8205082-F0AD-4430-AEFB-53DD0235B639",variableType:4}
 */
var vl_es_reliquidacion = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB4CDAE8-C326-46F5-8D84-8E3D665237F3",variableType:4}
 */
var vl_mes = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CBB07F5B-C003-4D13-A845-D519B54ABDC2",variableType:4}
 */
var vl_anio = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BFE9480C-BDF6-4809-9BB7-38E1CB91C0F3",variableType:4}
 */
var vl_cant = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"59C6A002-83CC-4294-A24B-487F5B1680B2",variableType:8}
 */
var vl_importe_total = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A8F9D574-C981-4C0F-A01C-4DDDDCA8246A",variableType:8}
 */
var vl_importe_devolucion = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"44CB256C-10B3-4813-BBF2-88EA7C24EF5B",variableType:4}
 */
var vl_cant_devol = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"22B589F0-A797-4FE6-9052-00666CFDDFC5"}
 */
function onActionVolver(event) 
{
	forms.mat_liquidacion.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EDB36221-970C-4A83-B2F4-55A5642D2E9F"}
 */
function onShow(firstShow, event) 
{
	calcularTotales()
	elements.tabs.removeAllTabs()
	elements.tabs_1.removeAllTabs()
	crearFormularioConceptos()
	crearFormularioDevoluciones()
}

/**
 * @properties={typeid:24,uuid:"67EEB5CB-AA53-4857-96F2-0AA48F70F72F"}
 * @AllowToRunInFind
 */
function calcularTotales()
{
	vl_cant_devol = 0
	vl_importe_devolucion = 0
	vl_cant = 0
	vl_importe_total = 0
	controller.find()
	mov_anio_emision = vl_anio
	mov_mes_emision = vl_mes		
	var cant = controller.search()
	if(cant > 0)
	{
		for (var i = 1; i <= foundset.getSize(); i++) 
		{
			var rec = foundset.getRecord(i)
			vl_cant++
			vl_importe_total = vl_importe_total + rec.mov_importe
			
		}
		
		/** @type {JSFoundset<db:/sistemas/mat_movimientos_det>}*/
		var fs_res = databaseManager.getFoundSet('sistemas','mat_movimientos_det')
		fs_res.find()
		fs_res.mat_movimientos_det_to_mat_movimientos.mov_anio_emision = vl_anio
		fs_res.mat_movimientos_det_to_mat_movimientos.mov_mes_emision = vl_mes		
		fs_res.res_id = ">0"
		cant = fs_res.search()
		if(cant > 0)
		{
			for (var j = 1; j <= fs_res.getSize(); j++) 
			{
				var rec1 = fs_res.getRecord(j)
				vl_cant_devol++
				vl_importe_devolucion = vl_importe_devolucion + rec1.det_importe
				
			}			
		}
	}
	
	
}


/**
 * @properties={typeid:24,uuid:"4961E9DE-BE31-429C-ACDA-461276268D50"}
 */
function crearFormularioConceptos() 
{

	
	var qry = 
		"select b.ingr_nombre as concepto, count(*) as cantidad, sum(a.det_importe) as total " +
		"from mat_movimientos_det as a, mat_ingresos as b, mat_movimientos as c " +
		"where a.ingr_id = b.ingr_id and  a.mov_id = c.mov_id and c.mov_mes_emision = " + vl_mes + " and c.mov_anio_emision = " + vl_anio +
		" group by a.ingr_id " 

	/** @type {JSDataSet<concepto:number, cantidad:number, total:text>}*/
	var ds = databaseManager.getDataSetByQuery('sistemas', qry, new Array(), -1);

	
	var success = history.removeForm("totConceptosDet")
	if(success) {solutionModel.removeForm("totConceptosDet")}
	
 	var uri = ds.createDataSource('_tmp_totConceptosDet', [JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER]);
	
	var myForm = solutionModel.newForm('totConceptosDet', uri, null, true, elements.tabs.getWidth(), elements.tabs.getHeight());
	myForm.extendsForm = 'mat_liquidacion_conceptos_sm'
	myForm.navigator = SM_DEFAULTS.NONE
	myForm.styleClass = 'table'
	myForm.styleName = 'id_style'


	
	var sg_mes = myForm.newTextField('concepto', 20, 200, 120, 20)
	sg_mes.editable = false
	sg_mes.horizontalAlignment = SM_ALIGNMENT.LEFT
	sg_mes.titleText = 'Concepto'	
	sg_mes.anchors = SM_ANCHOR.ALL
	sg_mes.styleClass = 'table_field'	
	
	var sg_anio = myForm.newTextField('cantidad', 20, 200, 120, 20)
	sg_anio.editable = false
	sg_anio.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_anio.titleText = 'Cantidad'	
	sg_anio.anchors = SM_ANCHOR.ALL
	sg_anio.styleClass = 'table_field'
	
	var sg_pendiente = myForm.newTextField('total', 50, 200, 120, 20)
	sg_pendiente.editable = false
	sg_pendiente.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_pendiente.titleText = 'Total'
	sg_pendiente.anchors = SM_ANCHOR.ALL
	sg_pendiente.styleClass = 'table_field'	
	sg_pendiente.format = "#,###.00"	
		


	
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
		
	elements.tabs.addTab(forms['totConceptosDet'], "Total a Cobrar por Concepto")

}

/**
 * @properties={typeid:24,uuid:"B43C58B0-4D29-4FCF-B5BB-3CB6BEB9CC57"}
 */
function crearFormularioDevoluciones() 
{

	
	var qry = 
		"select b.ingr_nombre as concepto, count(*) as cantidad, sum(a.det_importe) as total " +
		"from mat_movimientos_det as a, mat_ingresos as b, mat_movimientos as c " +
		"where a.ingr_id = b.ingr_id and res_id > 0 and  a.mov_id = c.mov_id and c.mov_mes_emision = " + vl_mes + " and c.mov_anio_emision = " + vl_anio +
		" group by a.ingr_id " 

	/** @type {JSDataSet<concepto:text, cantidad:number, total:number>}*/
	var ds = databaseManager.getDataSetByQuery('sistemas', qry, new Array(), -1);

	
	var success = history.removeForm("totDevolucionesDet")
	if(success) {solutionModel.removeForm("totDevolucionesDet")}
	
 	var uri = ds.createDataSource('_tmp_totDevolucionesDet', [JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER]);
	
	var myForm = solutionModel.newForm('totDevolucionesDet', uri, null, true, elements.tabs.getWidth(), elements.tabs.getHeight());
	myForm.extendsForm = 'mat_liquidacion_devolucion_sm'
	myForm.navigator = SM_DEFAULTS.NONE
	myForm.styleClass = 'table'
	myForm.styleName = 'id_style'


	
	var sg_mes = myForm.newTextField('concepto', 20, 200, 120, 20)
	sg_mes.editable = false
	sg_mes.horizontalAlignment = SM_ALIGNMENT.LEFT
	sg_mes.titleText = 'Concepto'	
	sg_mes.anchors = SM_ANCHOR.ALL
	sg_mes.styleClass = 'table_field'	
	
	var sg_anio = myForm.newTextField('cantidad', 20, 200, 120, 20)
	sg_anio.editable = false
	sg_anio.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_anio.titleText = 'Cantidad'	
	sg_anio.anchors = SM_ANCHOR.ALL
	sg_anio.styleClass = 'table_field'
	
	var sg_pendiente = myForm.newTextField('total', 50, 200, 120, 20)
	sg_pendiente.editable = false
	sg_pendiente.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_pendiente.titleText = 'Total'
	sg_pendiente.anchors = SM_ANCHOR.ALL
	sg_pendiente.styleClass = 'table_field'	
	sg_pendiente.format = "#,###.00"	
		


	
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
		
	elements.tabs_1.addTab(forms['totDevolucionesDet'],"Devoluciones Realizadas")
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"066BC398-CD9C-45EC-9461-CBE907AB15C4"}
 */
function onActionBorrar(event) {
	// TODO Borrar liquidacion si no hay ninguna pagada
}
