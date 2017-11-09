/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0527D2DF-DEBF-4988-A0CE-71DB163E0BBD",variableType:4}
 */
var vl_concepto = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C76C0480-95DC-48C8-81D5-D47B45D6A119"}
 */
function AgregarConcepto(event) 
{
	var tmp_existe = false
	
	if(vl_concepto!=null)
	{
		for (var i = 1; i <= foundset.getSize(); i++) 
		{
			var record = foundset.getRecord(i);
			
			if(vl_concepto == record.concepto_id)
			{
				tmp_existe = true
				break
			}
		}
		if(!tmp_existe)
		{
			controller.newRecord(false)
			concepto_id = vl_concepto
			contrato_id = forms.ays_frm_contratos_datos.contrato_id
			vl_concepto = null
		}
		else
		{
			scopes.globals.ventanaAceptar("Ese Concepto ya esta cargado en el contrato.",controller.getName())
		}
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D34047AB-DF57-4550-8C0D-ACB52F679119"}
 */
function onActionBorrar(event) 
{
	var tmp_nombre = '\nConcepto: '+utils.stringTrim(alqyser_contratos_conceptos_to_alqyser_conceptos.concepto_descripcion)
	var tmp_contrato= '\nContrato: '+contrato_id.toString()
	scopes.globals.VentanaGenerica(scopes.globals.mx_usuario_id,'Borrar Registro','¿Está seguro de eliminar este concpto del Contrato?'+tmp_contrato+tmp_nombre,'question',controller.getName(),'No',null,'Si','Borrar',null,null,null,null)
}

/**
 * @properties={typeid:24,uuid:"86E5E68C-FFF8-4160-A9BD-5CB03420B7B7"}
 */
function Borrar()
{
	eliminado=1
	eliminado_fecha=application.getServerTimeStamp()
	eliminado_usu_id = scopes.globals.mx_usuario_id
	
	databaseManager.saveData()
	databaseManager.refreshRecordFromDatabase(foundset,-1)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"85FABDCA-A03D-4D44-A89E-B9530316EFDF"}
 */
function onShow(firstShow, event) 
{
	vl_concepto = null
}
