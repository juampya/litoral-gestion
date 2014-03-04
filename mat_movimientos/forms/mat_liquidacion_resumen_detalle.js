/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"59895929-D0C4-4066-BCBE-0DE95CF8ACB4",variableType:4}
 */
var vl_es_reliquidacion = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"91B04893-F06E-4C9E-A2DC-7A2DA2A72CC2",variableType:4}
 */
var vl_mes = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0C8E3266-2456-4F17-B740-FABCAFE1D24D",variableType:4}
 */
var vl_anio = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"474059D2-809B-440C-B494-19D0ED061501",variableType:4}
 */
var vl_cant = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DD71E017-B5FB-465B-A53A-A3ED393D0FA0",variableType:8}
 */
var vl_importe_total = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D6B3CA32-AC82-4AFB-BE40-2D02B1E0BF5B",variableType:8}
 */
var vl_importe_devolucion = 0.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9E1213EC-1064-4AD8-BC54-56EAD5055B23",variableType:4}
 */
var vl_cant_devol = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F53704CF-61CE-4EBC-B5CB-638A636D28D5"}
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
 * @properties={typeid:24,uuid:"214543D2-7382-4508-BCE9-D756C9C240C8"}
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
 * @properties={typeid:24,uuid:"A4FC0A02-6E89-4E39-BC6B-8A830D0404C8"}
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
	mov_tipo_de_movimiento = 0
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
 * @properties={typeid:24,uuid:"079E5D5C-B8CB-4F3E-A405-008CD652EBC2"}
 */
function crearFormularioConceptos() 
{

	
	var qry = 
		"select b.ingr_nombre as concepto, count(*) as cantidad, sum(a.det_importe) as total " +
		"from mat_movimientos_det as a, mat_ingresos as b, mat_movimientos as c " +
		"where a.ingr_id = b.ingr_id and  a.mov_id = c.mov_id and c.mov_tipo_de_movimiento = 0 and c.mov_mes_emision = " + vl_mes + " and c.mov_anio_emision = " + vl_anio +
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
 * @properties={typeid:24,uuid:"1134E7F9-D75D-42D2-A93F-0F05F9339F36"}
 */
function crearFormularioDevoluciones() 
{

	
	var qry = 
		"select b.ingr_nombre as concepto, count(*) as cantidad, sum(a.det_importe) as total " +
		"from mat_movimientos_det as a, mat_ingresos as b, mat_movimientos as c " +
		"where a.ingr_id = b.ingr_id and res_id > 0 and c.mov_tipo_de_movimiento = 0 and a.mov_id = c.mov_id and c.mov_mes_emision = " + vl_mes + " and c.mov_anio_emision = " + vl_anio +
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
 * @properties={typeid:24,uuid:"86D0ABBC-FEE7-4946-AF74-8A51A7E171E8"}
 * @AllowToRunInFind
 */
function onActionBorrar(event) 
{
	/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
	var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
	fs_mov.find()
	fs_mov.mov_anio_emision = vl_anio 
	fs_mov.mov_mes_emision = vl_mes
	fs_mov.mov_tipo_de_movimiento = 0
	fs_mov.mov_estado = 1
	var cant = fs_mov.search()
	if(cant > 0)
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', 'Esta liquidacion tiene cuotas pagadas.\n No se puede borrar.', 'question', controller.getName(), 'Aceptar', '', null, null, null, null, null, null)		
	}
	else
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', 'Desea borrar la Liquidacion?', 'question', controller.getName(), 'No', '', 'Si', 'borrarLiquidacion', null, null, null, null)
	}	

}

/**
 * @properties={typeid:24,uuid:"358AB53A-6B1A-4BDA-9103-B15CA61BFD52"}
 * @AllowToRunInFind
 */
function borrarLiquidacion()
{
	/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
	var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')
	fs_mov.find()
	fs_mov.mov_anio_emision = vl_anio 
	fs_mov.mov_mes_emision = vl_mes
	fs_mov.mov_tipo_de_movimiento = 0
	fs_mov.search()
	for(var i=1;i<=fs_mov.getSize();i++)
	{
		var rec = fs_mov.getRecord(i)
		rec.mat_movimientos_to_mat_movimientos_det.deleteAllRecords()
	}
	fs_mov.deleteAllRecords()
	forms.mat_liquidacion.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F08118C-6DE6-43AD-B872-A3CE4AA9BA20"}
 */
function onActionMovimientos(event) 
{
	forms.mat_liquidacion_resumen_detalle_movim.controller.show()
}
