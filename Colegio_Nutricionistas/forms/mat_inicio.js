/**
 * @properties={typeid:24,uuid:"3D1B4A55-EC4D-460D-A83A-D32878D16A83"}
 */
function Salir()
{
	if(application.isInDeveloper())
	{
		application.exit()
	}
	else
	{
		application.closeSolution('LitoralGestion','InicializaArgento')
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
 * @properties={typeid:24,uuid:"46AC2DD9-3A40-41FC-9C02-AF21E56BF89F"}
 */
function movimientos()
{
	scopes.globals.SacarMenu()
	forms.mat_movimientos.controller.show()
}

/**
 * @properties={typeid:24,uuid:"DBDD4A34-C5D7-4EA0-B8D1-D64663C9AC21"}
 */
function test()
{

}
