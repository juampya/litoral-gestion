/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B7DAAE6B-7471-4ADF-A0B7-62ECD1C57DDA"}
 */
var vl_frm_anterior = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D54E7178-9813-456D-A12E-190E105255D3",variableType:4}
 */
var vl_nuevo = null;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"1FF0465A-20BC-411E-9976-E529C31FF26E"}
 */
function onActionCancelar(event) {
	
	databaseManager.revertEditedRecords(foundset)
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C52C6B40-9228-4FC1-BA01-F073C71C6840"}
 */
function onActionAceptar(event) 
{
	databaseManager.saveData(foundset)
	if(vl_nuevo == 1)
	{
		globals.asociaIngresosPorDefecto(mat_id)
		globals.grabarPrimerMovimiento(mat_id,application.getServerTimeStamp().getMonth() + 1,application.getServerTimeStamp().getFullYear())
	}
	forms[vl_frm_anterior].controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"D3C34D80-6F2D-4C5D-9891-2E3A3859AFEE"}
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

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5FF2DE46-3A4B-412E-93FB-B5E13FF2CF4D"}
 */
function onActionEnviarMail(event) {
	// TODO Auto-generated method stub
}