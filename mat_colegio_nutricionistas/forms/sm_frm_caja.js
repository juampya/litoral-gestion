/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A529AC3D-DB9D-4F77-A15B-59F6B81916A9",variableType:8}
 */
var vl_saldo_consolidado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"76A32376-4328-4B7E-825A-BF92AA3CBF6A",variableType:8}
 */
var vl_total_saldo_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EA3D5ACD-6DA1-4341-9FBE-53E8D3804895",variableType:8}
 */
var vl_total_haber_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E77E8CFC-B84D-41A2-9B87-BBD2460C1A39",variableType:8}
 */
var vl_total_debe_anterior = null;


/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E57D6E38-DE03-485F-94DF-A9C0CE90C368",variableType:93}
 */
var vl_fec_ini = null
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C0950F9C-2647-4B24-BA49-52BAD945FB93",variableType:93}
 */
var vl_fec_fin = null
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A2242639-2ADD-4B65-8670-4BCA1434F334",variableType:4}
 */
var vl_tipo_caja = null
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"07A45333-0557-4532-B41D-F1C6EDDBA3F2",variableType:4}
 */
var vl_matriculado = null

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D056B14-04F3-4787-827B-11094DC17AF2",variableType:4}
 */
var vl_concepto = null

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A7DB81D0-99DA-4F4E-B57A-B8489BA60CCE"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"72684E23-4C6E-4BAB-AC2F-B565D0566DC0",variableType:8}
 */
var vl_total_debe = null
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4995CC45-8082-4F30-B5AE-CA69AA60BCD2",variableType:8}
 */
var vl_total_haber = null

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D3793423-476F-4706-B3D4-811B8D06C36E",variableType:8}
 */
var vl_total_saldo = null

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"523ADDB4-A1A6-4CA2-ABDD-6CF74DD8D22B"}
 */
function onActionVolver(event) 
{
	scopes.globals.CargarMenu()
	forms['mat_inicio'].controller.show()
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"6864012A-0ABE-4B42-AC2D-C7667DB8A50A"}
 */
function onActionNuevoIngreso(event) 
{
	forms.sm_frm_caja_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_caja_abm.vl_nuevo = 1
	forms.sm_frm_caja_abm.vl_titulo = "Ingreso"
	
	var win = application.createWindow("caja", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_caja_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"DDD62059-0B2D-4E91-8FC8-691DF359E1B5"}
 */
function onActionRefrescar(event) 
{
	vl_concepto = null
	vl_matriculado = null
	vl_tipo_caja = 2
	filtrar()	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"8430984F-35CB-4AB1-9EF5-377F3229B1F1"}
 */
function onActionDetalle(event) 
{
	forms.sm_frm_caja_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_caja_abm.vl_nuevo = 0
	forms.sm_frm_caja_abm.vl_titulo = "Modifica"
	forms.sm_frm_caja_abm.controller.loadRecords(caja_id)
	
	var win = application.createWindow("caja", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_caja_abm);	
}

/**
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"4C590D8A-870F-4569-8A65-5BE7EE23A06C"}
 */
function onActionNuevoEgreso(event) 
{
	forms.sm_frm_caja_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_caja_abm.vl_nuevo = 2
	
	var win = application.createWindow("caja", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= 'Litoral Gestion';
		win.show(forms.sm_frm_caja_abm);	
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"84586BFD-9718-43AE-8A1F-A0FB53F57264"}
 */
function filtrar()
{
	controller.find()
	ingr_id = vl_concepto
	if(vl_tipo_caja != 2)
	{caja_tipo = vl_tipo_caja}
	caja_fecha = utils.dateFormat(vl_fec_ini,'yyyy-MM-dd')+' 00:00:00 ... '+utils.dateFormat(vl_fec_fin,'yyyy-MM-dd')+' 23:59:59|yyyy-MM-dd HH:mm:ss'
	controller.search()
	calcularTotales()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F7825C6D-EA66-46C9-8205-AA60570601D0"}
 */
function onShow(firstShow, event) 
{
	if(firstShow)
	{
		vl_concepto = null
		vl_fec_fin = application.getServerTimeStamp()
		vl_fec_ini = application.getServerTimeStamp()
		vl_matriculado = null
		vl_tipo_caja = 2
		filtrar()
	}
}

/**
 * @properties={typeid:24,uuid:"E36303B8-803C-4166-8B30-9C347D7E4D1F"}
 * @AllowToRunInFind
 */
function calcularTotales()
{
	/** @type {JSFoundset<db:/sistemas/mat_caja>}*/
	var fs_caja = databaseManager.getFoundSet('sistemas','mat_caja')
		fs_caja.find()
		fs_caja.ingr_id = vl_concepto
		if(vl_tipo_caja != 2)fs_caja.caja_tipo = vl_tipo_caja
		fs_caja.caja_fecha ='<'+utils.dateFormat(vl_fec_ini, 'yyyy-MM-dd')+' 00:00:00|yyyy-MM-dd HH:mm:ss'
		fs_caja.search()

	
	vl_total_debe 	  = 0
	vl_total_haber    = 0
	vl_total_saldo 	  = 0
	
	vl_total_debe_anterior  = 0
	vl_total_haber_anterior = 0
	vl_total_saldo_anterior = 0
	
	vl_saldo_consolidado    = 0
	
	for (var i = 1; i <= foundset.getSize(); i++) 
	{
		var rec = foundset.getRecord(i)
		vl_total_debe += rec.calc_caja_debe
		vl_total_haber += rec.calc_caja_haber
	}
		
	for (i = 1; i <= fs_caja.getSize(); i++) 
	{
		rec = fs_caja.getRecord(i)
		vl_total_debe_anterior  += rec.calc_caja_debe
		vl_total_haber_anterior += rec.calc_caja_haber
	}
	
	vl_total_saldo = vl_total_debe - vl_total_haber
	vl_total_saldo_anterior = vl_total_debe_anterior - vl_total_haber_anterior
	vl_saldo_consolidado = (vl_total_debe+vl_total_debe_anterior) - (vl_total_haber+vl_total_haber_anterior)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4F2B472E-57CD-4623-8D79-F8866FD2957E"}
 */
function onActionImprimir(event) {
	// TODO Auto-generated method stub
}
