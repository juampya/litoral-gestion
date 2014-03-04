/**
 * @properties={typeid:24,uuid:"8D19BF91-0BFB-4ACA-A853-51E9E9FC260F"}
 */
function crearFormulario() 
{
	var qryMat = ""
	if(globals.vg_matriculado != null && globals.vg_matriculado != 0)
	{
		qryMat = " and b.mat_id = " + globals.vg_matriculado
	}
	var qry = 
	"select b.mat_id as id, b.mat_nro_matricula as matricula, b.mat_nombre as nombre, sum(a.mov_importe) as saldo, 0 as chk " +
	"from mat_movimientos as a, mat_matriculados as b " +
	"where a.mov_estado = 0 and b.mat_estado != 2  and a.mat_id = b.mat_id " + qryMat + " group by b.mat_id"

	/** @type {JSDataSet<id:number, matricula:number, nombre:text, saldo:number, chk:number>}*/
	var ds = databaseManager.getDataSetByQuery('sistemas', qry, new Array(), -1);

	
	var success = history.removeForm("saldosGlobales")
	if(success) {solutionModel.removeForm("saldosGlobales")}
	
 	var uri = ds.createDataSource('_tmp_saldosGlobales', [JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER]);
	
	var myForm = solutionModel.newForm('saldosGlobales', uri, null, true, 800, 600);
	myForm.extendsForm = 'mat_saldos_globales_sm'
	myForm.navigator = SM_DEFAULTS.NONE
	myForm.styleClass = 'table'
	myForm.styleName = 'id_style'


	
	var sg_matricula = myForm.newTextField('matricula', 20, 200, 120, 20)
	sg_matricula.editable = false
	sg_matricula.horizontalAlignment = SM_ALIGNMENT.RIGHT
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
		
	var sg_chk = myForm.newCheck('chk',60,200,50,20)
	sg_chk.editable = true
	sg_chk.horizontalAlignment = SM_ALIGNMENT.CENTER
	sg_chk.titleText = 'Pagar'
	sg_chk.anchors = SM_ANCHOR.ALL
	sg_chk.styleClass = 'table_field'
		

		
	var tmp_total_pendiente 	= 0

	for(var i=1; i<=ds.getMaxRowIndex();i++)
	{
		ds.rowIndex = i
		tmp_total_pendiente 	+= ds.saldo

	}
	
	forms['saldosGlobales']['vl_cantidad']	= ds.getMaxRowIndex()
	forms['saldosGlobales']['vl_total_saldo']	= tmp_total_pendiente

		
	forms['saldosGlobales'].controller.show();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"29CAD7FF-5F4D-4C68-849C-4064DC2549F4"}
 */
function onShow(firstShow, event) 
{
	crearFormulario()
}
