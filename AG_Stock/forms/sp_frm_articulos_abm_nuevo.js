/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7AFF8FBA-511E-4181-B3E3-83F52EF0335E"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F7060D99-3DBC-4018-A304-37430523FCA3",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"7330A2F2-2697-4330-ADC9-86581D60150C"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"94A548AC-483D-49AD-8434-2EBE0A04A9BC"}
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
 * @properties={typeid:24,uuid:"45D1E8AD-27F5-4ACA-86DF-8D3C3B83F1B5"}
 */
function onShow(firstShow, event) 
{
	if(vl_nuevo==1)
	{	
		controller.newRecord(false)
		emp_id=1
			
	}
	if(vl_nuevo==2)
	{
		controller.duplicateRecord(false)
	}
}
