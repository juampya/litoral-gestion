/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3437EEC6-FB64-4C3A-90F9-008AB763342F"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"10E768BA-6A98-4436-A794-482256E00F81",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C2422BC0-1F2B-4B69-A597-D372553855A5"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"4672FDDC-CF01-49DA-8162-0A5066C332F1"}
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
 * @properties={typeid:24,uuid:"2365C66A-8A2E-45FD-8C3D-243881F961AC"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=scopes.globals.mx_empresa_id
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
