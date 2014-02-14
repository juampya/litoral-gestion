/**
 * @properties={typeid:24,uuid:"EFF02F81-1C48-45AC-9A0D-45E248A0E244"}
 */
function crearFormulario() 
{

	/** @type {JSDataSet<mes:number, anio:number, nom:text, pendiente:number, cobrado:number, total:number, alta:text, ope:text>}*/
	var ds = databaseManager.getDataSetByQuery('socios', getQuery(), new Array(), -1);

	
	var success = history.removeForm("socios")
	if(success) {solutionModel.removeForm("socios")}
	
 	var uri = ds.createDataSource('_tmp_socios', [JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.TEXT,JSColumn.TEXT]);
	
	var myForm = solutionModel.newForm('socios', uri, null, true, 800, 600);
	myForm.extendsForm = 'soc_cuota_liquidacion_sm'
	myForm.navigator = SM_DEFAULTS.NONE
	myForm.styleClass = 'table'
	myForm.styleName = 'id_style'


	
	var sg_mes = myForm.newTextField('nom', 20, 200, 120, 20)
	sg_mes.editable = false
	sg_mes.horizontalAlignment = SM_ALIGNMENT.LEFT
	sg_mes.titleText = 'Mes'	
	sg_mes.anchors = SM_ANCHOR.ALL
	sg_mes.styleClass = 'table_field'	
	
	var sg_anio = myForm.newTextField('anio', 20, 200, 120, 20)
	sg_anio.editable = false
	sg_anio.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_anio.titleText = 'Año'	
	sg_anio.anchors = SM_ANCHOR.ALL
	sg_anio.styleClass = 'table_field'
	
	var sg_pendiente = myForm.newTextField('pendiente', 50, 200, 120, 20)
	sg_pendiente.editable = false
	sg_pendiente.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_pendiente.titleText = 'Pendiente'
	sg_pendiente.anchors = SM_ANCHOR.ALL
	sg_pendiente.styleClass = 'table_field'	
	sg_pendiente.format = "#,###.00"	
		
		
	var sg_cobrado = myForm.newTextField('cobrado', 60, 200, 120, 20)
	sg_cobrado.editable = false
	sg_cobrado.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_cobrado.titleText = 'Cobrado'
	sg_cobrado.anchors = SM_ANCHOR.ALL
	sg_cobrado.styleClass = 'table_field'
	sg_cobrado.format = "#,###.00"	
		
	var sg_total = myForm.newTextField('total', 60, 200, 120, 20)
	sg_total.editable = false
	sg_total.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_total.titleText = 'Total'
	sg_total.anchors = SM_ANCHOR.ALL
	sg_total.styleClass = 'table_field'
	sg_total.format = "#,###.00"	
		
	var sg_alta = myForm.newTextField('alta', 60, 200, 120, 20)
	sg_alta.editable = false
	sg_alta.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_alta.titleText = 'Grabacion'
	sg_alta.anchors = SM_ANCHOR.ALL
	sg_alta.styleClass = 'table_field'

		
	var sg_operador = myForm.newTextField('ope', 60, 200, 120, 20)
	sg_operador.editable = false
	sg_operador.horizontalAlignment = SM_ALIGNMENT.LEFT
	sg_operador.titleText = 'Operador'
	sg_operador.anchors = SM_ANCHOR.ALL
	sg_operador.styleClass = 'table_field'


	
	var tmp_total_pendiente 	= 0
	var tmp_total_cobrado 		= 0
	var tmp_total				= 0
	for(var i=1; i<=ds.getMaxRowIndex();i++){
		ds.rowIndex = i
		tmp_total_pendiente 	+= ds.pendiente
		tmp_total_cobrado 		+= ds.cobrado
		tmp_total 				+= ds.total
	}
	forms['socios']['vl_cantidad']	=ds.getMaxRowIndex()
	forms['socios']['vl_total']		=tmp_total
	forms['socios']['vl_pendiente']	=tmp_total_pendiente
	forms['socios']['vl_cobrado']	=tmp_total_cobrado
		
	forms['socios'].controller.show();

}


/**
 * @properties={typeid:24,uuid:"E77CE400-46C6-4792-839F-237F4C1013EF"}
 */
function getQuery()
{
	if(globals.vg_soc_anio_inicial == null){
		globals.vg_soc_anio_inicial 	= application.getServerTimeStamp().getFullYear()
	}
	if(globals.vg_soc_anio_final == null){
		globals.vg_soc_anio_final 		= application.getServerTimeStamp().getFullYear()
	}
	
	var meses = 
	 "(case mes " +
	 " when 1 then 'Enero'  " +
	 " when 2 then 'Febrero'" +
	 " when 3 then 'Marzo' " +
	 " when 4 then 'Abril' " +
	 " when 5 then 'mayo' " +
	 " when 6 then 'Junio'  " +
	 " when 7 then 'Julio'" +
	 " when 8 then 'Agosto' " +
	 " when 9 then 'Septiembre' " + 
	 " when 10 then 'Octubre' " +
	 " when 11 then 'Noviembre' " +
	 " when 12 then 'Diciembre' " +       
	 " end) as nom"	
	
	
	var qry = 
	"select mes, anio, " + meses + ", sum(pendiente) as pendiente, sum(cobrado) as cobrado, (sum(pendiente) + sum(cobrado)) as total ,DATE_FORMAT(grupo_grab_fec,'%d-%m-%Y') as alta, us_nombre as ope from " + 
	"( " +
	"(SELECT MONTH(grupo_fecha_emision) as mes, YEAR(grupo_fecha_emision) as anio,  sum(grupo_importe) as pendiente, 0 as cobrado, grupo_grab_fec, grupo_grab_ope  " +
	"FROM socios.soc_cuotas_grupos " +
	"where grupo_estado = 0 AND YEAR(grupo_fecha_emision)>="+globals.vg_soc_anio_inicial+" AND YEAR(grupo_fecha_emision)<="+globals.vg_soc_anio_final +" "+
	"group by MONTH(grupo_fecha_emision),YEAR(grupo_fecha_emision) order by YEAR(grupo_fecha_emision) asc,MONTH(grupo_fecha_emision) asc) " +
	"union " +
	"(SELECT MONTH(grupo_fecha_emision) as mes, YEAR(grupo_fecha_emision) as anio,  0 as pendiente, sum(grupo_importe) as cobrado, grupo_grab_fec, grupo_grab_ope  " +
	"FROM socios.soc_cuotas_grupos " + 
	"where grupo_estado = 1 AND YEAR(grupo_fecha_emision)>="+globals.vg_soc_anio_inicial+" AND YEAR(grupo_fecha_emision)<="+globals.vg_soc_anio_final +" "+
	"group by MONTH(grupo_fecha_emision),YEAR(grupo_fecha_emision) order by YEAR(grupo_fecha_emision) asc,MONTH(grupo_fecha_emision) asc) " +
	") as aux, Interdata.adn_usuarios where grupo_grab_ope = us_id group by mes, anio order by anio asc, mes asc " 
	
	return qry
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"37E4B6FA-033D-4F9C-99D2-A978A1F35C95"}
 */
function onShow(firstShow, event) 
{
	crearFormulario() 
}