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
	forms.mat_liquidacion.controller.show()
}

/**
 * @properties={typeid:24,uuid:"5012ACCF-B4B3-4ABE-8AA1-784BAC28359D"}
 */
function parametros()
{
	forms.mat_parametros.controller.show()
}

/**
 * @properties={typeid:24,uuid:"28C2BD21-4004-4B82-A4D4-421AD6FC12C6"}
 */
function conceptos()
{
	forms.mat_ingresos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"6AA80D2D-D1CA-4BCF-8611-4D6F487D32A9"}
 */
function resarcimientos() 
{
	forms.mat_resarcimientos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"CEC2983A-4A27-48BD-B181-CE7068FE0C0F"}
 */
function saldosGlobales()
{
	forms.mat_saldos_globales.controller.show()
	//TODO Ver xq no agrega pestaña el detalle
}