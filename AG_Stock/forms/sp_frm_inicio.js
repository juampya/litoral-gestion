/**
 * @properties={typeid:24,uuid:"3BD4D217-4D7A-4F67-9525-5EAF58BF8395"}
 */
function Salir()
{
	if(application.isInDeveloper())
	{
		application.exit()
	}
	else
	{
		application.closeSolution('Argento','InicializaArgento')
	}
}

/**
 * @properties={typeid:24,uuid:"AF1DE6B5-30B9-4E71-A058-46A1D675A975"}
 */
function Articulos() 
{
	forms.sp_frm_articulos_abm.vl_frm_anterior = controller.getName()
	forms.sp_frm_articulos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"62BF1023-A9AE-43DA-AD04-9577D925172B"}
 */
function Depositos() 
{
	forms.sp_frm_depositos_abm.vl_frm_anterior = controller.getName()
	forms.sp_frm_depositos_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"A66408B7-0B1E-4EAF-81A5-8249E9D38469"}
 */
function Lineas() 
{
	forms.sp_frm_lineas_abm.vl_frm_anterior = controller.getName()
	forms.sp_frm_lineas_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"E2752F81-DA5C-49D2-967F-ABFC552CB466"}
 */
function Talonarios() 
{
	forms.sp_frm_talonarios_abm.vl_frm_anterior = controller.getName()
	forms.sp_frm_talonarios_abm.controller.show()
}

/**
 * @properties={typeid:24,uuid:"23AE12B8-873A-4FF8-A7BF-D4C606ED61E7"}
 */
function Parametros() 
{
	//forms.sp_frm_parametros.vl_frm_anterior = controller.getName()
	//forms.sp_frm_parametros.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"72F8C572-163B-4206-AFEB-72D81D80C957"}
 */
function onShow(firstShow, event) 
{
	
}

/**
 * @properties={typeid:24,uuid:"EE84BAAE-1C81-446B-811F-7F88B07BFFFF"}
 */
function IngresarMovimiento() 
{
	scopes.globals.vg_sp_tipo_movimiento = 115
	forms.sp_frm_ingreso_egreso_transferencia.vl_frm_anterior = controller.getName()
	forms.sp_frm_ingreso_egreso_transferencia.controller.show()
}

/**
 * @properties={typeid:24,uuid:"0ADBE58D-B93F-4AAA-BDF1-9F0416ECC017"}
 */
function EgresarMovimiento() 
{
	scopes.globals.vg_sp_tipo_movimiento = 116
	forms.sp_frm_ingreso_egreso_transferencia.vl_frm_anterior = controller.getName()
	forms.sp_frm_ingreso_egreso_transferencia.controller.show()
}

/**
 * @properties={typeid:24,uuid:"8E9FD900-E693-430C-9F46-EA3B56155E0F"}
 */
function TrasnferenciaMovimiento() 
{
	scopes.globals.vg_sp_tipo_movimiento = 117
	forms.sp_frm_ingreso_egreso_transferencia.vl_frm_anterior = controller.getName()
	forms.sp_frm_ingreso_egreso_transferencia.controller.show()
}

/**
 * @properties={typeid:24,uuid:"6442D3D6-71AC-482C-9E5F-BB47BA0894E7"}
 */
function AjustarMovimiento() 
{
	scopes.globals.vg_sp_tipo_movimiento = 118
	forms.sp_frm_ingreso_egreso_transferencia.vl_frm_anterior = controller.getName()
	forms.sp_frm_ingreso_egreso_transferencia.controller.show()
}