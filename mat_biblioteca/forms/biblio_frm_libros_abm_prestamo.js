/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"12348748-56FB-48D1-97E2-007472951E86"}
 */
var vl_titulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5D1C6CAD-F83C-4597-ABD9-0BE3149B5605",variableType:4}
 */
var vl_nuevo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B6395129-8E7B-46DE-A9A5-44D993974B85"}
 */
var vl_frm_anterior = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A859DAC6-A7B5-47A7-B186-9C16DEAD5E28"}
 */
function onActionAceptar(event) 
{
	if(mat_rel_mat_libros_to_biblio_libros.libro_estado == 0)
	{
		mat_rel_mat_libros_to_biblio_libros.libro_estado = 1
	}
	else
	{
		mat_rel_mat_libros_to_biblio_libros.libro_estado = 0
	}
	
	databaseManager.saveData()
	mat_rel_mat_libros_to_biblio_libros.rel_id = rel_id
	databaseManager.saveData()
	
	application.getWindow("libros").hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DEC58AA7-9BC1-49A7-9946-9F75ED3253CE"}
 */
function onActionCancelar(event) 
{
	databaseManager.revertEditedRecords()
	application.getWindow("libros").hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"781BD527-BF96-44E8-942B-C8DD8F92B77D"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) 
{
	elements.lblmensaje1.visible = false
	elements.lblmensaje2.visible = false
	elements.btn_grabar.enabled  = false
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"88C42322-702C-4404-8A39-2506056AFA87"}
 */
function onHide(event) 
{
	databaseManager.revertEditedRecords()
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"CCCB151F-B69C-44A4-92D7-0F3170E6A53A"}
 */
function onActionBorrar(event) 
{
	globals.VentanaGenerica(globals.ag_usuariovigente.usu_id,'Atención', "Desea Borrar el Registro.", 'info', controller.getName(), 'No',null,"Si","borrarRegistro", null, null, null, null) 
}

/**
 * @properties={typeid:24,uuid:"5F8B02FD-407C-4A13-A710-606F7064BABA"}
 */
function borrarRegistro()
{
	eliminado = 1
	eliminado_usu_id = scopes.globals.mx_usuario_id
	eliminado_fecha  = application.getServerTimeStamp()
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
	
	//controller.deleteRecord()
	application.getWindow("libros").hide()
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
 * @properties={typeid:24,uuid:"BB5FB6F3-9F32-449A-A8DB-235B365DC8D0"}
 * @AllowToRunInFind
 */
function ControlarEstadoMatriculado(oldValue, newValue, event) 
{
	switch (mat_rel_mat_libros_to_mat_matriculados.mat_estado)
	{
		case 0:
			elements.lblmensaje1.text    = "MATRICULADO INACTIVO"
			elements.lblmensaje1.font    = "Tahoma,1,18"
			elements.lblmensaje1.fgcolor = '#ff0000'
			elements.lblmensaje2.text    = ""
			elements.lblmensaje1.visible = true
			elements.lblmensaje2.visible = false
			elements.btn_grabar.enabled  = false
		break;
		case 1:
			elements.lblmensaje1.text    = "MATRICULADO ACTIVO"
			elements.lblmensaje1.font    = "Tahoma,1,18"
			elements.lblmensaje1.fgcolor = '#004080'	
			elements.lblmensaje1.visible = true
			elements.lblmensaje2.text    = ""
			elements.lblmensaje2.visible = false
			elements.btn_grabar.enabled  = true
			ControlaCuotas()
		break;
		case 2:
			elements.lblmensaje1.text    = "MATRICULADO DADO DE BAJA"
			elements.lblmensaje1.font    = "Tahoma,1,18"
			elements.lblmensaje1.fgcolor = '#ff0000'
			elements.lblmensaje2.text    = ""
			elements.lblmensaje1.visible = true
			elements.lblmensaje2.visible = false
			elements.btn_grabar.enabled  = false
		break;
		case 3:
			elements.lblmensaje1.text    = "MATRICULADO PENDIENTE"
			elements.lblmensaje1.font    = "Tahoma,1,18"
			elements.lblmensaje1.fgcolor = '#ff0000'
			elements.lblmensaje2.text    = ""
			elements.lblmensaje1.visible = true
			elements.lblmensaje2.visible = false
			elements.btn_grabar.enabled  = false
		break;
		case 4:
			elements.lblmensaje1.text    = "MATRICULADO SUSP.ART.35 INC.H"
			elements.lblmensaje1.font    = "Tahoma,1,18"
			elements.lblmensaje1.fgcolor = '#ff0000'
			elements.lblmensaje2.text    = ""
			elements.lblmensaje1.visible = true
			elements.lblmensaje2.visible = false
			elements.btn_grabar.enabled  = false
		break;
		default:
			elements.lblmensaje1.text    = "MATRICULADO INACTIVO"
			elements.lblmensaje1.font    = "Tahoma,1,18"
			elements.lblmensaje1.fgcolor = '#ff0000'
			elements.lblmensaje2.text    = ""
			elements.lblmensaje1.visible = true
			elements.lblmensaje2.visible = false
			elements.btn_grabar.enabled  = false
		break;
	}
		
	return true
}


/**
 * @properties={typeid:24,uuid:"BFF062FF-051D-4F89-B7C6-96D0CD927324"}
 * @AllowToRunInFind
 */
function ControlaCuotas()
{
	/** @type {JSFoundset<db:/sistemas/mat_movimientos>}*/
	var fs_mov = databaseManager.getFoundSet('sistemas','mat_movimientos')

	/**@type {Number}*/
	var tmp_cant = 0
		
	fs_mov.find()
	fs_mov.mat_id = mat_id
	fs_mov.search()
	fs_mov.sort('mov_anio_emision desc,mov_mes_emision desc')
	
	for(var j = 1;j<=databaseManager.getFoundSetCount(fs_mov);j++)
	{
		/**@type {JSRecord}*/
		var rec1 = fs_mov.getRecord(j)
		
		switch (rec1.mov_estado)
		{
			case 0:
				tmp_cant++
			break;
			case 2:
				tmp_cant++
			break;
			case 1:
				j = databaseManager.getFoundSetCount(fs_mov)+1
			break;
		}
	}
	
	if(tmp_cant > 2)
	{
		elements.lblmensaje1.text    = "MATRICULADO CON MAS DE DOS CUOTAS IMPAGAS"
		elements.lblmensaje1.font    = "Tahoma,1,18"
		elements.lblmensaje1.fgcolor = '#ff0000'
		elements.lblmensaje2.text    = "PARA PODER SACAR UN LIBRO DEBE PONERSE AL DÍA"
		elements.lblmensaje2.font    = "Tahoma,1,18"
		elements.lblmensaje2.fgcolor = '#ff0000'
		elements.lblmensaje1.visible = true
		elements.lblmensaje2.visible = true
		elements.btn_grabar.enabled  = false
	}
	else
	{
		elements.lblmensaje1.text    = "MATRICULADO AL DIA Y ACTIVO"
		elements.lblmensaje1.font    = "Tahoma,1,18"
		elements.lblmensaje1.fgcolor = '#004080'
		elements.lblmensaje2.text    = ""
		elements.lblmensaje1.visible = true
		elements.lblmensaje2.visible = true
		elements.btn_grabar.enabled  = true
	}
}
/**
 * @properties={typeid:24,uuid:"14C6D6EA-E959-4005-8D17-85B4D119B555"}
 */
function onDataChangeDiasPrestamo() 
{
	if(rel_fecha_salida!=null && rel_dias_prestamo!=null)
	{
		calc_libro_fecha_est_devol= plugins.DateUtils.addDays(rel_fecha_salida,rel_dias_prestamo)
	}
	else
	{
		calc_libro_fecha_est_devol= null
	}
}
