/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"85BF5513-45C7-4ED9-ADFC-3283A9AE637D"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A00BF9DC-ADBA-411F-B686-2F62C7966AFA",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"14BF2C59-F28E-4BBB-B33E-C4878C9A2C58"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"061939BB-EB44-4DAD-9A1A-C844BDE4EC4F"}
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
 * @properties={typeid:24,uuid:"7BDA717B-58F9-4190-856E-2021DD3DFC86"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
		suc_id=1
		talonario_destino_impresion=0
		talonario_cod_comp="STK"
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
