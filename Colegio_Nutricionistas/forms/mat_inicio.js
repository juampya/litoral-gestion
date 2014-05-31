/**
 * @properties={typeid:24,uuid:"3D1B4A55-EC4D-460D-A83A-D32878D16A83"}
 */
function Salir()
{
	if(application.isInDeveloper())
	{
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) 
		{
			databaseManager.revertEditedRecords()
			var solucion = application.getSolutionName()
			security.logout(solucion)
		}
		else
		{
			
			application.exit()
		}
		
	}
	else
	{
		application.exit()
	}
}

/**
 * @properties={typeid:24,uuid:"043AA580-DA71-420E-8D4C-18ACCF009085"}
 */
function generarCuota()
{
	scopes.globals.SacarMenu()
	forms.mat_liquidacion.controller.show()
}

/**
 * @properties={typeid:24,uuid:"5012ACCF-B4B3-4ABE-8AA1-784BAC28359D"}
 */
function parametros()
{
	scopes.globals.SacarMenu()
	forms.mat_parametros.controller.show()
}

/**
 * @properties={typeid:24,uuid:"28C2BD21-4004-4B82-A4D4-421AD6FC12C6"}
 */
function conceptos()
{
	scopes.globals.SacarMenu()
	forms.mat_ingresos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"6AA80D2D-D1CA-4BCF-8611-4D6F487D32A9"}
 */
function resarcimientos() 
{
	scopes.globals.SacarMenu()
	forms.mat_resarcimientos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"CEC2983A-4A27-48BD-B181-CE7068FE0C0F"}
 */
function saldosGlobales()
{
	scopes.globals.SacarMenu()
	forms.mat_saldos_globales.controller.show()
}

/**
 * @properties={typeid:24,uuid:"868DA1EB-679C-4D5E-B102-0BE61EECA5D9"}
 */
function matriculados()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_matriculados_abm.vl_frm_anterior = controller.getName()
	forms.sm_frm_matriculados_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"07189E7A-B42A-43CC-A5B9-D3B3A3933583"}
 */
function universidades()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_universidades.vl_frm_anterior = controller.getName()
	forms.sm_frm_universidades.controller.show()
}

/**
 * @properties={typeid:24,uuid:"34461ED5-A320-45B4-98CF-A59255F87071"}
 */
function titulos()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_titulos.vl_frm_anterior = controller.getName()
	forms.sm_frm_titulos.controller.show()
}


/**
 * @properties={typeid:24,uuid:"DF52DFE9-102D-488A-907B-0CAA8183DBB9"}
 */
function localidades()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_localidades.vl_frm_anterior = controller.getName()
	forms.sm_frm_localidades.controller.show()
}

/**
 * @properties={typeid:24,uuid:"46AC2DD9-3A40-41FC-9C02-AF21E56BF89F"}
 */
function movimientos()
{
	scopes.globals.SacarMenu()
	forms.mat_movimientos.controller.show()
}


/**
 * @properties={typeid:24,uuid:"13A91CBB-F8DF-4443-AE0A-D849FD58AB0F"}
 */
function departamentos()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_departamentos.vl_frm_anterior = controller.getName()
	forms.sm_frm_departamentos.controller.show()
}


/**
 * @properties={typeid:24,uuid:"5B8E9A1C-8331-4C23-8A92-AA5F514066FE"}
 */
function solicitudes()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_solicitudes.vl_frm_anterior = controller.getName()
	forms.sm_frm_solicitudes.controller.show()
}


/**
 * @properties={typeid:24,uuid:"DBDD4A34-C5D7-4EA0-B8D1-D64663C9AC21"}
 */
function test()
{
	forms.mat_form_aux_test.carga1000Matriculados()
}

/**
 * @properties={typeid:24,uuid:"EB833268-18F4-482A-8F9B-29317A9EC9A9"}
 */
function caja()
{
	scopes.globals.SacarMenu()
	forms.sm_frm_caja.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CC1C8823-6119-4285-9D42-0E9550267291"}
 * @AllowToRunInFind
 */
function onActionMenu1(event) 
{	
	scopes.globals.CargarSubMenuWeb(1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2AB73E0B-DE9B-4C61-A780-36A7A9510694"}
 */
function onActionMenu2(event) 
{
	scopes.globals.CargarSubMenuWeb(2)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"65417E83-504C-4994-85F3-8D82CB6AC5D9"}
 */
function onActionMenu3(event) 
{
	scopes.globals.CargarSubMenuWeb(3)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A6F3E0E-2D8E-4CA8-8F8C-4BA73AF74C1B"}
 */
function onActionMenu4(event) 
{
	scopes.globals.CargarSubMenuWeb(4)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C192AF41-A17B-4F1B-AD98-B728C3812461"}
 */
function onActionMenu5(event) 
{
	scopes.globals.CargarSubMenuWeb(5)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D386AD15-C29C-4963-B395-722E26215E67"}
 */
function onActionMenu6(event) 
{
	scopes.globals.CargarSubMenuWeb(6)
}
