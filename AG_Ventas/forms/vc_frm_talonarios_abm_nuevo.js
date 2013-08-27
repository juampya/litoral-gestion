/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AF2877A2-C793-4C44-B87C-3B4924EA9FE4"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AFD170A2-C855-4DCE-80F3-9B4D2D867983",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"ED3A9016-5FCF-4905-87C6-3F855B346C52"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"732C1C9C-6707-4F4C-9BEF-CCCB6EFA0335"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"35DDF302-A7E5-4841-80E8-7FFEE8B8A7F3"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
		suc_id=1
		talonario_destino_impresion=0
		talonario_cod_comp="FAC"
		talonario_tipo_comp="A"	
		talonario_nro_intems=10
		talonario_nro_interacciones=1
		talonario_suc_comp=1
		talonario_primer_nro=1
		talonario_ultimo_nro=99999999
		talonario_actual_nro=1		
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
}
