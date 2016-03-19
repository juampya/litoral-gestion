/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EAD58D65-409E-447C-9FDC-952CA8C503C1",variableType:4}
 */
var vl_enviada = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2C6FBB1B-3059-4C8F-BAD3-717F0F55FB43",variableType:4}
 */
var vl_enweb = null;

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
	
	if(vl_enweb != null){mov_publicar_en_web = vl_enweb}
	if(vl_enviada != null){mov_enviado_mail = vl_enviada}
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
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
	    plugins.busy.prepare();
	}
	
	if(firstShow)
	{
		vl_matriculado = null
		vl_estado 	   = 3
		vl_tipo_movim  = 3
		vl_tipo_fecha  = 0
		vl_enweb 	   = null
		vl_fec_ini 	   = application.getServerTimeStamp()
		vl_fec_fin 	   = application.getServerTimeStamp()
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
	scopes.globals.vg_formulario_anterior = controller.getName()
	forms.mat_movimientos_detalle.controller.loadRecords(mov_id)
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
	var tmp_estado = ' and c.mov_estado <> 9 ' 
	var tmp_tipo_mov = null
	var tmp_matriculado = null
	scopes.globals.vg_fec_desde = utils.dateFormat(vl_fec_ini, 'MM') +"-"+utils.dateFormat(vl_fec_ini, 'yyyy')
	scopes.globals.vg_fec_hasta = utils.dateFormat(vl_fec_fin, 'MM') +"-"+utils.dateFormat(vl_fec_fin, 'yyyy')
	scopes.globals.vg_matriculado = vl_matriculado
	scopes.globals.vg_estado_movimiento = vl_estado
	scopes.globals.vg_tipo_movimiento = vl_tipo_movim
	
	
	var args = new Array()
		args.push(utils.dateFormat(vl_fec_ini, 'yyyy'))
		args.push(utils.dateFormat(vl_fec_fin, 'yyyy'))
		args.push(utils.dateFormat(vl_fec_ini, 'MM'))
		args.push(utils.dateFormat(vl_fec_fin, 'MM'))
	
	if(vl_estado!=null && vl_estado!=3)
	{
		tmp_estado = ' and c.mov_estado = ? '
		args.push(vl_estado)
	}
		
	if(vl_tipo_movim!=null && vl_tipo_movim !=3)
	{
		tmp_tipo_mov = ' and c.mov_tipo_de_movimiento = ? '
		args.push(vl_tipo_movim)
	}
	
	if(vl_matriculado!=null)
	{
		tmp_matriculado = ' and c.mat_id = ? '
		args.push(vl_matriculado)
	}
	
	var qry='select c.mov_anio_emision as anio, '+
			'		c.mov_mes_emision as mes, '+
			'		a.ingr_id as cod, '+
			'		b.ingr_nombre as concepto, '+
			'	    count(*) as cantidad, '+
			'	    sum(a.det_importe) as total, '+
			'	    sum(a.det_importe_cobrado) as cobrado, '+
			'	    sum(a.det_importe)-sum(a.det_importe_cobrado) as pendiente '+
			'from mat_movimientos_det as a '+
			'inner join mat_movimientos as c on a.mov_id = c.mov_id '+
			'inner join mat_ingresos as b on a.ingr_id = b.ingr_id '+
			'where c.mov_anio_emision between ? and ? '+
			'and c.mov_mes_emision between ? and ? '+ tmp_estado + tmp_tipo_mov + tmp_matriculado +
			'group by c.mov_mes_emision,c.mov_anio_emision,a.ingr_id' 

	/** @type {JSDataSet<anio:Number, mes:Number, cod:Number, concepto:number, cantidad:number, total:Number, cobrado:Number, pendiente:Number>}*/
	var ds = databaseManager.getDataSetByQuery('sistemas', qry, args, -1);

	
	var success = history.removeForm("totConceptos")
	if(success) {solutionModel.removeForm("totConceptos")}
	
 	var uri = ds.createDataSource('_tmp_totConceptos', [JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER]);
	
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
		
	var sg_cobrado = myForm.newTextField('cobrado', 50, 200, 100, 20)
	sg_cobrado.editable = false
	sg_cobrado.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_cobrado.titleText = 'Cobrado $'
	sg_cobrado.anchors = SM_ANCHOR.ALL
	sg_cobrado.styleClass = 'table_field'	
	sg_cobrado.format = "#,###.00"
		
	var sg_pendiente = myForm.newTextField('pendiente', 50, 200, 100, 20)
	sg_pendiente.editable = false
	sg_pendiente.horizontalAlignment = SM_ALIGNMENT.RIGHT
	sg_pendiente.titleText = 'Pendiente $'
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
		
	forms['totConceptos'].controller.show()
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A67A12B3-827F-46D0-A178-0AD7DE1E2475"}
 */
function onActionImprimir(event) 
{
	var fecha_inicial = null
	var fecha_final   = null
	var matriculados  = "Todos"
	var estado		  = "Todos"
	var tipo_movi	  = "Todos"
		
	if(vl_tipo_fecha == 0)
	{
		fecha_inicial = utils.dateFormat(vl_fec_ini, 'MM-yyyy')
		fecha_final   = utils.dateFormat(vl_fec_fin, 'MM-yyyy')
	}
	else
	{
		fecha_inicial = utils.dateFormat(vl_fec_ini, 'dd-MM-yyyy')
		fecha_final   = utils.dateFormat(vl_fec_fin, 'dd-MM-yyyy')
	}
	
	if(vl_matriculado!=null)
	{
		matriculados = application.getValueListDisplayValue('matriculados',mat_id)
	}
	
	if(vl_estado!=null)
	{
		estado = application.getValueListDisplayValue('estado_del_movimiento_sel',mov_estado)
	}
	
	if(vl_tipo_movim!=null)
	{
		tipo_movi = application.getValueListDisplayValue('tipo_de_movimiento',mov_tipo_de_movimiento)
	}
	
	plugins.jasperPluginRMI.runReport(foundset,'mat_movimientos.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,{pfecha_inicial:fecha_inicial, pfecha_final:fecha_final, pmatriculado:matriculados, pestado:estado, ptipo_movimiento:tipo_movi})
}

/**
 * @properties={typeid:24,uuid:"2CB4F2F6-3EBC-4085-A77A-F934A9843A96"}
 */
function onActionPublicarWEB() 
{
	if(databaseManager.getFoundSetCount(foundset)>0)
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención","Esta por publicar en la WEB todas las boletas seleccionadas.","atention",controller.getName(),"No",null,"Si","Publicar",null,null,null,null)
	}
	else
	{
		scopes.globals.ventanaAceptar("No existen datos para publicar.",controller.getName())
	}
}

/**
 * @properties={typeid:24,uuid:"54CC22D5-CE6C-46B3-883A-2102FA3890CF"}
 */
function Publicar() 
{
	var cant = databaseManager.getFoundSetCount(foundset)
	var cant_publicadas = 0
	
	for (var i = 1; i <= cant; i++) 
	{
		/**@type {JSRecord}*/
		var record = foundset.getRecord(i)
		
		if(record.mov_publicar_en_web!=1)
		{
			record.mov_publicar_en_web = 1
			cant_publicadas++
		}
	}
	
	if(cant_publicadas>0)
	{
		databaseManager.saveData(foundset)
		scopes.globals.ventanaAceptar("Se publicaron "+cant_publicadas+" boletas en la WEB.",controller.getName())
	}
	else
	{
		scopes.globals.ventanaAceptar("Las boletas seleccionadas ya se encuentran publicadas en la WEB.",controller.getName())
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"8F0B283A-8E50-49DA-99B6-87671C12796E"}
 * @AllowToRunInFind
 */
function onActionMail(event) 
{
	if(databaseManager.getFoundSetCount(foundset)>0)
	{
		globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,"Atención","Está por enviar las boletas por mail.\nSólo se enviarán 30 boletas por vez.","atention",controller.getName(),"No",null,"Si","Mail",null,null,null,null)
	}
	else
	{
		scopes.globals.ventanaAceptar("No existen boletas para enviar.",controller.getName())
	}
}

/**
 * @properties={typeid:24,uuid:"4CE9DA2F-41B6-48CC-A295-B64525FC8AD8"}
 */
function Mail()
{
	var params = {
		processFunction: Enviar,
		message: 'Enviando boletas... espere un momento por favor.',
		opacity: 0.5,
		paneColor: '#000000',
		showCancelButton: false,
	cancelButtonText: 'Stop!'
	};
	plugins.busy.block(params);
}	

/**
 * @properties={typeid:24,uuid:"DBABB987-9D6A-49C6-AE0A-B60F5E328C8F"}
 */
function Enviar()
{
	application.updateUI()
	
	var cant = databaseManager.getFoundSetCount(foundset)
	var cant_enviados = 0
	var cant_no_enviados = 0
	
	for (var i = 1; i <= cant; i++) 
	{
		/**@type {JSRecord}*/
		var record = foundset.getRecord(i)
		
		if(cant_enviados>30)
		{
			scopes.globals.ventanaAceptar("Llegó al límite de envío de 30 mails.\nRecuerde esperar un tiempo para poder continuar enviando las boletas.",controller.getName())
			plugins.busy.unblock()
			return
		}
		
		if(record.mov_enviado_mail!=1 && record.mov_publicar_en_web == 1)
		{
			scopes.globals.vg_destinatarios = record.mat_movimientos_to_mat_matriculados.mat_e_mail
			scopes.globals.vg_asunto 		= scopes.globals.ag_empresavigente.emp_nombre +"- Boleta de Pago." 
			scopes.globals.vg_cuerpo 		= " "
			scopes.globals.vg_adjuntos 		= plugins.mail.createBinaryAttachment('BoletadePago.pdf',plugins.jasperPluginRMI.runReport('sistemas','boleta_de_pago.jasper', 'BoletadePago.pdf', plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, {pmov_id:mov_id}))

			if (scopes.globals.enviarEmailPorFunciones(3,scopes.globals.vg_asunto,scopes.globals.vg_cuerpo,scopes.globals.vg_destinatarios)==true)
			{
				record.mov_enviado_mail = 1
				cant_enviados++
				databaseManager.saveData(record)
			}
			else
			{
				cant_no_enviados++
			}
		}
	}
	plugins.busy.unblock()
	if(cant_enviados==0)
	{
		scopes.globals.ventanaAceptar("No se encontraron boletas para enviar con esos parámetros.\nRecuerde que también las boletas deben estar publicadas en la WEB.",controller.getName())
	}
	else
	{
		scopes.globals.ventanaAceptar("Se enviaron "+cant_enviados+" boletas por mail.\nNo se pudieron enviar "+cant_no_enviados+" boletas.",controller.getName())
	}
}