/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0CCB5C78-34BF-45DC-9009-2727ED3D3CF5",variableType:4}
 */
var vl_es_reliquidacion = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"63D98419-56CB-41B9-8CCE-BCE6C8A605FB",variableType:4}
 */
var vl_mes = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8E1016D9-F511-488C-A663-23F81E75F637",variableType:4}
 */
var vl_anio = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0FFF1A26-9688-4634-B951-6439EDA2FF83",variableType:4}
 */
var vl_cant = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D17FF7F-3E7F-4D6D-89B9-7DE37BC270BE",variableType:8}
 */
var vl_importe_total = 0.0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0D06524B-69FB-4F4F-B053-FBA92AD02859",variableType:8}
 */
var vl_importe_devolucion = 0.0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D2892753-C998-42D8-BDC9-6ECF3A8533C6",variableType:4}
 */
var vl_cant_devol = 0
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B2BD4FD9-CB3E-466F-B531-35F8C295F220"}
 */
function onActionVolver(event) 
{
	foundset.mat_movimientos_aux_to_mat_movimientos_det_aux.deleteAllRecords()
	foundset.deleteAllRecords()
	forms.mat_liquidacion.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F7A74C46-AFA6-4445-94AC-AB2ED5ECFDBB"}
 */
function onShow(firstShow, event) 
{
	elements.bnr_reliq.text = "Liquidacion Nueva"
	if(vl_es_reliquidacion == 1)
	{
		elements.bnr_reliq.text = "Reliquidacion"	
	}
	calcularTotales()
	elements.tabs.removeAllTabs()
	elements.tabs_1.removeAllTabs()
	crearFormularioConceptos()
	crearFormularioDevoluciones()
}

/**
 * @properties={typeid:24,uuid:"1F3C7E06-0D8B-4E2D-B786-57BB7C6B8353"}
 * @AllowToRunInFind
 */
function calcularTotales()
{
	vl_cant_devol = 0
	vl_importe_devolucion = 0
	vl_cant = 0
	vl_importe_total = 0
	controller.find()
	tmp_id = globals.vg_nro_tmp
	var cant = controller.search()
	if(cant > 0)
	{
		for (var i = 1; i <= foundset.getSize(); i++) 
		{
			var rec = foundset.getRecord(i)
			vl_cant++
			vl_importe_total = vl_importe_total + rec.mov_importe
			
		}
		
		/** @type {JSFoundset<db:/sistemas/mat_movimientos_det_aux>}*/
		var fs_res = databaseManager.getFoundSet('sistemas','mat_movimientos_det_aux')
		fs_res.find()
		fs_res.tmp_id = globals.vg_nro_tmp
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5FB39FAC-9503-4713-9869-510A26E1A1D6"}
 * @AllowToRunInFind
 */
function onActionConfirmar(event) 
{
	if(vl_es_reliquidacion == 1)
	{
		/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
		var fs_movim = databaseManager.getFoundSet('sistemas','mat_movimientos')
		fs_movim.find()
		fs_movim.mov_anio_emision = vl_anio
		fs_movim.mov_mes_emision = vl_mes	
		fs_movim.mov_estado = 0
		var cant = fs_movim.search()
		if(cant > 0)
		{
			fs_movim.mat_movimientos_to_mat_movimientos_det.deleteAllRecords()
			fs_movim.deleteAllRecords()
		}
	}
	
	for (var i = 1; i <= foundset.getSize(); i++) 
	{
		var rec = foundset.getRecord(i)
		/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
		var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
		fs_mov.newRecord()
		fs_mov.mov_anio_emision = rec.mov_anio_emision
		fs_mov.mov_descripcion = rec.mov_descripcion
		fs_mov.mov_estado = rec.mov_estado
		fs_mov.mov_fecha_cobro = rec.mov_fecha_cobro
		fs_mov.mov_fecha_emision = rec.mov_fecha_emision
		fs_mov.mat_id = rec.mat_id
		fs_mov.mov_importe = rec.mov_importe
		fs_mov.mov_mes_emision = rec.mov_mes_emision
		fs_mov.mov_tipo_de_movimiento = rec.mov_tipo_de_movimiento
		fs_mov.mov_grab_fec = rec.mov_grab_fec
		fs_mov.mov_grab_ope = rec.mov_grab_ope
		databaseManager.saveData(fs_mov)
		for(var j = 1; j <= foundset.mat_movimientos_aux_to_mat_movimientos_det_aux.getSize(); j++) 
		{
			var rec1 = foundset.mat_movimientos_aux_to_mat_movimientos_det_aux.getRecord(j)
			/** @type {JSFoundset<db:/sistemas/mat_movimientos_det>}*/
			var fs_det = databaseManager.getFoundSet('sistemas','mat_movimientos_det')
			fs_det.newRecord()
			fs_det.det_importe = rec1.det_importe
			fs_det.det_importe_original = rec1.det_importe_original
			fs_det.ingr_id = rec1.ingr_id
			fs_det.mov_id = fs_mov.mov_id
			fs_det.res_id = rec1.res_id
			databaseManager.saveData(fs_det)

		}
	}
	foundset.mat_movimientos_aux_to_mat_movimientos_det_aux.deleteAllRecords()
	foundset.deleteAllRecords()
	forms.mat_liquidacion.controller.show()
}

/**
 * @properties={typeid:24,uuid:"AE0C7C7C-FB1E-4F65-83AD-F4E357753AE2"}
 */
function crearFormularioConceptos() 
{

	
	var qry = 
		"select b.ingr_nombre as concepto, count(*) as cantidad, sum(a.det_importe) as total " +
		"from mat_movimientos_det_aux as a, mat_ingresos as b " +
		"where a.ingr_id = b.ingr_id and tmp_id = " + globals.vg_nro_tmp +
		" group by a.ingr_id " 

	/** @type {JSDataSet<concepto:number, cantidad:number, total:text>}*/
	var ds = databaseManager.getDataSetByQuery('sistemas', qry, new Array(), -1);

	
	var success = history.removeForm("totConceptos")
	if(success) {solutionModel.removeForm("totConceptos")}
	
 	var uri = ds.createDataSource('_tmp_totConceptos', [JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER]);
	
	var myForm = solutionModel.newForm('totConceptos', uri, null, true, elements.tabs.getWidth(), elements.tabs.getHeight());
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
		
	elements.tabs.addTab(forms['totConceptos'], "Total a Cobrar por Concepto")

}

/**
 * @properties={typeid:24,uuid:"63019C21-D0D9-4C01-9D00-DE8895FD11C1"}
 */
function crearFormularioDevoluciones() 
{

	
	var qry = 
		"select b.ingr_nombre as concepto, count(*) as cantidad, sum(a.det_importe) as total " +
		"from mat_movimientos_det_aux as a, mat_ingresos as b " +
		"where a.ingr_id = b.ingr_id and tmp_id = " + globals.vg_nro_tmp + " and res_id > 0 " +
		" group by a.ingr_id " 

	/** @type {JSDataSet<concepto:text, cantidad:number, total:number>}*/
	var ds = databaseManager.getDataSetByQuery('sistemas', qry, new Array(), -1);

	
	var success = history.removeForm("totDevoluciones")
	if(success) {solutionModel.removeForm("totDevoluciones")}
	
 	var uri = ds.createDataSource('_tmp_totDevoluciones', [JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER]);
	
	var myForm = solutionModel.newForm('totDevoluciones', uri, null, true, elements.tabs.getWidth(), elements.tabs.getHeight());
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
		
	elements.tabs_1.addTab(forms['totDevoluciones'],"Devoluciones Realizadas")
	
}


