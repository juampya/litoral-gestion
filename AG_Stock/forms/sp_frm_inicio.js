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
	forms.sp_frm_parametros.vl_frm_anterior = controller.getName()
	forms.sp_frm_parametros.controller.show()
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
