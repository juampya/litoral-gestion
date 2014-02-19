/**
 * @properties={typeid:24,uuid:"AAEEEE63-24A8-4315-AF46-3D9E859BB92F"}
 */
function crearFormulario() 
{
	var qry = 
	"select b.mat_nro_matricula as matricula, CONCAT(b.mat_apellido, ', ', b.mat_nombre) as nombre, sum(a.mov_importe) as saldo, 0 as chk " +
	"from mat_movimientos as a, mat_matriculados as b " +
	"where a.mov_estado = 0 and b.mat_estado != 2  group by b.mat_id "

	/** @type {JSDataSet<matricula:number, nombre:text, saldo:number, chk:number>}*/
	var ds = databaseManager.getDataSetByQuery('sistemas', qry, new Array(), -1);

	
	var success = history.removeForm("saldosGlobales")
	if(success) {solutionModel.removeForm("saldosGlobales")}
	
 	var uri = ds.createDataSource('_tmp_saldosGlobales', [JSColumn.NUMBER,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER]);
	
	var myForm = solutionModel.newForm('saldosGlobales', uri, null, true, 800, 600);
	myForm.extendsForm = 'mat_saldos_globales_sm'
	myForm.navigator = SM_DEFAULTS.NONE
	myForm.styleClass = 'table'
	myForm.styleName = 'id_style'


	
	var sg_matricula = myForm.newTextField('matricula', 20, 200, 120, 20)
	sg_matricula.editable = false
	sg_matricula.horizontalAlignment = SM_ALIGNMENT.LEFT
	sg_matricula.titleText = 'Nro. Matricula'	
	sg_matricula.anchors = SM_ANCHOR.ALL
	sg_matricula.styleClass = 'table_field'	
	
	var sg_matriculado = myForm.newTextField('nombre', 20, 200, 250, 20)
	sg_matriculado.editable = false
	sg_matriculado.horizontalAlignment = SM_ALIGNMENT.LEFT
	sg_matriculado.titleText = 'Matriculado'	
	sg_matriculado.anchors = SM_ANCHOR.ALL
	sg_matriculado.styleClass = 'table_field'
	
	var sg_pendiente = myForm.newTextField('saldo', 50, 200, 120, 20)
	sg_pendiente.editable = false
	sg_pendiente.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_pendiente.titleText = 'Saldo'
	sg_pendiente.anchors = SM_ANCHOR.ALL
	sg_pendiente.styleClass = 'table_field'
	sg_pendiente.format = "#,###.00"		

		
//	var sg_total = myForm.newTextField('total', 60, 200, 120, 20)
//	sg_total.editable = false
//	sg_total.horizontalAlignment = SM_ALIGNMENT.RIGHT
//	sg_total.titleText = 'Total'
//	sg_total.anchors = SM_ANCHOR.ALL
//	sg_total.styleClass = 'table_field'
//	sg_total.format = "#,###.00"	
		
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
		
	forms['saldosGlobales'].controller.show();
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16BF6165-40DD-4436-8672-F1BA5422CD5E"}
 */
function onShow(firstShow, event) 
{
	crearFormulario()
}
